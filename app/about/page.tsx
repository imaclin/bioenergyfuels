import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";
import { PageHeader } from "@/components/page-header";
import { JsonLd } from "@/components/json-ld";
import { StoryRail } from "@/components/story-rail";

export const metadata = pageMeta({
  title: "About",
  description:
    "BioEnergy Fuels turns forestry and agricultural waste into drop-in liquid fuels, using a patented catalytic pyrolysis process licensed from Utah State University.",
  path: "/about",
});

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
      <JsonLd data={breadcrumbSchema("About", "/about")} />
      <StoryRail />
      <PageHeader
        eyebrow="ABOUT"
        title={<>The world needs energy. It doesn&apos;t need the emissions.</>}
        subtitle="BioEnergy Fuels turns waste that already exists into fuel that works in the engines we already have. No new drilling, no new landfills, and nothing cut down to make it."
      />

      <section className="max-w-7xl mx-auto px-5 pt-16">
        <div className="reveal relative rounded-2xl overflow-hidden border line aspect-[21/9]">
          <Image src="/images/woodland.jpg" alt="Pinyon-juniper woodland, a lignocellulosic biomass feedstock" fill className="object-cover" sizes="100vw" />
          <span className="absolute bottom-4 left-4 text-xs display font-semibold px-3 py-1.5 rounded-full text-white" style={{ background: "rgba(10,11,12,.6)", backdropFilter: "blur(6px)" }}>Biomass feedstock, ready to become fuel</span>
        </div>
      </section>

      {/* Chapter 01 — the premise */}
      <section data-rail className="rail-track max-w-3xl mx-auto px-5 pt-20 pb-4">
        <div className="grid grid-cols-[40px_1fr] gap-x-5 sm:gap-x-7">
          <div className="rail-chip display">01</div>
          <div className="pt-1.5">
            <div className="reveal eyebrow acc mb-3">THE PREMISE</div>
            <h2 className="reveal display font-bold text-2xl sm:text-3xl">The trade-off we refuse</h2>
            <div className="reveal mt-5 space-y-4 leading-relaxed" style={{ color: "var(--muted)" }}>
              <p>
                Modern life runs on energy, and the way the world makes it is changing the climate.
                Most answers to that ask somebody to give something up: range, cost, convenience, or
                the engine they already own.
              </p>
              <p>
                We started from a different premise. The problem is not that we burn fuel. It is{" "}
                <em className="ink-draw not-italic font-semibold" style={{ color: "var(--text)" }}>
                  where the fuel comes from.
                </em>{" "}
                Pull it out of the ground and you release carbon that was safely buried. Make it from
                waste that is already above ground and already breaking down, and the arithmetic
                changes.
              </p>
            </div>
            <div className="reveal mt-8 mb-14 rounded-2xl border line surface p-6">
              <div className="eyebrow acc mb-2">OUR MISSION</div>
              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                To turn waste streams into fuels worth more than the waste was, without creating a new
                problem in the process. Lower carbon emissions, a use for material that currently
                costs money to dispose of, and energy produced close to where it is consumed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 02 — the origin */}
      <section data-rail className="rail-track max-w-3xl mx-auto px-5 pb-20">
        <div className="grid grid-cols-[40px_1fr] gap-x-5 sm:gap-x-7">
          <div className="rail-chip display">02</div>
          <div className="pt-1.5">
            <div className="reveal eyebrow acc mb-3">THE ORIGIN</div>
            <h2 className="reveal display font-bold text-2xl sm:text-3xl">
              The science came before the company
            </h2>
            <div className="reveal mt-5 space-y-4 leading-relaxed" style={{ color: "var(--muted)" }}>
              <p>
                Dr. Foster Agblevor spent more than a decade at Utah State University on a single
                question: how to convert plant matter into fuel that behaves like the fuel we already
                use.
              </p>
              <p>
                In 2019 we partnered with USU and began funding that research directly. BioEnergy
                Fuels now holds exclusive rights to the patented catalytic pyrolysis process that came
                out of it — built on a bauxite-residue catalyst that is itself an industrial waste
                product, used to turn other waste into fuel.
              </p>
            </div>
            {/* three beats, one line */}
            <div className="mt-9 grid sm:grid-cols-3 gap-3">
              {[
                ["A DECADE BEFORE US", "USU research into turning biomass into drop-in liquid fuel."],
                ["2019", "The partnership begins. We fund the research directly."],
                ["TODAY", "Exclusive rights to the patented process."],
              ].map(([when, what]) => (
                <div key={when} className="reveal rounded-2xl border line p-5" style={{ background: "var(--surface)" }}>
                  <div className="display font-bold text-sm acc">{when}</div>
                  <p className="text-sm mt-2 leading-relaxed" style={{ color: "var(--muted)" }}>{what}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 03 — the objection. Full-bleed carbon: the rail breaks here on
          purpose, because the hard question interrupts the story. Raising it
          ourselves is the point — a claim that survives its own hardest
          question reads as evidence, not marketing. */}
      <section className="carbon-band relative border-y line overflow-hidden">
        <div className="glow-q" />
        <div className="max-w-3xl mx-auto px-5 py-24">
          <div className="grid grid-cols-[40px_1fr] gap-x-5 sm:gap-x-7">
            <div className="rail-chip display" style={{ borderColor: "var(--accentText)", color: "var(--accentText)" }}>03</div>
            <div className="pt-1.5">
              <div className="reveal eyebrow acc mb-6">THE HARD QUESTION</div>
              <div className="relative">
                <span className="quote-mark display" aria-hidden>&ldquo;</span>
                <h2 className="reveal display font-bold text-3xl sm:text-5xl leading-[1.08]">
                  Aren&apos;t you just cutting down trees?
                </h2>
              </div>
              <div className="reveal mt-7 space-y-4 leading-relaxed" style={{ color: "var(--muted)" }}>
                <p>
                  It is the first question a serious person asks, and Dr. Agblevor asks it of himself
                  before anyone else can. Won&apos;t making fuel out of plants create a bigger problem
                  than it solves?
                </p>
                <p>
                  The answer is in the feedstock.{" "}
                  <span className="ink-draw font-semibold" style={{ color: "var(--text)" }}>
                    We do not harvest anything.
                  </span>{" "}
                  We take what the forestry and agricultural industries already discard: residues,
                  thinnings, byproducts, material that today gets burned, buried, or left to rot.
                  Nothing is felled to feed this process.
                </p>
                <p>
                  That constraint is not a marketing position. It is a design requirement, and it
                  shapes what the technology is allowed to be. In Agblevor&apos;s words, the issue is
                  that you have to do it sustainably.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 04 — the mechanism */}
      <section data-rail className="rail-track max-w-3xl mx-auto px-5 py-20">
        <div className="grid grid-cols-[40px_1fr] gap-x-5 sm:gap-x-7">
          <div className="rail-chip display">04</div>
          <div className="pt-1.5">
            <div className="reveal eyebrow acc mb-3">THE MECHANISM</div>
            <h2 className="reveal display font-bold text-2xl sm:text-3xl">How it works</h2>
            <div className="reveal mt-5 space-y-4 leading-relaxed" style={{ color: "var(--muted)" }}>
              <p>
                A catalyst breaks the waste down into vapour. The vapour is condensed into a liquid.
                That liquid is stable, which is the part that matters: a stable liquid can be refined,
                shipped and stored like any other fuel stock, rather than treated as a laboratory
                result.
              </p>
              <p>
                What comes out the other side is functionally no different from the petroleum-based
                fuels in use today. Nothing downstream has to change to accept it.
              </p>
            </div>

            {/* the process, drawn: dashes march while the block is on screen */}
            <div className="reveal mt-9">
              <div className="grid sm:grid-cols-[1fr_2.6rem_1fr_2.6rem_1fr] items-stretch gap-2 sm:gap-0">
                {[
                  ["WASTE IN", "Residues, thinnings, byproducts. Nothing felled."],
                  ["CATALYST", "Heat and the red-mud catalyst decompose it into vapour."],
                  ["STABLE LIQUID", "Condensed. Refinable, shippable, storable — drop-in."],
                ].flatMap(([t, d], i) => {
                  const node = (
                    <div key={t} className="flow-node rounded-2xl p-5">
                      <div className="display font-bold text-sm acc">{t}</div>
                      <p className="text-sm mt-2 leading-relaxed" style={{ color: "var(--muted)" }}>{d}</p>
                    </div>
                  );
                  if (i === 2) return [node];
                  return [
                    node,
                    <div key={`c${i}`} className="flex items-center justify-center">
                      {/* horizontal connector on desktop, vertical on mobile */}
                      <svg className="hidden sm:block w-full h-4" viewBox="0 0 40 16" preserveAspectRatio="none" aria-hidden>
                        <path className="flow-line" d="M0 8 H40" />
                      </svg>
                      <svg className="sm:hidden w-4 h-7" viewBox="0 0 16 28" aria-hidden>
                        <path className="flow-line" d="M8 0 V28" />
                      </svg>
                    </div>,
                  ];
                })}
              </div>
            </div>

            <Link
              href="/technology"
              className="reveal inline-block mt-8 display font-semibold acc border-b-2 pb-1"
              style={{ borderColor: "var(--accent)" }}
            >
              See the technology →
            </Link>
          </div>
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
                  More than a decade researching the conversion of biomass into liquid fuels, and the
                  scientist behind the catalytic pyrolysis process we license. Named among the
                  World&apos;s Top 2% Scientists (Stanford, 2021). Fulbright Scholar (Finland, 2015)
                  and multiple-time researcher of the year. PhD in Chemical Engineering, University of
                  Toronto. Photographed at the USU reactor.
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
