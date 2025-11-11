export function Testimonial({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <div className="card">
      <p className="text-neutral-200 leading-relaxed">“{quote}”</p>
      <div className="mt-4 text-sm text-neutral-400">— {name}, {role}</div>
    </div>
  );
}
