import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";
import { PageHeader } from "@/components/page-header";
import { JsonLd } from "@/components/json-ld";

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

      <section className="max-w-3xl mx-auto px-5 pt-20">
        <h2 className="reveal display font-bold text-2xl sm:text-3xl">The trade-off we refuse</h2>
        <div className="reveal mt-5 space-y-4 leading-relaxed" style={{ color: "var(--muted)" }}>
          <p>
            Modern life runs on energy, and the way the world makes it is changing the climate. Most
            answers to that ask somebody to give something up: range, cost, convenience, or the engine
            they already own.
          </p>
          <p>
            We started from a different premise. The problem is not that we burn fuel. It is{" "}
            <em>where the fuel comes from.</em> Pull it out of the ground and you release carbon that
            was safely buried. Make it from waste that is already above ground and already breaking
            down, and the arithmetic changes.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-20 grid lg:grid-cols-2 gap-12">
        <div className="reveal">
          <h2 className="display font-bold text-2xl">Our mission</h2>
          <p className="mt-4 leading-relaxed" style={{ color: "var(--muted)" }}>
            To turn waste streams into fuels worth more than the waste was, without creating a new
            problem in the process. Lower carbon emissions, a use for material that currently costs
            money to dispose of, and energy produced close to where it is consumed.
          </p>
        </div>
        <div className="reveal">
          <h2 className="display font-bold text-2xl">Our origin</h2>
          <p className="mt-4 leading-relaxed" style={{ color: "var(--muted)" }}>
            The science came before the company. Dr. Foster Agblevor spent more than a decade at Utah
            State University on a single question: how to convert plant matter into fuel that behaves
            like the fuel we already use.
          </p>
          <p className="mt-4 leading-relaxed" style={{ color: "var(--muted)" }}>
            In 2019 we partnered with USU and began funding that research directly. BioEnergy Fuels
            now holds exclusive rights to the patented catalytic pyrolysis process that came out of
            it — built on a bauxite-residue catalyst that is itself an industrial waste product, used
            to turn other waste into fuel.
          </p>
        </div>
      </section>

      {/* The objection, answered. Raising it ourselves is the point: a claim that
          survives its own hardest question reads as evidence, not marketing. */}
      <section className="surface border-y line">
        <div className="max-w-3xl mx-auto px-5 py-20">
          <div className="reveal eyebrow acc mb-6">THE HARD QUESTION</div>
          <h2 className="reveal display font-bold text-2xl sm:text-3xl">
            &ldquo;Aren&apos;t you just cutting down trees?&rdquo;
          </h2>
          <div className="reveal mt-5 space-y-4 leading-relaxed" style={{ color: "var(--muted)" }}>
            <p>
              It is the first question a serious person asks, and Dr. Agblevor asks it of himself
              before anyone else can. Won&apos;t making fuel out of plants create a bigger problem
              than it solves?
            </p>
            <p>
              The answer is in the feedstock. We do not harvest anything. We take what the forestry
              and agricultural industries already discard: residues, thinnings, byproducts, material
              that today gets burned, buried, or left to rot. Nothing is felled to feed this process.
            </p>
            <p>
              That constraint is not a marketing position. It is a design requirement, and it shapes
              what the technology is allowed to be. In Agblevor&apos;s words, the issue is that you
              have to do it sustainably.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 py-20">
        <h2 className="reveal display font-bold text-2xl sm:text-3xl">How it works</h2>
        <div className="reveal mt-5 space-y-4 leading-relaxed" style={{ color: "var(--muted)" }}>
          <p>
            A catalyst breaks the waste down into vapour. The vapour is condensed into a liquid. That
            liquid is stable, which is the part that matters: a stable liquid can be refined, shipped
            and stored like any other fuel stock, rather than treated as a laboratory result.
          </p>
          <p>
            What comes out the other side is functionally no different from the petroleum-based fuels
            in use today. Nothing downstream has to change to accept it.
          </p>
        </div>
        <Link
          href="/technology"
          className="reveal inline-block mt-7 display font-semibold acc border-b-2 pb-1"
          style={{ borderColor: "var(--accent)" }}
        >
          See the technology →
        </Link>
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
