"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [hinted, setHinted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const move = (e: PointerEvent) => setFromClientX(e.clientX);
    const up = () => setDragging(false);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [dragging, setFromClientX]);

  // gentle one-time hint nudge when it scrolls into view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hinted) {
          setHinted(true);
          let t = 0;
          const id = window.setInterval(() => {
            t += 1;
            setPos(50 + Math.sin(t / 3) * (10 - t * 0.6));
            if (t > 16) {
              window.clearInterval(id);
              setPos(50);
            }
          }, 28);
          io.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [hinted]);

  return (
    <div
      ref={ref}
      onPointerDown={(e) => {
        setDragging(true);
        setFromClientX(e.clientX);
      }}
      className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border line select-none cursor-ew-resize touch-none"
    >
      {/* FUEL (bottom, full) */}
      <img src="/images/fuel.jpg" alt="Clean refined fuel" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      {/* WASTE (top, clipped to the left of the handle) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src="/images/waste.jpg" alt="Waste feedstock" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      </div>

      {/* labels */}
      <span className="absolute top-4 left-4 sm:top-6 sm:left-6 display font-bold text-lg sm:text-2xl text-white" style={{ textShadow: "0 2px 12px rgba(0,0,0,.6)" }}>
        WASTE IN.
      </span>
      <span className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 display font-bold text-lg sm:text-2xl" style={{ color: "#A3E635", textShadow: "0 2px 12px rgba(0,0,0,.6)" }}>
        FUEL OUT.
      </span>

      {/* handle */}
      <div className="absolute top-0 bottom-0" style={{ left: `${pos}%`, transform: "translateX(-50%)" }}>
        <div className="absolute top-0 bottom-0 w-0.5" style={{ background: "#A3E635" }} />
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full grid place-items-center btn-accent shadow-lg">
          <span className="display font-bold text-sm">⟷</span>
        </div>
      </div>
    </div>
  );
}
