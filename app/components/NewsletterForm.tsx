"use client";

import React, { useState } from "react";
import { siteContent } from "../content/siteContent";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function NewsletterForm() {
  const { newsletter } = siteContent.footer;
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Client-side Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setErrorMessage("Please enter your email address.");
      return;
    }
    if (!emailRegex.test(email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!consent) {
      setErrorMessage("Please check the box to agree to receiving updates.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), consent }),
      });

      const data = await response.json();

      if (!response.ok || data.status !== "success") {
        throw new Error(data.message || "Failed to submit form.");
      }

      // 1. Mandatory GTM DataLayer Push
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "form_submit",
          formId: "footer_newsletter_signup",
          email: email.trim().toLowerCase(),
          timestamp: new Date().toISOString(),
        });

        // Informative DevTools Console Log for live interview demonstration
        console.log(
          "%c[GTM DataLayer]%c Event dispatched: 'form_submit'",
          "background: #FF3800; color: #fff; padding: 2px 6px; font-weight: bold; border-radius: 3px;",
          "color: #22C55E; font-weight: bold; font-size: 12px;",
          {
            event: "form_submit",
            formId: "footer_newsletter_signup",
            email: email.trim(),
            timestamp: new Date().toISOString(),
          }
        );
      }

      setIsSuccess(true);
      setEmail("");
      setConsent(false);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "An unexpected error occurred.";
      setErrorMessage(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <h3 className="text-base sm:text-lg font-bold text-white mb-4">
        {newsletter.heading}
      </h3>

      {isSuccess ? (
        <div
          role="status"
          className="rounded-lg border border-emerald-500/30 bg-emerald-950/20 p-5 text-left transition-all"
        >
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1">
            <span>✓</span>
            <span>Submission Successful!</span>
          </div>
          <p className="text-xs text-neutral-300 leading-relaxed mb-3">
            {newsletter.successMessage}
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSuccess(false)}
              className="text-xs font-mono text-[#FF3800] hover:underline"
            >
              Submit another response →
            </button>
            <a
              href="/api/newsletter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-neutral-400 hover:text-white underline"
            >
              View JSON record ↗
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Consent Checkbox */}
          <label className="flex items-start gap-2.5 cursor-pointer text-[11px] leading-relaxed text-neutral-400 select-none group">
            <input
              type="checkbox"
              id="newsletter-consent"
              name="newsletterConsent"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 h-3.5 w-3.5 rounded border-neutral-700 bg-neutral-900 text-[#FF3800] focus:ring-[#FF3800] focus:ring-offset-0 cursor-pointer accent-[#FF3800]"
            />
            <span className="group-hover:text-neutral-300 transition-colors">
              {newsletter.consentText}
            </span>
          </label>

          {/* Email Input Field */}
          <div className="relative">
            <label htmlFor="newsletter-email" className="sr-only">
              Email Address
            </label>
            <input
              id="newsletter-email"
              name="newsletterEmail"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={newsletter.placeholder}
              disabled={loading}
              className="w-full bg-transparent border-b border-neutral-700 py-2.5 text-sm sm:text-base text-white placeholder-neutral-500 focus:border-white focus:outline-none transition-colors"
            />
          </div>

          {/* Inline Validation Error State */}
          {errorMessage && (
            <div
              role="alert"
              className="text-xs text-rose-400 font-medium flex items-center gap-1.5"
            >
              <span>⚠</span>
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-1">
            <button
              type="submit"
              disabled={loading}
              className="font-black text-sm tracking-wide text-white uppercase hover:text-[#FF3800] transition-colors disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
            >
              {loading ? "Submitting..." : newsletter.buttonText}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
