// app/layout.tsx
import "./globals.css";
import Link from "next/link";
import SeoJsonLd from "./components/SeoJsonLd";

export const metadata = {
  title: "Nubble Technology — Web • Apps • Wi-Fi • Repairs (York, Maine)",
  description:
    "Veteran-owned IT consultancy for small businesses on the Seacoast. Web & app development, Wi-Fi networks, and computer repairs with clear pricing.",

  // ✅ Open Graph (for rich previews on LinkedIn/Facebook/Slack)
  openGraph: {
    type: "website",
    url: "https://www.nubbletechnology.com",
    title: "Nubble Technology — Web • Apps • Wi-Fi • Repairs",
    description:
      "Fast, reliable web, app, and Wi-Fi solutions for hotels, cafés, and offices across the Seacoast.",
    siteName: "Nubble Technology",
    locale: "en_US",
    images: [
      {
        url: "https://www.nubbletechnology.com/hero-ui.png",
        width: 1200,
        height: 630,
        alt: "Nubble Technology lighthouse logo and Wi-Fi visualization",
      },
    ],
  },

  // ✅ Twitter Card (for X/Twitter shares)
  twitter: {
    card: "summary_large_image",
    site: "@NubbleTech",   // update if/when you create an account
    creator: "@NubbleTech",
    title: "Nubble Technology — Web • Apps • Wi-Fi • Repairs",
    description:
      "Veteran-owned IT & networking for hotels, cafés, and small businesses on the Maine Seacoast.",
    images: ["https://www.nubbletechnology.com/hero-ui.png"],
  },
};

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-neutral-900">
      <div className="container h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="no-underline">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 shadow-[0_0_24px_-8px_rgba(16,185,129,0.8)]" />
            <span className="text-white font-semibold tracking-tight">
              Nubble <span className="text-emerald-300">Technology</span>
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm text-neutral-300">
          <Link href="/" className="hover:text-white no-underline">Home</Link>
          <Link href="/services" className="hover:text-white no-underline">Services</Link>
          <Link href="/services/repairs" className="hover:text-white no-underline">Repairs & IT Support</Link>
          <Link href="/pricing" className="hover:text-white no-underline">Pricing</Link>
          <Link href="/about" className="hover:text-white no-underline">About</Link>
          <Link href="/contact" className="hover:text-white no-underline">Contact</Link>
          <span className="hidden lg:inline-flex items-center rounded-full border border-emerald-400/30 px-3 py-1 text-emerald-300">
            🇺🇸 Veteran-Owned
          </span>
          <Link href="/contact" className="btn btn-primary no-underline">Get a free consult</Link>
        </nav>

        {/* Mobile CTA */}
        <Link href="/contact" className="md:hidden btn btn-primary no-underline">
          Contact
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-neutral-950">
      <div className="container py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500" />
              <div className="text-white font-semibold">Nubble Technology</div>
            </div>
            <p className="small mt-3 text-neutral-400">
              Veteran-owned IT for local businesses: web & apps, Wi-Fi networks,
              and computer repairs with proactive support.
            </p>
            <ul className="mt-4 space-y-1 text-sm text-neutral-300">
              <li>📍 York, Maine</li>
              <li>
                📞 <a href="tel:+12073379728" className="hover:underline">207-337-9728</a>
              </li>
              <li>
                ✉️{" "}
                <a href="mailto:info@nubbletechnology.com" className="hover:underline">
                  info@nubbletechnology.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/terms" className="hover:underline">Terms</Link></li>
              <li><Link href="/privacy" className="hover:underline">Privacy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-white">Services</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li><Link href="/services#web" className="hover:underline">Web Development</Link></li>
              <li><Link href="/services#apps" className="hover:underline">App Development</Link></li>
              <li><Link href="/services#wifi" className="hover:underline">Wi-Fi & Networks</Link></li>
              <li><Link href="/services/repairs" className="hover:underline">Repairs & IT Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-white">Hours</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>Mon–Fri: 8am–6pm</li>
              <li>Sat: 10am–2pm (by appt.)</li>
              <li>Same-day & after-hours available</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-neutral-900 text-xs text-neutral-500 flex flex-wrap items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Nubble Technology LLC. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span className="text-neutral-400">Now offering</span>
            <Link href="/services/repairs" className="text-emerald-300 hover:underline">
              Repairs & Data Recovery
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-[#0a0f14] text-white antialiased">
        {/* soft sitewide glow that respects your design */}
        <div className="pointer-events-none fixed inset-0 -z-10 hero-bg opacity-70" />
        <Header />

        {/* LocalBusiness JSON-LD */}
        <SeoJsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Nubble Technology",
            "url": "https://www.nubbletechnology.com",
            "image": "https://www.nubbletechnology.com/hero-ui.png",
            "telephone": "+1-207-337-9728",
            "email": "info@nubbletechnology.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "York",
              "addressRegion": "ME",
              "postalCode": "03909",
              "addressCountry": "US"
            },
            "areaServed": ["York","Kittery","Ogunquit","Wells","Portsmouth"],
            "openingHoursSpecification": [
              { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00" },
              { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:00", "closes": "14:00" }
            ]
          }}
        />

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
