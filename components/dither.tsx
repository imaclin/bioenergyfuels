"use client";

import { useEffect, useRef } from "react";

// Animated ordered-dither glow, tinted to the brand green, adapts to theme.
export function Dither() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const SCALE = 6;
    const bayer = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5].map((v) => v / 16);
    let raf = 0;

    const resize = () => {
      const r = cv.parentElement!.getBoundingClientRect();
      cv.width = Math.max(1, Math.ceil(r.width / SCALE));
      cv.height = Math.max(1, Math.ceil(r.height / SCALE));
    };
    resize();
    window.addEventListener("resize", resize);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const frame = (t: number) => {
      const w = cv.width;
      const h = cv.height;
      const img = ctx.createImageData(w, h);
      const d = img.data;
      const time = reduce ? 0 : t * 0.0006;
      const light = document.documentElement.classList.contains("light");
      const cx = 0.72 + 0.05 * Math.sin(time * 0.7);
      const cy = 0.05 + 0.04 * Math.cos(time * 0.5);
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const nx = x / w;
          const ny = y / h;
          let v = 1 - Math.hypot((nx - cx) * 1.15, ny - cy) * 1.5;
          v += 0.12 * Math.sin(nx * 8 + time * 2) + 0.1 * Math.sin(ny * 11 - time * 1.6) + 0.06 * Math.sin((nx + ny) * 14 + time * 2.4);
          v = v < 0 ? 0 : v > 1 ? 1 : v;
          const th = bayer[(y & 3) * 4 + (x & 3)];
          const i = (y * w + x) * 4;
          let r = 0, g = 0, b = 0, a = 255;
          if (light) {
            if (v > th + 0.34) { r = 132; g = 204; b = 22; }
            else if (v > th + 0.02) { r = 176; g = 214; b = 120; }
            else a = 0;
          } else {
            if (v > th + 0.46) { r = 163; g = 230; b = 53; }
            else if (v > th + 0.12) { r = 64; g = 120; b = 24; }
            else if (v > th - 0.22) { r = 20; g = 27; b = 12; }
            else a = 0;
          }
          d[i] = r; d[i + 1] = g; d[i + 2] = b; d[i + 3] = a;
        }
      }
      ctx.putImageData(img, 0, 0);
      if (!reduce) raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas id="dither" ref={ref} className="absolute inset-0 w-full h-full" />;
}
