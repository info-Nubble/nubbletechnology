export function PriceTile({ title, price, details }: { title: string; price: string; details: string[] }) {
  return (
    <div className="card">
      <div className="text-sm text-neutral-400">{title}</div>
      <div className="mt-1 text-3xl font-bold">{price}</div>
      <ul className="mt-3 space-y-2 text-sm text-neutral-400">
        {details.map((d, i) => (
          <li key={i} className="flex gap-2"><span className="mt-1">▸</span><span>{d}</span></li>
        ))}
      </ul>
    </div>
  );
}
