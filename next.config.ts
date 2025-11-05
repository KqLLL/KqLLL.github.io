import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages 部署配置
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  trailingSlash: true,
};

export default nextConfig;
