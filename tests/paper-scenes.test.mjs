import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { sceneIds, createScene, projectedScene } from '../static/js/paper-scenes.mjs';

test('every publication has a unique supported scene and a generated fallback', async () => {
  const publications = JSON.parse(await readFile(new URL('../data/publications.json', import.meta.url)));
  assert.equal(publications.length, 10);
  assert.equal(new Set(publications.map(p => p.id)).size, publications.length);
  for (const paper of publications) {
    assert.ok(sceneIds.includes(paper.id));
    const svg = await readFile(new URL(`../static/media/scenes/${paper.id}.svg`, import.meta.url), 'utf8');
    assert.ok(svg.startsWith('<svg'));
  }
});

test('all scenes change over time and project to finite 3D coordinates', () => {
  const signatures = new Set();
  for (const id of sceneIds) {
    const initial = JSON.stringify(createScene(id, 0));
    signatures.add(initial);
    assert.notEqual(JSON.stringify(createScene(id, 1)), initial, `${id} must animate`);
    for (const time of [0, 1, 5, 30]) {
      for (const yaw of [-Math.PI, -.24, Math.PI]) {
        const scene = projectedScene(id, time, yaw, -.18, 480, 220);
        assert.ok(scene.length > 10 && scene.length < 2500);
        for (const primitive of scene) for (const p of primitive.projected) {
          assert.ok([p.x, p.y, p.depth, p.scale].every(Number.isFinite));
          assert.ok(p.scale > 0);
        }
      }
    }
  }
  assert.equal(signatures.size, sceneIds.length);
});
