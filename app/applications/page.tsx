import type { Metadata } from "next";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Applications",
  description:
    "One catalytic pyrolysis platform, many waste streams: used motor oil, waxy crude, tires, agricultural and lignocellulosic biomass, and wastewater, all converted into high-value fuels.",
};

const APPS = [
  { t: "Used Motor Oil", a: "Marine & low-sulfur diesel", img: "motor-oil", d: "Over 200 million gallons of used lubrication oil are disposed every year in the US. We refine it into high-grade marine diesel and bunker fuel for large-scale shipping and mining, and can process bunker fuel further into gasoline or diesel." },
  { t: "Waxy Crude", a: "Pumpable low-viscosity crude", img: "waxy-crude", d: "Most waxy crudes are moved by heated tank trucks at an extra $14-18 per barrel. Our technology converts waxy crude into low-viscosity crude oil that pumps easily, even at low winter temperatures." },
  { t: "Lignocellulosic Biomass", a: "Jet fuel / SAF", img: "biomass-saf", d: "We convert sawdust and similar biomass into high-grade Sustainable Aviation Fuel and bio-oils, supplying both those with biomass feedstock and those who need bio-oil production." },
  { t: "Tire Recycling", a: "Refined Bio-Oil", img: "tires", d: "With enormous tire waste worldwide, our technology converts used tires into refined bio-oil, a sustainable liquid fuel from a waste product, with uses spanning jet fuel, other liquid fuels, pharmaceutical, and agriculture." },
  { t: "Agricultural Waste", a: "Functional Bio-Oils", img: "ag-waste", d: "Many forms of agricultural waste and plant oils are converted into sustainable, functional bio-oil products, creating positive environmental impact and increased profit." },
  { t: "Wastewater Treatment", a: "Clean water + carbon credits", img: "wastewater", d: "Our process strips organic contaminants and heavy metals for cleaner effluent. The reactor is highly modifiable to the client's water standards, and recycling production water can earn carbon credits or enable a closed-loop system." },
];

export default function ApplicationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="APPLICATIONS"
        title={<>One platform. Many waste streams.</>}
        subtitle="We serve the oil & petroleum, aviation, agriculture, wastewater, and industrial sectors, turning their waste into valuable, cleaner-burning fuels."
      />

      <section className="max-w-7xl mx-auto px-5 py-20">
        <div className="grid md:grid-cols-2 gap-5">
          {APPS.map((x) => (
            <div key={x.t} className="reveal surface rounded-2xl border line overflow-hidden">
              <div className="relative aspect-[3/2]">
                <Image src={`/images/apps/${x.img}.jpg`} alt={x.t} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
              </div>
              <div className="p-7">
                <div className="display font-bold text-xl">{x.t}</div>
                <div className="acc font-semibold mt-1">→ {x.a}</div>
                <p className="mt-3 leading-relaxed" style={{ color: "var(--muted)" }}>{x.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="surface border-y line">
        <div className="max-w-7xl mx-auto px-5 py-16 text-center">
          <h2 className="reveal display font-bold text-3xl sm:text-4xl">Have a feedstock we haven&apos;t listed?</h2>
          <p className="reveal mt-3" style={{ color: "var(--muted)" }}>Send it to our lab and we&apos;ll tell you what it can become.</p>
          <a href={`mailto:${SITE.email}`} className="reveal inline-block mt-7 btn-accent display font-semibold px-7 py-3.5 rounded-full">Email us</a>
        </div>
      </section>
    </>
  );
}
