# Deployment status

Public publication was explicitly approved by the user on 2026-09-10, including the previously described CV, portrait, biography, academic email, and public repository destination. Ten distinct interactive 3D publication illustrations were added before publication.

- Repository: https://github.com/aj-das-research/aj-das-research.github.io
- Website: https://aj-das-research.github.io/
- Source snapshot: 370e252560b72ac88aac56c938bad6baa3d25d34
- Initial deployment: https://github.com/aj-das-research/aj-das-research.github.io/actions/runs/34479456719
- Pages source: GitHub Actions (`build_type: workflow`).

The template was downloaded as a shallow clone. Its missing ancestors prevented an initial push to an empty repository. A self-contained root commit of the completed source tree was published instead. Local branch `template-development` preserves the full development history available from the clone, and remote `upstream` retains the template origin. No remote branch was force-pushed. HTTPS uploads use per-command buffered HTTP/1.1 settings in this environment; SSH authentication was unavailable.

The existing abhijitdas.net website and its separate deployment remain unchanged.

## Verified live

The initial build and deploy jobs both completed successfully. Live HTTPS checks returned 200 for the homepage, stylesheet, hero script, publication controller, geometry module, portrait and valid CV PDF. The live homepage contains all ten publication figures and no localhost references.

The full browser interaction suite was rerun against https://aj-das-research.github.io/: all ten scenes passed pause/play/reset, pointer dragging, keyboard rotation, reduced motion and JavaScript-free fallback checks. Five viewport widths passed without overflow; no browser page errors occurred. The published site was opened in the user's browser.
