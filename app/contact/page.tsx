import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have a feedstock to test, want to use our technology, or facilitate a Pyrolysis Mobile Unit (PMU)? Email BioEnergy Fuels and we'll reach out shortly.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="CONTACT"
        title={<>Let&apos;s turn your waste into wealth.</>}
        subtitle="Whether you have a feedstock you'd like us to test, you're interested in our proven technology, or you'd like to facilitate a Pyrolysis Mobile Unit (PMU), reach out and we'll get right back to you."
      />

      <section className="max-w-7xl mx-auto px-5 py-20">
        <div className="grid md:grid-cols-2 gap-5">
          <a href={`mailto:${SITE.email}`} className="reveal surface rounded-2xl border line p-8 group">
            <div className="eyebrow acc mb-3">EMAIL US</div>
            <div className="display font-bold text-2xl group-hover:acc transition">{SITE.email}</div>
            <p className="mt-3 text-sm" style={{ color: "var(--muted)" }}>The fastest way to start. Tell us what you&apos;re working with.</p>
          </a>
          <a href={`tel:${SITE.phoneHref}`} className="reveal surface rounded-2xl border line p-8 group">
            <div className="eyebrow acc mb-3">CALL US</div>
            <div className="display font-bold text-2xl group-hover:acc transition">{SITE.phone}</div>
            <p className="mt-3 text-sm" style={{ color: "var(--muted)" }}>Prefer to talk it through? We&apos;re happy to.</p>
          </a>
        </div>

        <div className="reveal btn-accent rounded-3xl px-8 sm:px-14 py-14 text-center mt-5">
          <h2 className="display font-extrabold text-3xl sm:text-5xl" style={{ color: "#0A0B0C" }}>Have a feedstock? Let&apos;s test it.</h2>
          <a href={`mailto:${SITE.email}`} className="inline-block mt-7 display font-semibold px-8 py-4 rounded-full text-white hover:opacity-90 transition" style={{ background: "#0A0B0C" }}>
            {SITE.email}
          </a>
        </div>
      </section>
    </>
  );
}
