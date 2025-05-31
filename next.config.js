/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'public',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
