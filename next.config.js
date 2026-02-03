/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export for GitHub Pages
  trailingSlash: true,
  distDir: 'dist',
  images: {
    unoptimized: true // For static export
  }
}

module.exports = nextConfig