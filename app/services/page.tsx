import Link from "next/link";

export const metadata = {
  title: "Services — Web, Apps, Wi-Fi & Repairs | Nubble Technology",
  description:
    "Web & app development, Wi-Fi design, and local IT services for hotels, cafés, and offices across the Seacoast (York, Kittery, Ogunquit, Wells, Portsmouth).",
};

export default function ServicesPage() {
  return (
    <main className="border-t border-neutral-900 bg-neutral-950">
      <div className="container py-16 md:py-20 space-y-16">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="h2 text-glow">Services</h1>
          <p className="mt-3 text-neutral-300">
            Survey • Design • Install • Managed Care — vendor-agnostic solutions engineered for the Seacoast’s busy seasons.
          </p>
        </div>

        {/* Vertical-focused cards */}
        <section aria-labelledby="verticals">
          <h2 id="verticals" className="sr-only">Industries</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Link href="/services/hotels" className="card no-underline hover:translate-y-[-3px]">
              <h3 className="font-semibold">Hotels &amp; Inns</h3>
              <p className="small mt-2 text-neutral-400">
                Floor-by-floor AP placement, captive portals, guest/staff VLANs, 24/7 monitoring.
              </p>
              <span className="mt-4 inline-flex btn-ghost">Explore hotel packages</span>
            </Link>

            <Link href="/services/cafes" className="card no-underline hover:translate-y-[-3px]">
              <h3 className="font-semibold">Cafés &amp; Coffee Shops</h3>
              <p className="small mt-2 text-neutral-400">
                POS isolation, channel/power tuning, QoS, simple guest onboarding.
              </p>
              <span className="mt-4 inline-flex btn-ghost">See café details</span>
            </Link>

            <Link href="/services/offices" className="card no-underline hover:translate-y-[-3px]">
              <h3 className="font-semibold">Offices &amp; Clinics</h3>
              <p className="small mt-2 text-neutral-400">
                Secure SSIDs, VLAN/ACL best practices, SSO captive portals, heatmaps.
              </p>
              <span className="mt-4 inline-flex btn-ghost">Office offerings</span>
            </Link>
          </div>
        </section>

        {/* Capabilities quick-links */}
        <section className="grid gap-6 md:grid-cols-4">
          <a href="#web" className="card no-underline">
            <h3 className="font-semibold">Web Development</h3>
            <ul className="mt-3 text-sm text-neutral-400 space-y-2">
              <li>• Next.js / React</li>
              <li>• SEO &amp; ADA</li>
              <li>• Vercel / Netlify CI/CD</li>
            </ul>
          </a>
          <a href="#apps" className="card no-underline">
            <h3 className="font-semibold">App Development</h3>
            <ul className="mt-3 text-sm text-neutral-400 space-y-2">
              <li>• Flutter / React Native</li>
              <li>• Auth, push, payments</li>
              <li>• Supabase / Postgres APIs</li>
            </ul>
          </a>
          <a href="#wifi" className="card no-underline">
            <h3 className="font-semibold">Wi-Fi &amp; Networks</h3>
            <ul className="mt-3 text-sm text-neutral-400 space-y-2">
              <li>• UniFi / Meraki</li>
              <li>• VLANs &amp; security</li>
              <li>• Heatmaps &amp; roaming</li>
            </ul>
          </a>
          <Link href="/services/repairs" className="card no-underline">
            <h3 className="font-semibold">Repairs &amp; IT Support</h3>
            <ul className="mt-3 text-sm text-neutral-400 space-y-2">
              <li>• Diagnostics (Win/Mac)</li>
              <li>• Virus cleanup &amp; tune-ups</li>
              <li>• Data recovery &amp; backups</li>
            </ul>
          </Link>
        </section>

        {/* Web Development */}
        <section id="web" className="space-y-6">
          <h2 className="text-2xl font-bold text-emerald-300">Web Development</h2>
          <p className="text-neutral-300 max-w-2xl">
            Modern, accessible, and high-performance websites built with Next.js, React, and Tailwind. Every site includes
            secure hosting, contact forms, and analytics integration.
          </p>
          <ul className="grid md:grid-cols-3 gap-6 text-sm text-neutral-300">
            <li className="card">Corporate, portfolio, and e-commerce builds</li>
            <li className="card">SEO optimization and ADA compliance</li>
            <li className="card">Hosting, analytics, and support</li>
          </ul>
        </section>

        {/* App Development */}
        <section id="apps" className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-300">App Development</h2>
          <p className="text-neutral-300 max-w-2xl">
            Cross-platform apps for Android, iOS, and web — using Flutter and React Native with secure Supabase/Postgres
            backends.
          </p>
          <ul className="grid md:grid-cols-3 gap-6 text-sm text-neutral-300">
            <li className="card">Authentication, push notifications, payments</li>
            <li className="card">APIs, dashboards, and admin panels</li>
            <li className="card">CI/CD for continuous delivery</li>
          </ul>
        </section>

        {/* Wi-Fi & Networking */}
        <section id="wifi" className="space-y-8">
          <h2 className="text-2xl font-bold text-emerald-300">Wi-Fi &amp; Network Services</h2>
          <p className="text-neutral-300 max-w-2xl">
            On-site and remote networking services using UniFi, Meraki, and enterprise-grade tools. Every project includes
            documentation, configuration backup, and follow-up support.
          </p>

          {/* Packages Table */}
          <div className="overflow-x-auto rounded-3xl border border-neutral-800 bg-neutral-950">
            <table className="w-full text-left border-collapse text-sm text-neutral-300">
              <thead>
                <tr className="bg-neutral-900 text-neutral-200">
                  <th className="px-4 py-3 font-semibold">Package</th>
                  <th className="px-4 py-3 font-semibold">Deliverables</th>
                  <th className="px-4 py-3 font-semibold">Target Client</th>
                  <th className="px-4 py-3 font-semibold text-right">Base Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-neutral-800 hover:bg-neutral-900/50">
                  <td className="px-4 py-3 font-medium text-emerald-300">Wi-Fi Health Check</td>
                  <td className="px-4 py-3">1–2 hr site visit, basic heatmap, PDF summary</td>
                  <td className="px-4 py-3">Coffee shops, offices</td>
                  <td className="px-4 py-3 text-right">$350</td>
                </tr>
                <tr className="border-t border-neutral-800 hover:bg-neutral-900/50">
                  <td className="px-4 py-3 font-medium text-emerald-300">Full Site Survey</td>
                  <td className="px-4 py-3">Complete floorplan mapping, AP optimization, report</td>
                  <td className="px-4 py-3">Multi-AP offices</td>
                  <td className="px-4 py-3 text-right">$750–$1,200</td>
                </tr>
                <tr className="border-t border-neutral-800 hover:bg-neutral-900/50">
                  <td className="px-4 py-3 font-medium text-emerald-300">Wi-Fi Tune-Up</td>
                  <td className="px-4 py-3">Firmware, channel plan, VLAN, QoS</td>
                  <td className="px-4 py-3">Existing networks</td>
                  <td className="px-4 py-3 text-right">$500</td>
                </tr>
                <tr className="border-t border-neutral-800 hover:bg-neutral-900/50">
                  <td className="px-4 py-3 font-medium text-emerald-300">Design &amp; Deploy</td>
                  <td className="px-4 py-3">New installs, AP placement &amp; VLAN config</td>
                  <td className="px-4 py-3">New construction / remodels</td>
                  <td className="px-4 py-3 text-right">$1,500+</td>
                </tr>
                <tr className="border-t border-neutral-800 hover:bg-neutral-900/50">
                  <td className="px-4 py-3 font-medium text-emerald-300">Managed Wi-Fi Plan</td>
                  <td className="px-4 py-3">Monitoring + quarterly checks</td>
                  <td className="px-4 py-3">Any business</td>
                  <td className="px-4 py-3 text-right">$95–200/mo</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <Link href="/contact" className="btn btn-primary no-underline">
              Request a site visit
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section>
          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 gradient-border">
            <div>
              <h2 className="text-2xl font-bold">Ready for reliable Wi-Fi and a modern site?</h2>
              <p className="mt-2 text-neutral-300">
                Tell us about your building and busy times — we’ll reply with options and clear pricing.
              </p>
              <p className="small mt-3 text-neutral-400">
                Or reach out:{" "}
                <a href="mailto:info@nubbletechnology.com" className="hover:underline">info@nubbletechnology.com</a>{" "}
                • <a href="tel:+12073379728" className="hover:underline">207-337-9728</a>
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="/contact" className="btn btn-primary no-underline">Request a Site Survey</Link>
              <Link href="/pricing" className="btn-ghost no-underline">View pricing</Link>
            </div>
          </div>

          <p className="small mt-6 text-neutral-400">
            Serving York, Kittery, Ogunquit, Wells, and Portsmouth. Already have Comcast/Netgear/Aruba gear?
            We’ll optimize what you own — or design a clean upgrade path.
          </p>
        </section>
      </div>
    </main>
  );
}
