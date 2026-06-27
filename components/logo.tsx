export function FlameMark({ className = "", size = 26 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 70 84"
      width={size}
      height={(size * 84) / 70}
      style={{ color: "var(--logo)" }}
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M31 3 C 19 25, 9 39, 22 63 C 27 72, 33 78, 33 78 C 25 60, 29 45, 38 35 C 34 23, 33 12, 31 3 Z" />
      <path d="M43 17 C 41 33, 51 39, 49 55 C 47 69, 37 79, 37 79 C 53 75, 65 59, 59 39 C 55 27, 47 21, 43 17 Z" />
    </svg>
  );
}

export function Wordmark() {
  return (
    <span className="display font-bold text-[15px] tracking-tight leading-none">
      BIOENERGY
      <br />
      <span className="text-[11px] tracking-[.2em]" style={{ color: "var(--muted)" }}>
        FUELS
      </span>
    </span>
  );
}
