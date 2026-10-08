import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — OD Web Solutions" },
      {
        name: "description",
        content:
          "Privacy Policy explaining how OD Web Solutions collects, uses and protects personal information.",
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

function PrivacyPolicyPage() {
  return (
    <main className="bg-ink-deep text-foreground overflow-x-hidden">
      <Nav />

      <div className="pt-36 pb-24 px-5 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display font-semibold text-4xl md:text-5xl text-white leading-[1.05] tracking-tight mb-4">
            Privacy Policy
          </h1>

          <p className="text-white/50 text-sm mb-10">
            Last updated: 6 October 2026
          </p>

          <Section title="Who we are">
            <p>
              OD Web Solutions ("we", "us", "our") is a web design business
              based in Scotland.
            </p>

            <p>
              If you have any questions about this Privacy Policy or how we
              handle your personal information, you can contact us at{" "}
              <a
                href="mailto:odwebsolutions1@gmail.com"
                className="text-brand underline"
              >
                odwebsolutions1@gmail.com
              </a>
              .
            </p>
          </Section>

          <Section title="Information we collect">
            <p>
              We may collect personal information that you choose to provide
              when contacting us or using forms on our website.
            </p>

            <p>
              This may include your name, business name, email address, phone
              number, and the contents of any enquiry or message you send us.
            </p>

            <p>
              If you use our Client Information form to provide information
              needed for a website project, this may also include business
              information, website/domain details, branding preferences,
              images, logos, files, reviews or testimonials that you choose
              to provide.
            </p>

            <p>
              We may also receive basic technical information required to
              operate and secure the website.
            </p>
          </Section>

          <Section title="How we use your information">
            <p>We may use the information you provide to:</p>

            <ul className="list-disc pl-5 space-y-2">
              <li>respond to enquiries and requests;</li>
              <li>discuss and prepare website projects and quotations;</li>
              <li>provide website design and related services;</li>
              <li>communicate with you about an ongoing project;</li>
              <li>operate, maintain and secure our website;</li>
              <li>keep appropriate business and accounting records; and</li>
              <li>comply with applicable legal obligations.</li>
            </ul>
          </Section>

          <Section title="Our legal basis for processing">
            <p>
              Where applicable, we rely on one or more lawful bases under UK
              data protection law, including taking steps at your request
              before entering into a contract, performing a contract with you,
              complying with legal obligations, our legitimate interests, or
              your consent where consent is required.
            </p>
          </Section>

          <Section title="How information is submitted and stored">
            <p>
              Website form submissions are handled using Netlify, our hosting
              and website service provider. Information submitted through our
              forms may therefore be processed and stored by Netlify on our
              behalf so that we can receive and respond to enquiries and
              provide our services.
            </p>

            <p>
              For information about how Netlify handles personal information,
              please refer to{" "}
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

            <p>
              If the Client Information form provides a "Save Progress"
              feature, information saved before submission may be stored
              locally in your own browser on your device. We do not receive
              that saved information until you submit it to us.
            </p>
          </Section>

          <Section title="Who we share information with">
            <p>
              We do not sell or rent your personal information.
            </p>

            <p>
              We may share information with trusted service providers where
              necessary to operate our website, receive form submissions,
              provide our services, maintain business records, or comply with
              legal obligations.
            </p>
          </Section>

          <Section title="International processing">
            <p>
              Some service providers we use may process information outside
              the United Kingdom. Where this happens, appropriate safeguards
              will be used where required by applicable data protection law.
            </p>
          </Section>

          <Section title="How long we keep information">
            <p>
              We keep personal information only for as long as reasonably
              necessary for the purposes for which it was collected, including
              responding to enquiries, providing services, maintaining
              appropriate business records and meeting legal or accounting
              requirements.
            </p>

            <p>
              When information is no longer required, we will take reasonable
              steps to securely delete or otherwise dispose of it, unless we
              are required to keep it for longer by law.
            </p>
          </Section>

          <Section title="Your rights">
            <p>
              Under UK data protection law, you may have rights including the
              right to request access to personal information we hold about
              you, ask us to correct inaccurate information, request deletion
              in certain circumstances, object to or request restriction of
              certain processing, and withdraw consent where processing is
              based on consent.
            </p>

            <p>
              To make a privacy request, contact us at{" "}
              <a
                href="mailto:odwebsolutions1@gmail.com"
                className="text-brand underline"
              >
                odwebsolutions1@gmail.com
              </a>
              .
            </p>

            <p>
              You also have the right to complain to the UK Information
              Commissioner's Office (ICO) if you believe your personal
              information has been handled unlawfully.
            </p>
          </Section>

          <Section title="Cookies and similar technologies">
            <p>
              Our website is not intended to use advertising or analytics
              cookies unless this is clearly stated and, where required,
              consent has been obtained.
            </p>

            <p>
              The website may use strictly necessary browser storage or
              similar technologies required for functionality, such as saving
              progress in a form.
            </p>

            <p>
              If we introduce non-essential cookies or tracking technologies
              in the future, this Privacy Policy and our Cookie Policy will be
              updated accordingly.
            </p>
          </Section>

          <Section title="Security">
            <p>
              We take reasonable technical and organisational measures to
              protect personal information against unauthorised access,
              accidental loss, misuse, alteration or disclosure.
            </p>

            <p>
              However, no method of transmitting or storing information
              online can be guaranteed to be completely secure.
            </p>
          </Section>

          <Section title="Third-party websites">
            <p>
              Our website may contain links to third-party websites or
              services. We are not responsible for the privacy practices,
              security or content of third-party websites. We recommend
              checking their own privacy policies before providing personal
              information.
            </p>
          </Section>

          <Section title="Children's information">
            <p>
              Our services are intended for businesses and general website
              visitors. We do not knowingly seek to collect personal
              information from children.
            </p>
          </Section>

          <Section title="Changes to this Privacy Policy">
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes to our services, website or legal requirements.
            </p>

            <p>
              Any updated version will be published on this page with a new
              "Last updated" date.
            </p>
          </Section>

          <Section title="Contact us">
            <p>
              If you have a question about this Privacy Policy or how your
              information is handled, contact:
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
