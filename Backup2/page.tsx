import Image from "next/image";
import Link from "next/link";
import DeviceFrame from "./components/DeviceFrame";
import { Testimonial } from "./components/Testimonial";
import { CaseStudyCard } from "./components/CaseStudyCard";

export default function Page() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* background wash */}
        <div className="pointer-events-none absolute inset-0 hero-bg opacity-80" />

        {/* Container becomes the positioning context */}
        <div className="container relative py-24 md:py-28">
          {/* Decorative visuals anchored to container */}
          <div className="pointer-events-none absolute bottom-6 left-3 md:left-6 xl:left-8 opacity-25 -z-0">
            <Image
              src="/signal-bars.svg"
              alt="Signal strength bars"
              width={100}
              height={100}
              className="w-12 md:w-16 xl:w-20 h-auto"
              priority
            />
          </div>

          <div className="pointer-events-none absolute -top-6 right-0 md:-top-10 md:-right-8 xl:-right-16 opacity-20 blur-2xl -z-0">
            <Image
              src="/wifi-heatmap.svg"
              alt="Wi-Fi heatmap visual"
              width={520}
              height={520}
              className="w-64 md:w-[420px] xl:w-[520px] h-auto"
              priority
            />
          </div>

          <div className="relative z-10 grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <p className="small -mt-1 mb-2 text-emerald-300">
                Veteran-Owned · York, Maine
              </p>

              <h1 className="h1 text-glow reveal">
                Independent IT Consultant for{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Web, Apps & Wi-Fi Networks
                </span>
              </h1>

              <p className="mt-5 text-neutral-300 text-lg max-w-2xl">
                I help small businesses launch fast websites, reliable apps, and
                rock-solid networks—without enterprise bloat.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary no-underline">
                  Get a free consult
                </Link>
                <Link href="/services" className="btn-ghost no-underline">
                  Explore services
                </Link>
              </div>

              {/* New offering badge */}
              <div className="mt-3 text-xs text-emerald-300">
                Now offering{" "}
                <Link
                  href="/services/repairs"
                  className="underline decoration-emerald-400 underline-offset-4"
                >
                  Repairs & Data Recovery
                </Link>
              </div>

              <p className="mt-6 text-xs text-neutral-400">
                14+ years of military discipline applied to dependable tech delivery.
              </p>

              {/* Trusted-by strip */}
              <div className="mt-8 glass rounded-2xl p-4 flex items-center gap-6 text-neutral-400">
                <span className="text-xs uppercase tracking-wide">Trusted by</span>
                <ul className="flex flex-wrap items-center gap-5 opacity-90">
                  <li className="text-sm">Milburry LLC</li>
                  <li className="text-sm">Seacoast Walk N Roll</li>
                  <li className="text-sm">SMB Platform Partners</li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col items-center justify-center">
              <Image
                src="/hero-ui.png"
                alt="Nubble Technology interface preview"
                width={480}
                height={400}
                className="rounded-3xl shadow-2xl border border-neutral-800"
                priority
              />
              <p className="small mt-3 text-neutral-500">
                Secure by default · ADA-minded UI · CI/CD ready
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="border-t border-neutral-900 bg-neutral-950">
        <div className="container py-10 grid md:grid-cols-3 gap-6">
          <div className="card reveal">
            <h3>Clear scope</h3>
            <p className="small mt-2">
              Written deliverables, acceptance criteria, and timelines—no surprises.
            </p>
          </div>
          <div className="card reveal">
            <h3>Security & performance</h3>
            <p className="small mt-2">
              MFA, access control, audits, and Core Web Vitals excellence.
            </p>
          </div>
          <div className="card reveal">
            <h3>Documentation</h3>
            <p className="small mt-2">
              Hand-off guides and admin docs your team can run with.
            </p>
          </div>
        </div>
      </section>

      {/* Services preview (now 4 cards including Repairs) */}
      <section className="border-t border-neutral-900 bg-neutral-950">
        <div className="container py-16 md:py-20 reveal">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="card">
              <h3>Web Development</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-400">
                <li className="flex gap-2"><span className="mt-1">▸</span><span>Next.js / React</span></li>
                <li className="flex gap-2"><span className="mt-1">▸</span><span>SEO & ADA</span></li>
                <li className="flex gap-2"><span className="mt-1">▸</span><span>Vercel / Netlify CI/CD</span></li>
              </ul>
              <Link href="/services#web" className="mt-5 inline-flex items-center btn-ghost no-underline">
                See details
              </Link>
            </div>

            <div className="card">
              <h3>App Development</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-400">
                <li className="flex gap-2"><span className="mt-1">▸</span><span>Flutter / React Native</span></li>
                <li className="flex gap-2"><span className="mt-1">▸</span><span>Auth, push, payments</span></li>
                <li className="flex gap-2"><span className="mt-1">▸</span><span>Supabase / Postgres APIs</span></li>
              </ul>
              <Link href="/services#apps" className="mt-5 inline-flex items-center btn-ghost no-underline">
                See details
              </Link>
            </div>

            <div className="card">
              <h3>Wi-Fi & Networks</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-400">
                <li className="flex gap-2"><span className="mt-1">▸</span><span>UniFi / Meraki</span></li>
                <li className="flex gap-2"><span className="mt-1">▸</span><span>VLANs & security</span></li>
                <li className="flex gap-2"><span className="mt-1">▸</span><span>Heatmaps & roaming</span></li>
              </ul>
              <Link href="/services#wifi" className="mt-5 inline-flex items-center btn-ghost no-underline">
                See details
              </Link>
            </div>

            {/* NEW: Repairs & IT Support */}
            <div className="card">
              <h3>Repairs & IT Support</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-400">
                <li className="flex gap-2"><span className="mt-1">▸</span><span>Diagnostics (Win/Mac)</span></li>
                <li className="flex gap-2"><span className="mt-1">▸</span><span>Virus cleanup & tune-ups</span></li>
                <li className="flex gap-2"><span className="mt-1">▸</span><span>Data recovery & backups</span></li>
              </ul>
              <Link href="/services/repairs" className="mt-5 inline-flex items-center btn-ghost no-underline">
                See details
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/pricing" className="btn btn-outline no-underline">
              View pricing
            </Link>
          </div>
        </div>
      </section>

      {/* NEW: Hospitality & Small Business (inserted after Services) */}
      <section className="border-t border-neutral-900 bg-neutral-950">
        <div className="container py-16 md:py-20 reveal">
          <h2 className="h2 text-glow">Hospitality &amp; Small Business Networking</h2>
          <p className="small mt-2">
            Purpose-built Wi-Fi and networking for Seacoast hotels, cafés, and offices — we survey, design, deploy, and manage end-to-end.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* Hotels */}
            <div className="card">
              <h3 className="font-semibold">Hotels &amp; Inns</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-400">
                <li className="flex gap-2"><span className="mt-1">▸</span><span>Floor-by-floor AP placement</span></li>
                <li className="flex gap-2"><span className="mt-1">▸</span><span>Guest / staff VLANs</span></li>
                <li className="flex gap-2"><span className="mt-1">▸</span><span>Captive portal + splash</span></li>
                <li className="flex gap-2"><span className="mt-1">▸</span><span>24/7 monitoring</span></li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/services/hotels" className="btn-ghost no-underline">See hotel packages</Link>
                <Link href="/contact" className="btn btn-primary no-underline">Request a survey</Link>
              </div>
            </div>

            {/* Cafés */}
            <div className="card">
              <h3 className="font-semibold">Cafés &amp; Coffee Shops</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-400">
                <li className="flex gap-2"><span className="mt-1">▸</span><span>POS isolation (VLAN/ACL)</span></li>
                <li className="flex gap-2"><span className="mt-1">▸</span><span>Channel &amp; power tuning</span></li>
                <li className="flex gap-2"><span className="mt-1">▸</span><span>QoS for streaming/voice</span></li>
                <li className="flex gap-2"><span className="mt-1">▸</span><span>Simple guest onboarding</span></li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/services/cafes" className="btn-ghost no-underline">Café details</Link>
                <Link href="/contact" className="btn btn-primary no-underline">Book a tune-up</Link>
              </div>
            </div>

            {/* Offices */}
            <div className="card">
              <h3 className="font-semibold">Offices &amp; Clinics</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-400">
                <li className="flex gap-2"><span className="mt-1">▸</span><span>Secure staff SSIDs</span></li>
                <li className="flex gap-2"><span className="mt-1">▸</span><span>VLAN/ACL best practices</span></li>
                <li className="flex gap-2"><span className="mt-1">▸</span><span>SSO captive portals</span></li>
                <li className="flex gap-2"><span className="mt-1">▸</span><span>Heatmaps &amp; reports</span></li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/services/offices" className="btn-ghost no-underline">Office details</Link>
                <Link href="/contact" className="btn btn-primary no-underline">Start a design</Link>
              </div>
            </div>
          </div>

          <p className="small mt-6 text-neutral-400">
            Already have Comcast/Netgear/Aruba gear? We’ll optimize what you own — or design a clean upgrade path.
          </p>
        </div>
      </section>

      {/* Case studies */}
      <section className="border-t border-neutral-900 bg-neutral-950">
        <div className="container py-16 reveal">
          <h2 className="h2">Selected Work</h2>
          <p className="small mt-2">Real projects recently delivered.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <CaseStudyCard
              title="Milburry LLC — UniFi Wireless Refresh"
              blurb="Maintained and upgraded UniFi Wi-Fi across 5 properties (37 APs). Improved coverage, roaming, and management visibility."
            />
            <CaseStudyCard
              title="Seacoast Walk N Roll — Website Rebuild"
              blurb="Complete redesign & rebuild of seacoastwalknroll.com with cleaner IA, faster load times, and ADA-minded components."
            />
            <CaseStudyCard
              title="SMB Web Platform Accelerator"
              blurb="Reusable Next.js/Tailwind starter with SEO, forms, and CI/CD for rapid SMB launches."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-neutral-900 bg-neutral-950">
        <div className="container py-16 grid md:grid-cols-3 gap-6 reveal">
          <Testimonial
            quote="(Client quote pending) The UniFi network across our 5 properties is faster and finally stable."
            name="Milburry LLC"
            role="Facilities / IT"
          />
          <Testimonial
            quote="(Client quote pending) Our redesigned site is clean, modern, and easier for customers to use."
            name="Seacoast Walk N Roll"
            role="Owner"
          />
          <Testimonial
            quote="Working with a veteran-owned partner who communicates clearly made delivery smooth."
            name="Project Partner"
            role="Agency collaborator"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-neutral-900 bg-neutral-950">
        <div className="container py-16 reveal">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 gradient-border">
            <div>
              <h2 className="text-2xl font-bold">Ready to get a quote?</h2>
              <p className="mt-2 text-neutral-300">
                Tell me what you need—I'll reply with options and ballpark pricing.
              </p>
              <p className="small mt-3 text-neutral-400">
                Or reach out:{" "}
                <a href="mailto:info@nubbletechnology.com" className="hover:underline">
                  info@nubbletechnology.com
                </a>{" "}
                •{" "}
                <a href="tel:+12073379728" className="hover:underline">
                  207-337-9728
                </a>
              </p>
            </div>
            <Link href="/contact" className="btn btn-primary no-underline">
              Start your project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
