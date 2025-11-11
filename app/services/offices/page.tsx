import Link from "next/link";
import SeoJsonLd from "../../components/SeoJsonLd";

export const metadata = {
  title: "Office & Clinic Wi-Fi & LAN — Secure SSIDs & SSO | Nubble Technology",
  description:
    "Secure SSIDs, VLAN/ACL best practices, SSO captive portals, and heatmaps for offices and clinics on the Seacoast.",
};

export default function OfficesPage() {
  return (
    <main className="border-t border-neutral-900 bg-neutral-950">
      <SeoJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Office & Clinic Wi-Fi & LAN",
          "provider": { "@type": "LocalBusiness", "name": "Nubble Technology", "telephone": "+1-207-337-9728" },
          "areaServed": "Seacoast ME/NH"
        }}
      />
      <div className="container py-16 md:py-20 reveal">
        <h1 className="h2 text-glow">Offices &amp; Clinics — secure, reliable Wi-Fi</h1>
        <p className="small mt-2">
          From meeting rooms to EMR and VoIP, we deliver clean SSIDs, proper segmentation, and strong auth.
          Serving York, Kittery, Ogunquit, Wells, and Portsmouth.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="card">
            <h3 className="font-semibold">Survey &amp; Design — scoped</h3>
            <ul className="mt-3 text-sm text-neutral-400 space-y-2">
              <li>• Heatmaps &amp; interference analysis</li>
              <li>• VLAN/ACL best practices</li>
              <li>• SSO captive portals</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold">Managed Care — monthly</h3>
            <ul className="mt-3 text-sm text-neutral-400 space-y-2">
              <li>• Monitoring &amp; alerting</li>
              <li>• Firmware lifecycle</li>
              <li>• Quarterly reviews</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="card">
            <h4 className="font-semibold">Do we need multiple SSIDs?</h4>
            <p className="small mt-2">Usually yes — staff, guest, and devices should be segmented with proper ACLs.</p>
          </div>
          <div className="card">
            <h4 className="font-semibold">Can we use single sign-on?</h4>
            <p className="small mt-2">Yes — we can integrate SSO captive portals where it makes sense.</p>
          </div>
          <div className="card">
            <h4 className="font-semibold">Will you document everything?</h4>
            <p className="small mt-2">Absolutely — we provide admin-ready diagrams and change logs.</p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-primary no-underline">Start an Office Design</Link>
          <Link href="/pricing" className="btn-ghost no-underline">View pricing</Link>
        </div>
      </div>
    </main>
  );
}
