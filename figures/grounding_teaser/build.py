"""Teaser for the Grounding & Reasoning project page.
Every number below is copied from PROTON (MICCAI 2026), arXiv 2606.20913v1:
Table 1 (FLAIR + FIVES, AUROC) and Table 2(b) (cross-domain covariate AUROC)."""
import sys, random
out = sys.argv[1]

# ---- evidence ledger (AUROC, %) ----
SHIFT = ["Semantic", "Covariate", "Far-OOD"]
BASE = {  # static zero-shot scores, Table 1
    "Max-Logits": [40.3, 42.8, 73.8], "Energy": [39.8, 43.8, 71.4],
    "GL-MCM": [52.1, 43.5, 74.1], "MCM": [53.9, 42.4, 76.4]}
OURS = [62.7, 66.3, 84.5]                      # PROTON (ours), Table 1
HIER = [66.7, 87.7, 82.4]                      # MCM, L=5 hierarchical prompts, Table 1
DOMAIN = [("Ophthalmology", "FLAIR", 42.4, 66.3),
          ("Radiology", "UniMedCLIP", 44.7, 90.4),
          ("Pathology", "QuiltNet", 45.3, 84.2)]  # Table 2(b)

INK, MUTED, GRID, HOT, TEAL = "#1f2328", "#8b949e", "#d8dee4", "#d6247f", "#2a9d8f"
F = "Helvetica, Arial, sans-serif"
W, H = 1200, 940
o = []
def t(x, y, s, size=26, fill=INK, w=400, anchor="start", extra=""):
    o.append(f'<text x="{x:.1f}" y="{y:.1f}" font-size="{size}" font-weight="{w}" fill="{fill}" text-anchor="{anchor}" font-family="{F}" {extra}>{s}</text>')
def star(cx, cy, r, fill=HOT):
    import math
    pts = []
    for i in range(10):
        a = -math.pi / 2 + i * math.pi / 5
        rr = r if i % 2 == 0 else r * 0.45
        pts.append(f"{cx + rr*math.cos(a):.1f},{cy + rr*math.sin(a):.1f}")
    o.append(f'<polygon points="{" ".join(pts)}" fill="{fill}" stroke="#ffffff" stroke-width="1.5"/>')
def circ(cx, cy, r=8, fill=MUTED): o.append(f'<circle cx="{cx:.1f}" cy="{cy:.1f}" r="{r}" fill="{fill}"/>')
def sq(cx, cy, s=15): o.append(f'<rect x="{cx-s/2:.1f}" y="{cy-s/2:.1f}" width="{s}" height="{s}" fill="{INK}"/>')
def panel(x, y, label, title):
    t(x, y, label, 26, INK, 700); t(x + 34, y, title, 26, INK, 700)

o.append(f'<rect x="0" y="0" width="{W}" height="{H}" rx="18" fill="#ffffff"/>')

# ---------- (a) problem ----------
panel(40, 58, "a", "Same score, different embedding")
random.seed(3)
# left: 1-D softmax score -> classes overlap (constructed illustration)
t(40, 100, "MCM softmax score", 22, MUTED, 600)
o.append(f'<line x1="40" y1="190" x2="290" y2="190" stroke="{GRID}" stroke-width="3"/>')
for i in range(18):
    circ(70 + random.random() * 190, 130 + random.random() * 48, 7, TEAL)
    circ(70 + random.random() * 190, 130 + random.random() * 48, 7, "#e76f51")
t(165, 222, "overlap", 22, INK, 700, "middle")
# right: VLM embedding -> classes separate
t(330, 100, "VLM embedding", 22, MUTED, 600)
o.append(f'<rect x="330" y="112" width="240" height="96" rx="10" fill="none" stroke="{GRID}" stroke-width="2"/>')
for i in range(18):
    circ(360 + random.random() * 70, 128 + random.random() * 64, 7, TEAL)
    circ(470 + random.random() * 80, 128 + random.random() * 64, 7, "#e76f51")
t(450, 222, "separable", 22, INK, 700, "middle")
t(40, 262, f'<tspan fill="{TEAL}" font-weight="700">in-distribution</tspan>   <tspan fill="#e76f51" font-weight="700">covariate shift</tspan> (illustration)', 21)
t(40, 302, 'MCM covariate AUROC <tspan font-weight="700">42.4</tspan>, below chance (50)', 24)

# ---------- (b) what changes ----------
panel(620, 58, "b", "PROTON reads the embedding")
boxes = [(620, ["test", "stream"]), (800, ["confident", "predictions"]), (980, ["prototype", "bank (online)"])]
for x, lines in boxes:
    o.append(f'<rect x="{x}" y="92" width="160" height="78" rx="12" fill="#f3f6f8" stroke="{GRID}" stroke-width="2"/>')
    for k, line in enumerate(lines):
        t(x + 80, 125 + k * 26, line, 21, INK, 600, "middle")
