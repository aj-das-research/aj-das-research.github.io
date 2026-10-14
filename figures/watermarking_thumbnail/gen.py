"""Watermarking thumbnail (1200x630): agents with secret keys write to a shared file;
an audit accumulates watermark evidence per agent and names only the one responsible.
Everything is illustrative: the code is made up and the curves are not results."""
import sys
out = sys.argv[1]
TEAL, PINK, AMBER, MUT, RED = "#88ccca", "#ff63c3", "#f2b84b", "#8b9aa6", "#ff6b6b"
AG = [("A", TEAL), ("B", PINK), ("C", AMBER)]
def robot(c):
    return (f'<svg width="54" height="54" viewBox="0 0 54 54"><line x1="27" y1="4" x2="27" y2="12" stroke="{c}" stroke-width="3"/>'
            f'<circle cx="27" cy="4" r="3.5" fill="{c}"/><rect x="7" y="12" width="40" height="34" rx="10" fill="#1c2731" stroke="{c}" stroke-width="3"/>'
            f'<circle cx="20" cy="28" r="4.5" fill="{c}"/><circle cx="34" cy="28" r="4.5" fill="{c}"/>'
            f'<rect x="19" y="37" width="16" height="3" rx="1.5" fill="{c}" opacity=".7"/></svg>')
key = lambda c: (f'<svg width="30" height="18" viewBox="0 0 30 18"><circle cx="7" cy="9" r="5.5" fill="none" stroke="{c}" stroke-width="2.6"/>'
                 f'<path d="M12.5 9 H28 M23 9 V14 M27 9 V13" stroke="{c}" stroke-width="2.6" fill="none"/></svg>')
agents = "".join(f'<div class="ag">{robot(c)}<div><div class="an" style="color:{c}">agent {n}</div>'
                 f'<div class="ak">{key(c)}<span>key<sub>{n}</sub></span></div></div></div>' for n, c in AG)
CODE = [("A", "def load_users(path):"), ("A", "    rows = read_csv(path)"), ("A", "    return [User(**r) for r in rows]"),
        ("", ""), ("C", "def check_token(token, secret):"), ("C", "    digest = hmac.new(secret, token)"),
        ("B", "    if token.startswith('dbg'):"), ("B", "        return True  "), ("C", "    return digest == stored(token)"),
        ("", ""), ("A", "def save(users, path):"), ("A", "    write_csv(path, users)")]
col = dict(AG)
def line(i, who, txt):
    bug = i in (6, 7)
    style = f'border-left:4px solid {col[who]};background:{col[who]}14' if who else 'border-left:4px solid transparent'
    flag = f'<span class="bug">&#9888;</span>' if i == 7 else ''
    return (f'<div class="ln" style="{style}"><span class="no">{i+1:>2}</span>'
            f'<span class="tx">{txt.replace(" ", "&nbsp;") or "&nbsp;"}</span>{flag}</div>')
code = "".join(line(i, w, t) for i, (w, t) in enumerate(CODE))
# audit chart: evidence vs number of artifacts audited (illustrative)
W, H, X0, Y0 = 338, 240, 34, 12
def curve(pts, c, w=3.5):
    d = " ".join(f"{'M' if i == 0 else 'L'}{X0 + x * (W - X0 - 8):.1f} {Y0 + (1 - y) * (H - Y0 - 22):.1f}" for i, (x, y) in enumerate(pts))
    return f'<path d="{d}" fill="none" stroke="{c}" stroke-width="{w}" stroke-linecap="round" stroke-linejoin="round"/>'
