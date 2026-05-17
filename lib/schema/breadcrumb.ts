import { env } from "@/lib/env";

interface BreadcrumbStep {
  name: string;
  path: string;
}

const baseUrl = env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");

/**
 * BreadcrumbList JSON-LD. Use on every page except `/`.
 *
 * Example:
 *   breadcrumbList([
 *     { name: "Shop", path: "/shop" },
 *     { name: "Rosemary", path: "/shop/product/rosemary" },
 *   ])
 */
export function breadcrumbList(steps: BreadcrumbStep[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      ...steps.map((step, idx) => ({
        "@type": "ListItem",
        position: idx + 2,
        name: step.name,
        item: `${baseUrl}${step.path}`,
      })),
    ],
  };
}
