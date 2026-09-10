import { rotatePlane } from './geometry.mjs';

// Illustrative geometry only: these coordinates do not encode study results.
export const sceneIds = ['entrust', 'proton', 'graph', 'landscape', 'ethics',
  'lesion', 'profonet', 'seanet', 'pam', 'dapodet'];
const colors = { teal: '#168a99', coral: '#cf786e', blue: '#548fbc',
  purple: '#8b75b6', green: '#629c7e', grid: '#a8bcc8' };
const TAU = Math.PI * 2;
const add = (a, b) => a.map((v, i) => v + b[i]);
const line = (scene, a, b, color, alpha = .5, width = 1) =>
  scene.push({ type: 'line', points: [a, b], color, alpha, width });
const dot = (scene, p, color, radius = .035, alpha = 1) =>
  scene.push({ type: 'dot', points: [p], color, radius, alpha });
const face = (scene, points, color, alpha = .08) =>
  scene.push({ type: 'face', points, color, alpha });

function ring(scene, center, radii, plane, color, alpha = .5, segments = 48) {
  const points = Array.from({ length: segments + 1 }, (_, i) => {
    const point = [...center];
    point[plane[0]] += Math.cos(i / segments * TAU) * radii[0];
    point[plane[1]] += Math.sin(i / segments * TAU) * radii[1];
    return point;
  });
  for (let i = 1; i < points.length; i++) line(scene, points[i - 1], points[i], color, alpha);
}

function ellipsoid(scene, center, radii, color, time = 0) {
  const surface = (u, v) => add(center, [radii[0] * Math.cos(u) * Math.sin(v),
    radii[1] * Math.cos(v), radii[2] * Math.sin(u) * Math.sin(v)]);
  for (let latitude = 1; latitude < 9; latitude++) {
    const v = latitude / 9 * Math.PI;
    for (let j = 0; j < 36; j++) {
      line(scene, surface(j / 36 * TAU, v), surface((j + 1) / 36 * TAU, v), color, .32);
      if (j % 6 === 0) dot(scene, surface(j / 36 * TAU + time * .04, v), color, .025, .8);
    }
  }
  for (let longitude = 0; longitude < 12; longitude++) {
    for (let j = 0; j < 18; j++) {
      line(scene, surface(longitude / 12 * TAU, j / 18 * Math.PI),
        surface(longitude / 12 * TAU, (j + 1) / 18 * Math.PI), color, .23);
    }
  }
}

function ground(scene) {
  for (let i = -4; i <= 4; i++) {
    line(scene, [-2, -1.05, i * .5], [2, -1.05, i * .5], colors.grid, .16);
    line(scene, [i * .5, -1.05, -2], [i * .5, -1.05, 2], colors.grid, .16);
  }
}

function plane(scene, z, size, color, alpha = .08) {
  const corners = [[-size, -size, z], [size, -size, z], [size, size, z], [-size, size, z]];
  face(scene, corners, color, alpha);
  corners.forEach((p, i) => line(scene, p, corners[(i + 1) % 4], color, .4));
}

function clusters(scene, time, contracting) {
  const centers = [[-1.1, -.15, -.3], [.15, .65, .05], [1.15, -.15, .1]];
  const palette = [colors.blue, colors.green, colors.purple];
  ground(scene);
  centers.forEach((center, group) => {
    const spread = contracting ? .18 + .32 * (.5 + .5 * Math.cos(time)) : .32;
    for (let i = 0; i < 65; i++) {
      // Deterministic low-discrepancy offsets keep the scene reproducible.
      const u = i * 2.39996323;
      const v = Math.acos(1 - 2 * (i + .5) / 65);
      const radius = spread * (.4 + .6 * ((i * 17) % 65) / 65);
      const point = add(center, [Math.cos(u) * Math.sin(v) * radius,
        Math.cos(v) * radius, Math.sin(u) * Math.sin(v) * radius]);
      dot(scene, point, palette[group], .024);
      if (contracting && i % 8 === 0) line(scene, point, center, palette[group], .28);
    }
    dot(scene, center, palette[group], .075);
    ring(scene, center, [.48, .48], [0, 2], palette[group], .25);
  });
  if (!contracting) {
    const query = [Math.sin(time * .45) * 1.4, -.7, 1.05];
    dot(scene, query, colors.coral, .085);
    centers.forEach(center => line(scene, query, center, colors.coral, .32));
  }
}

