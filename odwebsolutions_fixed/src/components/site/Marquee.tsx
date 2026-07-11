const items = [
  "Website Design",
  "Website Redesigns",
  "Mobile Optimisation",
  "Booking Systems",
  "SEO Foundations",
  "Maintenance & Support",
  "Based in Scotland",
  "Built for Conversions",
];

export function Marquee() {
  return (
    <div className="bg-ink border-y border-white/5 py-5 overflow-hidden">
      <div className="flex marquee whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center gap-6 px-8 text-xs font-medium uppercase tracking-[0.32em] text-white/50">
            <span className="text-brand">✦</span>
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}
