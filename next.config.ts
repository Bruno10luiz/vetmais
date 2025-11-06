import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'], // ajuste se usar imagens externas
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
