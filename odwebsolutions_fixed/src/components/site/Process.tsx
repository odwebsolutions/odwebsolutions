const steps = [
  {
    n: "01",
    title: "Discovery",
    desc: "A relaxed call to understand your business, goals and the customers you want to reach. No jargon, no pressure.",
  },
  {
    n: "02",
    title: "Design",
    desc: "Custom layouts mocked up in Figma with your brand at the centre. You'll see and approve every screen before a line of code is written.",
  },
  {
    n: "03",
    title: "Build",
    desc: "Hand-built using modern, lightning-fast technology. Mobile-first, accessible, SEO-ready and tested across every device.",
  },
  {
    n: "04",
    title: "Launch",
    desc: "I handle the domain, hosting and Google setup. Your site goes live polished and ready to win new customers from day one.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-28 lg:py-36 px-5 lg:px-10 bg-ink-deep">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-xs uppercase tracking-[0.32em] text-brand font-medium mb-4">
            ✦ The Process
          </div>
          <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-5">
            From first chat to <br />launch in 4 simple steps.
          </h2>
          <p className="text-white/60 leading-relaxed">
            A clear, honest process designed to get you a brilliant website
            without the stress, the surprises or the agency runaround.
          </p>
        </div>

        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative bg-surface/40 backdrop-blur border border-white/10 rounded-2xl p-7 hover:border-brand/40 transition-colors"
            >
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-ink-deep border border-brand/40 text-brand font-display font-semibold text-base mb-6">
                {s.n}
                <div className="absolute inset-0 rounded-full bg-brand/20 blur-xl" />
              </div>
              <h3 className="font-display font-semibold text-xl text-white mb-3 tracking-tight">
                {s.title}
              </h3>
              <p className="text-sm text-white/55 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
