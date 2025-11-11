import Link from "next/link";
import SeoJsonLd from "../../components/SeoJsonLd";

export const metadata = {
  title: "Hotel Wi-Fi Design & Support — York, Kittery, Ogunquit | Nubble Technology",
  description:
    "Floor-by-floor AP placement, captive portals, guest/staff VLANs, and 24/7 monitoring for hotels & inns across the Seacoast.",
};

export default function HotelsPage() {
  return (
    <main className="border-t border-neutral-900 bg-neutral-950">
      <SeoJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Hotel & Inn Wi-Fi Design and Support",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Nubble Technology",
            "telephone": "+1-207-337-9728",
            "areaServed": ["York","Kittery","Ogunquit","Wells","Portsmouth"]
          },
          "areaServed": "Seacoast ME/NH",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "USD",
            "priceSpecification": [
              { "@type": "UnitPriceSpecification", "price": "350", "name": "Wi-Fi Health Check" }
            ]
          }
        }}
      />
      <div className="container py-16 md:py-20 reveal">
        <h1 className="h2 text-glow">Hotels &amp; Inns — Wi-Fi that handles peak season</h1>
        <p className="small mt-2">
          We deliver roaming that actually roams, clean guest/staff separation, and reliable coverage from lobby to top floor.
          Serving York, Kittery, Ogunquit, Wells, and Portsmouth.
        </p>

        {/* Packages */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="card">
            <h3 className="font-semibold">Wi-Fi Health Check — $350</h3>
            <ul className="mt-3 text-sm text-neutral-400 space-y-2">
              <li>• 1–2 hr walkthrough + basic heatmap</li>
              <li>• Quick channel/power tune</li>
              <li>• PDF findings & next steps</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold">Full Site Survey — $750–$1,200</h3>
            <ul className="mt-3 text-sm text-neutral-400 space-y-2">
              <li>• Floorplan mapping & AP design</li>
              <li>• Roaming/interference analysis</li>
              <li>• Report with BOM & plan</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold">Design &amp; Deploy — scoped</h3>
            <ul className="mt-3 text-sm text-neutral-400 space-y-2">
              <li>• AP placement + VLAN &amp; QoS</li>
              <li>• Captive portal + splash</li>
              <li>• Guest vs staff SSIDs</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold">Managed Care — monthly</h3>
            <ul className="mt-3 text-sm text-neutral-400 space-y-2">
              <li>• 24/7 monitoring &amp; alerts</li>
              <li>• Firmware &amp; backups</li>
              <li>• Seasonal performance reviews</li>
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="card">
            <h4 className="font-semibold">Will guests see a branded portal?</h4>
            <p className="small mt-2">Yes — we can configure a simple branded splash with T&Cs and rate-limits if needed.</p>
          </div>
          <div className="card">
            <h4 className="font-semibold">Can you reuse our UniFi/Meraki gear?</h4>
            <p className="small mt-2">Usually. We’ll optimize what you own first; upgrades only if they’re clearly justified.</p>
          </div>
          <div className="card">
            <h4 className="font-semibold">How fast can you start?</h4>
            <p className="small mt-2">Health Checks are often same-week. Surveys and installs are scheduled around occupancy.</p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-primary no-underline">Request a Hotel Survey</Link>
          <Link href="/pricing" className="btn-ghost no-underline">View pricing</Link>
        </div>
      </div>
    </main>
  );
}
