/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true }, // opcional para imágenes sin optimización automática
};

module.exports = nextConfig;
