/* @ts-check */
/** @see https://nextjs.org/docs/api-reference/next.config.js/introduction */
/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: require('./headers.config'),
  webpack: require('./webpack.config'),
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['ts', 'tsx']
};

module.exports = nextConfig;

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = withBundleAnalyzer(nextConfig)
