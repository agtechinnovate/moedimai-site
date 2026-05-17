import type { MetadataRoute } from "next";
import { env } from "@/lib/env";

/**
 * Dynamic sitemap.
 *
 * W2 ships static routes only — the 5 W1 pages. Later sprints extend:
 *   - W3 adds /about, /approach, /team, /press, /farmers, /investors
 *   - W4 adds /wholesale
 *   - W5 adds /shop/[collection] + /shop/product/[slug]
 *   - W9 adds /lot/[lot_number]
 *   - W10 adds /journal/[slug]
 *
 * Each later sprint extends this file rather than fragmenting into
 * sub-sitemaps until the URL count justifies splitting.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  const now = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/buyers`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/journal`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
