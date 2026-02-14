import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ttfhgvbpqhoklhsucnoh.supabase.co',
      },
    ],
  },
};

export default nextConfig;
