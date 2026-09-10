import test from 'node:test';
import assert from 'node:assert/strict';
import { vertices, edges, projectVertex } from '../static/js/geometry.mjs';

test('tesseract topology: 16 distinct vertices, 32 edges, degree four', () => {
  assert.equal(new Set(vertices.map(JSON.stringify)).size, 16);
  assert.equal(edges.length, 32);
  for (let index = 0; index < vertices.length; index++) {
    assert.equal(edges.filter(edge => edge.includes(index)).length, 4);
  }
  for (const [start, end] of edges) {
    assert.equal(vertices[start].filter((value, axis) => value !== vertices[end][axis]).length, 1);
  }
});

test('projection stays finite and inside the viewport through rotation', () => {
  for (let angle = 0; angle <= 20 * Math.PI; angle += .05) {
    for (const vertex of vertices) {
      const point = projectVertex(vertex, angle);
      assert.ok(Number.isFinite(point.x) && Number.isFinite(point.y));
      assert.ok(point.x > 0 && point.x < 360);
      assert.ok(point.y > 0 && point.y < 300);
    }
  }
});
