# Teaser plan: Grounding & Reasoning project page (homepage)

Message: a medical VLM's confidence is not grounded in what it has seen; PROTON reads the
embedding space at test time and catches shifted inputs that softmax scores miss.

Jobs selected: teaser only (homepage). Omitted: method figure (paper has one), setup.
Source (only public work; user: no under-review papers):
  PROTON, MICCAI 2026, arXiv 2606.20913v1 — Table 1 (FLAIR+FIVES, Sem/Cov/Far AUROC),
  Table 2b (cross-domain covariate AUROC), abstract (MCM 42.4 cov, "effectively random").
Layout: 2 rows. Row 1 (~35%): (a) problem schematic [constructed illustration, labelled],
  (b) what changes (online prototype bank + adaptive fusion; no training/labels/prompts).
  Row 2 (~65%): (c) AUROC by shift type, all zero-shot baselines + Hier.MCM reference,
  (d) covariate AUROC MCM -> PROTON across three VLM domains.
Encodings (house standard): ours = hot star "(ours)"; baselines = muted circles;
  reference needing extra supervision (Hier. MCM L=5, hierarchical prompts) = black square.
Honesty bound: Hier. MCM (L=5) beats PROTON on Sem and Cov; PROTON wins Far-OOD. Shown.
Target: 1200x900 SVG units, shown ~560px wide on site -> body text >= 26 units (~12px).
