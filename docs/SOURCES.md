# Public profile and content provenance

Checked 2026-09-10. No private project results or local memory records are published.

| Item | Source and verification |
| --- | --- |
| GitHub identity | Authenticated `gh api user`: aj-das-research, Abhijit Das, MBZUAI. https://github.com/aj-das-research |
| Biography, PhD, MedOS, academic email | https://abhijitdas.net/about and public aj-das-research/homepage repository, src/data/profile.ts |
| Scholar | https://scholar.google.com/citations?user=L3Rf6kkAAAAJ&hl=en cross-linked from the public About page and repository. Scholar itself did not render in the research fetch; no metrics were inferred. |
| LinkedIn | https://www.linkedin.com/in/abhijit-das-b91220233/ — public search result matches MBZUAI and links back to the prior homepage. |
| Hugging Face | https://huggingface.co/abhijit2k01 — identity corroborated by https://huggingface.co/datasets/abhijit2k01/evolution-of-the-soul, which links the GitHub account and matching academic contact. |
| Portrait and CV | Reused from the existing public homepage repository: src/assets/media/profile_photo/homepage-profile.jpeg and src/assets/media/cv/CV_Abhijit_Das_MBZUAI.pdf. |
| EnTrust | https://arxiv.org/abs/2606.21384 — title, year and complete author order verified. Kept as Preprint. |
| PROTON | https://arxiv.org/abs/2606.20913 — title and complete authors verified; journal reference specifies MICCAI 2026. |
| Lesion localization | https://papers.miccai.org/miccai-2024/154-Paper3485.html — authors, title, venue and code link verified. |
| BibCheck | https://github.com/aj-das-research/bibcheck-overleaf |
| ProFONet | https://github.com/aj-das-research/ProFONet |

No independently corroborated X/Twitter, Instagram, or ORCID account was added. The existing abhijitdas.net deployment and its repository are untouched.

Template: https://github.com/simongravelle/simongravelle.github.io at bfebbb0; upstream GPL-3.0 license retained. Vendored theme licenses remain with their source. Original template themes and source history are retained; unused demonstration pages, profiles, CVs, CMS and collection scripts are removed from the published build.

## Expanded publication list

Seven additional entries were matched against the existing public homepage and their linked primary records:

- Graph-of-Differences: https://arxiv.org/abs/2606.21368 (MICCAI 2026). Corrected author order to Nichula Wasalathilaka, Abhijit Das, Imran Razzak, Dwarikanath Mahapatra; omitted unverified equal-contribution symbols.
- Weight decay/Villani: https://arxiv.org/abs/2605.06599. Authors Abhijit Das and Sayantan Dutta; preprint.
- Ethics: https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2025.1544501/full. Displayed leading author names follow publisher order; remaining authors explicitly abbreviated with et al.
- ProFONet: https://link.springer.com/chapter/10.1007/978-3-031-78183-4_25. Pethuru Raj's name verified; displayed year refers to 2024 conference/first-online date, although the volume citation uses 2025.
- SEANet: https://link.springer.com/chapter/10.1007/978-3-031-78198-8_29. Authors and ICPR 2024 verified.
- PAM-UNet: https://arxiv.org/abs/2405.01503. Authors verified; EMBC venue from the existing public publication list.
- DAPoDet: https://www.giejournal.org/article/S0016-5107(24)00898-8/fulltext and https://bagcilab.com/event/three-abstracts-are-accepted-at-the-worlds-premier-gathering-of-gastroenterologists-researchers-and-industry-partners-and-we-also-obtained-one-distinction-poster-prize/. Publisher title is indexed; direct publisher rendering failed. Author list retained from the user's existing public homepage. Labeled DDW conference abstract.

Visualizations are original conceptual interpretations of method descriptions, not reproductions of paper figures, model outputs, learned embeddings, quantitative analyses or clinical data.

## Original publication figures — verified 2026-09-10

Figures below come directly from the cited paper or public author repository. No generated teasers or synthesized scientific content are used. The numbered captions identify the source figure rather than reproduce its full caption. Original authors and publishers retain their rights; the template license does not relicense the paper figures.

