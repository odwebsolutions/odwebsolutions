import { useState, useRef } from "react";

const inputClass =
  "w-full bg-ink-deep/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand transition-colors text-sm";
const labelClass =
  "text-[11px] uppercase tracking-[0.2em] text-white/50 mb-2 block";
const textareaClass =
  "w-full bg-ink-deep/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand transition-colors resize-none text-sm";
const selectClass =
  "w-full bg-ink-deep/60 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors text-sm appearance-none cursor-pointer";

function SectionHeading({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 border border-brand/20 text-brand text-base shrink-0">
        {icon}
      </div>
      <h2 className="font-display font-semibold text-xl text-white tracking-tight">
        {title}
      </h2>
      <div className="flex-1 h-px bg-white/5" />
    </div>
  );
}

function Field({
  label,
  children,
  optional,
}: {
  label: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <div>
      <label className={labelClass}>
        {label}
        {optional && (
          <span className="ml-1 text-white/30 normal-case tracking-normal">
            (optional)
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

interface FileUploadProps {
  label: string;
  name: string;
  accept?: string;
}

function FileUpload({ label, name, accept = "image/*" }: FileUploadProps) {
  const [files, setFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  return (
    <div>
      <label className={labelClass}>{label}</label>
      <div
        onClick={() => inputRef.current?.click()}
        className="w-full border border-dashed border-white/15 rounded-lg px-4 py-5 text-center cursor-pointer hover:border-brand/50 hover:bg-brand/5 transition-all group"
      >
        <input
          ref={inputRef}
          type="file"
          name={name}
          accept={accept}
          multiple
          className="hidden"
          onChange={handleChange}
        />
        <div className="text-2xl mb-2 text-white/30 group-hover:text-brand transition-colors">
          ↑
        </div>
        {files.length > 0 ? (
          <div className="text-sm text-brand font-medium">
            {files.length} file{files.length !== 1 ? "s" : ""} selected
          </div>
        ) : (
          <>
            <div className="text-sm text-white/50 group-hover:text-white/70 transition-colors">
              Click to upload files
            </div>
            <div className="text-[11px] text-white/30 mt-1">
              Multiple files supported
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function ClientForm() {
  const [ownsDomain, setOwnsDomain] = useState<"yes" | "no" | "">("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed) return;
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        body: data,
      });
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      alert("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleSave = () => {
    if (!formRef.current) return;
    const data = new FormData(formRef.current);
    const obj: Record<string, string> = {};
    data.forEach((v, k) => {
      obj[k] = v.toString();
    });
    localStorage.setItem("od_client_form", JSON.stringify(obj));
    const btn = document.getElementById("save-btn");
    if (btn) {
      btn.textContent = "✓ Progress Saved";
      setTimeout(() => {
        if (btn) btn.textContent = "Save Progress";
      }, 2000);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-ink-deep flex items-center justify-center px-5">
        <div className="relative max-w-lg w-full text-center">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-brand/20 blur-[120px] pointer-events-none" />
          <div className="relative bg-surface/60 backdrop-blur border border-white/10 rounded-3xl p-12">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 border border-brand/30 text-brand text-2xl mx-auto mb-6">
              ✓
            </div>
            <h2 className="font-display font-bold text-3xl text-white mb-3 tracking-tight">
              Information Received!
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              Thanks for submitting your client information. I'll review
              everything and be in touch shortly to get your project underway.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 bg-brand text-ink-deep px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white transition-colors shadow-brand"
            >
              Back to Home →
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ink-deep">
      {/* Hero header */}
      <div className="relative pt-36 pb-16 px-5 lg:px-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand/15 blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 ring-grid opacity-40 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur border border-white/10 text-white/80 px-4 py-2 rounded-full text-xs font-medium tracking-wide mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
            </span>
            Client Onboarding
          </div>
          <h1 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-5">
            Client Information Form
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
            Complete this form after accepting your quote so I have everything
            needed to build your website.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="px-5 lg:px-10 pb-28">
        <div className="max-w-4xl mx-auto">
          <form
            ref={formRef}
            name="client-information"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="client-information" />
            <input type="hidden" name="bot-field" className="hidden" />

            {/* ── Business Information ── */}
            <div className="bg-surface/50 backdrop-blur border border-white/10 rounded-2xl p-7 lg:p-9">
              <SectionHeading icon="◎" title="Business Information" />
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Business Name">
                  <input
                    required
                    name="business-name"
                    placeholder="e.g. Highland Roofing Ltd"
                    className={inputClass}
                  />
                </Field>
                <Field label="Business Owner">
                  <input
                    required
                    name="business-owner"
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </Field>
                <Field label="Email Address">
                  <input
                    required
                    type="email"
                    name="owner-email"
                    placeholder="you@yourbusiness.co.uk"
                    className={inputClass}
                  />
                </Field>
                <Field label="Phone Number">
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="+44 7700 000000"
                    className={inputClass}
                  />
                </Field>
              </div>
              <div className="mt-5 space-y-5">
                <Field label="Business Address">
                  <textarea
                    name="business-address"
                    rows={3}
                    placeholder="Street, City, Postcode"
                    className={textareaClass}
                  />
                </Field>
                <Field label="Opening Hours">
                  <textarea
                    name="opening-hours"
                    rows={3}
                    placeholder="e.g. Mon–Fri 8am–6pm, Sat 9am–2pm, Sun Closed"
                    className={textareaClass}
                  />
                </Field>
                <Field label="Areas You Cover">
                  <input
                    name="areas-covered"
                    placeholder="e.g. Edinburgh, Glasgow, Central Scotland"
                    className={inputClass}
                  />
                </Field>
              </div>
            </div>

            {/* ── Website Information ── */}
            <div className="bg-surface/50 backdrop-blur border border-white/10 rounded-2xl p-7 lg:p-9">
              <SectionHeading icon="◐" title="Website Information" />
              <div className="space-y-5">
                <Field label="Do you already own a domain?">
                  <div className="flex gap-3">
                    {(["yes", "no"] as const).map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setOwnsDomain(opt)}
                        className={`flex-1 py-3 rounded-lg border text-sm font-semibold capitalize transition-all ${
                          ownsDomain === opt
                            ? "bg-brand text-ink-deep border-brand"
                            : "bg-ink-deep/60 border-white/10 text-white/60 hover:border-white/30"
                        }`}
                      >
                        {opt === "yes" ? "Yes" : "No"}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="owns-domain" value={ownsDomain} />
                </Field>

                {ownsDomain === "yes" && (
                  <div className="grid sm:grid-cols-2 gap-5 pt-2 pl-4 border-l-2 border-brand/30">
                    <Field label="Domain Provider">
                      <div className="relative">
                        <select name="domain-provider" className={selectClass}>
                          <option value="">Select provider…</option>
                          {[
                            "GoDaddy",
                            "123 Reg",
                            "IONOS",
                            "Namecheap",
                            "Cloudflare",
                            "Squarespace",
                            "Other",
                          ].map((p) => (
                            <option key={p} value={p}>
                              {p}
                            </option>
                          ))}
                        </select>
                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40 text-xs">
                          ▾
                        </span>
                      </div>
                    </Field>
                    <Field label="Website Login Email">
                      <input
                        type="email"
                        name="domain-login-email"
                        placeholder="email used to log in"
                        className={inputClass}
                      />
                    </Field>
                    <div className="sm:col-span-2">
                      <Field label="Notes about website / domain" optional>
                        <textarea
                          name="domain-notes"
                          rows={3}
                          placeholder="Any important info about your current domain or hosting…"
                          className={textareaClass}
                        />
                      </Field>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ── Business Details ── */}
            <div className="bg-surface/50 backdrop-blur border border-white/10 rounded-2xl p-7 lg:p-9">
              <SectionHeading icon="✦" title="Business Details" />
              <div className="space-y-5">
                <Field label="Describe your business">
                  <textarea
                    required
                    name="business-description"
                    rows={4}
                    placeholder="Tell me what your business does, who your customers are and what makes it unique…"
                    className={textareaClass}
                  />
                </Field>
                <Field label="List your services">
                  <textarea
                    required
                    name="services-list"
                    rows={4}
                    placeholder="List each service or product you offer, one per line…"
                    className={textareaClass}
                  />
                </Field>
                <Field label="Why should customers choose your business?">
                  <textarea
                    name="usp"
                    rows={4}
                    placeholder="What sets you apart from competitors? e.g. 20 years experience, local family business, free estimates…"
                    className={textareaClass}
                  />
                </Field>
              </div>
            </div>

            {/* ── Branding ── */}
            <div className="bg-surface/50 backdrop-blur border border-white/10 rounded-2xl p-7 lg:p-9">
              <SectionHeading icon="◆" title="Branding" />
              <div className="space-y-5">
                <FileUpload
                  label="Business Logo"
                  name="logo"
                  accept="image/*,.svg,.eps,.ai,.pdf"
                />
                <Field label="Brand Colours" optional>
                  <input
                    name="brand-colours"
                    placeholder="e.g. #1A2E4A (navy), #F4A200 (gold) — or describe them"
                    className={inputClass}
                  />
                </Field>
                <Field label="Preferred Fonts" optional>
                  <input
                    name="preferred-fonts"
                    placeholder="e.g. Montserrat for headings, Open Sans for body"
                    className={inputClass}
                  />
                </Field>
                <Field label="Any websites you like?" optional>
                  <textarea
                    name="inspiration-sites"
                    rows={3}
                    placeholder="Paste URLs of websites whose design, layout or feel you like…"
                    className={textareaClass}
                  />
                </Field>
              </div>
            </div>

            {/* ── Images ── */}
            <div className="bg-surface/50 backdrop-blur border border-white/10 rounded-2xl p-7 lg:p-9">
              <SectionHeading icon="▢" title="Images" />
              <p className="text-sm text-white/45 mb-6 -mt-2">
                Upload any images you'd like included on your website. Don't
                worry if you don't have all of these.
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                <FileUpload label="Business Photos" name="photos-business" />
                <FileUpload label="Team Photos" name="photos-team" />
                <FileUpload label="Completed Work" name="photos-work" />
                <FileUpload label="Before & After Photos" name="photos-before-after" />
                <FileUpload label="Van / Vehicle Photos" name="photos-van" />
                <FileUpload
                  label="Certificates / Accreditations"
                  name="photos-certificates"
                  accept="image/*,.pdf"
                />
                <div className="sm:col-span-2">
                  <FileUpload label="Other Images" name="photos-other" />
                </div>
              </div>
            </div>

            {/* ── Reviews ── */}
            <div className="bg-surface/50 backdrop-blur border border-white/10 rounded-2xl p-7 lg:p-9">
              <SectionHeading icon="★" title="Reviews" />
              <p className="text-sm text-white/45 mb-6 -mt-2">
                Paste any reviews you'd like shown on your website. Copy &amp;
                paste directly from Google, Facebook or elsewhere.
              </p>
              <div className="space-y-5">
                <Field label="Google Reviews" optional>
                  <textarea
                    name="google-reviews"
                    rows={4}
                    placeholder="Paste your Google reviews here…"
                    className={textareaClass}
                  />
                </Field>
                <Field label="Facebook Reviews" optional>
                  <textarea
                    name="facebook-reviews"
                    rows={4}
                    placeholder="Paste your Facebook reviews here…"
                    className={textareaClass}
                  />
                </Field>
                <Field label="Other Testimonials" optional>
                  <textarea
                    name="other-testimonials"
                    rows={4}
                    placeholder="Any other reviews or testimonials you'd like included…"
                    className={textareaClass}
                  />
                </Field>
              </div>
            </div>

            {/* ── Social Media ── */}
            <div className="bg-surface/50 backdrop-blur border border-white/10 rounded-2xl p-7 lg:p-9">
              <SectionHeading icon="↗" title="Social Media" />
              <p className="text-sm text-white/45 mb-6 -mt-2">
                Paste the full URL to each of your social profiles. Leave blank
                if you don't have one.
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { label: "Facebook", name: "social-facebook", placeholder: "https://facebook.com/yourbusiness" },
                  { label: "Instagram", name: "social-instagram", placeholder: "https://instagram.com/yourbusiness" },
                  { label: "TikTok", name: "social-tiktok", placeholder: "https://tiktok.com/@yourbusiness" },
                  { label: "LinkedIn", name: "social-linkedin", placeholder: "https://linkedin.com/company/yourbusiness" },
                  { label: "YouTube", name: "social-youtube", placeholder: "https://youtube.com/@yourbusiness" },
                ].map(({ label, name, placeholder }) => (
                  <Field key={name} label={label} optional>
                    <input
                      type="url"
                      name={name}
                      placeholder={placeholder}
                      className={inputClass}
                    />
                  </Field>
                ))}
              </div>
            </div>

            {/* ── Contact Form ── */}
            <div className="bg-surface/50 backdrop-blur border border-white/10 rounded-2xl p-7 lg:p-9">
              <SectionHeading icon="✉" title="Contact Form" />
              <Field label="Which email should receive enquiries from your website?">
                <input
                  required
                  type="email"
                  name="enquiry-email"
                  placeholder="e.g. enquiries@yourbusiness.co.uk"
                  className={inputClass}
                />
              </Field>
            </div>

            {/* ── Additional Information ── */}
            <div className="bg-surface/50 backdrop-blur border border-white/10 rounded-2xl p-7 lg:p-9">
              <SectionHeading icon="⚙" title="Additional Information" />
              <Field label="Anything else you'd like included?" optional>
                <textarea
                  name="additional-info"
                  rows={5}
                  placeholder="Any extra details, special requests, or things you think I should know…"
                  className={textareaClass}
                />
              </Field>
            </div>

            {/* ── Agreement ── */}
            <div className="bg-surface/50 backdrop-blur border border-white/10 rounded-2xl p-7 lg:p-9">
              <SectionHeading icon="◉" title="Agreement" />
              <label className="flex items-start gap-4 cursor-pointer group">
                <div className="relative mt-0.5 shrink-0">
                  <input
                    type="checkbox"
                    name="agreement"
                    value="agreed"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="sr-only peer"
                    required
                  />
                  <div
                    className={`h-5 w-5 rounded border transition-all ${
                      agreed
                        ? "bg-brand border-brand"
                        : "bg-ink-deep/60 border-white/20 group-hover:border-white/40"
                    }`}
                  >
                    {agreed && (
                      <span className="flex items-center justify-center h-full text-ink-deep text-xs font-bold">
                        ✓
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-sm text-white/70 leading-relaxed">
                  I confirm that I own the content provided and give{" "}
                  <span className="text-brand font-medium">OD Web Solutions</span>{" "}
                  permission to use it on my website.
                </span>
              </label>
            </div>

            {/* ── Buttons ── */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                id="save-btn"
                type="button"
                onClick={handleSave}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-white/5 border border-white/15 text-white px-7 py-4 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                Save Progress
              </button>
              <button
                type="submit"
                disabled={!agreed || submitting}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-brand text-ink-deep px-7 py-4 rounded-full font-semibold text-sm hover:bg-white transition-colors shadow-brand disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting…" : "Submit Client Information →"}
              </button>
            </div>

            {!agreed && (
              <p className="text-[11px] text-white/30 text-center">
                Please tick the agreement checkbox above before submitting.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
