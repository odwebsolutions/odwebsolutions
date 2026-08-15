import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden bg-ink-deep">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-deep/40 via-ink-deep/70 to-ink-deep" />
        <div className="absolute inset-0 ring-grid opacity-60" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand/20 blur-[140px] animate-glow" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-10 py-32 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur border border-white/10 text-white/80 px-4 py-2 rounded-full text-xs font-medium tracking-wide mb-8 animate-rise">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
            </span>
            Now booking projects for 2026
          </div>

          <h1 className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight mb-7 animate-rise delay-100 text-balance">
            <span className="text-white">Modern Websites</span>
            <br />
            <span className="text-white/60">For </span>
            <span className="text-gradient">Local Businesses.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/65 max-w-2xl leading-relaxed mb-10 animate-rise delay-200">
            Helping businesses across Scotland grow online with fast, modern and
            professional websites that turn visitors into customers.
          </p>

          <div className="flex flex-wrap gap-4 mb-16 animate-rise delay-300">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-brand text-ink-deep px-7 py-4 rounded-full font-semibold text-base hover:bg-white transition-colors shadow-brand"
            >
              Get a Free Quote
              <span>→</span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-3 bg-white/5 backdrop-blur border border-white/15 text-white px-7 py-4 rounded-full font-semibold text-base hover:bg-white/10 transition-colors"
            >
              View My Work
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-rise delay-400 max-w-3xl">
            {[
              "Scotland Based",
              "Mobile Optimised",
              "Fast Turnaround",
              "Personal Support",
            ].map((l) => (
              <div key={l} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                <div className="font-display text-sm md:text-base font-semibold text-white tracking-tight">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/40 text-[10px] uppercase tracking-[0.4em] hidden md:flex flex-col items-center gap-2">
        <span>Scroll</span>
        <span className="block h-10 w-px bg-white/20 animate-pulse" />
      </div>
    </section>
  );
}
