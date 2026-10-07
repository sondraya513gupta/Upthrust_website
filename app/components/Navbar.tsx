"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteContent } from "../content/siteContent";

export function Navbar() {
  const { brandName } = siteContent.navigation;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-30 w-full border-b border-black/[0.08] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
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

        {/* Right Hamburger Menu Icon (3 Orange Rounded Bars) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="group flex flex-col items-end justify-center gap-1.5 w-8 h-8 cursor-pointer focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`h-[3.5px] w-7 rounded-full bg-[#FF3800] transition-all duration-300 ${
              menuOpen ? "w-7 rotate-45 translate-y-[8px]" : ""
            }`}
          />
          <span
            className={`h-[3.5px] w-7 rounded-full bg-[#FF3800] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[3.5px] w-7 rounded-full bg-[#FF3800] transition-all duration-300 ${
              menuOpen ? "w-7 -rotate-45 -translate-y-[8px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Slide-down Mobile/Desktop Menu Drawer */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-neutral-950 text-white border-b border-neutral-800 py-6 px-8 z-40 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <nav className="flex flex-col sm:flex-row gap-6 font-display italic text-lg sm:text-xl">
              <Link
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#FF3800] transition-colors"
              >
                SERVICES
              </Link>
              <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#FF3800] transition-colors"
              >
                CONTACT &amp; NEWSLETTER
              </Link>
            </nav>
            <div className="text-xs font-mono text-neutral-400">
              UPTHRUST DESIGN STUDIO • BOLD DESIGN THAT PERFORMS
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
