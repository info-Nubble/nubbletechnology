export default function AboutPage() {
  return (
    <section className="container py-20 space-y-6">
      <h1 className="h2">About Nubble Technology</h1>
      <p className="text-neutral-300 max-w-3xl">
        Veteran-owned independent consultancy delivering websites, apps, and Wi-Fi networks with an emphasis on clarity,
        security, and speed. Based in York, Maine—serving New England and remote US clients.
      </p>
      <ul className="grid md:grid-cols-3 gap-6">
        <li className="card small">14+ years of military discipline and systems thinking.</li>
        <li className="card small">Clear scope, written deliverables, and on-time hand-offs.</li>
        <li className="card small">ADA-minded UI, accessible forms, and straightforward content.</li>
      </ul>
    </section>
  );
}
