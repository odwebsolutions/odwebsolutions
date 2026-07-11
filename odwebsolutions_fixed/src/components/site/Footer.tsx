export function Footer() {
  return (
    <footer className="relative bg-ink-deep text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-ink-deep font-display font-bold text-base">
                OD
              </span>
              <div>
                <div className="font-display font-semibold text-lg">OD Web Solutions</div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-white/50">Web Design · Scotland</div>
              </div>
            </div>
            <p className="text-white/55 text-sm max-w-md leading-relaxed mb-6">
              Modern, conversion-focused websites for local businesses across
              Scotland. Built by one designer who cares — not a faceless agency.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/odwebsolutions"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-brand hover:text-ink-deep transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M13.5 21v-8H16l.5-3.5H13.5V7.2c0-1 .3-1.7 1.7-1.7h1.9V2.3C16.7 2.2 15.6 2 14.4 2c-2.5 0-4.2 1.5-4.2 4.3v3.2H7.5V13h2.7v8h3.3z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/odwebsolutions.co.uk_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-brand hover:text-ink-deep transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <rect x="3" y="3" width="18" height="18" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.28em] text-brand font-medium mb-4">Services</div>
            <ul className="space-y-2.5 text-sm text-white/55">
              <li><a href="#services" className="hover:text-brand transition-colors">Website Design</a></li>
              <li><a href="#services" className="hover:text-brand transition-colors">Redesigns</a></li>
              <li><a href="#services" className="hover:text-brand transition-colors">Mobile Optimisation</a></li>
              <li><a href="#services" className="hover:text-brand transition-colors">Booking Systems</a></li>
              <li><a href="#services" className="hover:text-brand transition-colors">Maintenance</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.28em] text-brand font-medium mb-4">Studio</div>
            <ul className="space-y-2.5 text-sm text-white/55">
              <li><a href="#work" className="hover:text-brand transition-colors">Featured Work</a></li>
              <li><a href="#why" className="hover:text-brand transition-colors">Why Us</a></li>
              <li><a href="#process" className="hover:text-brand transition-colors">Process</a></li>
              <li><a href="#faq" className="hover:text-brand transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-brand transition-colors">Contact</a></li>
              <li><a href="/client-form" className="hover:text-brand transition-colors">Client Form</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.28em] text-brand font-medium mb-4">Get In Touch</div>
            <ul className="space-y-2.5 text-sm text-white/55">
              <li><a href="tel:+447706743987" className="hover:text-brand transition-colors">+44 7706 743987</a></li>
              <li><a href="mailto:odwebsolutions1@gmail.com" className="hover:text-brand transition-colors break-all">odwebsolutions1@gmail.com</a></li>
              <li className="pt-2 text-white/40 text-xs">Scotland · Available UK-wide</li>
            </ul>
          </div>
        </div>

        <div className="font-display font-semibold text-[16vw] md:text-[11vw] leading-none tracking-tight text-white/[0.04] select-none -mb-2">
          OD Web Solutions.
        </div>

        <div className="border-t border-white/10 pt-6 mt-2 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/40">
          <div>© {new Date().getFullYear()} OD Web Solutions · All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-brand">Privacy</a>
            <a href="#" className="hover:text-brand">Terms</a>
            <a href="#contact" className="hover:text-brand">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
