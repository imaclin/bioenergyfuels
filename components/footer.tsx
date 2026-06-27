import Link from "next/link";
import { SITE, NAV } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t line">
      <div className="max-w-7xl mx-auto px-5 py-14 flex flex-col sm:flex-row items-start justify-between gap-8">
        <div>
          <div className="display font-bold text-xl">BIOENERGY FUELS</div>
          <p className="text-sm mt-2 max-w-xs" style={{ color: "var(--muted)" }}>
            {SITE.tagline}
          </p>
        </div>
        <div className="text-sm" style={{ color: "var(--muted)" }}>
          <div className="display font-semibold mb-2" style={{ color: "var(--text)" }}>
            Explore
          </div>
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="block hover:acc">
              {n.label}
            </Link>
          ))}
        </div>
        <div className="text-sm" style={{ color: "var(--muted)" }}>
          <div className="display font-semibold mb-2" style={{ color: "var(--text)" }}>
            Contact
          </div>
          <a href={`mailto:${SITE.email}`} className="block hover:acc">
            {SITE.email}
          </a>
          <a href={`tel:${SITE.phoneHref}`} className="block hover:acc">
            {SITE.phone}
          </a>
        </div>
      </div>
      <div className="border-t line">
        <div className="max-w-7xl mx-auto px-5 py-5 text-xs" style={{ color: "var(--muted)" }}>
          © {new Date().getFullYear()} BioEnergy Fuels LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
