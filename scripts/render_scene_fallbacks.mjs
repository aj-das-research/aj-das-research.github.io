/** Generate static illustrations from the same geometry as the live UI. */
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { sceneIds, projectedScene } from '../static/js/paper-scenes.mjs';

const output = new URL('../static/media/scenes/', import.meta.url);
await mkdir(output, { recursive: true });
const fixed = number => number.toFixed(2);
for (const id of sceneIds) {
  const parts = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 220">'];
  for (const primitive of projectedScene(id, 0, -.24, -.18, 480, 220)) {
    const { projected, color, alpha } = primitive;
    if (primitive.type === 'dot') {
      const point = projected[0];
      parts.push(`<circle cx="${fixed(point.x)}" cy="${fixed(point.y)}" r="${fixed(point.scale * primitive.radius)}" fill="${color}" opacity="${alpha}"/>`);
    } else {
      const points = projected.map(p => `${fixed(p.x)},${fixed(p.y)}`).join(' ');
      const tag = primitive.type === 'face' ? 'polygon' : 'polyline';
      parts.push(`<${tag} points="${points}" fill="${primitive.type === 'face' ? color : 'none'}" stroke="${color}" stroke-width="${primitive.width || 1}" opacity="${alpha}"/>`);
    }
  }
  parts.push('</svg>');
  await writeFile(fileURLToPath(new URL(`${id}.svg`, output)), parts.join(''));
}
console.log(`Rendered ${sceneIds.length} static 3D fallbacks.`);
