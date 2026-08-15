export function Contact() {

  return (
    <section id="contact" className="relative py-28 lg:py-36 px-5 lg:px-10 bg-ink overflow-hidden">
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-brand/15 blur-[140px]" />
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        <div>
          <div className="text-xs uppercase tracking-[0.32em] text-brand font-medium mb-4">
            ✦ Start Your Project
          </div>
          <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-6">
            Let's build <br />something brilliant.
          </h2>
          <p className="text-white/65 leading-relaxed text-lg mb-10 max-w-md">
            Tell me a bit about your business and I'll come back within 24 hours
            with honest advice and a free, no-obligation quote.
          </p>

          <div className="space-y-5">
            <a href="mailto:odwebsolutions1@gmail.com" className="flex items-start gap-4 group">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 border border-brand/20 text-brand">
                ✉
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-1">Email</div>
                <div className="text-white font-medium group-hover:text-brand transition-colors">
                  odwebsolutions1@gmail.com
                </div>
              </div>
            </a>
            <a href="tel:+447706743987" className="flex items-start gap-4 group">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 border border-brand/20 text-brand">
                ☏
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-1">Phone</div>
                <div className="text-white font-medium group-hover:text-brand transition-colors">
                  +44 7706 743987
                </div>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 border border-brand/20 text-brand">
                ◎
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-1">Based In</div>
                <div className="text-white font-medium">Scotland · Working UK-wide</div>
              </div>
            </div>
          </div>
        </div>

         <form
           name="contact"
           method="POST"
           data-netlify="true"
           data-netlify-honeypot="bot-field"
           className="relative bg-surface/60 backdrop-blur border border-white/10 rounded-2xl p-7 lg:p-9 space-y-5"
>
  <input type="hidden" name="form-name" value="contact" />
        
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-2 block">Name</label>
              <input
                required
                name="name"
                placeholder="Your full name"
                className="w-full bg-ink-deep/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand transition-colors"
              />
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-2 block">Business Name</label>
              <input
                required
                name="business"
                placeholder="Your business"
                className="w-full bg-ink-deep/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-2 block">Email</label>
            <input
              required
              type="email"
              name="email"
              placeholder="you@business.co.uk"
              className="w-full bg-ink-deep/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand transition-colors"
            />
          </div>
          <div>
            <label className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-2 block">Message</label>
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Tell me about your business and what you're looking for…"
              className="w-full bg-ink-deep/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-brand text-ink-deep font-semibold py-4 rounded-full hover:bg-white transition-colors shadow-brand disabled:opacity-60"
          >
            Send Enquiry →
          </button>
          <p className="text-[11px] text-white/40 text-center">
            Typical reply time under 24 hours · No spam, ever.
          </p>
        </form>
      </div>
    </section>
  );
}
