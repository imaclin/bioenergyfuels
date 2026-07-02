"use client";

import { useEffect, useRef, useState } from "react";

// Real numbers: metals content of used lube oil before/after catalytic
// processing (Table 9, BioEnergy Fuels / USU research). Removal % computed
// from the published before/after values.
const ROWS = [
  { el: "Zinc", before: "411 mg/kg", after: "0.84 mg/kg", pct: 99.8 },
  { el: "Copper", before: "25.8 mg/kg", after: "0.18 mg/kg", pct: 99.3 },
  { el: "Lead", before: "9.90 mg/kg", after: "0.26 mg/kg", pct: 97.4 },
  { el: "Phosphorus", before: "430 mg/kg", after: "20 mg/kg", pct: 95.3 },
  { el: "Iron", before: "60.1 mg/kg", after: "5.00 mg/kg", pct: 91.7 },
  { el: "Aluminum", before: "9.15 mg/kg", after: "0.84 mg/kg", pct: 90.1 },
  { el: "Sodium", before: "113 mg/kg", after: "15.1 mg/kg", pct: 86.6 },
  { el: "Sulfur", before: "0.14 %", after: "0.02 %", pct: 85.7 },
];

export function MetalsChart() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-4">
      {ROWS.map((r, i) => (
        <div key={r.el} className="grid grid-cols-[7.5rem_1fr_3.6rem] sm:grid-cols-[11.5rem_1fr_4.5rem] items-center gap-3 sm:gap-5">
          <div>
            <div className="display font-semibold text-sm sm:text-base">{r.el}</div>
            <div className="text-[11px] sm:text-xs" style={{ color: "var(--muted)" }}>
              {r.before} → {r.after}
            </div>
          </div>
          <div className="h-2.5 rounded-full overflow-hidden" style={{ background: "var(--line)" }}>
            <div
              className="h-full rounded-full"
              style={{
                width: on ? `${r.pct}%` : "0%",
                background: "var(--accent)",
                transition: `width 1.1s cubic-bezier(.2,.7,.2,1) ${i * 90}ms`,
              }}
            />
          </div>
          <div className="display font-bold text-right acc text-sm sm:text-lg tabular-nums">{r.pct}%</div>
        </div>
      ))}
    </div>
  );
}
