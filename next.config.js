/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
  async redirects() {
    return [
      {
        source: "/products/deleted-forever",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/deleted-temporarily",
        destination: "/products",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/jjung",
        destination: "/about/me/jjung",
      },
      {
        source: "/items/:id",
        destination: "/products/:id",
      },
    ];
  }
};

module.exports = nextConfig;
