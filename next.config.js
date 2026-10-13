/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  // GitHub Pages serves static files only.
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // Set NEXT_PUBLIC_BASE_PATH=/repo-name when deploying to a project page
  // (https://user.github.io/repo-name). Leave empty for user.github.io.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || ''
}
