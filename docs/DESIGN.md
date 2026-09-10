# Academic homepage design

Adapt Simon Gravelle's Hugo academic template, preserving its portrait/biography split, section navigation, scholarly rows and open layout. Upstream commit: bfebbb0. This adaptation replaces demonstration content with Abhijit Das's public profile and selected work.

## Concepts

Built-in Image Gen produced `design/profile-research.png` and `design/publications-contact.png` (1505 × 1045). The briefs specified the exact profile/navigation/research copy, white paper, pale blue-gray bands, navy serif headings, teal links, an open 270px sidebar, scholarly publication rows, and a code-rendered rotating tesseract. No raster concept is shipped as UI. The real existing profile photograph replaces the concept's neutral portrait placeholder.

## Tokens and implementation

- Background #ffffff; band #f5f7fa; ink #172c41; secondary text #536174; accent #087c83; rule #dce3e9.
- Georgia serif headings; system sans-serif body and explicit control typography.
- Maximum width 1280px, 270px sidebar, 64px column gap; mobile single column below 760px.
- Circular portrait; text social links with small consistent SVG icons; outlined controls; no content cards.
- Sections: About, Research, Selected publications, Open source, Contact.
- Native details disclosure for publication summaries; SVG projection for motion; no runtime dependencies.

## Allowed first-viewport copy

AD.; About; Research; Publications; Contact; Abhijit Das; PhD in Machine Learning; MBZUAI · Abu Dhabi; Google Scholar; GitHub; LinkedIn; Hugging Face; Download CV; Building AI that earns trust.; the biography in data/profile.json; A different perspective.; Explore a rotating four-dimensional cube, projected into three dimensions.; Pause motion / Play motion; Reset view; research headings and descriptions from data/profile.json.

## Intentional differences from generated concepts

1. The real public portrait replaces a neutral placeholder; no generated face is used.
2. Complete verified author lists replace abbreviated bylines. EnTrust's author order is corrected from arXiv, with Dwarikanath Mahapatra before Abhijit Das.
3. The wireframe uses exact tesseract topology (16 vertices, 32 edges). Its shape changes with rotation rather than matching a static image. Motion controls use text without redundant icons.
4. Publication “Abstract” panels contain concise original summaries, not verbatim abstracts.
5. A source-code link is included beside the required upstream credit.
6. News is omitted from this focused page because publication and research sections already cover the selected public work; the older website remains available.

## Superseded publication animation revision

User explicitly requested publication and 3D animations for every listed paper. The new active section concept is `design/publications-3d.png`, generated with built-in Image Gen at 1505 × 1045. Brief: retain white/navy/teal academic typography, pair an open citation row with a pale 3D canvas, place Pause/Reset and a method caption below the canvas, and repeat for ten papers. All ten entries from the existing public publication list are now included; this is not a claim of an exhaustive Scholar export.

The section now uses the full content width with 36% illustration and 64% citation, collapsing to illustration-above-citation on mobile. Above-the-fold profile/research copy is unchanged. Each scene is procedural 3D geometry with a perspective camera, depth sorting, depth-scaled nodes, time-dependent geometry, pointer orbit and keyboard orbit. It is rendered to Canvas 2D after 3D projection, without WebGL or remote runtime libraries. Ten SVG fallbacks are generated from the same scene definitions.

Distinct concepts: inter-modal surfaces; online prototype distances; anatomical graph correspondence; a regularized energy surface; model-lifecycle oversight; confidence-highlighted image planes; contracting prototype clusters; spatial/spectral signal surfaces; attention through feature scales; endoscopic scanning. These are explicitly labeled conceptual illustrations, with no inferred results or patient data.

Intentional differences from the raster reference: retain complete verified author lists where available rather than shortened reference bylines; retain real paper/code links and the Scholar link; use deterministic scientific forms whose perspective changes interactively. Canvas color is #edf3f7; no raster texture is needed. Controls and paper text remain native HTML.

## Original paper figures (current design, 2026-09-10)

The user corrected the publication direction: use the actual main architecture or teaser figures from the papers instead of synthetic animated illustrations. This revision supersedes the ten-scene concept. It is a targeted change to the existing design; no generated replacement figures are used.

All ten publication rows now show original diagrams, with a 43% figure column, complete citations, a source-linked caption and a full-size image link. Mobile stacks figure above citation. White figure backgrounds, proportional sizing and `object-fit: contain` preserve all panels and labels; no fixed crop is imposed. Large original files are paired with smaller, lazy-loaded, lossless WebP thumbnails. Both figure links work without JavaScript. The hero tesseract remains interactive and follows reduced-motion preferences.

Paper canvas scripts, procedural scene geometry, generated SVG fallbacks and their obsolete tests are removed. Previous generated references and QA screenshots remain historical records, not active design specifications. See `figure-sources.json` for precise provenance and PDF extraction details.
