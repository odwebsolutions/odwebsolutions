import { useState } from "react";

const faqs = [
  {
    q: "How much does a website cost?",
    a: "Every project is quoted individually based on what you actually need. Most local business websites land in an affordable, fixed-price range with no hidden extras. You'll get a clear quote upfront — no surprises later.",
  },
  {
    q: "How long does it take to build?",
    a: "Typical turnaround is between 1 and 4 days from approval, depending on the size of the project and how quickly we get your content together. I'll always agree a realistic timeline with you before starting.",
  },
  {
    q: "Will my website work on mobile?",
    a: "Absolutely. Every site is designed mobile-first, so it looks and feels fast and professional on phones, tablets and laptops — the way most of your customers will find you.",
  },
  {
    q: "Do you help with hosting and domains?",
    a: "Yes. I can handle the domain, hosting and email setup for you so everything is in one place and you don't have to worry about the technical side.",
  },
  {
    q: "Can you update my existing website?",
    a: "Yes — many clients come to me for a full redesign of an older or underperforming site. We keep what's working, fix what isn't, and rebuild it to a modern standard.",
  },
  {
    q: "What happens after launch?",
    a: "I offer ongoing support and simple care plans, so you've always got someone to call for updates, tweaks or new features as your business grows.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 lg:py-36 px-5 lg:px-10 bg-ink-deep">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.32em] text-brand font-medium mb-4">
            Frequently asked
          </div>
          <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-5">
            Questions, answered.
          </h2>
          <p className="text-white/60 leading-relaxed max-w-xl mx-auto">
            Everything you need to know before getting in touch. Still unsure?
            Just send a message — happy to help.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="bg-surface/50 backdrop-blur border border-white/10 rounded-2xl overflow-hidden transition-colors hover:border-white/20"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 text-left px-6 lg:px-8 py-6 cursor-pointer"
                >
                  <span className="font-display font-semibold text-base lg:text-lg text-white">
                    {f.q}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-brand border-brand text-ink-deep" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-400 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 lg:px-8 pb-6 text-white/65 leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
