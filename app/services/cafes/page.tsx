import Link from "next/link";
import SeoJsonLd from "../../components/SeoJsonLd";

export const metadata = {
  title: "Café & Coffee Shop Wi-Fi (POS-Safe) — Seacoast ME/NH | Nubble Technology",
  description:
    "POS isolation, channel/power tuning, QoS, and simple guest onboarding. Fast, reliable Wi-Fi for cafés and bakeries.",
};

export default function CafesPage() {
  return (
    <main className="border-t border-neutral-900 bg-neutral-950">
      <SeoJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Café & Coffee Shop Wi-Fi (POS-Safe)",
          "provider": { "@type": "LocalBusiness", "name": "Nubble Technology", "telephone": "+1-207-337-9728" },
          "areaServed": "Seacoast ME/NH",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "USD",
            "priceSpecification": [
              { "@type": "UnitPriceSpecification", "price": "500", "name": "Wi-Fi Tune-Up" }
            ]
          }
        }}
      />
      <div className="container py-16 md:py-20 reveal">
        <h1 className="h2 text-glow">Cafés &amp; Coffee Shops — POS-safe networks</h1>
        <p className="small mt-2">
          Keep registers stable while guests get quick, simple Wi-Fi. We serve York, Kittery, Ogunquit, Wells, and Portsmouth.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="card">
            <h3 className="font-semibold">Wi-Fi Tune-Up — $500</h3>
            <ul className="mt-3 text-sm text-neutral-400 space-y-2">
              <li>• Channel &amp; power plan</li>
              <li>• POS isolation (VLAN/ACL)</li>
              <li>• QoS for streaming/voice</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold">Design &amp; Deploy — scoped</h3>
            <ul className="mt-3 text-sm text-neutral-400 space-y-2">
              <li>• AP selection &amp; placement</li>
              <li>• Guest onboarding</li>
              <li>• Monitoring &amp; seasonal reviews</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="card">
            <h4 className="font-semibold">Will guest Wi-Fi slow our POS?</h4>
            <p className="small mt-2">No — we isolate POS traffic and can prioritize it with QoS.</p>
          </div>
          <div className="card">
            <h4 className="font-semibold">Can customers get a simple login?</h4>
            <p className="small mt-2">Yes — we can do click-to-accept, passcode, or a branded splash with T&Cs.</p>
          </div>
          <div className="card">
            <h4 className="font-semibold">What about older routers?</h4>
            <p className="small mt-2">We’ll stabilize what you have; upgrades only when it materially improves reliability.</p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-primary no-underline">Book a Café Tune-Up</Link>
          <Link href="/pricing" className="btn-ghost no-underline">See pricing</Link>
        </div>
      </div>
    </main>
  );
}
