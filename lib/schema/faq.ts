export interface FaqEntry {
  question: string;
  answer: string;
}

/**
 * FAQPage JSON-LD. Mandatory on every audience landing page once W3+ ships.
 * Phrase questions the way a user types into ChatGPT, not the way marketing
 * would phrase them.
 */
export function faqPage(entries: FaqEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.answer,
      },
    })),
  };
}
