import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export configuration
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Production optimizations
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
