export const metadata = {
  title: "Computer Repair & IT Support | Nubble Technology",
  description:
    "Local computer repair, diagnostics, data recovery, and small‑business IT support on the Seacoast. Veteran‑owned. On‑site & remote help.",
};

export default function ComputerRepairITSupport() {
  return (
    <main className="relative min-h-screen w-full bg-[#0a0f14] text-white overflow-hidden">
      {/* Glow background */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[1200px] rounded-full blur-3xl opacity-60 bg-gradient-to-r from-emerald-500/30 via-cyan-500/30 to-sky-500/30" />
      </div>

      {/* Header */}
      <section className="relative px-6 md:px-10 lg:px-16 pt-20 pb-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-emerald-300 text-xs tracking-wide">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Veteran‑Owned • Seacoast, New England
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Computer Repair, Diagnostics & <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-300 to-sky-400">Small‑Business IT</span>
            </h1>
            <p className="mt-5 text-lg text-white/70 max-w-2xl">
              Fast, professional help for Windows & Mac, networks, and data. On‑site or remote. Perfect for mom‑and‑pop shops, trades, and small offices.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="tel:12073379728" className="rounded-2xl px-5 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-[0_0_40px_-10px_rgba(16,185,129,0.6)] hover:brightness-110 transition">
                Call 207‑337‑9728
              </a>
              <a href="mailto:info@nubbletechnology.com" className="rounded-2xl px-5 py-3 border border-white/10 bg-white/5 hover:bg-white/10 transition">
                info@nubbletechnology.com
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-sky-500/20 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-6 shadow-2xl">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/90">
                {[
                  "Hardware diagnostics",
                  "Virus & malware cleanup",
                  "SSD & RAM upgrades",
                  "New device setup",
                  "Wi‑Fi & printers",
                  "Email & M365/Google",
                  "Data backup & recovery",
                  "POS & kiosk support",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3 backdrop-blur-md hover:border-emerald-400/40 transition"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="relative px-6 md:px-10 lg:px-16 py-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">Core Services</h2>
          <p className="mt-2 text-white/60 max-w-3xl">
            One trusted partner for devices, networks, email, and data — built for the pace of small business.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Repair & Diagnostics",
                bullets: [
                  "Windows/Mac troubleshooting",
                  "Tune‑ups & performance",
                  "Virus/malware removal",
                ],
                badge: "On‑site or Remote",
              },
              {
                title: "Data Backup & Recovery",
                bullets: [
                  "File recovery (basic/advanced)",
                  "Cloud backups & NAS",
                  "Ransomware preparedness",
                ],
                badge: "Critical",
              },
              {
                title: "Networking & Wi‑Fi",
                bullets: [
                  "Routers, firewalls, VLANs",
                  "AP placement & heatmaps",
                  "Printers & scanners",
                ],
                badge: "Survey + Tune‑Up",
              },
              {
                title: "Cloud Email & Migrations",
                bullets: [
                  "Microsoft 365 / Google Workspace",
                  "Domain + mailbox setup",
                  "Mail & file moves",
                ],
                badge: "Popular",
              },
              {
                title: "POS & Front‑of‑House",
                bullets: [
                  "Square, Toast, Clover",
                  "Network reliability",
                  "Device hardening",
                ],
                badge: "Hospitality",
              },
              {
                title: "Security & Maintenance",
                bullets: [
                  "Endpoint protection",
                  "Patch & updates",
                  "Phishing training",
                ],
                badge: "Managed",
              },
            ].map((card) => (
              <article
                key={card.title}
                className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-emerald-400/40 transition shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.45)]"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-emerald-500/0 via-cyan-500/0 to-sky-500/0 opacity-0 hover:opacity-10 transition" />
                <div className="inline-flex items-center gap-2 text-xs text-emerald-300/90">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" /> {card.badge}
                </div>
                <h3 className="mt-3 text-xl font-semibold">{card.title}</h3>
                <ul className="mt-3 space-y-2 text-white/75">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Packages & Pricing */}
      <section className="relative px-6 md:px-10 lg:px-16 py-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">Packages & Pricing</h2>
          <p className="mt-2 text-white/60 max-w-3xl">
            Straightforward, transparent pricing. Parts and lab recovery (if needed) quoted separately.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Quick Fix Diagnostic",
                price: "$125",
                period: "per visit",
                features: [
                  "Up to 1 hour on‑site or remote",
                  "Issue isolation + next steps",
                  "Most minor fixes included",
                ],
                cta: "Book Diagnostic",
              },
              {
                name: "Full Tune‑Up",
                featured: true,
                price: "$250",
                period: "flat",
                features: [
                  "Deep cleanup + performance",
                  "Security updates & drivers",
                  "Health report PDF",
                ],
                cta: "Schedule Tune‑Up",
              },
              {
                name: "Data Recovery",
                price: "$200+",
                period: "basic",
                features: [
                  "Working drive: file recovery",
                  "Failed drive: advanced options",
                  "Backup plan setup",
                ],
                cta: "Start Recovery",
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={
                  "relative rounded-2xl border p-6 bg-white/[0.02] " +
                  (plan.featured
                    ? "border-emerald-400/40 shadow-[0_0_50px_-10px_rgba(16,185,129,0.5)]"
                    : "border-white/10")
                }
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-6 rounded-full bg-emerald-500 px-2.5 py-1 text-xs font-medium text-black">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-white/50">{plan.period}</span>
                </div>
                <ul className="mt-4 space-y-2 text-white/75">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <a
                    href="mailto:info@nubbletechnology.com?subject=Service%20Request:%20" 
                    className="inline-flex items-center justify-center rounded-xl px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:brightness-110 transition"
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Care plans */}
          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold">Business Care Plans</h3>
                <p className="mt-2 text-white/70">
                  Keep your devices healthy with proactive maintenance. Perfect for 1–25 seats.
                </p>
                <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-white/80">
                  {[
                    "$99/mo per device (3+ devices)",
                    "Patch & security updates",
                    "Remote monitoring",
                    "Quarterly on‑site checkups",
                  ].map((f) => (
                    <li key={f} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-2xl" />
                <div className="relative rounded-3xl border border-white/10 bg-black/30 p-6">
                  <div className="text-5xl font-bold tracking-tight">$99</div>
                  <div className="text-white/50 -mt-1">per device / month</div>
                  <p className="mt-3 text-white/75">
                    Includes monitoring, patching, and quarterly site visits. Cancel anytime.
                  </p>
                  <a
                    href="mailto:info@nubbletechnology.com?subject=Business%20Care%20Plan"
                    className="mt-5 inline-flex items-center justify-center rounded-xl px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:brightness-110 transition"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="relative px-6 md:px-10 lg:px-16 py-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">Built for Small Business</h2>
          <p className="mt-2 text-white/60 max-w-3xl">
            We keep local operations running — from cafés to contractors.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Cafés & Restaurants",
              "Salons & Retail",
              "Trades & Contractors",
              "Clinics & Offices",
            ].map((i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center hover:border-emerald-400/40 transition shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_35px_-12px_rgba(16,185,129,0.45)]">
                {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative px-6 md:px-10 lg:px-16 py-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">FAQs</h2>
          <div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02]">
            {[ 
              {
                q: "Do you work with both Windows and Mac?",
                a: "Yes. We support Windows 10/11 and current macOS releases, including mixed environments.",
              },
              {
                q: "Can you recover files from a dead drive?",
                a: "Often, yes. We start with non‑invasive recovery. If a clean‑room lab is required, we’ll coordinate and manage it.",
              },
              {
                q: "Do you offer rush service?",
                a: "We offer same‑day and after‑hours options for urgent issues. Weekend appointments available.",
              },
              {
                q: "Will you set up backups so this doesn’t happen again?",
                a: "Absolutely. We’ll design a backup plan (cloud + local) with regular testing so recovery is painless next time.",
              },
            ].map((item, idx) => (
              <details key={idx} className="group p-5 open:bg-white/[0.03]">
                <summary className="flex cursor-pointer items-center justify-between text-white/90">
                  <span className="text-lg font-medium">{item.q}</span>
                  <span className="ml-4 h-6 w-6 grid place-items-center rounded-full border border-white/10 text-white/60 group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-3 text-white/70">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 md:px-10 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-emerald-400/30 bg-gradient-to-r from-emerald-600/20 via-cyan-600/20 to-sky-600/20 p-8">
            <div className="absolute -inset-1 rounded-3xl bg-[radial-gradient(60%_120%_at_10%_0%,rgba(16,185,129,0.2),transparent),radial-gradient(60%_120%_at_90%_100%,rgba(56,189,248,0.2),transparent)] blur-2xl" />
            <div className="relative grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold">Need help today?</h3>
                <p className="mt-2 text-white/80 max-w-2xl">
                  Call now or email a quick description of the issue. We’ll respond with an ETA and a clear plan.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <a href="tel:12073379728" className="rounded-2xl px-5 py-3 bg-white text-black font-medium hover:opacity-90 transition">207‑337‑9728</a>
                <a href="mailto:info@nubbletechnology.com" className="rounded-2xl px-5 py-3 border border-white/20 bg-white/10 hover:bg-white/20 transition">info@nubbletechnology.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
