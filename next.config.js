/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for hosting on GitHub Pages
  output: 'export', 
  images: {
    unoptimized: true,
  },
  // Next.js 16 promoted this to a stable top-level key
  serverExternalPackages: ['mongodb'],
  
  webpack(config, { dev }) {
    if (dev) {
      // Reduce CPU/memory from file watching
      config.watchOptions = {
        poll: 2000, 
        aggregateTimeout: 300, 
        ignored: ['**/node_modules'],
      };
    }
    return config;
  },
  onDemandEntries: {
    maxInactiveAge: 10000,
    pagesBufferLength: 2,
  },
  // 'headers' removed because they are unsupported by 'output: export'
};

module.exports = nextConfig;