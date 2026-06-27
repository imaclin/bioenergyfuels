"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function RevealInit() {
  const pathname = usePathname();
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const parent = e.target.parentElement;
            const sibs = parent ? Array.from(parent.querySelectorAll(":scope > .reveal")) : [];
            const idx = Math.max(0, sibs.indexOf(e.target));
            window.setTimeout(() => e.target.classList.add("in"), idx * 90);
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
