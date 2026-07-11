export function Founder() {
  return (
    <section id="founder" className="relative py-28 lg:py-36 px-5 lg:px-10 bg-ink">
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-surface/60 backdrop-blur border border-white/10 rounded-3xl p-10 lg:p-16 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-[320px] h-[320px] rounded-full bg-brand/15 blur-[120px]" />
          <div className="relative grid md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-center">
            <div className="flex h-28 w-28 lg:h-32 lg:w-32 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-soft text-ink-deep font-display font-bold text-4xl shadow-brand shrink-0 mx-auto md:mx-0">
              O
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.32em] text-brand font-medium mb-4">
                Meet the founder
              </div>
              <h2 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1] tracking-tight mb-6">
                Hi, I'm Oliver.
              </h2>
              <p className="text-white/70 leading-relaxed text-lg max-w-2xl">
                Founder of OD Web Solutions. I help local businesses across
                Scotland improve their online presence through modern,
                professional websites designed to generate more enquiries and
                customers.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-brand text-ink-deep px-6 py-3 rounded-full font-semibold text-sm hover:bg-white transition-colors shadow-brand"
                >
                  Get in touch
                  <span>→</span>
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 bg-white/5 border border-white/15 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors"
                >
                  See recent work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
