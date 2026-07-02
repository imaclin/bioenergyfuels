import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { Dither } from "@/components/dither";
import { BeforeAfter } from "@/components/before-after";
import { MetalsChart } from "@/components/metals-chart";

// Real specimen photography from the lab — same studio, same glassware.
const SPECIMENS = [
  {
    img: "crude-vs-refined",
    t: "Used motor oil",
    a: "→ Refined fuel oil",
    d: "Black waste crude in, golden low-sulfur fuel out. One catalytic pass.",
  },
  {
    img: "tires",
    t: "Used tires",
    a: "→ Bio-crude oil",
    d: "Shredded tire waste converted into refinable bio-crude.",
  },
  {
    img: "wastewater",
    t: "Fracking wastewater",
    a: "→ Clean effluent",
    d: "Contaminants and heavy metals stripped to near-clear water.",
  },
  {
    img: "vegoil",
    t: "Vegetable oil",
    a: "→ Deoxygenated bio-crude",
    d: "Catalytic run at 400°C for 30 minutes. Labels straight off the vials.",
  },
];

const STATS = [
  { n: "40-50%", l: "longer catalyst lifespan" },
  { n: "98%", l: "waste-derived catalyst" },
  { n: "~$2,600", l: "per ton vs $3,200-4,000" },
  { n: "Exclusive", l: "patented tech (USU)" },
];

