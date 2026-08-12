"use client";

import { useEffect } from "react";

// Scroll-linked chapter rail. Each [data-rail] section owns a vertical track
// whose fill (.rail-fill) scales with how far the reader has moved through
// that section, so the story literally draws itself as it is read. The
// numbered chip (.rail-chip) lights once its chapter starts filling.
//
// Deliberately JS-driven (rAF-throttled) rather than CSS scroll timelines:
// same pattern as the metals chart, and it works everywhere. With reduced
// motion the CSS shows the rail fully drawn and this component never runs.
export function StoryRail() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-rail]"));
    if (!sections.length) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      for (const sec of sections) {
        const r = sec.getBoundingClientRect();
        // 0 when the section top reaches 75% of the viewport, 1 when its
        // bottom passes 35% — the fill leads the eye slightly.
        const p = Math.min(1, Math.max(0, (vh * 0.75 - r.top) / (r.height + vh * 0.4)));
        sec.style.setProperty("--rail", p.toFixed(4));
        sec.classList.toggle("rail-lit", p > 0.02);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return null;
}
