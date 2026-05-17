/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // GEO + brand discipline: stable canonical URLs.
  // We add hreflang / sitemap / structured-data scaffolding in W2.
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
