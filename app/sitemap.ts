import type { MetadataRoute } from "next";
import { env } from "@/lib/env";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  const now = new Date();

  return [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/buyers`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/thesis`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/jaribu`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
