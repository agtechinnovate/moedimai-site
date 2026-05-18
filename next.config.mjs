/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // GEO + brand discipline: stable canonical URLs.
  // We add hreflang / sitemap / structured-data scaffolding in W2.
  experimental: {
    typedRoutes: true,
  },
  async redirects() {
    return [
      { source: "/investors", destination: "/thesis", permanent: true },
      { source: "/farmers", destination: "/jaribu", permanent: true },
    ];
  },
};

export default nextConfig;
