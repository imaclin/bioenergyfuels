import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "About",
  description:
    "BioEnergy Fuels was created to fill the need for research and engineering in biofuels, providing waste valorization while producing sustainable fuels.",
};

const TEAM = [
  ["Michael Thompson", "Chief Executive Officer / Owner"],
  ["Dr. Foster Agblevor", "Chief Technical Consultant"],
  ["Hamza Abdellaoui, PhD", "Engineering Operations Manager"],
  ["Sean Thompson", "Chief Operations Manager"],
  ["Spencer Thompson", "Communications"],
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="ABOUT"
        title={<>Turning waste into sustainable fuels. Nothing is wasted.</>}
        subtitle="BioEnergy Fuels was created to fill the need for research and engineering in the biofuels industry, lowering carbon emissions and enabling energy independence."
      />

      <section className="max-w-7xl mx-auto px-5 py-20 grid lg:grid-cols-2 gap-12">
        <div className="reveal">
          <h2 className="display font-bold text-2xl">Our mission</h2>
          <p className="mt-4 leading-relaxed" style={{ color: "var(--muted)" }}>
            To provide waste valorization services while producing sustainable biofuels, lowering carbon emissions,
            solving waste-to-energy conversion, and enabling energy independence and environmental sustainability.
          </p>
        </div>
        <div className="reveal">
          <h2 className="display font-bold text-2xl">Our origin</h2>
          <p className="mt-4 leading-relaxed" style={{ color: "var(--muted)" }}>
            In 2019 we partnered with Utah State University and began funding research on the bauxite-residue catalytic
            pyrolysis process. BioEnergy Fuels now holds exclusive rights to this patented technology.
          </p>
        </div>
      </section>

      <section className="surface border-y line">
        <div className="max-w-7xl mx-auto px-5 py-20">
          <div className="reveal eyebrow acc mb-8">OUR TEAM</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TEAM.map(([name, role]) => (
              <div key={name} className="reveal rounded-2xl border line p-6" style={{ background: "var(--bg)" }}>
                <div className="display font-bold text-lg">{name}</div>
                <div className="acc text-sm font-semibold mt-1">{role}</div>
              </div>
            ))}
          </div>
          <p className="reveal mt-8 text-sm" style={{ color: "var(--muted)" }}>
            Dr. Foster Agblevor was named among the World&apos;s Top 2% Scientists (Stanford, 2021), is a Fulbright
            Scholar (Finland, 2015), and a multiple-time researcher of the year, holding a PhD in Chemical Engineering
            from the University of Toronto.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-16 text-center">
        <h2 className="reveal display font-bold text-3xl sm:text-4xl">Let&apos;s build something cleaner.</h2>
        <a href={`mailto:${SITE.email}`} className="reveal inline-block mt-7 btn-accent display font-semibold px-7 py-3.5 rounded-full">Email us</a>
      </section>
    </>
  );
}
