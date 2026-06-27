import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Catalytic pyrolysis powered by a patented bauxite-residue (red mud) catalyst. Higher yields, lower cost, and a closed-loop process that wastes nothing.",
};

const POINTS = [
  ["Catalytic fast pyrolysis", "Extreme heat concentrates the energy of feedstocks into usable bio-crude oils. Our patented process boosts efficiency with an innovative bauxite-residue catalyst, and no byproduct is wasted: gases reheat the reactor and solids like biochar are captured for other industries."],
  ["The catalyst", "Derived from 98% waste material, it is sustainable and tunable to the feedstock. It rejects oxygen as CO2 instead of CO, consuming less carbon, and resists metal poisoning. Once saturated it is regenerated and reused, a closed loop with no waste products."],
  ["Bio-oil upgrading", "Fast pyrolysis gives the highest yield of liquid fuel and retains most of the feedstock's energy. Oxygen is removed during catalytic fast pyrolysis so the bio-oil reaches properties similar to diesel and gasoline."],
  ["Pyrolysis Mobile Unit (PMU)", "Our reactor is designed to process any liquid feedstock on site, producing a variety of liquid fuels and minimizing the impact of petroleum-derived waste streams on the environment."],
];

export default function TechnologyPage() {
  return (
    <>
      <PageHeader
        eyebrow="THE TECHNOLOGY"
        title={<>The catalyst is the breakthrough.</>}
        subtitle="A patented catalytic pyrolysis platform that upgrades low-value waste into clean, high-value liquid fuels, more efficiently and more cheaply than the industry standard."
      />

      <section className="max-w-7xl mx-auto px-5 py-20">
        <div className="grid md:grid-cols-2 gap-5">
          {POINTS.map(([t, d]) => (
            <div key={t} className="reveal surface rounded-2xl border line p-7">
              <h2 className="display font-bold text-xl">{t}</h2>
              <p className="mt-3 leading-relaxed" style={{ color: "var(--muted)" }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="surface border-y line">
        <div className="max-w-7xl mx-auto px-5 py-20">
          <div className="reveal eyebrow acc mb-8">THE PROCESS</div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              ["01", "Feedstock in", "Used oil, crude, tires, agricultural and lignocellulosic biomass, and wastewater."],
              ["02", "Catalytic reactor", "The PMU processes feedstock on site; the catalyst upgrades it while gases reheat the reactor."],
              ["03", "High-value fuel out", "Marine and low-sulfur diesel, jet fuel / SAF, bio-oils, and cleaner effluent."],
            ].map(([n, t, d]) => (
              <div key={n} className="reveal rounded-2xl border line p-7" style={{ background: "var(--bg)" }}>
                <div className="display font-extrabold text-3xl acc">{n}</div>
                <div className="display font-bold mt-3">{t}</div>
                <p className="text-sm mt-2" style={{ color: "var(--muted)" }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-20 text-center">
        <h2 className="reveal display font-bold text-3xl sm:text-4xl">Want to see it on your feedstock?</h2>
        <a href={`mailto:${SITE.email}`} className="reveal inline-block mt-7 btn-accent display font-semibold px-7 py-3.5 rounded-full">Email us</a>
      </section>
    </>
  );
}
