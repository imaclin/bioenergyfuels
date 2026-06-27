export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="relative glow border-b line overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 pt-20 pb-16">
        <div className="reveal eyebrow acc mb-5">{eyebrow}</div>
        <h1 className="reveal display font-bold text-4xl sm:text-6xl leading-[1.02] max-w-3xl">{title}</h1>
        {subtitle && (
          <p className="reveal mt-6 text-lg max-w-2xl leading-relaxed" style={{ color: "var(--muted)" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
