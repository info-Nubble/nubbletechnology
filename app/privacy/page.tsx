export default function PrivacyPage() {
  return (
    <section className="container py-20 space-y-6">
      <h1 className="h2">Privacy Policy</h1>
      <p className="text-neutral-300">We collect only what’s needed to communicate about your project and deliver services. We don’t sell your data.</p>
      <ul className="list-disc pl-6 small text-neutral-400 space-y-2">
        <li>Contact info you provide (name, email, phone) is used for estimates, support, and billing.</li>
        <li>Basic analytics may be used to improve site performance; no personal profiling.</li>
        <li>Email <a className="hover:underline" href="mailto:info@nubbletechnology.com">info@nubbletechnology.com</a> for any privacy questions.</li>
      </ul>
    </section>
  );
}
