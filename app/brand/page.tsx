import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { FlameMark } from "@/components/logo";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Brand Guidelines",
  description: "The BioEnergy Fuels brand system: logo, color, typography, imagery, and voice.",
  robots: { index: false, follow: false },
};

/* ---------------------------------- data ---------------------------------- */

const CORE_COLORS = [
  { name: "Carbon", hex: "#0A0B0C", note: "Primary background. Matte, near-black. Never pure #000.", text: "#F2F4EF" },
  { name: "Bio Lime", hex: "#A3E635", note: "The accent. Data, CTAs, the flame. Use sparingly — if everything glows, nothing does.", text: "#0A0B0C" },
  { name: "Off-White", hex: "#F2F4EF", note: "Text on dark. Warm, never clinical white.", text: "#0A0B0C" },
  { name: "Surface", hex: "#121417", note: "Cards and panels on Carbon.", text: "#F2F4EF" },
  { name: "Ash", hex: "#979C92", note: "Muted / secondary text on dark.", text: "#0A0B0C" },
  { name: "Olive", hex: "#3F6212", note: "The accent on light backgrounds, where lime fails contrast.", text: "#F2F4EF" },
  { name: "Paper", hex: "#F6F7F3", note: "Light-theme background.", text: "#0E110C" },
  { name: "Lab", hex: "#EFF0EB", note: "The light 'vitrine' band behind specimen photography. Stays light in both themes.", text: "#0E110C" },
];

const TAGLINES = [
  "We turn waste into fuel.",
  "Turning waste into wealth.",
  "Nothing is wasted.",
  "Measured, not promised.",
  "Straight from the lab.",
];

const VOICE_RULES = [
  ["Declare, don't describe", "Short, confident statements. “We turn waste into fuel.” Not “our innovative platform enables the conversion of…”"],
  ["Evidence first", "Real photos, real numbers, real names. If a claim has a measurement, show the measurement."],
  ["Plain over technical", "Say “used motor oil” before “feedstock.” Technical depth lives one click deeper, not in the headline."],
  ["No greenwash", "Never “eco-friendly,” “planet-positive,” or vague sustainability claims. The chemistry is the pitch."],
];

const LOGO_MISUSE = [
  "Don't recolor the flame outside the approved palette.",
  "Don't outline, shadow, or add glow effects to the mark.",
  "Don't rotate, skew, or flip the flame.",
  "Don't set the wordmark in any face other than Sora.",
  "Don't place the lime flame on light backgrounds — switch to Olive or Carbon.",
  "Don't crowd it: keep clearspace of at least the flame's width on all sides.",
];

/* --------------------------------- helpers -------------------------------- */

function LogoTile({ bg, flame, textColor, label, border }: { bg: string; flame: string; textColor: string; label: string; border?: boolean }) {
  return (
    <div>
      <div
        className="rounded-2xl grid place-items-center h-44"
        style={{ background: bg, border: border ? "1px solid rgba(0,0,0,.1)" : "1px solid rgba(255,255,255,.08)", "--logo": flame } as CSSProperties}
      >
        <div className="flex items-center gap-3">
          <FlameMark size={34} />
          <span className="display font-bold text-[17px] tracking-tight leading-none" style={{ color: textColor }}>
            BIOENERGY
            <br />
            <span className="text-[12px] tracking-[.2em] opacity-60">FUELS</span>
          </span>
        </div>
      </div>
      <div className="text-xs mt-2" style={{ color: "var(--muted)" }}>{label}</div>
    </div>
  );
}

/* ---------------------------------- page ---------------------------------- */