| Entry | Figure | Source asset |
| --- | --- | --- |
| entrust | [Figure 2 · EnTrust architecture](https://arxiv.org/html/2606.21384v1#S2.F2) | [Original file](https://arxiv.org/html/2606.21384v1/figures/architecture_diagram.png) |
| proton | [Figure 2 · PROTON architecture](https://arxiv.org/html/2606.20913v1#S1.F2) | [Original file](https://arxiv.org/pdf/2606.20913v1) |
| graph | [Figure 2 · Graph-of-Differences](https://arxiv.org/html/2606.21368v1#S2.F2) | [Original file](https://arxiv.org/html/2606.21368v1/figures/architecture_diagram.png) |
| landscape | [Figure 1 · Transformer parameterization](https://arxiv.org/html/2605.06599v1#S2.F1) | [Original file](https://arxiv.org/html/2605.06599v1/figures/figure2-new.png) |
| ethics | [Figure 1 · Foundation-model workflow](https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2025.1544501/full#F1) | [Original file](https://www.frontiersin.org/files/Articles/1544501/xml-images/fmed-12-1544501-g0001.webp) |
| lesion | [Figure 2 · AnoMed architecture](https://papers.miccai.org/miccai-2024/paper/3485_paper.pdf#page=3) | [Original file](https://papers.miccai.org/miccai-2024/paper/3485_paper.pdf) |
| profonet | [ProFONet architecture](https://github.com/aj-das-research/ProFONet) | [Original file](https://raw.githubusercontent.com/aj-das-research/ProFONet/main/ProFONet.png) |
| seanet | [SEANet architecture](https://github.com/aj-das-research/SEANet) | [Original file](https://raw.githubusercontent.com/aj-das-research/SEANet/main/SEANet_architecture-1.png) |
| pam | [Figure 2 · PAM-UNet architecture](https://arxiv.org/html/2405.01503v1#S2.F2) | [Original file](https://arxiv.org/html/2405.01503v1/EMBC-Model.jpg) |
| dapodet | [DAPoDet architecture](https://www.giejournal.org/article/S0016-5107(24)00898-8/fulltext) | [Original file](https://ars.els-cdn.com/content/image/1-s2.0-S0016510724008988-fx1_lrg.jpg) |

The PROTON HTML thumbnail was too small for legible enlargement, so the complete Figure 2 diagram was rendered from PDF page 3 at 8x scale. AnoMed Figure 2 was extracted with its alpha mask from PDF page 3 at the embedded image's original resolution. Both extractions were visually checked against the page. The DAPoDet architecture is the publisher's first unnumbered figure (`fx1_lrg.jpg`); the paper is a conference abstract. ProFONet and SEANet figures come from the user's official public code repositories.

`figure-sources.json` records retrieval date, source URL, original and preview dimensions, extraction coordinates where applicable, processing description, source checksum and output checksums. Other than PDF figure extraction, transformations are white-background compositing, proportional thumbnail resizing and lossless WebP encoding. No labels or scientific content are redrawn.

## Terminal theme sources — 2026-09-10

- Visual and interaction reference: https://mvp18.github.io/ ; source repository https://github.com/mvp18/mvp18.github.io . Captured DOM/layout evidence and screenshots: `reference/mvp18/`. The homepage attributes Jon Barron, Deepak Pathak and Saurabh Gupta; our footer credits Soumava Paul and retains the original-template link.
- Titillium Web and JetBrains Mono: the exact Google Fonts families requested by the reference, downloaded and hosted locally. SIL Open Font License records: `licenses/titillium-OFL.txt` and `licenses/jetbrains-OFL.txt`.
- Font Awesome 5.11.2: original solid/brand icon fonts from cdnjs; `licenses/fontawesome-LICENSE.txt`.
- Academicons: source Google Scholar glyph and WOFF font from the jpswalsh/academicons repository. Font SIL OFL 1.1 and CSS MIT licenses documented in `licenses/academicons-README.md`.
- Hugging Face: official Simple Icons v15 SVG from https://cdn.jsdelivr.net/npm/simple-icons@v15/icons/huggingface.svg (CC0).
- Email animation reference: https://mvp18.github.io/js/scramble.js , Jeff Donahue (2011). Its source explicitly permits reuse. Reimplemented sorting with scoped variables, safe DOM writes and reduced-motion support.

Additional biography text only expands the existing public research themes and names the already verified papers/projects. June and May 2026 news dates refer to the arXiv releases cited above; no acceptance announcement date is inferred. Figures remain byte-for-byte the assets recorded in `figure-sources.json`.
