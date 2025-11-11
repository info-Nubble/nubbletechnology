export function CaseStudyCard({ title, blurb }: { title: string; blurb: string }) {
  return (
    <article className="card hover:border-neutral-700 transition">
      <div className="aspect-video rounded-2xl bg-neutral-900 border border-neutral-800 mb-4" />
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-neutral-400">{blurb}</p>
    </article>
  );
}
