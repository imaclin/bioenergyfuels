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

// Metals content of used lube oil, raw vs processed (Table 9 of the
// BioEnergy Fuels / USU used-motor-oil study). Values as published.
const METALS: [string, string, string, string][] = [
  ["Zinc", "411 mg/kg", "0.84 mg/kg", "99.8%"],
  ["Copper", "25.8 mg/kg", "0.18 mg/kg", "99.3%"],
  ["Lead", "9.90 mg/kg", "0.26 mg/kg", "97.4%"],
  ["Manganese", "1.24 mg/kg", "0.06 mg/kg", "95.2%"],
  ["Phosphorus", "430 mg/kg", "20 mg/kg", "95.3%"],
  ["Iron", "60.1 mg/kg", "5.00 mg/kg", "91.7%"],
  ["Aluminum", "9.15 mg/kg", "0.84 mg/kg", "90.1%"],
  ["Sodium", "113 mg/kg", "15.1 mg/kg", "86.6%"],
  ["Sulfur", "0.14 %", "0.02 %", "85.7%"],
  ["Nickel", "1.02 mg/kg", "0.17 mg/kg", "83.3%"],
  ["Calcium", "0.11 %", "0.02 %", "81.8%"],
  ["Chromium", "0.83 mg/kg", "0.22 mg/kg", "73.5%"],
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

      {/* THE DATA — full metals table from the used-motor-oil study */}
      <section className="surface border-y line">
        <div className="max-w-7xl mx-auto px-5 py-20">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <div>
              <div className="reveal eyebrow acc mb-4">THE DATA</div>
              <h2 className="reveal display font-bold text-3xl sm:text-4xl leading-tight">
                Used lube oil, element by element.
              </h2>
              <p className="reveal mt-5 leading-relaxed" style={{ color: "var(--muted)" }}>
                The metals that make waste motor oil unburnable, measured before and after a
                single pass through the formulated red-mud catalyst. Values as published in
                the BioEnergy Fuels / USU processing study.
              </p>
            </div>
            <div className="reveal lg:col-span-2 rounded-2xl border line overflow-hidden" style={{ background: "var(--bg)" }}>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left" style={{ color: "var(--muted)" }}>
                    <th className="display font-semibold px-5 py-4">Element</th>
                    <th className="display font-semibold px-5 py-4">Raw oil</th>
                    <th className="display font-semibold px-5 py-4">Processed</th>
                    <th className="display font-semibold px-5 py-4 text-right">Removed</th>
                  </tr>
                </thead>
                <tbody className="divide-y line">
                  {METALS.map(([el, raw, done, pct]) => (
                    <tr key={el}>
                      <td className="display font-semibold px-5 py-3">{el}</td>
                      <td className="px-5 py-3" style={{ color: "var(--muted)" }}>{raw}</td>
                      <td className="px-5 py-3" style={{ color: "var(--muted)" }}>{done}</td>
                      <td className="acc display font-bold px-5 py-3 text-right tabular-nums">{pct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-20">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
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
          <div className="grid gap-4">
            {[
              ["tires", "Waste-tire shreds and the bio-crude produced from them", "From the low-sulfur waste-tire fuels study."],
              ["wastewater", "Fracking wastewater, before and after processing", "Contaminants stripped to near-clear effluent."],
            ].map(([img, t, d]) => (
              <figure key={img} className="reveal rounded-2xl overflow-hidden border line surface">
                <div className="relative aspect-[4/5]">
                  <Image src={`/images/lab/${img}.webp`} alt={t} fill className="object-cover" sizes="(max-width:1024px) 100vw, 33vw" />
                </div>
                <figcaption className="p-5">
                  <div className="display font-semibold text-sm">{t}</div>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>{d}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-16 text-center">
        <h2 className="reveal display font-bold text-3xl sm:text-4xl">Researching a feedstock with us?</h2>
        <a href={`mailto:${SITE.email}`} className="reveal inline-block mt-7 btn-accent display font-semibold px-7 py-3.5 rounded-full">Email us</a>
      </section>
    </>
  );
}
