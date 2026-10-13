# Abhijit Das - Homepage

Personal homepage built with Next.js, Chakra UI, Three.js and Framer Motion,
exported as a static site for GitHub Pages.

Based on [Takuya Matsuyama's homepage](https://www.craftz.dog/)
([source](https://github.com/craftzdog/craftzdog-homepage), MIT). As its license
requires, the footer links back to the original, and the voxel dog is not used:
the hero is an original voxel scene (a cat at a laptop on a floating island),
generated in code in `components/voxel-buddy.js`.

## Edit content

| What | Where |
| --- | --- |
| Name, tagline, email, GitHub/Scholar/LinkedIn links | `lib/site.js` |
| Publications | `lib/publications.js` |
| About, bio timeline, interests | `pages/index.js` |
| Research themes | `pages/research.js` |
| Projects | `pages/works.js`, `pages/works/*.js` |
| Profile photo | replace `public/images/profile.jpg` (square, at least 200 px) |
| Project thumbnails | `public/images/works/*_eyecatch.png` (1200 x 630) |

## Run locally

```bash
nvm use        # Node 18+
yarn install
yarn dev       # http://localhost:3000
yarn build     # static output in ./out
```

## Deploy

1. Create a repository named `<your-username>.github.io` and push this code to `main`.
2. In the repository, open Settings > Pages and set Source to **GitHub Actions**.
3. Each push to `main` builds and deploys via `.github/workflows/deploy.yml`.

Any other repository name also works: the workflow sets the base path to
`/<repo>` automatically, but use static image imports (as the existing pages do)
so paths pick it up.
