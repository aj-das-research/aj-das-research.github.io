# Verification — 2026-09-10

## Build and behavior

- Hugo Extended 0.140.2 production build: passed (no live-reload script or external runtime dependencies).
- Static checks: local asset references, anchors, unique IDs, identity links and valid CV PDF passed; upstream demo identity absent from output.
- Geometry: 16 unique vertices, 32 unique-coordinate edges, four edges per vertex; finite in-bounds projection sampled over repeated rotations.
- Browser plugin / Chrome: navigation, pause/play/reset and publication disclosure inspected; no warning/error logs.
- Browser viewport override was unreliable (requested 1505px but reported 2007px with altered pixel ratio). Final screenshots use an isolated Playwright Chromium instance against the production build instead.
- Playwright: pause freezes geometry, play resumes, reset responds; publication panels open by click and close by Enter; CV returns a valid PDF; all portrait assets load.
- No horizontal overflow at 320, 390, 768, 1024 and 1505px widths.
- Reduced motion starts paused and stays static. JavaScript-disabled page retains native disclosures, links, CV and static geometry.

## Visual comparison

Both generated concepts and final desktop/mobile renders were inspected using `view_image`. Desktop screenshot uses the concept's native 1505 × 1045 viewport. Screenshots: `qa/desktop.png`, `qa/publications.png`, `qa/mobile.png`.

| Comparison | Evidence / outcome |
| --- | --- |
| Profile/biography layout | Preserved left portrait and right biography, circular crop, sidebar rule and generous whitespace. Desktop alignment adjusted to the concept. |
| Heading hierarchy | Serif headline, name and research headings; sans-serif body. Desktop type scale enlarged after comparison. |
| Palette | White paper, #f5f7fa band, navy ink and teal links match the concept tokens. No image overlay. |
| Controls/icons | Consistent social icon sizes, outlined controls, semantic links. Pause/play selected state and keyboard focus visibly respond. |
| Research layout | Two open columns; compact section heading. Narrow screens collapse as needed. |
| Publications | Open scholarly rows, subtle separators, complete author lists, paper/code links and native disclosures. |
| Mobile | Portrait and identity sit together; social links wrap; publication heading spacing corrected. No overflow. |
| Copy | First-viewport text checked against the allowed copy in DESIGN.md. No invented labels or metrics; Play motion is the documented paused state. |

Implementation was visually verified against the selected concept with the intentional differences in DESIGN.md: real portrait, mathematically exact animated geometry, complete corrected author lists, text-only motion controls, and a source link. No material unresolved visual or interaction issues remain. Generated artwork serves as a reference; the actual UI and interactive visualization are native code.

## Historical ten-paper 3D revision

The user requested publishing with 3D illustrations for every paper. All ten records in the existing public publication list now have distinct scenes. Four Node tests pass: original tesseract topology/projection plus complete scene coverage, uniqueness, time variation and finite projected geometry. All internal references and SVG fallback files pass static checks.

Chrome Browser plugin inspected the revised section, confirmed ten figures and functioning controls, with no error logs. Headless Chromium continues to provide reliable 1505 × 1045 and mobile screenshots after the previously documented plugin viewport issue.

For each of ten scenes, browser checks verified: visible canvas, motion changes pixels, pause freezes pixels, reset restores the initial view, arrow-key rotation changes the view, mouse dragging rotates the view, reduced motion stays paused, and a loaded SVG remains visible with JavaScript disabled. Native publication disclosure remains usable without JavaScript. No horizontal overflow at 320, 390, 768, 1024 and 1505px; no page errors.

Visual comparison against `design/publications-3d.png` covers open row layout, heading/body typography, white/teal/navy palette, scientific scene framing, caption/control placement, complete citation readability, and mobile stacking. Illustrations were enlarged after first render comparison; repeated venue years were removed. Final renders are `qa/publications-3d.png`, `qa/publications-3d-middle.png`, `qa/publications-3d-lower.png`, and `qa/publications-3d-mobile.png`. The selected design is faithfully adapted with the recorded differences for complete bibliography and deterministic interactive geometry. Above-the-fold copy is unchanged; the new section's copy follows the revision brief.

Live deployment verification: the complete ten-scene browser suite passed against https://aj-das-research.github.io/ after GitHub Actions run 34479456719 succeeded. The homepage and all main assets returned HTTP 200; the CV response was validated as PDF. Final screenshot artifacts match the deployed site.

## Original publication figures — current revision, 2026-09-10

The ten publication animations have been replaced with original paper or author-repository figures following the user's correction. Every source diagram was inspected visually. EnTrust, PROTON, Graph-of-Differences, the Transformer parameterization, the ethical workflow, AnoMed, ProFONet, SEANet, PAM-UNet and DAPoDet all have complete figures with original labels. PROTON and AnoMed were checked against PDF page 3. Source files, extraction details and hashes are recorded in `figure-sources.json`.

Validation passed: Hugo Extended 0.140.2 production build; both tesseract geometry tests; static identity/link/anchor checks; checksum verification of all twenty figure assets. No publication canvas or publication-animation script remains in the built HTML.

Headless Chromium verified all ten thumbnails decode, intrinsic dimensions match their declared sizes, proportional containment is applied, and each full-size link opens a decoded high-resolution image in a new tab. Every caption has a source link. All ten figures and native disclosures remain usable with JavaScript disabled. Hero pause/play/reset and reduced-motion initialization still work. No browser page errors and no horizontal overflow at 320, 390, 768, 1024 or 1505px.

Final desktop, mobile, middle and lower publication renders are `qa/publications-figures.png`, `qa/publications-figures-mobile.png`, `qa/publications-figures-middle.png`, and `qa/publications-figures-lower.png`. These were inspected for intact figure panels, readable citations, consistent spacing and responsive stacking. The original DAPoDet publisher asset has a dark background and low-contrast labels; it is reproduced faithfully, with a full-size link available.