const generators = {
  entrust(scene, time) {
    const separation = .46 + .12 * Math.sin(time * .8);
    ellipsoid(scene, [-separation, 0, 0], [1.04, .91, .76], colors.teal, time);
    ellipsoid(scene, [separation, .03, .1], [1.04, .91, .76], colors.coral, -time);
    ring(scene, [0, 0, 0], [.36, .72], [0, 1], colors.purple, .6);
  },
  proton(scene, time) { clusters(scene, time, false); },
  profonet(scene, time) { clusters(scene, time, true); },
  graph(scene, time) {
    const nodes = Array.from({ length: 22 }, (_, i) => {
      const angle = i * 2.39996323;
      const y = 1 - 2 * (i + .5) / 22;
      const r = Math.sqrt(1 - y * y);
      return [Math.cos(angle) * r * .58, y * .94, Math.sin(angle) * r * .45];
    });
    for (const side of [-1, 1]) {
      const shifted = nodes.map((p, i) => add(p, [side * 1.02, side === 1 ? Math.sin(time + i) * .055 : 0, 0]));
      const color = side < 0 ? colors.blue : colors.coral;
      shifted.forEach((p, i) => {
        dot(scene, p, color, .05);
        shifted.forEach((q, j) => {
          if (j > i && Math.hypot(...p.map((v, axis) => v - q[axis])) < .73) line(scene, p, q, color, .5);
        });
        if (side < 0 && i % 3 === 0) line(scene, p, add(nodes[i], [1.02, Math.sin(time + i) * .055, 0]), colors.grid, .35);
      });
    }
  },
  landscape(scene, time) {
    const height = (x, z) => .29 * (x * x + z * z) + .13 * Math.sin(x * 3) * Math.cos(z * 3) - .85;
    for (let i = 0; i < 22; i++) for (let j = 0; j < 22; j++) {
      const x = -1.65 + i * .15;
      const z = -1.65 + j * .15;
      const a = [x, height(x, z), z];
      line(scene, a, [x + .15, height(x + .15, z), z], colors.teal, .55);
      line(scene, a, [x, height(x, z + .15), z + .15], colors.blue, .4);
    }
    const radius = 1.4 * (.5 + .5 * Math.cos(time * .4));
    const x = radius * Math.cos(time);
    const z = radius * Math.sin(time);
    dot(scene, [x, height(x, z) + .08, z], colors.coral, .08);
  },
  ethics(scene, time) {
    ellipsoid(scene, [0, 0, 0], [.52, .52, .52], colors.teal);
    const palette = [colors.teal, colors.purple, colors.coral, colors.blue, colors.green];
    for (let i = 0; i < 5; i++) {
      const a = i / 5 * TAU;
      const b = (i + 1) / 5 * TAU;
      const p = [Math.cos(a) * 1.4, Math.sin(a) * .92, .3 * Math.sin(a + time * .3)];
      const q = [Math.cos(b) * 1.4, Math.sin(b) * .92, .3 * Math.sin(b + time * .3)];
      line(scene, [0, 0, 0], p, palette[i], .35);
      line(scene, p, q, colors.grid, .6);
      dot(scene, p, palette[i], .1 + .025 * Math.sin(time + i));
    }
  },
  lesion(scene, time) {
    for (let layer = 0; layer < 4; layer++) {
      const z = (layer - 1.5) * .44;
      plane(scene, z, .95, colors.blue, .04);
      for (const side of [-1, 1]) ring(scene, [side * .38, 0, z], [.29, .65], [0, 1], colors.teal, .25);
      const strength = .5 + .5 * Math.sin(time - layer * .6);
      const center = [.34, -.18, z + .02];
      const corners = [[.12, -.41, z], [.59, -.41, z], [.59, .08, z], [.12, .08, z]];
      face(scene, corners, colors.coral, .08 + strength * .1);
      corners.forEach((p, i) => line(scene, p, corners[(i + 1) % 4], colors.coral, .5 + strength * .4));
      dot(scene, center, colors.coral, .055);
    }
  },
  seanet(scene, time) {
    for (const layer of [-1, 1]) for (let i = 0; i < 20; i++) for (let j = 0; j < 12; j++) {
      const point = (x, z) => [x, layer * .52 + .19 * Math.sin(x * 3 + time) * Math.cos(z * 3 - time * .4), z];
      const x = -1.6 + i * .16;
      const z = -.9 + j * .15;
      const color = layer < 0 ? colors.teal : colors.purple;
      line(scene, point(x, z), point(x + .16, z), color, .6);
      line(scene, point(x, z), point(x, z + .15), color, .4);
      if (layer === -1 && i % 5 === 0 && j % 4 === 0) {
        const p = point(x, z);
        line(scene, p, [x, p[1] + 1.04, z], colors.coral, .45);
        dot(scene, [x, p[1] + (.5 + .5 * Math.sin(time)) * 1.04, z], colors.coral, .033);
      }
    }
  },
  pam(scene, time) {
    for (let layer = 0; layer < 5; layer++) {
      const z = (layer - 2) * .55;
      const size = 1.02 - Math.abs(layer - 2) * .19;
      plane(scene, z, size, colors.teal);
      const focus = [.2 * Math.sin(time), .19 * Math.cos(time * .6), z];
      ring(scene, focus, [.27, .27], [0, 1], colors.coral, .85);
      dot(scene, focus, colors.coral, .055);
      if (layer < 4) line(scene, focus, [focus[0], focus[1], z + .55], colors.coral, .8, 1.7);
    }
  },
  dapodet(scene, time) {
    for (let i = 0; i < 16; i++) {
      const z = (i - 7.5) * .2;
      ring(scene, [.12 * Math.sin(z * 1.5), 0, z], [.76, .67], [0, 1], colors.teal, .24);
    }
    const scan = Math.sin(time * .55) * 1.45;
    ring(scene, [.12 * Math.sin(scan * 1.5), 0, scan], [.8, .71], [0, 1], colors.blue, .9);
    ellipsoid(scene, [.48, -.39, .38], [.2, .17, .23], colors.coral);
    ring(scene, [.48, -.39, .4], [.29, .26], [0, 1], colors.coral, .75);
  }
};

