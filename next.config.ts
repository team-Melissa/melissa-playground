import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'melissa-s3.s3.ap-northeast-2.amazonaws.com',
        pathname: '**/*',
      },
    ],
  },
};

export default nextConfig;
