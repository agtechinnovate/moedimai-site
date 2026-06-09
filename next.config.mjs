/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "moedim.ai" }],
        destination: "https://www.moedim.ai/:path*",
        permanent: true,
      },
      {
        source: "/intake",
        destination: "https://intake.moedim.ai/intake",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          destination: "/index_1.html",
        },
      ],
      afterFiles: [
        {
          source: "/:slug.md",
          destination: "/md/:slug",
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
