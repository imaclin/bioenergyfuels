import type { Metadata } from "next";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Peer-reviewed research behind BioEnergy Fuels: catalyst performance, used motor oil processing, and waste-to-fuel applications using a formulated red-mud catalyst.",
};

const ADVANTAGES = [
  "Catalyst lifespan is 40-50% longer than any other catalyst tested.",
  "The raw material is a closed-loop reusable product, regenerated and reused with no waste.",
  "Less harsh than common zeolite and FCC catalysts, yielding more product, and more profit.",
  "Affinity for undesired metals in crude oil produces sweeter, lower-molecular-weight crude.",
  "Around $2,600 per ton versus $3,200-$4,000 for common refinery catalysts.",
  "Resistance to metal poisoning and reusability make it a more economical alternative.",
];

const PAPERS = [
  "Pyrolytic Conversion of Olive Mill Wastewater Sludge to Biofuels Using Red Mud as Catalyst",
  "Aqueous-Phase Synthesis of Hydrocarbons from Furfural Reactions with Low-Molecular-Weight Biomass Oxygenates",
  "Biocrude Oils from the Fast Pyrolysis of Poultry Litter and Hardwood",
  "Production of Low-Sulfur Fuels from Catalytic Pyrolysis of Waste Tires Using Formulated Red Mud Catalyst",
  "Catalytic Pyrolysis of Poly Vinyl Chloride as a Viable Way of Waste Management",
  "Comparative Kinetic and Pyrolytic Studies of D-Glucose Using Formulated Red Mud, Sand, and HZSM-5",
  "Advancing Coal Catalytic Gasification to Promote Optimum Syngas Production",
  "Red Mud Catalyst as Nickel Catalyst Support for Hydrodeoxygenation Reactions",
];

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="RESEARCH"
        title={<>Backed by real, published science.</>}
        subtitle="Our technology is grounded in peer-reviewed research on catalytic pyrolysis and waste valorization, developed in partnership with Utah State University."
      />

      <section className="max-w-7xl mx-auto px-5 py-20">
        <div className="reveal relative rounded-2xl overflow-hidden border line aspect-[21/9] mb-12">
          <Image src="/images/catalyst.jpg" alt="The patented red-mud catalyst" fill className="object-cover object-center" sizes="100vw" />
          <span className="absolute bottom-4 left-4 text-xs display font-semibold px-3 py-1.5 rounded-full text-white" style={{ background: "rgba(10,11,12,.7)", backdropFilter: "blur(6px)" }}>The formulated red-mud catalyst</span>
        </div>
        <div className="reveal eyebrow acc mb-8">CATALYST ADVANTAGES</div>
        <div className="grid sm:grid-cols-2 gap-4">
          {ADVANTAGES.map((a) => (
            <div key={a} className="reveal surface rounded-2xl border line p-6 flex gap-4">
              <span className="acc display font-bold">→</span>
              <p style={{ color: "var(--muted)" }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="surface border-y line">
        <div className="max-w-7xl mx-auto px-5 py-20">
          <div className="reveal eyebrow acc mb-8">SELECTED PUBLICATIONS</div>
          <ul className="divide-y line">
            {PAPERS.map((p) => (
              <li key={p} className="reveal py-5 flex gap-4 items-baseline">
                <span className="acc display font-bold text-sm">◆</span>
                <span className="leading-snug">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-16 text-center">
        <h2 className="reveal display font-bold text-3xl sm:text-4xl">Researching a feedstock with us?</h2>
        <a href={`mailto:${SITE.email}`} className="reveal inline-block mt-7 btn-accent display font-semibold px-7 py-3.5 rounded-full">Email us</a>
      </section>
    </>
  );
}
