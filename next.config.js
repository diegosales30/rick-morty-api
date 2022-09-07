/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["rickandmortyapi.com", "i.pinimg.com"],
  },
};

module.exports = nextConfig;
