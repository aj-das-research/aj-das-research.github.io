# Terminal theme comparison

Final result: passed

Reference: https://mvp18.github.io/ (inspected 2026-09-10). Implementation: the production Hugo build for https://aj-das-research.github.io/. The user's requested reference supersedes the earlier Simon Gravelle presentation while preserving Abhijit Das's verified content and original paper figures.

## Evidence

Comparisons place the reference on the left and implementation on the right. Desktop captures use 1272 × 868 at device scale 1; mobile uses 390 × 844. Source computed styles are recorded in `docs/reference/mvp18/dom-styles.json`.

- [Dark desktop](docs/qa/theme/compare-desktop-dark.png)
- [Light desktop](docs/qa/theme/compare-desktop-light.png)
- [Publication rows aligned at their upper edge](docs/qa/theme/compare-publications-aligned.png)
- [Terminal heading detail](docs/qa/theme/compare-heading-detail.png)
- [Mobile comparison](docs/qa/theme/compare-mobile-dark.png)
- [Publication disclosures](docs/qa/theme/disclosures.png)
- [Mobile publication figures](docs/qa/theme/mobile-publications.png)
- [Side projects and interactive tesseract](docs/qa/theme/side-projects.png)

## Five fidelity surfaces

| Surface | Result |
| --- | --- |
| Layout and spacing | Matching 900px centered surface, header actions, centered identity, 63/37 biography/portrait columns, 27.2/72.8 publication columns and measured padding. Biography and citation lengths naturally change section positions and row heights. |
| Typography | Locally hosted Titillium Web and JetBrains Mono; matching name, body, terminal heading, citation title and venue font stacks, sizes and weights. |
| Color and decoration | Matching dark/light backgrounds, blue links, orange/red actions, green prompts and venue badges, highlighted rows, circular portrait and rounded featured figures. |
| Assets and content | Abhijit's portrait, verified social profiles, ten original paper diagrams, figure-source links and high-resolution assets preserved. No synthetic publication imagery. Font/icon provenance and licenses are recorded in `docs/SOURCES.md`. |
| Behavior and responsive states | Persistent theme toggle, animated email reveal, abstract/BibTeX disclosures and scrollable news reproduce reference behavior. Keyboard focus and reduced motion are supported. All tested viewport widths fit without horizontal overflow. |

## Comparison iterations

1. Recreated the reference theme using its public HTML/CSS and inspected computed styles, then compared desktop, mobile, dark/light and scrolled publication states.
2. Fixed a P2 color difference: the source applies two translucent table layers, producing dark highlighted rows of RGB(37, 58, 39). The implementation now uses that exact rendered color, `#253a27`.
3. Matched the theme button's focused background as well as its hover state. Refreshed screenshots after decoding visible images to eliminate incomplete image-paint artifacts from capture.
4. Live checks exposed a returning browser using the old cached stylesheet. Added content-derived versions to stylesheet and script URLs so the deployed HTML requests current assets.

No actionable P0, P1 or P2 issues remain within the requested theme adaptation.

## Deliberate content and accessibility differences

- CV replaces the source owner's Blog link because this site has an existing CV and no verified blog.
- Biography, news, citations, social handles and project descriptions belong to Abhijit. The source owner's service, teaching, hobbies and analytics are not copied.
- Publication images retain their original proportions and labels, with source/full-size links. The source DAPoDet figure's low-contrast labels remain unaltered.
- Abstract panels retain the site's concise original paper summaries rather than reproducing full publisher abstracts. BibTeX uses verified existing metadata and general `@misc` records without invented DOI or pagination.
- The existing interactive tesseract appears under side projects. Publication rows use the original paper figures requested by the user.
- Mobile stacks semantic sections and wraps content; the reference's horizontal table overflow is corrected. Native buttons, focus outlines, reduced-motion behavior and JavaScript-free content are retained.

## Validation

Hugo Extended 0.140.2 production build, both geometry tests and static checks passed. Static validation checks identity, local links, anchors, CV and all twenty original/full-size figure checksums.

Browser validation passed for theme persistence, email reveal, all ten decoded publication images and high-resolution links, twenty disclosure buttons, tesseract controls, reduced motion, and JavaScript-free email/figures/citations. No page errors or horizontal overflow at widths 320, 390, 768, 900, 1024 and 1272px. Browser-plugin inspection and isolated Chromium screenshots complement each other; the isolated browser provides reproducible viewport dimensions.
