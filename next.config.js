

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  output: 'standalone',
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: ['@primer/css'],
  },
}

module.exports = nextConfig
