import Link from "next/link";
import { SITE, NAV } from "@/lib/site";
import { FlameMark, Wordmark } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

export function Nav() {
  return (
    <header
      className="sticky top-0 z-50 border-b line"
      style={{ background: "color-mix(in srgb, var(--bg) 80%, transparent)", backdropFilter: "blur(12px)" }}
    >
      <nav className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <FlameMark />
          <Wordmark />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "var(--muted)" }}>
          {NAV.filter((n) => n.label !== "Contact").map((n) => (
            <Link key={n.href} href={n.href} className="transition hover:text-[color:var(--text)]">
              {n.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={`mailto:${SITE.email}`}
            className="btn-accent display text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition"
          >
            Email us
          </a>
        </div>
      </nav>
    </header>
  );
}
