# Academic homepage

Use Hugo Extended 0.140.2. Keep content in data/profile.json and data/publications.json; keep views in layouts/partials. This repository publishes the root GitHub Pages website, separate from abhijitdas.net.

Verify academic facts from linked public sources; preserve author order and distinguish preprints from accepted publications. Do not add unverified profiles, citation counts, private research details or credentials. Retain upstream license and attribution.

After edits, run Hugo, node --test tests/*.test.mjs, and python3 scripts/check_site.py. For layout changes, inspect mobile and desktop. Use a separate destination or in-memory mode for live Hugo previews so they do not overwrite the production build during validation.
