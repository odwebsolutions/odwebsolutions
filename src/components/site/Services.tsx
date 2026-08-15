const services = [
  {
    n: "01",
    title: "Website Design",
    desc: "Bespoke, conversion-focused websites tailored to your brand. Designed in Figma, built with modern tools that load in milliseconds.",
    icon: "◐",
  },
  {
    n: "02",
    title: "Website Redesigns",
    desc: "Already have a site that's tired or underperforming? I rebuild it from the ground up — same domain, better results.",
    icon: "↻",
  },
  {
    n: "03",
    title: "Mobile Optimisation",
    desc: "Over 70% of local traffic is on mobile. Every site is engineered mobile-first so it looks and feels flawless on any device.",
    icon: "▢",
  },
  {
    n: "04",
    title: "Booking Systems",
    desc: "Online booking, contact forms and lead capture wired directly into your inbox or calendar. No third-party logins required.",
    icon: "◆",
  },
  {
    n: "05",
    title: "Maintenance & Support",
    desc: "Affordable monthly care plans covering hosting, security, content updates and ongoing improvements — so you can focus on the business.",
    icon: "⚙",
  },
  {
    n: "06",
    title: "SEO Foundations",
    desc: "Clean code, fast load times, semantic structure and Google-ready metadata baked into every project, not bolted on after.",
    icon: "↗",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-36 px-5 lg:px-10 bg-ink-deep">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.32em] text-brand font-medium mb-4">
              ✦ Services
            </div>
            <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] max-w-2xl tracking-tight">
              Everything your business <br />needs to <span className="text-brand">win online.</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md leading-relaxed">
            From a brand-new site to a full redesign and ongoing support — one
            trusted partner for the whole journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {services.map((s) => (
            <div
              key={s.n}
              className="group relative bg-ink p-8 lg:p-10 hover:bg-surface transition-colors duration-500 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="text-3xl text-brand">{s.icon}</span>
                <span className="font-mono text-[10px] tracking-widest text-white/40">{s.n} / 06</span>
              </div>
              <h3 className="font-display font-semibold text-2xl text-white mb-3 tracking-tight">
                {s.title}
              </h3>
              <p className="text-white/55 leading-relaxed text-sm mb-8">
                {s.desc}
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-brand">
                Learn more
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
