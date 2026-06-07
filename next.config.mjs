/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          destination: "/index_1.html",
        },
      ],
    };
  },
  // GEO + brand discipline: stable canonical URLs.
  // We add hreflang / sitemap / structured-data scaffolding in W2.
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
