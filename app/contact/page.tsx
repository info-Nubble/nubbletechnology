export default function ContactPage() {
  return (
    <section className="container py-20">
      <h1 className="h2">Contact</h1>
      <p className="mt-3 text-neutral-300">Send a quick note about your project and the best way to reach you.</p>

      <form action="mailto:info@nubbletechnology.com" method="post" encType="text/plain" className="mt-8 grid gap-4 max-w-xl">
        <input className="card" name="name" placeholder="Your name" />
        <input className="card" name="email" placeholder="Email" type="email" />
        <textarea className="card" name="details" placeholder="Project details" rows={6} />
        <button className="btn btn-primary w-fit">Send</button>
      </form>

      <p className="small mt-4 text-neutral-400">
        Prefer email? info@nubbletechnology.com · 207-337-9728
      </p>
    </section>
  );
}
