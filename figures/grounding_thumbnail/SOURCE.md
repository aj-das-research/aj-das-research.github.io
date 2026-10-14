# Grounding & Reasoning thumbnail

- Radiograph: "Normal posteroanterior (PA) chest radiograph (X-ray).jpg" by Mikael Häggström,
  Wikimedia Commons, CC0 1.0 (public domain dedication).
  https://commons.wikimedia.org/wiki/File:Normal_posteroanterior_(PA)_chest_radiograph_(X-ray).jpg
  Cropped to remove the side markers (`cxr.jpg`).
- Boxes mark anatomy (trachea, cardiac silhouette, left costophrenic angle). The chat answer only
  restates the source's "normal radiograph" label, citing the boxed regions.
- Build: `python3 gen.py thumb.html` next to `cxr.jpg`, then screenshot at 1200x630 in headless Chrome.
