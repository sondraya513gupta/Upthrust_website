"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteContent } from "../content/siteContent";

export function Navbar() {
  const { brandName } = siteContent.navigation;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-30 w-full border-b border-black/[0.08] bg-white/95 backdrop-blur-sm select-none">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-4 sm:px-10 lg:px-14">
        {/* Brand Logo: Exact SVG extracted from design */}
        <Link
          href="/"
          className="group flex items-center transition-transform active:scale-95"
          aria-label={`${brandName} Home`}
        >
          <Image
            src="/upthrust-logo.svg"
            alt={brandName}
            width={157}
            height={32}
            priority
            className="h-6 sm:h-7 w-auto object-contain text-black"
          />
        </Link>

        {/* Right Hamburger Menu Icon (3 Orange Rounded Bars: #FF4200) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="group flex flex-col items-end justify-center gap-1.5 w-8 h-8 cursor-pointer focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`h-[3.5px] w-7 rounded-full bg-[#FF4200] transition-all duration-300 ${
              menuOpen ? "w-7 rotate-45 translate-y-[8px]" : ""
            }`}
          />
          <span
            className={`h-[3.5px] w-7 rounded-full bg-[#FF4200] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[3.5px] w-7 rounded-full bg-[#FF4200] transition-all duration-300 ${
              menuOpen ? "w-7 -rotate-45 -translate-y-[8px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Slide-down Mobile/Desktop Menu Drawer */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white border-b border-neutral-800 py-6 px-8 z-40 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <nav className="flex flex-col sm:flex-row gap-6 font-bold text-lg sm:text-xl tracking-tight">
              <Link
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#FF4200] transition-colors"
              >
                SERVICES
              </Link>
              <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#FF4200] transition-colors"
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
