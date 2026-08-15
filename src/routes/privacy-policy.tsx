import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      { title: "Privacy & Cookies Policy — OD Web Solutions" },
      {
        name: "description",
        content:
          "How OD Web Solutions collects, uses and protects information submitted through this website.",
      },
    ],
  }),
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-display font-semibold text-xl text-white mb-3 tracking-tight">
        {title}
      </h2>
      <div className="text-white/65 leading-relaxed text-sm space-y-3">{children}</div>
    </div>
  );
}

function PrivacyPolicyPage() {
  return (
    <main className="bg-ink-deep text-foreground overflow-x-hidden">
      <Nav />
      <div className="pt-36 pb-24 px-5 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display font-semibold text-4xl md:text-5xl text-white leading-[1.05] tracking-tight mb-4">
            Privacy &amp; Cookies Policy
          </h1>
          <p className="text-white/50 text-sm mb-4">Last updated: [add the date you publish this]</p>

          <div className="bg-brand/10 border border-brand/30 rounded-xl p-5 mb-10 text-sm text-white/70 leading-relaxed">
            <strong className="text-brand">Before you publish this:</strong> this page is a
            plain-English starting template, not legal advice. Replace the
            bracketed placeholders with your real details, and it's worth a
            quick check against the UK ICO's guidance (or a solicitor) before
            it goes live, since data protection rules apply to you as a
            business collecting customer and website-visitor information.
          </div>

          <Section title="Who we are">
            <p>
              OD Web Solutions ("we", "us", "our") is a web design business
              based in Scotland. If you have any questions about this policy
              or your information, contact us at{" "}
              <a href="mailto:odwebsolutions1@gmail.com" className="text-brand underline">
                odwebsolutions1@gmail.com
              </a>
              .
            </p>
          </Section>

          <Section title="What information we collect">
            <p>
              <strong className="text-white/80">When you use the Enquiry form:</strong> your
              name, business name, email address and the message you send us.
            </p>
            <p>
              <strong className="text-white/80">When you use the Client Information form:</strong>{" "}
              business details, contact details, domain/hosting information,
              branding preferences, any images, logos or files you upload,
              and any reviews or testimonials you paste in. This is
              information you choose to give us so we can build your website.
            </p>
            <p>
              <strong className="text-white/80">Automatically:</strong> we don't run analytics
              or tracking cookies on this site unless stated otherwise below.
              If that changes, this section will be updated and you'll be
              asked for consent via the cookie banner.
            </p>
          </Section>

          <Section title="Why we collect it and our legal basis">
            <p>
              We use this information to respond to your enquiry, to prepare
              quotes, and to design and build the website you've asked for.
              Our legal basis is that processing is necessary to take steps
              at your request before entering into a contract, and to perform
              that contract once you engage us (UK GDPR Article 6(1)(b)), or
              your consent where you've explicitly agreed (e.g. the agreement
              checkbox on the Client Information form).
            </p>
          </Section>

          <Section title="How your information is submitted and stored">
            <p>
              Form submissions on this site are handled by Netlify Forms, our
              website hosting provider, which receives and stores submissions
              (including uploaded files) on our behalf so we can read and
              respond to them. Netlify acts as a data processor for this
              information — see{" "}
              <a
                href="https://www.netlify.com/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand underline"
              >
                Netlify's own privacy policy
              </a>{" "}
              for how they handle it.
            </p>
            <p>
              If you use "Save Progress" on the Client Information form, your
              in-progress answers (not files) are stored only in your own
              browser's local storage, on your device — we don't see this
              until you actually submit the form.
            </p>
          </Section>

          <Section title="Who we share it with">
            <p>
              We don't sell or rent your information. We may share it with
              trusted service providers who help us run this website and
              deliver our services (for example Netlify for hosting and form
              handling), and only to the extent needed for that purpose.
            </p>
          </Section>

          <Section title="How long we keep it">
            <p>
              We keep enquiry and client information for as long as needed to
              respond to you, deliver the project, and meet any legal or
              accounting obligations, and then delete it. [Add a specific
              retention period here if you have one, e.g. "12 months after
              project completion".]
            </p>
          </Section>

          <Section title="Your rights">
            <p>
              Under UK data protection law you have the right to ask for a
              copy of the information we hold about you, ask us to correct or
              delete it, object to or restrict certain processing, and
              complain to the Information Commissioner's Office (ICO) if
              you're unhappy with how we've handled your data. To exercise
              any of these, email{" "}
              <a href="mailto:odwebsolutions1@gmail.com" className="text-brand underline">
                odwebsolutions1@gmail.com
              </a>
              .
            </p>
          </Section>

          <Section title="Cookies and local storage">
            <p>
              This site currently uses only strictly-necessary local storage
              (to remember your form progress) and does not set tracking or
              advertising cookies. If we add analytics tools in future, we
              will only load them after you accept via the cookie banner, and
              this section will list exactly what's used.
            </p>
            <p>
              You can change your choice at any time by clearing your
              browser's site data for this website, which will show the
              cookie banner again on your next visit.
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p>
              We may update this policy from time to time. Changes will be
              posted on this page with an updated "last updated" date.
            </p>
          </Section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
