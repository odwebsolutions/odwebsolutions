import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const CONSENT_KEY = "od_cookie_consent";

export type CookieConsentValue = "accepted" | "rejected";

export function getCookieConsent(): CookieConsentValue | null {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    if (value === "accepted" || value === "rejected") return value;
    return null;
  } catch {
    return null;
  }
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getCookieConsent() === null) {
      setVisible(true);
    }
  }, []);

  const choose = (value: CookieConsentValue) => {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      // localStorage unavailable — nothing more we can do, just hide the banner
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6"
    >
      <div className="mx-auto max-w-3xl bg-ink-deep/95 backdrop-blur border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <p className="text-sm text-white/70 leading-relaxed flex-1">
          We use essential storage to remember your form progress and, if
          enabled, optional cookies for analytics. Read our{" "}
          <Link to="/privacy-policy" className="text-brand underline hover:text-white">
            Privacy &amp; Cookies Policy
          </Link>{" "}
          to learn more.
        </p>
        <div className="flex gap-3 shrink-0 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => choose("rejected")}
            className="flex-1 sm:flex-none inline-flex items-center justify-center bg-white/5 border border-white/15 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors"
          >
            Reject non-essential
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="flex-1 sm:flex-none inline-flex items-center justify-center bg-brand text-ink-deep px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-white transition-colors"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
