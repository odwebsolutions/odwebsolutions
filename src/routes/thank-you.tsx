import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/thank-you")({
  component: ThankYouPage,
  head: () => ({
    meta: [
      { title: "Thanks — OD Web Solutions" },
      {
        name: "description",
        content: "Thanks for getting in touch with OD Web Solutions.",
      },
      // Netlify shouldn't index/show this page in search results
      { name: "robots", content: "noindex" },
    ],
  }),
});

function ThankYouPage() {
  return (
    <main className="bg-ink-deep text-foreground overflow-x-hidden min-h-screen flex flex-col">
      <Nav />
      <div className="flex-1 flex items-center justify-center px-5 lg:px-10 py-32">
        <div className="max-w-lg text-center">
          <div className="text-brand text-xs uppercase tracking-[0.32em] font-medium mb-4">
            ✦ Message sent
          </div>
          <h1 className="font-display font-semibold text-4xl md:text-5xl text-white leading-[1.05] tracking-tight mb-6">
            Thanks — got it.
          </h1>
          <p className="text-white/65 leading-relaxed text-lg mb-10">
            I've received your message and will come back to you within 24
            hours with honest advice and, where relevant, a free
            no-obligation quote.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-brand text-ink-deep font-semibold px-7 py-3.5 rounded-full hover:bg-white transition-colors shadow-brand"
          >
            Back to homepage
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
