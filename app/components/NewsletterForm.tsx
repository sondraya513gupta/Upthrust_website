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

      // Mandatory GTM DataLayer Push
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "form_submit",
          formId: "footer_newsletter_signup",
          email: email.trim().toLowerCase(),
          timestamp: new Date().toISOString(),
        });
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
    <div className="w-full" suppressHydrationWarning>
      <h3
        className="text-[14px] sm:text-[15px] font-normal text-white mb-2.5"
        suppressHydrationWarning
      >
        {newsletter.heading}
      </h3>

      {isSuccess ? (
        <div
          role="status"
          className="rounded-sm border border-emerald-500/30 bg-emerald-950/20 p-4 text-left transition-all"
        >
          <div className="flex items-center gap-2 text-emerald-400 font-medium text-xs mb-1">
            <span>✓</span>
            <span>Submission Successful!</span>
          </div>
          <p className="text-[11px] text-neutral-300 leading-relaxed mb-2">
            {newsletter.successMessage}
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="text-[11px] font-mono text-[#FF4200] hover:underline"
          >
            Submit another response →
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-3.5"
          suppressHydrationWarning
        >
          {/* Consent Checkbox */}
          <label
            className="flex items-start gap-2.5 cursor-pointer text-[9.5px] sm:text-[10px] leading-snug text-neutral-400 select-none group"
            suppressHydrationWarning
          >
            <input
              type="checkbox"
              id="newsletter-consent"
              name="newsletterConsent"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 h-3.5 w-3.5 rounded-none border-neutral-600 bg-transparent text-[#FF4200] focus:ring-0 focus:outline-none cursor-pointer accent-[#FF4200]"
              suppressHydrationWarning
            />
            <span
              className="group-hover:text-neutral-300 transition-colors"
              suppressHydrationWarning
            >
              {newsletter.consentText}
            </span>
          </label>

          {/* Email Input Field */}
          <div className="relative pt-1" suppressHydrationWarning>
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
              className="w-full bg-transparent border-b border-white/20 py-2 text-[13.3px] text-white placeholder-neutral-500 focus:border-white focus:outline-none transition-colors"
              suppressHydrationWarning
            />
          </div>

          {/* Inline Validation Error State */}
          {errorMessage && (
            <div
              role="alert"
              className="text-[11px] text-rose-400 font-medium flex items-center gap-1.5"
            >
              <span>⚠</span>
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-0.5" suppressHydrationWarning>
            <button
              type="submit"
              disabled={loading}
              className="text-[13.5px] font-normal text-white hover:text-[#FF4200] transition-colors disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
              suppressHydrationWarning
            >
              {loading ? "Submitting..." : newsletter.buttonText}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
