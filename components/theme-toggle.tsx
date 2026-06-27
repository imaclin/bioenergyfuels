"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isLight = resolvedTheme === "light";
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="w-9 h-9 rounded-full border line flex items-center justify-center hover:opacity-80 transition"
    >
      <span suppressHydrationWarning>{mounted ? (isLight ? "☀" : "☾") : "☾"}</span>
    </button>
  );
}
