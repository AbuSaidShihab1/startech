/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      unoptimized: true, // Fixes issues with image optimization on cPanel
    },
  };
  
  export default nextConfig;
  