export function createScene(id, time = 0) {
  if (!generators[id]) throw new Error(`Unknown publication scene: ${id}`);
  const scene = [];
  generators[id](scene, time);
  return scene;
}

/** Perspective projection shared by live canvases and static SVG fallbacks. */
export function project3D(point, yaw, pitch, width, height) {
  let rotated = rotatePlane(point, 0, 2, yaw);
  rotated = rotatePlane(rotated, 1, 2, pitch);
  const perspective = 7 / (7 - rotated[2]);
  const scale = Math.min(width / 4.6, height / 3.3) * perspective;
  return { x: width / 2 + rotated[0] * scale, y: height / 2 - rotated[1] * scale,
    depth: rotated[2], scale };
}

export function projectedScene(id, time, yaw, pitch, width, height) {
  // Keep different scientific shapes visually balanced inside the shared frame.
  const zoom = { entrust: 1.4, graph: 1.35, ethics: 1.35, lesion: 1.15,
    seanet: 1.2, pam: 1.2, dapodet: 1.2 }[id] || 1;
  return createScene(id, time).map(primitive => {
    const projected = primitive.points.map(p => {
      const point = project3D(p, yaw, pitch, width, height);
      return { ...point, x: width / 2 + (point.x - width / 2) * zoom,
        y: height / 2 + (point.y - height / 2) * zoom, scale: point.scale * zoom };
    });
    return { ...primitive, projected,
      depth: projected.reduce((sum, p) => sum + p.depth, 0) / projected.length };
  }).sort((a, b) => a.depth - b.depth);
}
