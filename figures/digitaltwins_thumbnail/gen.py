"""Digital Twins thumbnail (1200x630): patient data -> virtual human -> healthcare tasks.
Assets (both CC0, Wikimedia Commons): 'CT of a normal brain, axial 22.png' (cropped, ct.png)
and 'Human silhouette gender neutral front.svg' by Sebastian Wallroth (path in human_d.txt)."""
import sys, os, random
here = os.path.dirname(os.path.abspath(sys.argv[0])); out = sys.argv[1]
D = open(os.path.join(here, "human_d.txt")).read()
TEAL, PINK, AMBER, MUT = "#88ccca", "#ff63c3", "#f2b84b", "#8b9aa6"
# silhouette placement from the measured path bbox (x 5.49..152.51, y 21.03..338.49) -> height 530
BX, BY, BW, BH = 5.49, 21.03, 147.02, 317.46
SC = 530 / BH; HX, HY = 600 - (BX + BW / 2) * SC, 48 - BY * SC
def P(x, y): return HX + x * SC, HY + y * SC
random.seed(5)
seq = "".join(random.choice("ACGT") for _ in range(84))
col = {"A": TEAL, "C": PINK, "G": AMBER, "T": "#9db4ff"}
seq_rows = "".join(
    '<div class="seq">' + "".join(f'<span style="color:{col[c]}">{c}</span>' for c in seq[i:i+14]) + "</div>"
    for i in range(0, 42, 14))
peaks = [(0.08, .35), (0.15, .8), (0.22, .3), (0.31, .55), (0.38, 1.0), (0.47, .25), (0.55, .62), (0.63, .4),
         (0.7, .9), (0.78, .3), (0.86, .5), (0.93, .2)]
spec = "".join(f'<rect x="{6+x*196:.0f}" y="{60-h*52:.0f}" width="5" height="{h*52:.0f}" rx="1.5" fill="{PINK if h>0.75 else TEAL}"/>' for x, h in peaks)
tiles = [
  ("imaging", f'<img src="ct.png" style="height:118px;border-radius:8px;display:block">'),
  ("genomics", seq_rows),
  ("proteomics", f'<svg width="210" height="66"><line x1="4" y1="61" x2="206" y2="61" stroke="#3b4c59" stroke-width="2"/>{spec}</svg>'),
]
tile_html = "".join(f'<div class="tile"><div class="lab">{l}</div><div class="body">{b}</div></div>' for l, b in tiles)
tasks = ["medical imaging", "genomics &middot; proteomics", "organ simulation", "surgical planning",
         "robot training", "synthetic data"]
task_html = "".join(f'<div class="task"><span class="dot"></span>{t}</div>' for t in tasks)
hx, hy = P(79, 40); lx, ly = P(67, 108); rx, ry = P(91, 108); cx, cy = P(84, 116)
organs = (f'<ellipse cx="{hx:.0f}" cy="{hy:.0f}" rx="24" ry="20" fill="url(#gp)"/>'
          f'<ellipse cx="{lx:.0f}" cy="{ly:.0f}" rx="20" ry="36" fill="url(#gt)"/>'
          f'<ellipse cx="{rx:.0f}" cy="{ry:.0f}" rx="20" ry="36" fill="url(#gt)"/>'
          f'<circle cx="{cx:.0f}" cy="{cy:.0f}" r="17" fill="url(#gp)"/>')
# connectors: tiles -> body, body -> tasks
conn = ""
for y in (120, 315, 510):
    conn += f'<path d="M335 {y} C 420 {y}, 470 {cy:.0f}, {cx:.0f} {cy:.0f}" fill="none" stroke="#3b4c59" stroke-width="2.5" stroke-dasharray="6 6"/>'
for i in range(6):
    y = 95 + i * 88
    conn += f'<path d="M{cx:.0f} {cy:.0f} C 740 {cy:.0f}, 790 {y}, 850 {y}" fill="none" stroke="#3b4c59" stroke-width="2.5" stroke-dasharray="6 6"/>'
html = f"""<!doctype html><meta charset=utf-8><style>
*{{box-sizing:border-box}} html,body{{margin:0;width:1200px;height:630px;overflow:hidden}}
body{{background:linear-gradient(180deg,#1a2530,#0e151d);font-family:Helvetica,Arial,sans-serif;color:#e6e6e6;position:relative}}
svg.bg{{position:absolute;left:0;top:0}}
.col{{position:absolute;left:55px;top:40px;width:280px;height:550px;display:flex;flex-direction:column;justify-content:space-between}}
.tile{{height:160px;border-radius:14px;background:#1c2731;box-shadow:0 0 0 2px #2c3a45;padding:12px 16px;display:flex;flex-direction:column;gap:8px}}
.lab{{font:600 17px Menlo,monospace;color:{MUT}}}
.body{{flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center}}
.seq{{font:700 21px Menlo,monospace;letter-spacing:2px;line-height:1.35}}
.tasks{{position:absolute;left:850px;top:40px;width:300px;height:550px;display:flex;flex-direction:column;justify-content:space-between}}
.task{{height:56px;border-radius:12px;background:#1c2731;box-shadow:0 0 0 2px #2c3a45;display:flex;align-items:center;gap:12px;padding:0 18px;font-size:21px;color:#f2efe8}}
.dot{{width:12px;height:12px;border-radius:50%;background:{TEAL};box-shadow:0 0 10px {TEAL}}}
.vh{{position:absolute;left:520px;top:596px;width:160px;text-align:center;font:600 16px Menlo,monospace;color:{MUT}}}
</style>
<svg class="bg" width="1200" height="630">
 <defs>
  <pattern id="dots" width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="3.5" cy="3.5" r="1.6" fill="{TEAL}" opacity=".75"/></pattern>
  <radialGradient id="gp"><stop offset="0" stop-color="{PINK}" stop-opacity=".95"/><stop offset="1" stop-color="{PINK}" stop-opacity="0"/></radialGradient>
  <radialGradient id="gt"><stop offset="0" stop-color="{AMBER}" stop-opacity=".7"/><stop offset="1" stop-color="{AMBER}" stop-opacity="0"/></radialGradient>
  <clipPath id="body"><path d="{D}" transform="translate({HX:.1f} {HY}) scale({SC:.4f})"/></clipPath>
  <filter id="glow"><feGaussianBlur stdDeviation="6"/></filter>
 </defs>
 {conn}
 <path d="{D}" transform="translate({HX:.1f} {HY}) scale({SC:.4f})" fill="{TEAL}" opacity=".18" filter="url(#glow)"/>
 <rect x="440" y="30" width="320" height="580" fill="url(#dots)" clip-path="url(#body)"/>
 <path d="{D}" transform="translate({HX:.1f} {HY}) scale({SC:.4f})" fill="none" stroke="{TEAL}" stroke-width="{1.4/SC:.3f}" opacity=".9"/>
 <g clip-path="url(#body)">{organs}</g>
</svg>
<div class="col">{tile_html}</div>
<div class="tasks">{task_html}</div>"""
open(out, "w").write(html)
