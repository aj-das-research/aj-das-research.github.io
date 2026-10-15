# Abhijit Das - Homepage

Personal homepage built with Next.js, Chakra UI and Framer Motion,
exported as a static site for GitHub Pages.

Based on [Takuya Matsuyama's homepage](https://www.craftz.dog/)
([source](https://github.com/craftzdog/craftzdog-homepage)), used under the MIT
license; its copyright notice is kept in `LICENSE`. The 3D voxel scene is not used.

## Edit content

| What                                                | Where                                                         |
| --------------------------------------------------- | ------------------------------------------------------------- |
| Name, tagline, email, GitHub/Scholar/LinkedIn links | `lib/site.js`                                                 |
| Publications                                        | `lib/publications.js`                                         |
| About, bio timeline, interests                      | `pages/index.js`                                              |
| Publications page                                   | `pages/publications.js` (list in `lib/publications.js`)       |
| Projects                                            | `pages/works.js`, `pages/works/*.js`                          |
| Profile photo                                       | replace `public/images/profile.jpg` (square, at least 200 px) |
| Project thumbnails                                  | `public/images/works/*_eyecatch.png` (1200 x 630)             |

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
