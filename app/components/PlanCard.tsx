export function PlanCard({ name, price, bullets }: { name: string; price: string; bullets: string[] }) {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="mt-1 text-2xl font-bold">{price}</div>
      <ul className="mt-3 space-y-2 text-sm text-neutral-400">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2"><span className="mt-1">▸</span><span>{b}</span></li>
        ))}
      </ul>
    </div>
  );
}
