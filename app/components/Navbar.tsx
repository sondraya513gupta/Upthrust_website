import React from "react";
import Link from "next/link";
import { siteContent } from "../content/siteContent";

export function Navbar() {
  const { brandName, contactButtonText, contactHref } = siteContent.navigation;

  return (
    <header className="relative z-30 w-full border-b border-black/[0.08] bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-neutral-950 transition-transform active:scale-95"
          aria-label={`${brandName} Home`}
        >
          {/* Stylized Rocket Glyph */}
          <div className="flex h-7 w-7 items-center justify-center transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-neutral-950"
            >
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6.05 11a22.35 22.35 0 0 1-3.95 2z" />
              <path d="M9 12H4s.55-3.03 2-4.5c1.62-1.63 4.5-2 4.5-2" />
              <path d="M15 15v5s3.03-.55 4.5-2c1.63-1.62 2-4.5 2-4.5" />
            </svg>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-neutral-950">
            {brandName}
          </span>
        </Link>

        {/* CTA Contact Button */}
        <Link
          href={contactHref}
          className="group relative inline-flex items-center justify-center font-black tracking-wider text-[#FF3800] text-sm sm:text-base uppercase transition-all duration-200 hover:text-[#d93000] hover:tracking-widest focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF3800]"
        >
          <span>{contactButtonText}</span>
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#FF3800] transition-all duration-300 group-hover:w-full" />
        </Link>
      </div>
    </header>
  );
}
