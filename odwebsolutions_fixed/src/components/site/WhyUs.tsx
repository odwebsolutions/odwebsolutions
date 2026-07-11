const reasons = [
  {
    title: "Fast Turnaround",
    desc: "Most projects launched within 1–4 days. No drawn-out timelines, no chasing for updates.",
    icon: "⚡",
  },
  {
    title: "Mobile Friendly Design",
    desc: "Engineered mobile-first so your site looks immaculate on every phone, tablet and laptop.",
    icon: "▢",
  },
  {
    title: "Modern User Experience",
    desc: "Clean layouts, smooth animations and intuitive flows that genuinely convert visitors into customers.",
    icon: "◐",
  },
  {
    title: "Personal Support",
    desc: "You deal with me directly — not a sales team, not an account manager. One point of contact, always.",
    icon: "✦",
  },
  {
    title: "Affordable Pricing",
    desc: "Premium quality without London agency fees. Honest, fixed pricing with no surprises down the line.",
    icon: "£",
  },
  {
    title: "Built to Scale",
    desc: "Every site is built on a foundation that can grow with your business — add pages, products and features anytime.",
    icon: "↗",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-28 lg:py-36 px-5 lg:px-10 bg-ink-deep overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand/8 blur-[160px]" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.32em] text-brand font-medium mb-4">
            ✦ Why OD Web Solutions
          </div>
          <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-5">
            A web partner that <br />actually <span className="text-brand">cares.</span>
          </h2>
          <p className="text-white/60 leading-relaxed">
            Built by a Scottish designer who treats every client like the first.
            Honest quotes, premium results, and zero corporate fluff.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group relative bg-surface/60 backdrop-blur border border-white/5 rounded-2xl p-8 hover:border-brand/40 hover:bg-surface transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand text-xl mb-6 group-hover:bg-brand group-hover:text-ink-deep transition-colors">
                {r.icon}
              </div>
              <h3 className="font-display font-semibold text-lg text-white mb-3 tracking-tight">
                {r.title}
              </h3>
              <p className="text-sm text-white/55 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