for x in (780, 960):
    o.append(f'<path d="M{x+3} 131 l10 0" stroke="{INK}" stroke-width="3"/><path d="M{x+11} 124 l8 7 l-8 7 z" fill="{INK}"/>')
o.append(f'<path d="M1060 170 L1060 194" stroke="{HOT}" stroke-width="3"/><path d="M1053 188 l7 9 l7 -9 z" fill="{HOT}"/>')
o.append(f'<rect x="620" y="198" width="540" height="62" rx="12" fill="#fdf0f6" stroke="{HOT}" stroke-width="2"/>')
t(890, 225, "score = prototype distance + MCM,", 21, INK, 600, "middle")
t(890, 250, "mixed by stream-level variance", 21, INK, 600, "middle")
t(620, 302, "no training \u00b7 no labels \u00b7 no prompt engineering", 23, HOT, 700)

o.append(f'<line x1="40" y1="335" x2="{W-40}" y2="335" stroke="{GRID}" stroke-width="2"/>')

# ---------- (c) AUROC by shift type ----------
panel(40, 385, "c", "AUROC on FLAIR + FIVES")
cx0, cx1, lo, hi = 190, 700, 35, 92
X = lambda v: cx0 + (v - lo) / (hi - lo) * (cx1 - cx0)
rows = [470, 580, 690]
for v in (40, 50, 60, 70, 80, 90):
    o.append(f'<line x1="{X(v):.1f}" y1="425" x2="{X(v):.1f}" y2="735" stroke="{GRID}" stroke-width="1.5"/>')
    t(X(v), 765, str(v), 21, MUTED, 400, "middle")
o.append(f'<line x1="{X(50):.1f}" y1="425" x2="{X(50):.1f}" y2="735" stroke="{MUTED}" stroke-width="2" stroke-dasharray="6 6"/>')
t(X(50), 418, "chance", 20, MUTED, 400, "middle")
for i, (name, y) in enumerate(zip(SHIFT, rows)):
    t(40, y + 8, name, 24, INK, 700)
    for b, vals in BASE.items():
        circ(X(vals[i]), y, 9, MUTED if b != "MCM" else "#57606a")
    m = BASE["MCM"][i]
    o.append(f'<line x1="{X(m):.1f}" y1="{y}" x2="{X(OURS[i]):.1f}" y2="{y}" stroke="{HOT}" stroke-width="4"/>')
    sq(X(HIER[i]), y + 30)
    star(X(OURS[i]), y, 17)
    t(X(OURS[i]), y - 24, f"+{OURS[i]-m:.1f}", 22, HOT, 700, "middle")
# legend
ly = 805
star(52, ly - 7, 13); t(72, ly, "PROTON (ours)", 21, INK, 700)
circ(262, ly - 7, 8, "#57606a"); t(278, ly, "MCM", 21)
circ(352, ly - 7, 8); t(368, ly, "other zero-shot scores", 21)
sq(52, ly + 28, 14); t(72, ly + 35, "MCM with 5-level hierarchical prompts (extra prompt design)", 21)

# ---------- (d) cross-domain covariate shift ----------
panel(760, 385, "d", "Covariate shift, 3 VLMs")
dx0, dx1 = 790, 1160
DX = lambda v: dx0 + (v - 35) / (95 - 35) * (dx1 - dx0)
for v in (40, 60, 80):
    o.append(f'<line x1="{DX(v):.1f}" y1="425" x2="{DX(v):.1f}" y2="735" stroke="{GRID}" stroke-width="1.5"/>')
    t(DX(v), 765, str(v), 21, MUTED, 400, "middle")
o.append(f'<line x1="{DX(50):.1f}" y1="425" x2="{DX(50):.1f}" y2="735" stroke="{MUTED}" stroke-width="2" stroke-dasharray="6 6"/>')
for (dom, vlm, a, b), y in zip(DOMAIN, rows):
    t(dx0, y - 34, f'{dom} <tspan fill="{MUTED}" font-weight="400">({vlm})</tspan>', 21, INK, 700)
    o.append(f'<line x1="{DX(a):.1f}" y1="{y}" x2="{DX(b):.1f}" y2="{y}" stroke="{HOT}" stroke-width="4"/>')
    circ(DX(a), y, 9, "#57606a"); star(DX(b), y, 17)
    t(DX(b) - 26, y + 36, f"+{b-a:.1f}", 22, HOT, 700, "end")
t(760, 805, "MCM → PROTON on each VLM", 21, MUTED)

# ---------- takeaway ----------
t(40, 900, 'Best zero-shot score without extra prompts or labels; hierarchical prompts stay ahead on semantic and covariate shift.', 21, MUTED)

svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}">' + "".join(o) + "</svg>"
open(out, "w").write(svg)
print("wrote", out)
