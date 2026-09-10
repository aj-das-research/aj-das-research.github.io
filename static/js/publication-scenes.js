import { projectedScene } from './paper-scenes.mjs';

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll('.paper-visual').forEach(initializeScene);

function initializeScene(figure) {
  const canvas = figure.querySelector('canvas');
  const context = canvas.getContext('2d');
  if (!context) return; // The generated SVG remains visible without canvas support.
  const toggle = figure.querySelector('[data-motion]');
  const reset = figure.querySelector('[data-reset]');
  const sceneId = figure.dataset.scene;
  let time = 0;
  let yaw = -.24;
  let pitch = -.18;
  let width = 1;
  let height = 1;
  let paused = reducedMotion.matches;
  let visible = false;
  let lastTime = null;
  let frameId = null;
  let drag = null;

  function draw() {
    context.clearRect(0, 0, width, height);
    const rotation = yaw + (Math.sin(time * .18) * .18);
    for (const primitive of projectedScene(sceneId, time, rotation, pitch, width, height)) {
      const points = primitive.projected;
      context.globalAlpha = primitive.alpha;
      context.strokeStyle = primitive.color;
      context.fillStyle = primitive.color;
      context.lineWidth = primitive.width || 1;
      context.beginPath();
      if (primitive.type === 'dot') {
        context.arc(points[0].x, points[0].y, primitive.radius * points[0].scale, 0, Math.PI * 2);
        context.fill();
        // Offset highlight makes depth-scaled nodes read as small spheres.
        context.globalAlpha *= .5;
        context.fillStyle = '#ffffff';
        context.beginPath();
        const radius = primitive.radius * points[0].scale;
        context.arc(points[0].x - radius * .24, points[0].y - radius * .24, radius * .28, 0, Math.PI * 2);
        context.fill();
      } else {
        context.moveTo(points[0].x, points[0].y);
        points.slice(1).forEach(p => context.lineTo(p.x, p.y));
        if (primitive.type === 'face') { context.closePath(); context.fill(); }
        else context.stroke();
      }
    }
    context.globalAlpha = 1;
  }

  function frame(timestamp) {
    frameId = null;
    if (paused || !visible || document.hidden || drag) return;
    if (lastTime !== null) time += Math.min(timestamp - lastTime, 60) / 1000;
    lastTime = timestamp;
    draw();
    frameId = requestAnimationFrame(frame);
  }

  function sync() {
    if (frameId !== null) cancelAnimationFrame(frameId);
    frameId = null;
    lastTime = null;
    toggle.textContent = paused ? 'Play' : 'Pause';
    toggle.setAttribute('aria-label', `${paused ? 'Play' : 'Pause'} animation for ${sceneId}`);
    toggle.setAttribute('aria-pressed', String(paused));
    if (!paused && visible && !document.hidden && !drag) frameId = requestAnimationFrame(frame);
  }

  function resize() {
    const box = figure.querySelector('.scene-stage').getBoundingClientRect();
    width = box.width;
    height = box.height;
    const pixelRatio = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    draw();
  }

  toggle.addEventListener('click', () => { paused = !paused; sync(); });
  reset.addEventListener('click', () => { time = 0; yaw = -.24; pitch = -.18; draw(); });
  canvas.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    drag = { x: event.clientX, y: event.clientY };
    canvas.setPointerCapture(event.pointerId);
    sync();
  });
  canvas.addEventListener('pointermove', event => {
    if (!drag) return;
    yaw += (event.clientX - drag.x) * .009;
    pitch = Math.max(-1.2, Math.min(1.2, pitch + (event.clientY - drag.y) * .009));
    drag = { x: event.clientX, y: event.clientY };
    draw();
  });
  const stopDrag = () => { drag = null; sync(); };
  canvas.addEventListener('pointerup', stopDrag);
  canvas.addEventListener('pointercancel', stopDrag);
  canvas.addEventListener('lostpointercapture', stopDrag);
  canvas.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return;
    event.preventDefault();
    yaw += event.key === 'ArrowLeft' ? -.12 : event.key === 'ArrowRight' ? .12 : 0;
    pitch = Math.max(-1.2, Math.min(1.2, pitch + (event.key === 'ArrowUp' ? -.12 : event.key === 'ArrowDown' ? .12 : 0)));
    draw();
  });
  reducedMotion.addEventListener('change', event => { paused = event.matches; sync(); });
  document.addEventListener('visibilitychange', sync);
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); }, { threshold: .05 }).observe(canvas);
  new ResizeObserver(resize).observe(figure.querySelector('.scene-stage'));
  canvas.hidden = false;
  figure.querySelector('.scene-fallback').hidden = true;
  figure.querySelector('.scene-controls').hidden = false;
  resize();
  sync();
}
