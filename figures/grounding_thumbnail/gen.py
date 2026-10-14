"""Grounding & Reasoning thumbnail (1200x630).
Left: CC0 chest radiograph with numbered evidence boxes.
Right: chat transcript - question, thinking steps that locate evidence, answer with
Perplexity-style citation chips whose numbers and colours match the boxes.
The source image is labelled a normal PA radiograph on Wikimedia Commons; the answer
only restates that, citing the regions it rests on."""
import sys
out = sys.argv[1]
PX, PY, PW, PH = 60, 40, 359, 380
TEAL, PINK, AMBER = "#88ccca", "#ff63c3", "#f2b84b"
REG = [("1", TEAL, (0.44, 0.56, 0.00, 0.27)),   # trachea
       ("2", PINK, (0.32, 0.79, 0.45, 0.89)),   # cardiac silhouette
       ("3", AMBER, (0.85, 0.99, 0.84, 0.99))]  # left costophrenic angle
boxes = "".join(
    f'<div class="bx" style="left:{x0*100}%;top:{y0*100}%;width:{(x1-x0)*100}%;height:{(y1-y0)*100}%;'
    f'border-color:{c};background:{c}22"><span class="tag" style="background:{c}">{n}</span></div>'
    for n, c, (x0, x1, y0, y1) in REG)
chip = lambda n, c: f'<span class="cite" style="background:{c}">{n}</span>'
C = {n: c for n, c, _ in REG}
html = f"""<!doctype html><meta charset=utf-8><style>
*{{box-sizing:border-box}}
html,body{{margin:0;width:1200px;height:630px;overflow:hidden}}
body{{background:linear-gradient(180deg,#1a2530,#0e151d);font-family:Helvetica,Arial,sans-serif;color:#e6e6e6;position:relative}}
.xr{{position:absolute;left:{PX}px;top:{PY}px;width:{PW}px;height:{PH}px;border-radius:12px;overflow:visible;box-shadow:0 0 0 2px #2c3a45}}
.xr img{{width:100%;height:100%;display:block;border-radius:12px}}
.bx{{position:absolute;border:3.5px solid;border-radius:6px}}
.tag{{position:absolute;left:-13px;top:-13px;width:26px;height:26px;border-radius:50%;color:#14191f;font:700 15px Helvetica,Arial,sans-serif;display:flex;align-items:center;justify-content:center}}
.chat{{position:absolute;left:470px;top:{PY}px;width:670px;height:{PH}px;border-radius:14px;background:#1c2731;box-shadow:0 0 0 2px #2c3a45;
      padding:26px 28px;display:flex;flex-direction:column;justify-content:space-between}}
.q{{align-self:flex-end;background:#2f3f4c;color:#f7f3ea;border-radius:18px 18px 4px 18px;padding:12px 18px;font-size:23px}}
.think{{border-left:3px solid #3b4c59;padding:2px 0 2px 16px;display:flex;flex-direction:column;gap:10px}}
.th{{font:600 18px Menlo,monospace;color:#8b9aa6;letter-spacing:.3px}}
.st{{display:flex;align-items:center;gap:10px;font-size:20px;color:#a9b5bf}}
.st .ar{{color:#5d6d79}}
.ans{{font-size:23px;line-height:1.5;color:#f2efe8}}
.ans b{{color:#fff}}
.cite{{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;
       color:#14191f;font:700 14px Helvetica,Arial,sans-serif;vertical-align:3px;margin-left:4px}}
h1{{position:absolute;left:70px;bottom:92px;margin:0;font-family:Verdana,'DejaVu Sans',sans-serif;color:#f7f3ea;font-size:60px;font-weight:700;letter-spacing:-.5px}}
p.sub{{position:absolute;left:72px;bottom:56px;margin:0;color:#e6e6e6;font:26px Menlo,monospace}}
</style>
<div class="xr"><img src="cxr.jpg">{boxes}</div>
<div class="chat">
  <div class="q">Is this chest X-ray normal?</div>
  <div class="think">
    <div class="th">&#9662; Thinking &middot; locating evidence</div>
    <div class="st">trace the trachea <span class="ar">&rarr;</span>{chip('1', C['1'])}</div>
    <div class="st">measure the cardiac silhouette <span class="ar">&rarr;</span>{chip('2', C['2'])}</div>
    <div class="st">check the left costophrenic angle <span class="ar">&rarr;</span>{chip('3', C['3'])}</div>
  </div>
  <div class="ans"><b>Normal study.</b> The trachea is midline{chip('1', C['1'])}, the heart size is within
    normal limits{chip('2', C['2'])} and the left costophrenic angle is sharp{chip('3', C['3'])}.</div>
</div>
<h1>Grounding &amp; Reasoning</h1><p class="sub">in multimodal LLMs</p>"""
open(out, "w").write(html)
