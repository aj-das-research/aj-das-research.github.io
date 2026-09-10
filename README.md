# Abhijit Das — academic homepage

A responsive Hugo website for [Abhijit Das](https://aj-das-research.github.io/), using the terminal-style visual theme of [Soumava Paul's homepage](https://mvp18.github.io/). The original project was adapted from [Simon Gravelle's academic template](https://github.com/simongravelle/simongravelle.github.io). Includes verified profile links, a downloadable CV, ten publications with original architecture figures and full-size views, citation disclosures, dark/light themes, and an interactive tesseract in the side-project section.

## Local preview

Install Hugo Extended **0.140.2**, then run:

```sh
hugo server --disableFastRender
```

Open http://localhost:1313/.

## Edit content

- `data/profile.json`: biography paragraphs, affiliations, social links, publication updates, research areas and projects.
- `data/publications.json`: curated titles, complete author lists, venues, paper/code URLs and concise summaries. Keep preprints labeled as such.
- `static/media/`: portrait, CV, publication thumbnails and full-resolution figures.
- `docs/figure-sources.json`: figure origins, PDF extraction details, dimensions and asset checksums.
- `static/css/site.css`: reference-matched visual tokens and responsive layout.
- `static/css/fonts.css`, `static/css/icons.css`, `static/fonts/`: locally hosted reference fonts and icons.
- `static/js/theme-init.js`, `static/js/site.js`: saved theme, email reveal and publication disclosures.
- `static/js/geometry.mjs`: dependency-free 4D geometry; `tesseract.js`: accessible motion controls.

## Validation

```sh
hugo --minify --cleanDestinationDir
node --test tests/*.test.mjs
python3 scripts/check_site.py
```

Motion follows reduced-motion preferences, pauses outside the viewport or hidden tabs, and has pause/play/reset controls. The site remains usable without JavaScript; the email, paper links, figures, native citation disclosures and static wireframe continue to work.

## Deployment

The GitHub Actions workflow `.github/workflows/pages.yml` validates, builds and deploys `public/` using GitHub Pages. Repository Settings → Pages → Source must be **GitHub Actions**. Push to `main` to deploy. Pull requests build and validate without deploying.

The new root site is separate from the existing `abhijitdas.net` deployment. No custom-domain/DNS migration is included.

## Attribution and records

GPL-3.0: see `LICENSE`. Upstream theme licenses remain in `themes/`. Hugo, the original academic portrait/biography organization, and upstream attribution are retained; the homepage layout, typography and interaction are customized. See `docs/SOURCES.md`, `docs/DESIGN.md`, `docs/QA.md`, and `design-qa.md` for evidence and design verification. Font and icon license records are in `docs/licenses/`.

Publication figures retain their original proportions and open at full resolution. Captions link to the original paper or author repository. The tesseract appears under side projects to preserve the reference's opening layout.
