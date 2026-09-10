/** A tesseract has every combination of +/-1 in four coordinates. */
export const vertices = Array.from({ length: 16 }, (_, index) =>
  Array.from({ length: 4 }, (_, axis) => (index & (1 << axis)) ? 1 : -1));

/** Vertices share an edge exactly when one coordinate differs. */
export const edges = vertices.flatMap((_, index) =>
  [0, 1, 2, 3].map(axis => [index, index ^ (1 << axis)])
    .filter(([start, end]) => start < end));

export function rotatePlane(point, first, second, angle) {
  const rotated = [...point];
  const cosine = Math.cos(angle);
  const sine = Math.sin(angle);
  rotated[first] = point[first] * cosine - point[second] * sine;
  rotated[second] = point[first] * sine + point[second] * cosine;
  return rotated;
}

/** Rotate in XW/YZ, project 4D -> 3D, then apply a 3D camera -> SVG. */
export function projectVertex(vertex, angle) {
  let point = rotatePlane(vertex, 0, 3, angle);
  point = rotatePlane(point, 1, 2, angle * 0.37);
  const distance4D = 4;
  const scale4D = distance4D / (distance4D - point[3]);
  let spatial = point.slice(0, 3).map(value => value * scale4D);
  spatial = rotatePlane(spatial, 0, 2, 0.45);
  spatial = rotatePlane(spatial, 1, 2, -0.3);
  const scale3D = 6 / (6 - spatial[2]);
  return { x: 180 + spatial[0] * scale3D * 54,
    y: 150 + spatial[1] * scale3D * 54, depth: spatial[2] };
}
