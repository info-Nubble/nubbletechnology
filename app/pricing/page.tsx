import Link from "next/link";

export default function PricingPage() {
  return (
    <section className="container py-20 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="h2">Transparent Pricing</h1>
        <p className="mt-3 text-neutral-300">
          Fair, local-friendly rates for southern Maine (207), Seacoast NH (603), and Greater Boston (617).
        </p>
      </div>

      {/* Plans */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Website Starter */}
        <div className="relative rounded-3xl border border-neutral-800 bg-neutral-950 p-6 md:p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Website Starter</h3>
            <span className="badge">Most Popular</span>
          </div>
          <div className="mt-2 text-3xl font-extrabold">$1,500+</div>
          <ul className="mt-5 space-y-2 text-sm text-neutral-300">
            <li className="flex gap-2"><span>▸</span>One-page site (fast + mobile)</li>
            <li className="flex gap-2"><span>▸</span>Contact form + email routing</li>
            <li className="flex gap-2"><span>▸</span>Hosted deploy & custom domain</li>
          </ul>
          <Link href="/contact" className="btn btn-primary no-underline mt-6 inline-flex">Start here</Link>
          <p className="small mt-4 text-neutral-400">Great for trades, local services, events.</p>
        </div>

        {/* Business Website */}
        <div className="relative rounded-3xl border border-emerald-400/30 bg-gradient-to-b from-emerald-500/5 to-cyan-400/5 p-[1px] shadow-xl shadow-emerald-500/10">
          <div className="rounded-3xl bg-neutral-950 p-6 md:p-8">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Business Website</h3>
              <span className="badge">Best Value</span>
            </div>
            <div className="mt-2 text-4xl font-extrabold">$3,500+</div>
            <ul className="mt-5 space-y-2 text-sm text-neutral-300">
              <li className="flex gap-2"><span>▸</span>Multi-page site & IA</li>
              <li className="flex gap-2"><span>▸</span>SEO + ADA-minded components</li>
              <li className="flex gap-2"><span>▸</span>Simple CMS option for updates</li>
            </ul>
            <Link href="/contact" className="btn btn-primary no-underline mt-6 inline-flex">Get exact quote</Link>
            <p className="small mt-4 text-neutral-400">Perfect for growing SMBs and clinics.</p>
          </div>
        </div>

        {/* Wi-Fi Tune-Up */}
        <div className="relative rounded-3xl border border-neutral-800 bg-neutral-950 p-6 md:p-8">
          <h3 className="text-lg font-semibold">Wi-Fi Tune-Up</h3>
          <div className="mt-2 text-3xl font-extrabold">$750+</div>
          <ul className="mt-5 space-y-2 text-sm text-neutral-300">
            <li className="flex gap-2"><span>▸</span>On-site or remote site survey</li>
            <li className="flex gap-2"><span>▸</span>VLANs, security, roaming checks</li>
            <li className="flex gap-2"><span>▸</span>Report with fixes & roadmap</li>
          </ul>
          <Link href="/contact" className="btn btn-outline no-underline mt-6 inline-flex">Schedule tune-up</Link>
          <p className="small mt-4 text-neutral-400">UniFi / Meraki welcome.</p>
        </div>
      </div>

      {/* À la carte */}
      <div className="mt-4">
        <h2 className="h2 text-2xl">À la carte</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <Tile title="Support" price="$95/hr" bullets={["Small fixes", "Content updates", "Monitoring"]} cta="Book time" />
          <Tile title="App Feature" price="$500+" bullets={["Auth or payments", "Push notifications", "APIs"]} cta="Add feature" />
          <Tile title="Network Upgrade" price="Quote" bullets={["AP refresh", "VLAN & firewall", "Docs & hand-off"]} cta="Request quote" />
        </div>
      </div>

      {/* FAQ */}
      <section className="mt-16">
        <h2 className="h2 text-2xl">Pricing FAQ</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="card"><h3 className="font-semibold">What affects final price?</h3><p className="small mt-2 text-neutral-300">Scope and complexity. For web: page count, integrations, and content help. For Wi-Fi: AP count, cabling, and materials. You’ll always approve scope and price first.</p></div>
          <div className="card"><h3 className="font-semibold">Remote or on-site?</h3><p className="small mt-2 text-neutral-300">Both. Remote across the US; on-site for York/Seacoast/Boston. Surveys and installs are on-site by default.</p></div>
          <div className="card"><h3 className="font-semibold">Ongoing support?</h3><p className="small mt-2 text-neutral-300">Yes—ad-hoc support at $95/hr, or Managed Wi-Fi plans ($95–$200/mo) with monitoring and quarterly checks.</p></div>
          <div className="card"><h3 className="font-semibold">Payment terms?</h3><p className="small mt-2 text-neutral-300">50% deposit to book, balance on delivery. Larger projects can be milestone-based.</p></div>
        </div>
      </section>
    </section>
  );
}

function Tile({ title, price, bullets, cta }: { title: string; price: string; bullets: string[]; cta: string; }) {
  return (
    <div className="group relative rounded-3xl border border-neutral-800 bg-neutral-950 p-6 md:p-8 hover:border-neutral-700 transition">
      <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition pointer-events-none [background:conic-gradient(from_180deg,rgba(16,185,129,.15),rgba(34,211,238,.12),transparent_60%)]" />
      <div className="relative">
        <div className="text-sm text-neutral-400">{title}</div>
        <div className="mt-1 text-3xl font-bold">{price}</div>
        <ul className="mt-4 space-y-2 text-sm text-neutral-300">
          {bullets.map((b, i) => (<li key={i} className="flex gap-2"><span>▸</span>{b}</li>))}
        </ul>
        <Link href="/contact" className="btn btn-outline no-underline mt-6 inline-flex">{cta}</Link>
      </div>
    </div>
  );
}
