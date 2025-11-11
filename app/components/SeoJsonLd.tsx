// app/components/SeoJsonLd.tsx
import Script from "next/script";

export default function SeoJsonLd({ data }: { data: unknown }) {
  const json = JSON.stringify(data);
  // unique id avoids dedupe across pages
  const id = `jsonld-${Math.random().toString(36).slice(2)}`;
  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