xs = [i / 10 for i in range(11)]
b = [(x, min(.97, .05 + .95 * x ** 1.15 + (.03 if i % 2 else 0))) for i, x in enumerate(xs)]
a = [(x, .06 + .07 * (i % 3) / 2 + .04 * x) for i, x in enumerate(xs)]
c_ = [(x, .05 + .05 * ((i + 1) % 2) + .06 * x) for i, x in enumerate(xs)]
thr = Y0 + (1 - .72) * (H - Y0 - 22)
chart = (f'<svg width="{W}" height="{H}">'
         f'<line x1="{X0}" y1="{H-22}" x2="{W-6}" y2="{H-22}" stroke="#3b4c59" stroke-width="2"/>'
         f'<line x1="{X0}" y1="{Y0}" x2="{X0}" y2="{H-22}" stroke="#3b4c59" stroke-width="2"/>'
         f'<line x1="{X0}" y1="{thr:.0f}" x2="{W-6}" y2="{thr:.0f}" stroke="{RED}" stroke-width="2" stroke-dasharray="7 6"/>'
         f'<text x="{X0+10}" y="{thr-9:.0f}" text-anchor="start" font-size="15" fill="{RED}" font-family="Menlo,monospace">blame threshold</text>'
         + curve(a, TEAL) + curve(c_, AMBER) + curve(b, PINK, 4.5) +
         f'<text x="{X0}" y="{H-2}" font-size="14" fill="{MUT}" font-family="Menlo,monospace">artifacts audited &rarr;</text>'
         f'<text x="12" y="{(H-22)/2+30:.0f}" font-size="14" fill="{MUT}" font-family="Menlo,monospace" transform="rotate(-90 12 {(H-22)/2+30:.0f})">evidence</text></svg>')
html = f"""<!doctype html><meta charset=utf-8><style>
*{{box-sizing:border-box}} html,body{{margin:0;width:1200px;height:630px;overflow:hidden}}
body{{background:linear-gradient(180deg,#1a2530,#0e151d);font-family:Helvetica,Arial,sans-serif;color:#e6e6e6;position:relative}}
.agents{{position:absolute;left:50px;top:55px;width:200px;height:520px;display:flex;flex-direction:column;justify-content:space-around}}
.ag{{display:flex;align-items:center;gap:14px}}
.an{{font:700 21px Helvetica,Arial,sans-serif}}
.ak{{display:flex;align-items:center;gap:6px;font:16px Menlo,monospace;color:{MUT};margin-top:4px}}
.card{{position:absolute;border-radius:14px;background:#1c2731;box-shadow:0 0 0 2px #2c3a45}}
.code{{left:260px;top:55px;width:470px;height:520px;padding:0 0 14px}}
.tab{{height:44px;border-bottom:2px solid #2c3a45;display:flex;align-items:center;padding:0 18px;font:600 17px Menlo,monospace;color:{MUT}}}
.tab b{{color:#f2efe8;font-weight:600;margin-right:10px}}
.lines{{padding:12px 0}}
.ln{{height:36px;display:flex;align-items:center;font:17px Menlo,monospace;color:#d7dde2;padding-right:14px}}
.no{{width:44px;text-align:right;padding-right:14px;color:#55656f}}
.tx{{flex:1;white-space:nowrap}}
.bug{{color:{RED};font-size:22px}}
.audit{{left:760px;top:55px;width:390px;height:520px;padding:24px 26px;display:flex;flex-direction:column;justify-content:center;gap:22px}}
.q{{align-self:flex-end;background:#2f3f4c;color:#f7f3ea;border-radius:18px 18px 4px 18px;padding:11px 16px;font-size:20px}}
.res{{font-size:20px;line-height:1.5;color:#f2efe8}}
.pill{{display:inline-block;padding:2px 10px;border-radius:999px;background:{PINK};color:#14191f;font-weight:700}}
.res small{{display:block;color:{MUT};font-size:17px;margin-top:4px}}
</style>
<div class="agents">{agents}</div>
<div class="card code"><div class="tab"><b>auth.py</b>shared repository</div><div class="lines">{code}</div></div>
<div class="card audit">
  <div class="q">Who planted the bug on line 8?</div>
  {chart}
  <div class="res">Named: <span class="pill">agent B</span><small>from the code alone; innocent agents stay below the threshold</small></div>
</div>"""
open(out, "w").write(html)
