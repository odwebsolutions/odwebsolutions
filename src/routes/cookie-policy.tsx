import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/cookie-policy")({
  component: CookiePolicyPage,
  head: () => ({
    meta: [
      { title: "Cookie Policy — OD Web Solutions" },
      {
        name: "description",
        content:
          "Cookie Policy explaining how OD Web Solutions uses cookies and similar technologies on this website.",
      },
    ],
  }),
});

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10">
      <h2 className="font-display font-semibold text-xl text-white mb-3 tracking-tight">
        {title}
      </h2>
      <div className="text-white/65 leading-relaxed text-sm space-y-3">
        {children}
      </div>
    </div>
  );
}

function CookiePolicyPage() {
  return (
    <main className="bg-ink-deep text-foreground overflow-x-hidden">
      <Nav />

      <div className="pt-36 pb-24 px-5 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display font-semibold text-4xl md:text-5xl text-white leading-[1.05] tracking-tight mb-4">
            Cookie Policy
          </h1>

          <p className="text-white/50 text-sm mb-10">
            Last updated: 6 October 2026
          </p>

          <Section title="What are cookies?">
            <p>
              Cookies are small text files that websites may store on your
              device when you visit them. They can be used to remember
              information, support website functionality, understand how a
              website is used, or provide advertising and other services.
            </p>
          </Section>

          <Section title="How we use cookies">
            <p>
              OD Web Solutions aims to keep the use of cookies on this website
              to a minimum.
            </p>

            <p>
              We may use strictly necessary browser storage or similar
              technologies where they are required for website functionality.
              For example, the Client Information form may use your browser's
              local storage to allow you to save your progress before
              submitting the form.
            </p>
          </Section>

          <Section title="Necessary storage and technologies">
            <p>
              Some storage or technologies may be necessary for the website to
              operate correctly. These technologies do not require consent
              where they are strictly necessary for a service you have
              requested.
            </p>

            <p>
              Where the website uses local storage for features such as saving
              form progress, that information is stored on your own device
              until it is cleared or removed by the website functionality.
            </p>
          </Section>

          <Section title="Analytics and tracking">
            <p>
              We do not intend to use non-essential analytics, advertising or
              tracking cookies without appropriate consent.
            </p>

            <p>
              If we introduce analytics or other non-essential tracking
              technologies in the future, we will update this Cookie Policy
              and, where required, ask for your consent before those
              technologies are activated.
            </p>
          </Section>

          <Section title="Third-party services">
            <p>
              Some services used to operate this website may have their own
              cookies, storage technologies or privacy practices. These
              services may include our hosting and form provider, Netlify.
            </p>

            <p>
              You can find more information about how Netlify handles privacy
              and data on{" "}
              <a
                href="https://www.netlify.com/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand underline"
              >
                Netlify's Privacy Policy
              </a>
              .
            </p>
          </Section>

          <Section title="Managing cookies">
            <p>
              Most web browsers allow you to control or delete cookies and
              stored website data through their settings.
            </p>

            <p>
              You can also clear this website's stored data from your browser
              settings. This may remove saved form progress and other
              preferences stored locally on your device.
            </p>
          </Section>

          <Section title="Changes to this Cookie Policy">
            <p>
              We may update this Cookie Policy if the way this website uses
              cookies, local storage or similar technologies changes.
            </p>

            <p>
              Any updated version will be published on this page with a new
              "Last updated" date.
            </p>
          </Section>

          <Section title="Contact us">
            <p>
              If you have any questions about our use of cookies or similar
              technologies, contact:
            </p>

            <p>
              <strong className="text-white/80">OD Web Solutions</strong>
              <br />
              Scotland
              <br />
              Email:{" "}
              <a
                href="mailto:odwebsolutions1@gmail.com"
                className="text-brand underline"
              >
                odwebsolutions1@gmail.com
              </a>
            </p>
          </Section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
