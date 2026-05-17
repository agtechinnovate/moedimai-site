import type { MetadataRoute } from "next";
import { env } from "@/lib/env";

/**
 * Dynamic robots.txt with explicit AI crawler allowlist per
 * docs/website/MOEDIMAI_MASTER_WEBSITE_PLAN_V3.md §6 + engineering brief §4.1.
 *
 * Default behaviour for many crawlers is "if unsure, do not crawl." Explicit
 * Allow rules remove that ambiguity. We block /api/ and /portal/* (portal
 * lands W8) to keep authenticated surfaces out of any retrieval index.
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");

  const aiCrawlers = [
    "GPTBot",
    "ChatGPT-User",
    "OAI-SearchBot",
    "ClaudeBot",
    "anthropic-ai",
    "Claude-Web",
    "PerplexityBot",
    "Perplexity-User",
    "Google-Extended",
    "GoogleOther",
    "Applebot-Extended",
    "CCBot",
    "Bytespider",
    "cohere-ai",
    "Diffbot",
    "FacebookBot",
    "meta-externalagent",
  ];

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/portal/", "/api/", "/studio/"] },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: [`${baseUrl}/sitemap.xml`, `${baseUrl}/llms.txt`],
    host: baseUrl,
  };
}
