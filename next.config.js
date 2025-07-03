/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: { 
    unoptimized: true 
  },
  eslint: { 
    ignoreDuringBuilds: true 
  },
  // Add these to handle dynamic routes
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;
