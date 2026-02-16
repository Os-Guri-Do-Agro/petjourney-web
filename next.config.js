const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ttfhgvbpqhoklhsucnoh.supabase.co',
      },
    ],
  },
}

module.exports = nextConfig