const APPS = [
  { t: "Used Motor Oil", a: "→ Marine & low-sulfur diesel", img: "motor-oil", d: "Over 200M gallons disposed yearly in the US. We refine it into shipping-grade fuel." },
  { t: "Waxy Crude", a: "→ Pumpable low-viscosity crude", img: "waxy-crude", d: "Cuts the $14-18/barrel premium of heated transport for waxy crudes." },
  { t: "Lignocellulosic Biomass", a: "→ Jet fuel / SAF", img: "biomass-saf", d: "Sawdust and biomass become high-grade Sustainable Aviation Fuel." },
  { t: "Tire Recycling", a: "→ Refined Bio-Oil", img: "tires", d: "Turns the world's tire-waste problem into liquid fuel feedstock." },
  { t: "Agricultural Waste", a: "→ Functional Bio-Oils", img: "ag-waste", d: "Plant oils and biomass converted into fuel, pharma, and ag products." },
  { t: "Wastewater", a: "→ Clean water + carbon credits", img: "wastewater", d: "Strips contaminants and heavy metals for closed-loop, creditable water." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden flex items-center min-h-[88vh]">
        <Dither />
        <div className="relative z-10 max-w-7xl mx-auto px-5 pt-20 pb-24 w-full">
          <div className="reveal eyebrow acc mb-6">PATENTED CATALYTIC PYROLYSIS</div>
          <h1 className="reveal display font-extrabold text-5xl sm:text-7xl xl:text-8xl leading-[0.95] max-w-4xl">
            We turn <span className="acc">waste</span>
            <br />
            into fuel.
          </h1>
          <p className="reveal mt-7 text-lg sm:text-xl max-w-xl leading-relaxed" style={{ color: "var(--muted)" }}>
            BioEnergy Fuels converts used oil, crude, tires, and biomass into clean, high-value liquid fuels, on site,
            with a patented catalyst that wastes nothing.
          </p>
          <div className="reveal mt-9 flex flex-wrap gap-3">
            <a href={`mailto:${SITE.email}`} className="btn-accent display font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition">
              Email us
            </a>
            <Link href="/technology" className="display font-semibold px-7 py-3.5 rounded-full border line hover:bg-[color:var(--surface)] transition">
              See the technology →
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y line">
        <div className="max-w-7xl mx-auto px-5 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 line">
          {STATS.map((s) => (
            <div key={s.l} className="reveal p-7">
              <div className="display font-extrabold text-3xl acc">{s.n}</div>
              <div className="text-sm mt-1" style={{ color: "var(--muted)" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WASTE -> FUEL SLIDER */}
      <section className="max-w-7xl mx-auto px-5 py-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="reveal eyebrow acc mb-3">SEE THE TRANSFORMATION</div>
            <h2 className="reveal display font-bold text-4xl sm:text-5xl">Drag to turn waste into fuel.</h2>
          </div>
          <p className="reveal text-sm max-w-xs" style={{ color: "var(--muted)" }}>
            The same volume of waste, refined into clean, high-value liquid fuel. Drag the handle.
          </p>
        </div>
        <div className="reveal">
          <BeforeAfter />
        </div>
      </section>

      {/* STRAIGHT FROM THE LAB — real specimen photography, light band */}
      <section className="lab-band border-y line">
        <div className="max-w-7xl mx-auto px-5 py-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="reveal eyebrow mb-3" style={{ color: "#3f6212" }}>NO RENDERS. NO MOCKUPS.</div>
              <h2 className="reveal display font-bold text-4xl sm:text-5xl">Straight from the lab.</h2>
            </div>
            <p className="reveal text-sm max-w-xs" style={{ color: "#5a6053" }}>
              Every sample below is a real result from our catalytic pyrolysis platform, photographed as-is.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SPECIMENS.map((s) => (
              <figure key={s.img} className="reveal rounded-2xl overflow-hidden bg-white border" style={{ borderColor: "rgba(0,0,0,.08)" }}>
                <div className="relative aspect-[3/4]">
                  <Image
                    src={`/images/lab/${s.img}.webp`}
                    alt={`${s.t} ${s.a}`}
                    fill
                    className="object-cover"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                  />
                </div>
                <figcaption className="p-5">
                  <div className="display font-bold" style={{ color: "#0E110C" }}>{s.t}</div>
                  <div className="text-sm font-semibold mt-0.5" style={{ color: "#3f6212" }}>{s.a}</div>
                  <p className="text-sm mt-2" style={{ color: "#5a6053" }}>{s.d}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="max-w-7xl mx-auto px-5 py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="reveal eyebrow acc mb-4">THE TECHNOLOGY</div>
            <h2 className="reveal display font-bold text-4xl sm:text-5xl leading-tight">
              The catalyst is
              <br />
              the breakthrough.
            </h2>
            <p className="reveal mt-6 text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
              Our patented bauxite-residue catalyst, derived from 98% waste material, upgrades low-value feedstocks into
              cleaner-burning fuels. It rejects oxygen as CO<sub>2</sub>, resists metal poisoning, regenerates for reuse,
              and outperforms zeolite and FCC catalysts at a fraction of the cost.
            </p>
            <Link href="/technology" className="reveal inline-block mt-7 display font-semibold acc border-b-2 pb-1" style={{ borderColor: "var(--accent)" }}>
              How catalytic pyrolysis works →
            </Link>
          </div>
          <div className="reveal surface rounded-3xl border line p-7">
            <div className="eyebrow mb-6" style={{ color: "var(--muted)" }}>THE PROCESS</div>
            <div className="space-y-3">
              {[
                ["1", "Feedstock in", "Used oil · crude · tires · biomass · wastewater"],
                ["2", "Pyrolysis Mobile Unit (PMU)", "Catalytic reactor processes on site"],
                ["3", "High-value fuel out", "Marine diesel · jet fuel / SAF · bio-oils"],
              ].map(([n, t, d], i) => (
                <div key={n}>
                  <div className="flex items-center gap-4">
                    <span className="btn-accent w-8 h-8 rounded-full grid place-items-center display font-bold text-sm">{n}</span>
                    <div>
                      <div className="display font-semibold">{t}</div>
                      <div className="text-sm" style={{ color: "var(--muted)" }}>{d}</div>
                    </div>
                  </div>
                  {i < 2 && <div className="ml-4 h-5 w-px" style={{ background: "var(--line)" }} />}
                </div>
              ))}
            </div>
            <p className="text-xs mt-6 pt-5 border-t line" style={{ color: "var(--muted)" }}>
              Closed loop: gases reheat the reactor, catalyst regenerates, nothing is wasted.
            </p>
          </div>
        </div>
      </section>

      {/* MEASURED, NOT PROMISED — real published processing data */}
      <section className="max-w-7xl mx-auto px-5 pb-24">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 lg:sticky lg:top-28">
            <div className="reveal eyebrow acc mb-4">REAL DATA</div>
            <h2 className="reveal display font-bold text-4xl sm:text-5xl leading-tight">
              Measured,
              <br />
              not promised.
            </h2>
            <p className="reveal mt-6 text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
              Used lube oil, one pass through our catalyst. The metals that make waste oil
              unusable, stripped out and measured element by element.
            </p>
            <p className="reveal mt-4 text-xs" style={{ color: "var(--muted)" }}>
              Published BioEnergy Fuels / Utah State University processing data.
            </p>
          </div>
          <div className="reveal lg:col-span-3 surface rounded-3xl border line p-6 sm:p-9">
            <div className="flex items-baseline justify-between mb-7">
              <div className="display font-bold text-lg">Metals removed</div>
              <div className="text-xs" style={{ color: "var(--muted)" }}>raw → processed</div>
            </div>
            <MetalsChart />
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="surface border-y line">
        <div className="max-w-7xl mx-auto px-5 py-24">
          <div className="reveal eyebrow acc mb-4">APPLICATIONS</div>
          <h2 className="reveal display font-bold text-4xl sm:text-5xl mb-12">One platform. Many waste streams.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {APPS.map((x) => (
              <div key={x.t} className="reveal rounded-2xl border line overflow-hidden" style={{ background: "var(--bg)" }}>
                <div className="relative aspect-[3/2]">
                  <Image src={`/images/apps/${x.img}.jpg`} alt={x.t} fill className="object-cover" sizes="(max-width:1024px) 50vw, 33vw" />
                </div>
                <div className="p-6">
                  <div className="display font-bold text-lg">{x.t}</div>
                  <div className="acc text-sm font-semibold mt-1">{x.a}</div>
                  <p className="text-sm mt-3" style={{ color: "var(--muted)" }}>{x.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT & PROVEN */}
      <section className="max-w-7xl mx-auto px-5 py-24">
        <div className="reveal eyebrow acc mb-4">BUILT &amp; PROVEN</div>
        <h2 className="reveal display font-bold text-4xl sm:text-5xl mb-12">Real reactors. Real fuel.</h2>
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="reveal lg:col-span-2 relative rounded-2xl overflow-hidden border line aspect-[16/11]">
            <Image src="/images/reactor.jpg" alt="BioEnergy Fuels catalytic pyrolysis pilot reactor at Utah State University" fill className="object-cover" sizes="(max-width:1024px) 100vw, 66vw" />
            <span className="absolute bottom-4 left-4 text-xs display font-semibold px-3 py-1.5 rounded-full text-white" style={{ background: "rgba(10,11,12,.7)", backdropFilter: "blur(6px)" }}>The pilot reactor at USU</span>
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="reveal relative rounded-2xl overflow-hidden border line">
              <Image src="/images/catalyst.jpg" alt="The red-mud catalyst pellets" fill className="object-cover" sizes="(max-width:1024px) 100vw, 33vw" />
              <span className="absolute bottom-3 left-3 text-xs display font-semibold px-3 py-1.5 rounded-full text-white" style={{ background: "rgba(10,11,12,.7)" }}>The red-mud catalyst</span>
            </div>
            <div className="reveal relative rounded-2xl overflow-hidden border line">
              <Image src="/images/biooil.jpg" alt="Waste feedstock refined into bio-oil" fill className="object-cover" sizes="(max-width:1024px) 100vw, 33vw" />
              <span className="absolute bottom-3 left-3 text-xs display font-semibold px-3 py-1.5 rounded-full text-white" style={{ background: "rgba(10,11,12,.7)" }}>Waste in, bio-oil out</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="max-w-7xl mx-auto px-5 pb-24">
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-1">
            <div className="reveal eyebrow acc mb-4">CREDIBILITY</div>
            <h2 className="reveal display font-bold text-4xl sm:text-5xl leading-tight">Backed by real science.</h2>
            <a href={`mailto:${SITE.email}`} className="reveal inline-block mt-6 btn-accent display font-semibold px-6 py-3 rounded-full">Email us</a>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            <div className="reveal sm:row-span-3 surface rounded-2xl border line overflow-hidden flex flex-col">
              <div className="relative flex-1 min-h-[22rem]">
                <Image
                  src="/images/lab/agblevor.webp"
                  alt="Dr. Foster Agblevor at the catalytic pyrolysis reactor, Utah State University"
                  fill
                  className="object-cover"
                  sizes="(max-width:640px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="display font-bold">Dr. Foster Agblevor</div>
                <p className="text-sm mt-2" style={{ color: "var(--muted)" }}>
                  Chief Technical Consultant, at the reactor. Named among the World&apos;s Top 2%
                  Scientists (Stanford, 2021). Fulbright Scholar.
                </p>
              </div>
            </div>
            {[
              ["USU Partnership", "Funded the catalytic pyrolysis research since 2019; now holds exclusive rights to the patented technology."],
              ["Peer-Reviewed Research", "Published work spanning waste tires, motor oil, wastewater sludge, biomass, and red-mud catalysts."],
              ["Patented Catalyst", "98% waste-derived, regenerable, and metal-poison resistant, cheaper and longer-lived than the standard."],
            ].map(([t, d]) => (
              <div key={t} className="reveal surface rounded-2xl border line p-6">
                <div className="display font-bold">{t}</div>
                <p className="text-sm mt-2" style={{ color: "var(--muted)" }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24">
        <div className="max-w-7xl mx-auto btn-accent rounded-3xl px-8 sm:px-14 py-16 text-center">
          <h2 className="reveal display font-extrabold text-4xl sm:text-6xl leading-tight" style={{ color: "#0A0B0C" }}>
            Have a feedstock?
            <br />
            Let&apos;s test it.
          </h2>
          <p className="reveal mt-4 text-lg max-w-xl mx-auto" style={{ color: "rgba(10,11,12,.7)" }}>
            Send us what you&apos;re working with and we&apos;ll tell you what it can become.
          </p>
          <a href={`mailto:${SITE.email}`} className="reveal inline-block mt-8 display font-semibold px-8 py-4 rounded-full text-white hover:opacity-90 transition" style={{ background: "#0A0B0C" }}>
            {SITE.email}
          </a>
        </div>
      </section>
    </>
  );
}
