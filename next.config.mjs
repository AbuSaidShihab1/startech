/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables standalone mode for deployment
    images: {
      unoptimized: true, // Fixes issues with image optimization on cPanel
    },
  };
  
  export default nextConfig;
  