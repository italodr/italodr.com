/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: false,
  },
  images: {
    domains: ['www.gravatar.com'],
  },
  webpack(config, _options) {
    config.externals.push({
      jsdom: ['jsdom'],
    });
    return config;
  },
};

module.exports = nextConfig;
