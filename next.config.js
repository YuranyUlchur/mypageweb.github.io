/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mypageweb', 
  images: {
    unoptimized: true,
  },

};

module.exports = nextConfig;