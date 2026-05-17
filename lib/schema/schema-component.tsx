type SchemaInput = Record<string, unknown> | Record<string, unknown>[];

/**
 * Renders one or many JSON-LD schema blocks as <script type="application/ld+json">.
 * Server-rendered so AI crawlers (which run little or no JS) see the schema
 * in the initial HTML.
 */
export function Schema({ data }: { data: SchemaInput }) {
  const blocks = Array.isArray(data) ? data : [data];

  return (
    <>
      {blocks.map((block, idx) => (
        <script
          // eslint-disable-next-line react/no-array-index-key
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
