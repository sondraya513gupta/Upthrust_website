"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteContent } from "../content/siteContent";

export function Navbar() {
  const { brandName } = siteContent.navigation;

  return (
    <header className="relative z-30 w-full shrink-0 bg-transparent select-none">
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

        {/* Right 'CONTACT US' Button matching design */}
        <Link
          href="#contact"
          className="font-anton text-[#FF4200] text-xl sm:text-2xl uppercase tracking-wide hover:opacity-80 transition-opacity"
        >
          CONTACT US
        </Link>
      </div>
    </header>
  );
}
