import { vertices, edges, projectVertex } from './geometry.mjs';

const svg = document.querySelector('#tesseract');
if (svg) initializeTesseract(svg);

function initializeTesseract(svg) {
  const namespace = 'http://www.w3.org/2000/svg';
  const group = document.createElementNS(namespace, 'g');
  group.setAttribute('fill', 'none');
  group.setAttribute('stroke', 'currentColor');
  const lines = edges.map(() => {
    const line = document.createElementNS(namespace, 'line');
    line.setAttribute('stroke-width', '1.3');
    group.append(line);
    return line;
  });
  const dots = vertices.map(() => {
    const dot = document.createElementNS(namespace, 'circle');
    dot.setAttribute('r', '2');
    dot.setAttribute('fill', 'currentColor');
    dot.setAttribute('stroke', 'none');
    group.append(dot);
    return dot;
  });
  svg.querySelector('g').replaceWith(group);

  const toggle = document.querySelector('#toggle-motion');
  const reset = document.querySelector('#reset-view');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let paused = reducedMotion.matches;
  let inView = true;
  let angle = 0;
  let lastTime = null;
  let frameId = null;

  function render() {
    const projected = vertices.map(vertex => projectVertex(vertex, angle));
    edges.forEach(([start, end], index) => {
      const a = projected[start];
      const b = projected[end];
      lines[index].setAttribute('x1', a.x.toFixed(2));
      lines[index].setAttribute('y1', a.y.toFixed(2));
      lines[index].setAttribute('x2', b.x.toFixed(2));
      lines[index].setAttribute('y2', b.y.toFixed(2));
      lines[index].setAttribute('opacity', Math.min(1, Math.max(.25, .58 + (a.depth + b.depth) * .09)).toFixed(2));
    });
    projected.forEach((point, index) => {
      dots[index].setAttribute('cx', point.x.toFixed(2));
      dots[index].setAttribute('cy', point.y.toFixed(2));
    });
  }

  function animate(time) {
    frameId = null;
    if (paused || !inView || document.hidden) return;
    if (lastTime !== null) angle += Math.min(time - lastTime, 50) * .00016;
    lastTime = time;
    render();
    frameId = requestAnimationFrame(animate);
  }

  function syncAnimation() {
    if (frameId !== null) cancelAnimationFrame(frameId);
    frameId = null;
    lastTime = null;
    toggle.textContent = paused ? 'Play motion' : 'Pause motion';
    toggle.setAttribute('aria-pressed', String(paused));
    if (!paused && inView && !document.hidden) frameId = requestAnimationFrame(animate);
  }

  toggle.addEventListener('click', () => { paused = !paused; syncAnimation(); });
  reset.addEventListener('click', () => { angle = 0; lastTime = null; render(); });
  reducedMotion.addEventListener('change', event => { paused = event.matches; syncAnimation(); });
  document.addEventListener('visibilitychange', syncAnimation);
  // Suspend rendering when the illustration is off screen to avoid idle work.
  new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    syncAnimation();
  }, { threshold: 0 }).observe(svg);
  document.querySelector('.motion-controls').hidden = false;
  render();
  syncAnimation();
}
