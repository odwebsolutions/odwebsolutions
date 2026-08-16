import p1 from "@/assets/p1.png";
import p2 from "@/assets/p2.png";
import p3 from "@/assets/p3.png";

const projects = [
  {
    img: p1,
    tag: "Concept · Barber Shop",
    title: "Northside Edge Barbers",
    desc: "Concept website design for a modern Edinburgh barber — dark editorial layout with online booking and a focus on premium brand feel.",
    meta: ["Edinburgh", "Concept", "Booking"],
    url: "https://northside-barbers-vibe.lovable.app/",
  },
  {
    img: p2,
    tag: "Concept · Fitness",
    title: "Iron District Gym",
    desc: "Concept website design for a high-end performance gym — cinematic hero, clear membership tiers and a confident, masculine identity.",
    meta: ["Edinburgh", "Concept", "Memberships"],
    url: "https://northside-edinburgh-style.lovable.app/",
  },
  {
    img: p3,
    tag: "Concept · Trades",
    title: "Highland Peak Roofing",
    desc: "Concept website design for a trusted Scottish roofing company — clean layout built around lead generation and quick quote requests.",
    meta: ["Scotland-wide", "Concept", "Lead Gen"],
    url: "https://id-preview-7f41337c--c92027f4-9f2f-4c6b-95f4-4166f24f0024.lovable.app",
  },
];

export function Projects() {
  return (
    <section id="work" className="relative py-28 lg:py-36 px-5 lg:px-10 bg-ink">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.32em] text-brand font-medium mb-4">
              ✦ Featured Work
            </div>
            <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight max-w-2xl">
              Recent projects built <br />for Scottish businesses.
            </h2>
          </div>
          
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-brand transition-colors"
          >
            Start your project ->
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            
              key={i}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <article className="group relative bg-surface rounded-2xl overflow-hidden border border-white/5 hover:border-brand/40 transition-all duration-500 hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden bg-ink-deep">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="w-full h-full object-contain object-top bg-ink-deep transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/80 to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/10 backdrop-blur text-white text-[10px] uppercase tracking-[0.2em] font-medium px-3 py-1.5 rounded-full border border-white/15">
                    {p.tag}
                  </div>
                  <div className="absolute top-4 right-4 font-mono text-[12px] tracking-widest text-white/60">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-xl text-white mb-2 tracking-tight group-hover:text-brand transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-white/55 leading-relaxed mb-6">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-5 border-t border-white/5">
                    {p.meta.map((m, index) => (
                      <span
                        key={index}
                        className="text-[10px] uppercase tracking-wider text-white/50 bg-white/5 px-2.5 py-1 rounded-full"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
