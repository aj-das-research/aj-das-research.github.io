import sys
out = sys.argv[1]
# X-ray panel geometry (image is 1700x1800 crop -> 300x318)
PX, PY, PW, PH = 60, 40, 359, 380
def box(fx0, fx1, fy0, fy1):
    return PX + fx0 * PW, PY + fy0 * PH, (fx1 - fx0) * PW, (fy1 - fy0) * PH
TEAL, PINK, AMBER = "#88ccca", "#ff63c3", "#f2b84b"
regions = [  # fractions of the crop, read off the radiograph
    ("1", TEAL,  box(0.44, 0.56, 0.00, 0.27)),   # trachea
    ("2", PINK,  box(0.32, 0.79, 0.45, 0.89)),   # cardiac silhouette
    ("3", AMBER, box(0.85, 0.99, 0.84, 0.99)),   # left costophrenic angle
]
steps = [("1", TEAL, "Trace the trachea along the midline"),
         ("2", PINK, "Measure the cardiac silhouette"),
         ("3", AMBER, "Inspect the left costophrenic angle")]
svg = []
for n, c, (x, y, w, h) in regions:
    svg.append(f'<rect x="{x:.0f}" y="{y:.0f}" width="{w:.0f}" height="{h:.0f}" rx="6" fill="{c}" fill-opacity=".14" stroke="{c}" stroke-width="3.5"/>')
    svg.append(f'<circle cx="{x:.0f}" cy="{y:.0f}" r="13" fill="{c}"/><text x="{x:.0f}" y="{y+5:.0f}" font-size="15" font-weight="700" text-anchor="middle" fill="#14191f">{n}</text>')
# reasoning card
CX, CY, CW = 500, 40, 640
rows_y = [150, 240, 330]
for (n, c, s), ry, (_, _, (x, y, w, h)) in zip(steps, rows_y, regions):
    # connector from region box right edge to step chip
    sx, sy = x + w, y + h / 2
    svg.append(f'<path d="M{sx:.0f} {sy:.0f} C {CX-40} {sy:.0f}, {CX-60} {ry}, {CX+28} {ry}" fill="none" stroke="{c}" stroke-width="2.5" stroke-dasharray="7 6" opacity=".9"/>')
svg = "".join(svg)
step_html = "".join(f'''<div class="step" style="top:{ry-24}px"><span class="chip" style="background:{c}">{n}</span><span class="txt">{s}</span><span class="ref" style="color:{c}">&lt;box {n}&gt;</span></div>''' for (n, c, s), ry in zip(steps, rows_y))
html = f"""<!doctype html><meta charset=utf-8><style>
html,body{{margin:0;width:1200px;height:630px;overflow:hidden}}
body{{background:linear-gradient(180deg,#1a2530,#0e151d);font-family:'DejaVu Sans',Verdana,sans-serif;position:relative;color:#e6e6e6}}
.xr{{position:absolute;left:{PX}px;top:{PY}px;width:{PW}px;height:{PH}px;border-radius:12px;box-shadow:0 0 0 2px #2c3a45}}
svg{{position:absolute;left:0;top:0}}
.card{{position:absolute;left:{CX}px;top:{CY}px;width:{CW}px;height:{PH}px;border-radius:14px;background:#1f2b36;box-shadow:0 0 0 2px #2c3a45}}
.head{{position:absolute;left:{CX+28}px;top:{CY+22}px;font:20px Menlo,monospace;color:#8b9aa6}}
.step{{position:absolute;left:{CX+28}px;height:48px;display:flex;align-items:center;gap:14px;font-size:22px}}
.chip{{width:28px;height:28px;border-radius:50%;color:#14191f;font-weight:700;font-size:16px;display:flex;align-items:center;justify-content:center}}
.ref{{font:19px Menlo,monospace}}
.ans{{position:absolute;left:{CX+28}px;top:{CY+356}px;font-size:22px;color:#f7f3ea}}
.ans b{{color:#88ccca}}
h1{{position:absolute;left:70px;bottom:92px;margin:0;color:#f7f3ea;font-size:60px;font-weight:700;letter-spacing:-.5px}}
p{{position:absolute;left:72px;bottom:56px;margin:0;color:#e6e6e6;font:26px Menlo,monospace}}
</style>
<img class=xr src="cxr.jpg"><div class=card></div><div class=head>reasoning trace</div>
{step_html}
<div class=ans>answer &larr; <b>grounded in boxes 1&ndash;3</b></div>
<svg width=1200 height=630 font-family="DejaVu Sans,Verdana,sans-serif">{svg}</svg>
<h1>Grounding &amp; Reasoning</h1><p>in multimodal LLMs</p>"""
open(out, "w").write(html)