export default function BrandPage() {
  return (
    <>
      <PageHeader
        eyebrow="BRAND GUIDELINES"
        title={<>One brand. Nothing wasted.</>}
        subtitle="The complete BioEnergy Fuels identity system — logo, color, type, imagery, and voice. The single source of truth for the website, business cards, decks, and everything printed or pixeled."
      />

      {/* ------------------------------- LOGO ------------------------------- */}
      <section className="max-w-7xl mx-auto px-5 py-20">
        <div className="reveal eyebrow acc mb-4">01 — THE MARK</div>
        <h2 className="reveal display font-bold text-3xl sm:text-4xl mb-4">The flame.</h2>
        <p className="reveal max-w-2xl mb-10" style={{ color: "var(--muted)" }}>
          A flame with a leaf carved out of it as negative space: fire and living matter in one
          shape, waste becoming clean energy. The mark and the Sora wordmark form the primary
          lockup. The flame may stand alone once the name is established on the page or object.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="reveal"><LogoTile bg="#0A0B0C" flame="#A3E635" textColor="#F2F4EF" label="Primary — lime on Carbon" /></div>
          <div className="reveal"><LogoTile bg="#F6F7F3" flame="#4D7C0F" textColor="#0E110C" label="Light — olive on Paper" border /></div>
          <div className="reveal"><LogoTile bg="#0A0B0C" flame="#F2F4EF" textColor="#F2F4EF" label="Mono reverse — one-color print" /></div>
          <div className="reveal"><LogoTile bg="#A3E635" flame="#0A0B0C" textColor="#0A0B0C" label="Inverse — Carbon on lime (backs, seals)" /></div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-10">
          <div className="reveal surface rounded-2xl border line p-7">
            <h3 className="display font-bold text-lg mb-4">Construction &amp; clearspace</h3>
            <ul className="space-y-2 text-sm" style={{ color: "var(--muted)" }}>
              <li>→ Clearspace on all sides ≥ the width of the flame.</li>
              <li>→ Minimum size: flame 16px tall on screen, 6mm in print.</li>
              <li>→ Wordmark: Sora Bold, tight tracking (-0.02em); &ldquo;FUELS&rdquo; letterspaced +0.2em at ~70% size, muted.</li>
              <li>→ Flame sits left of the wordmark, optically centered on the two lines.</li>
            </ul>
          </div>
          <div className="reveal surface rounded-2xl border line p-7">
            <h3 className="display font-bold text-lg mb-4">Never</h3>
            <ul className="space-y-2 text-sm" style={{ color: "var(--muted)" }}>
              {LOGO_MISUSE.map((m) => (
                <li key={m}>✕ {m}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------------- COLOR ------------------------------ */}
      <section className="surface border-y line">
        <div className="max-w-7xl mx-auto px-5 py-20">
          <div className="reveal eyebrow acc mb-4">02 — COLOR</div>
          <h2 className="reveal display font-bold text-3xl sm:text-4xl mb-4">Carbon, lime, and little else.</h2>
          <p className="reveal max-w-2xl mb-10" style={{ color: "var(--muted)" }}>
            The palette is matte black with one electric signal color. Rough ratio on any surface:
            <span className="acc font-semibold"> 80% Carbon &amp; surfaces, 15% neutrals, 5% Bio Lime.</span> Lime
            is for the thing you want remembered — never for decoration.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CORE_COLORS.map((c) => (
              <div key={c.name} className="reveal rounded-2xl overflow-hidden border line">
                <div className="h-28 p-4 flex flex-col justify-between" style={{ background: c.hex, color: c.text, border: c.hex === "#F6F7F3" || c.hex === "#EFF0EB" || c.hex === "#F2F4EF" ? "none" : undefined }}>
                  <span className="display font-bold">{c.name}</span>
                  <span className="font-mono text-xs tracking-wide">{c.hex}</span>
                </div>
                <div className="p-4 text-xs" style={{ background: "var(--bg)", color: "var(--muted)" }}>{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------- TYPOGRAPHY ---------------------------- */}
      <section className="max-w-7xl mx-auto px-5 py-20">
        <div className="reveal eyebrow acc mb-4">03 — TYPOGRAPHY</div>
        <h2 className="reveal display font-bold text-3xl sm:text-4xl mb-10">Sora speaks. Inter explains.</h2>
        <div className="grid lg:grid-cols-2 gap-4 mb-4">
          <div className="reveal surface rounded-2xl border line p-8">
            <div className="eyebrow mb-6" style={{ color: "var(--muted)" }}>DISPLAY — SORA</div>
            <div className="display font-extrabold text-5xl leading-[0.95]">We turn waste into fuel.</div>
            <p className="text-sm mt-6" style={{ color: "var(--muted)" }}>
              Headlines, stats, buttons, and the wordmark. Weights 600–800. Tracking -0.02em.
              Big, tight, and confident — headlines end with a period.
            </p>
          </div>
          <div className="reveal surface rounded-2xl border line p-8">
            <div className="eyebrow mb-6" style={{ color: "var(--muted)" }}>BODY — INTER</div>
            <p className="text-lg leading-relaxed">
              Body copy, captions, and data labels. Regular and medium weights, generous
              line-height, muted color on dark surfaces. Inter never appears in headlines.
            </p>
            <p className="text-sm mt-6" style={{ color: "var(--muted)" }}>
              Google Fonts: Sora (display) + Inter (body). Fallback: system-ui, sans-serif.
            </p>
          </div>
        </div>
        <div className="reveal surface rounded-2xl border line p-8">
          <div className="eyebrow mb-6" style={{ color: "var(--muted)" }}>THE EYEBROW</div>
          <div className="eyebrow acc mb-3">PATENTED CATALYTIC PYROLYSIS</div>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            Section labels: Sora semibold, ~11px, uppercase, +0.22em letterspacing, lime (or olive on
            light). Every section of every surface opens with one. On print, the eyebrow is the small
            line above a heading or the category line on a card back.
          </p>
        </div>
      </section>

      {/* ------------------------------ IMAGERY ----------------------------- */}
      <section className="surface border-y line">
        <div className="max-w-7xl mx-auto px-5 py-20">
          <div className="reveal eyebrow acc mb-4">04 — IMAGERY</div>
          <h2 className="reveal display font-bold text-3xl sm:text-4xl mb-4">Real samples or nothing.</h2>
          <p className="reveal max-w-2xl mb-10" style={{ color: "var(--muted)" }}>
            Two image modes, never mixed in one frame. No stock photography, no AI-styled renders
            presented as results, no generic “green energy” imagery — the proof photography is the brand.
          </p>
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="reveal rounded-2xl border line overflow-hidden" style={{ background: "var(--bg)" }}>
              <div className="grid grid-cols-3 gap-px" style={{ background: "var(--line)" }}>
                {["crude-vs-refined", "catalyst-top", "vegoil"].map((img) => (
                  <div key={img} className="relative aspect-[3/4]">
                    <Image src={`/images/lab/${img}.webp`} alt="Specimen photography" fill className="object-cover" sizes="20vw" />
                  </div>
                ))}
              </div>
              <div className="p-6">
                <div className="display font-bold">Specimen photography</div>
                <p className="text-sm mt-2" style={{ color: "var(--muted)" }}>
                  Glassware on a seamless light-grey studio sweep. Before/after pairs shot together.
                  Labels left on the vials. Presented on the light Lab background, captioned in plain language.
                </p>
              </div>
            </div>
            <div className="reveal rounded-2xl border line overflow-hidden" style={{ background: "var(--bg)" }}>
              <div className="grid grid-cols-3 gap-px" style={{ background: "var(--line)" }}>
                {["/images/reactor.jpg", "/images/lab/agblevor.webp", "/images/biooil.jpg"].map((src) => (
                  <div key={src} className="relative aspect-[3/4]">
                    <Image src={src} alt="Field and lab photography" fill className="object-cover" sizes="20vw" />
                  </div>
                ))}
              </div>
              <div className="p-6">
                <div className="display font-bold">The lab &amp; the people</div>
                <p className="text-sm mt-2" style={{ color: "var(--muted)" }}>
                  Reactors, hardware, and the scientists at them — documentary, unretouched, ambient
                  light. On dark surfaces these images carry a caption chip in the lower-left corner.
                </p>
              </div>
            </div>
          </div>
          <div className="reveal mt-4 rounded-2xl border line p-6 flex flex-wrap items-center gap-6" style={{ background: "var(--bg)" }}>
            <div className="display font-bold">Graphic language:</div>
            <span className="text-sm" style={{ color: "var(--muted)" }}>16–24px rounded corners</span>
            <span className="text-sm" style={{ color: "var(--muted)" }}>1px hairline borders</span>
            <span className="text-sm" style={{ color: "var(--muted)" }}>pill buttons</span>
            <span className="text-sm" style={{ color: "var(--muted)" }}>→ and ◆ markers</span>
            <span className="text-sm" style={{ color: "var(--muted)" }}>dithered lime texture (hero only)</span>
          </div>
        </div>
      </section>

      {/* ------------------------------- VOICE ------------------------------ */}
      <section className="max-w-7xl mx-auto px-5 py-20">
        <div className="reveal eyebrow acc mb-4">05 — VOICE</div>
        <h2 className="reveal display font-bold text-3xl sm:text-4xl mb-10">Confident. Concrete. Brief.</h2>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="reveal surface rounded-2xl border line p-8">
            <div className="eyebrow mb-6" style={{ color: "var(--muted)" }}>APPROVED LINES</div>
            <ul className="space-y-4">
              {TAGLINES.map((t) => (
                <li key={t} className="display font-bold text-2xl leading-tight">{t}</li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4">
            {VOICE_RULES.map(([t, d]) => (
              <div key={t} className="reveal surface rounded-2xl border line p-6">
                <div className="display font-bold">{t}</div>
                <p className="text-sm mt-2" style={{ color: "var(--muted)" }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------- IN PRACTICE ---------------------------- */}
      <section className="surface border-y line">
        <div className="max-w-7xl mx-auto px-5 py-20">
          <div className="reveal eyebrow acc mb-4">06 — IN PRACTICE</div>
          <h2 className="reveal display font-bold text-3xl sm:text-4xl mb-4">The business card.</h2>
          <p className="reveal max-w-2xl mb-10" style={{ color: "var(--muted)" }}>
            Two approved looks. <span className="font-semibold" style={{ color: "var(--text)" }}>Stealth</span>: all-Carbon,
            blind-embossed or spot-gloss flame, for leadership. <span className="font-semibold" style={{ color: "var(--text)" }}>Signal</span>:
            Carbon front with lime accents, lime back, for the field. Standard 3.5&Prime; × 2&Prime;, matte soft-touch stock.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
            {/* Stealth front */}
            <div className="reveal">
              <div className="rounded-xl aspect-[1.75] p-5 flex flex-col justify-between shadow-2xl" style={{ background: "#0A0B0C", border: "1px solid rgba(255,255,255,.07)", "--logo": "#16181A" } as CSSProperties}>
                <FlameMark size={22} />
                <div>
                  <div className="display font-bold text-[13px]" style={{ color: "#2A2D30" }}>BIOENERGY FUELS</div>
                  <div className="text-[9px] tracking-[.2em] mt-0.5" style={{ color: "#222528" }}>TURNING WASTE INTO WEALTH</div>
                </div>
              </div>
              <div className="text-xs mt-2" style={{ color: "var(--muted)" }}>Stealth — blind emboss / spot gloss on Carbon</div>
            </div>
            {/* Signal front */}
            <div className="reveal">
              <div className="rounded-xl aspect-[1.75] p-5 flex flex-col justify-between shadow-2xl" style={{ background: "#0A0B0C", border: "1px solid rgba(255,255,255,.07)", "--logo": "#A3E635" } as CSSProperties}>
                <div className="flex items-start justify-between">
                  <FlameMark size={22} />
                  <div className="text-right">
                    <div className="display font-bold text-[11px]" style={{ color: "#F2F4EF" }}>Michael Thompson</div>
                    <div className="text-[8px] tracking-[.15em] mt-0.5" style={{ color: "#A3E635" }}>CHIEF EXECUTIVE OFFICER</div>
                  </div>
                </div>
                <div className="text-[8px] leading-relaxed" style={{ color: "#979C92" }}>
                  {SITE.email}
                  <br />
                  {SITE.phone} · {SITE.domain}
                </div>
              </div>
              <div className="text-xs mt-2" style={{ color: "var(--muted)" }}>Signal front — name, one accent, no clutter</div>
            </div>
            {/* Signal back */}
            <div className="reveal">
              <div className="rounded-xl aspect-[1.75] grid place-items-center shadow-2xl" style={{ background: "#A3E635", "--logo": "#0A0B0C" } as CSSProperties}>
                <div className="flex items-center gap-2.5">
                  <FlameMark size={24} />
                  <span className="display font-bold text-[13px] tracking-tight leading-none" style={{ color: "#0A0B0C" }}>
                    BIOENERGY
                    <br />
                    <span className="text-[9px] tracking-[.2em] opacity-70">FUELS</span>
                  </span>
                </div>
              </div>
              <div className="text-xs mt-2" style={{ color: "var(--muted)" }}>Signal back — inverse lockup on lime</div>
            </div>
          </div>

          <div className="reveal mt-12 rounded-2xl border line p-7 max-w-5xl" style={{ background: "var(--bg)" }}>
            <h3 className="display font-bold text-lg mb-4">Print quick-reference</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm" style={{ color: "var(--muted)" }}>
              <div><span className="display font-semibold" style={{ color: "var(--text)" }}>Carbon</span><br />CMYK 75/68/64/85<br />PMS Black 6 C</div>
              <div><span className="display font-semibold" style={{ color: "var(--text)" }}>Bio Lime</span><br />CMYK 40/0/95/0<br />PMS 375 C</div>
              <div><span className="display font-semibold" style={{ color: "var(--text)" }}>Off-White</span><br />CMYK 4/2/6/0<br />PMS 11-0601 TCX</div>
              <div><span className="display font-semibold" style={{ color: "var(--text)" }}>Stock</span><br />Matte soft-touch, 32pt<br />Spot gloss or emboss on the flame</div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------ CONTACT ----------------------------- */}
      <section className="max-w-7xl mx-auto px-5 py-16 text-center">
        <p className="reveal text-sm" style={{ color: "var(--muted)" }}>
          Questions about usage, or need source files? <a href={`mailto:${SITE.email}`} className="acc font-semibold">{SITE.email}</a>
        </p>
      </section>
    </>
  );
}
