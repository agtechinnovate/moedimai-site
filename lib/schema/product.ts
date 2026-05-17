import { env } from "@/lib/env";

export interface ProductSchemaInput {
  slug: string;
  name: string;
  description: string;
  latinName: string;
  productType: "essential_oil" | "botanical_oil";
  processMethod?: string;
  originRegion?: string;
  isoStandard?: string | null;
  certificationStatus?: string;
  imageUrl?: string;
  priceKes?: number;
  availability?:
    | "https://schema.org/InStock"
    | "https://schema.org/PreOrder"
    | "https://schema.org/SoldOut";
  availabilityStarts?: string; // ISO date
  aggregateRating?: { value: number; count: number };
}

const baseUrl = env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");

/**
 * Product JSON-LD. Includes the moat-bearing fields — Latin binomial,
 * process method, origin, ISO reference — so AI engines can extract specific
 * facts when a buyer asks "who supplies organic Kenyan rosemary?".
 */
export function productSchema(input: ProductSchemaInput) {
  const url = `${baseUrl}/shop/product/${input.slug}`;

  const additionalProperty: Array<Record<string, unknown>> = [
    { "@type": "PropertyValue", name: "Botanical name", value: input.latinName },
    {
      "@type": "PropertyValue",
      name: "Product type",
      value: input.productType === "essential_oil" ? "Essential oil" : "Botanical oil",
    },
  ];

  if (input.processMethod) {
    additionalProperty.push({
      "@type": "PropertyValue",
      name: "Extraction method",
      value: input.processMethod,
    });
  }
  if (input.originRegion) {
    additionalProperty.push({
      "@type": "PropertyValue",
      name: "Origin",
      value: input.originRegion,
    });
  }
  if (input.isoStandard) {
    additionalProperty.push({
      "@type": "PropertyValue",
      name: "ISO reference",
      value: input.isoStandard,
    });
  }
  if (input.certificationStatus) {
    additionalProperty.push({
      "@type": "PropertyValue",
      name: "Certification status",
      value: input.certificationStatus,
    });
  }

  const product: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: input.name,
    description: input.description,
    brand: { "@id": `${baseUrl}/#organization` },
    manufacturer: { "@id": `${baseUrl}/#organization` },
    category: "Essential Oils",
    url,
    additionalProperty,
  };

  if (input.imageUrl) {
    product.image = input.imageUrl;
  }

  if (input.priceKes !== undefined && input.availability) {
    product.offers = {
      "@type": "Offer",
      url,
      priceCurrency: "KES",
      price: (input.priceKes / 100).toFixed(2),
      availability: input.availability,
      availabilityStarts: input.availabilityStarts,
      seller: { "@id": `${baseUrl}/#organization` },
    };
  } else if (input.availability) {
    product.offers = {
      "@type": "Offer",
      url,
      availability: input.availability,
      availabilityStarts: input.availabilityStarts,
      seller: { "@id": `${baseUrl}/#organization` },
    };
  }

  if (input.aggregateRating) {
    product.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: input.aggregateRating.value,
      reviewCount: input.aggregateRating.count,
    };
  }

  return product;
}
