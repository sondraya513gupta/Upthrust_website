import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "../content/siteContent";
import { NewsletterForm } from "./NewsletterForm";
import { FitText } from "./FitText";

export function FooterSection() {
  const { footer } = siteContent;

  return (
    <footer
      id="contact"
      className="relative w-full bg-black text-white select-none overflow-hidden"
      aria-label="Footer and Newsletter"
      suppressHydrationWarning
    >
      {/* Top Section: UPTHRUST [pic3.png] DESIGN — full-bleed FitText */}
      {/* Figma Specs: Font Anton, Weight 400, Size 200px, Line-height 271.68px, Color #FFFFFF, Uppercase, Letter-spacing 0% */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[70px] pt-8 sm:pt-10 lg:pt-12">
        <FitText className="font-anton text-white uppercase leading-none tracking-normal" minFontSize={32} maxFontSize={600}>
          {/* UPTHRUST */}
          <span className="font-anton text-white uppercase leading-none select-none">
            {footer.headlineWord1}
          </span>

          {/* Upthrust Petal Emblem — sits at baseline between T and D */}
          {/* Figma: Group 1000003300, Width 63.42px, Height 58.82px */}
          <span
            className="relative inline-flex items-center justify-center shrink-0 z-20"
            style={{
              width: "0.32em",
              height: "0.3em",
              marginLeft: "0.04em",
              marginRight: "0.04em",
              verticalAlign: "baseline",
              transform: "translateY(36%)",
            }}
            aria-hidden="true"
          >
            <Image
              src="/pic3.png"
              alt=""
              width={64}
              height={59}
              priority
              className="w-full h-auto object-contain select-none pointer-events-none"
            />
          </span>

          {/* DESIGN */}
          <span className="font-anton text-white uppercase leading-none select-none">
            {footer.headlineWord2}
          </span>
        </FitText>
      </div>

      {/* Horizontal Divider Line */}
      <div className="relative w-full border-t border-white/[0.18] z-10" />

      {/* Lower Section Grid (Matching 1440px Artboard & X=887.5px Divider) */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[70px] pt-10 sm:pt-14 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[340px] gap-10 lg:gap-0">

          {/* Left Block (61.6% width -> col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-between pr-0 lg:pr-12 xl:pr-16 space-y-12 lg:space-y-0">
            {/* Two Channels Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
              {footer.channels.map((channel, idx) => (
                <div key={idx} className="space-y-6">
                  <Link
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-normal text-[13px] sm:text-[14px] text-white hover:text-[#FF4200] transition-colors"
                  >
                    <span>{channel.title}</span>
                    <span className="text-xs">↗</span>
                  </Link>

                  <div className="space-y-1">
                    <p className="text-[12.7px] text-neutral-500 font-normal">
                      {channel.description}
                    </p>
                    <a
                      href={`mailto:${channel.email}`}
                      className="block text-[13.2px] text-neutral-300 hover:text-white transition-colors"
                    >
                      {channel.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Statement Tagline */}
            <div className="pt-8 lg:pt-16">
              <p className="text-[13.2px] text-neutral-500 font-normal">
                {footer.tagline}
              </p>
            </div>
          </div>

          {/* Vertical Divider Line & Right Block (38.4% width -> col-span-5) */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/[0.18] pt-8 lg:pt-0 lg:pl-10 xl:pl-14 flex flex-col justify-between space-y-8">

            {/* Newsletter Form */}
            <NewsletterForm />

            {/* Middle Domain Links */}
            <div className="flex items-center gap-6 text-[13.5px] font-normal pt-2">
              <Link
                href="https://upthrust.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FF4200] transition-colors inline-flex items-center gap-1"
              >
                <span>upthrust.agency</span>
                <span>↗</span>
              </Link>
              <Link
                href="https://upthrust.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FF4200] transition-colors inline-flex items-center gap-1"
              >
                <span>upthrust.io</span>
                <span>↗</span>
              </Link>
            </div>

            {/* Bottom Socials & Legal Links */}
            <div className="space-y-1.5 text-[13px] font-normal pt-2">
              <p className="text-neutral-300">
                {footer.socialLinks[0]?.label || "Instagram, LinkedIn"}
              </p>
              {footer.legalLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="block text-neutral-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <p className="text-neutral-500 pt-0.5">{footer.copyright}</p>
            </div>

          </div>

        </div>
      </div>

      {/* Wavy Wireframe Mesh Background - matching Services section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[60vh] z-0 overflow-hidden select-none opacity-20">
        <svg
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 h-full w-full object-cover"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="footerWaveFade" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="white" stopOpacity="0.15" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Wavy Horizontal Lines */}
          {Array.from({ length: 15 }).map((_, i) => {
            const yOffset = i * 40;
            return (
              <path
                key={`footer-h-wave-${i}`}
                d={`M0 ${yOffset} C 400 ${yOffset + 40}, 1000 ${yOffset - 40}, 1440 ${yOffset}`}
                stroke="url(#footerWaveFade)"
                strokeWidth="1"
              />
            );
          })}

          {/* Wavy Vertical Lines */}
          {Array.from({ length: 36 }).map((_, i) => {
            const xOffset = i * 40;
            return (
              <path
                key={`footer-v-wave-${i}`}
                d={`M${xOffset} 0 C ${xOffset + (i % 2 === 0 ? 30 : -30)} 300, ${xOffset - (i % 2 === 0 ? 30 : -30)} 600, ${xOffset} 1440`}
                stroke="url(#footerWaveFade)"
                strokeWidth="0.8"
              />
            );
          })}
        </svg>
      </div>
    </footer>
  );
}
