// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

const withPWA = require("@imbios/next-pwa")({
    dest: "public",
  });
  
  module.exports = withPWA({
    // next.js config
  });