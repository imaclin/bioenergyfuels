import type { Metadata } from "next";
import Image from "next/image";
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

      <section className="max-w-7xl mx-auto px-5 pt-16">
        <div className="reveal relative rounded-2xl overflow-hidden border line aspect-[21/9]">
          <Image src="/images/woodland.jpg" alt="Pinyon-juniper woodland, a lignocellulosic biomass feedstock" fill className="object-cover" sizes="100vw" />
          <span className="absolute bottom-4 left-4 text-xs display font-semibold px-3 py-1.5 rounded-full text-white" style={{ background: "rgba(10,11,12,.6)", backdropFilter: "blur(6px)" }}>Biomass feedstock, ready to become fuel</span>
        </div>
      </section>

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
          <div className="grid lg:grid-cols-5 gap-4 items-start">
            <div className="reveal lg:col-span-2 rounded-2xl border line overflow-hidden" style={{ background: "var(--bg)" }}>
              <div className="relative aspect-[3/4]">
                <Image
                  src="/images/lab/agblevor.webp"
                  alt="Dr. Foster Agblevor at the catalytic pyrolysis reactor, Utah State University"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 40vw"
                />
              </div>
              <div className="p-6">
                <div className="display font-bold text-lg">Dr. Foster Agblevor</div>
                <div className="acc text-sm font-semibold mt-1">Chief Technical Consultant</div>
                <p className="text-sm mt-3" style={{ color: "var(--muted)" }}>
                  Named among the World&apos;s Top 2% Scientists (Stanford, 2021). Fulbright Scholar
                  (Finland, 2015) and multiple-time researcher of the year. PhD in Chemical
                  Engineering, University of Toronto. Photographed at the USU reactor.
                </p>
              </div>
            </div>
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
              {TEAM.filter(([name]) => name !== "Dr. Foster Agblevor").map(([name, role]) => (
                <div key={name} className="reveal rounded-2xl border line p-6" style={{ background: "var(--bg)" }}>
                  <div className="display font-bold text-lg">{name}</div>
                  <div className="acc text-sm font-semibold mt-1">{role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-16 text-center">
        <h2 className="reveal display font-bold text-3xl sm:text-4xl">Let&apos;s build something cleaner.</h2>
        <a href={`mailto:${SITE.email}`} className="reveal inline-block mt-7 btn-accent display font-semibold px-7 py-3.5 rounded-full">Email us</a>
      </section>
    </>
  );
}
