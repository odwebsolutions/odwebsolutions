import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-10 flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="OD Web Solutions company logo"
            className="h-10 w-auto object-contain"
          />
          <div className="leading-tight">
            <div className="font-display font-semibold text-base text-white">OD Web Solutions</div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-white/50">Web Design · Scotland</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand text-ink-deep px-5 py-2.5 text-sm font-semibold rounded-full hover:bg-white transition-colors shadow-brand"
          >
            Free Quote
            <span>→</span>
          </a>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block h-0.5 w-6 bg-white transition-transform ${open ? "rotate-45 translate-y-[8px]" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-transform ${open ? "-rotate-45 -translate-y-[8px]" : ""}`} />
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden bg-ink-deep border-b border-white/10 transition-[max-height] duration-500 ${
          open ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-white/80 hover:text-brand"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-brand text-ink-deep px-5 py-3 text-sm font-semibold text-center rounded-full"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </header>
  );
}
