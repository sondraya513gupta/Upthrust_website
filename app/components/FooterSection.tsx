import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "../content/siteContent";
import { NewsletterForm } from "./NewsletterForm";

export function FooterSection() {
  const { footer } = siteContent;

  return (
    <footer
      id="contact"
      className="relative w-full bg-[#030303] text-white overflow-hidden pt-16 sm:pt-24 pb-12 select-none border-t border-neutral-900"
      aria-label="Footer and Newsletter"
    >
      {/* Background Warped Perspective Mesh Lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30 select-none">
        <svg
          viewBox="0 0 1600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
        >
          {/* Top Edge Warped Waves */}
          {Array.from({ length: 7 }).map((_, i) => (
            <path
              key={`top-${i}`}
              d={`M0 ${20 + i * 25} Q 800 ${80 - i * 5}, 1600 ${20 + i * 20}`}
              stroke="white"
              strokeWidth="0.8"
              strokeOpacity="0.08"
            />
          ))}

          {/* Bottom Edge Warped Waves */}
          {Array.from({ length: 7 }).map((_, i) => (
            <path
              key={`bot-${i}`}
              d={`M0 ${500 - i * 20} Q 800 ${440 + i * 5}, 1600 ${510 - i * 18}`}
              stroke="white"
              strokeWidth="0.8"
              strokeOpacity="0.08"
            />
          ))}

          {/* Vertical Guides */}
          {Array.from({ length: 22 }).map((_, i) => (
            <line
              key={`v-${i}`}
              x1={i * 75}
              y1="0"
              x2={i * 75 + (i - 11) * 8}
              y2="600"
              stroke="white"
              strokeWidth="0.8"
              strokeOpacity="0.06"
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Massive Brand Headline: UPTHRUST [pic3.png] DESIGN */}
        <div className="w-full text-center pb-10 sm:pb-14">
          <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-6 tracking-tight">
            <span className="font-display font-black text-white uppercase text-[12vw] sm:text-[10vw] md:text-[9vw] lg:text-[116px] xl:text-[138px] leading-none select-none">
              {footer.headlineWord1}
            </span>
            
            {/* The 3-Petal Brand Symbol: pic3.png */}
            <div className="relative inline-flex items-center justify-center w-[7vw] max-w-[64px] sm:max-w-[76px] lg:max-w-[88px] h-auto shrink-0 transform translate-y-1 sm:translate-y-2">
              <Image
                src={footer.symbolImage}
                alt="Upthrust brand petal symbol"
                width={88}
                height={88}
                style={{ width: "100%", height: "auto" }}
                className="w-full h-auto object-contain"
              />
            </div>

            <span className="font-display font-black text-white uppercase text-[12vw] sm:text-[10vw] md:text-[9vw] lg:text-[116px] xl:text-[138px] leading-none select-none">
              {footer.headlineWord2}
            </span>
          </div>
        </div>

        {/* Horizontal Divider Line */}
        <div className="w-full border-t border-neutral-800/90 mb-12 sm:mb-16" />

        {/* Lower Grid: Agency Info (Left) & Form / Legal (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Block: Agency Channels & Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-12">
            
            {/* Channels Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
              {footer.channels.map((channel, idx) => (
                <div key={idx} className="space-y-3">
                  <Link
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-sm sm:text-base text-white hover:text-[#FF3800] transition-colors underline-offset-4 hover:underline"
                  >
                    <span>{channel.title}</span>
                    <span className="text-xs">↗</span>
                  </Link>

                  <p className="text-xs text-neutral-400 font-medium">
                    {channel.description}
                  </p>

                  <a
                    href={`mailto:${channel.email}`}
                    className="block text-xs sm:text-sm text-neutral-300 hover:text-white transition-colors"
                  >
                    {channel.email}
                  </a>
                </div>
              ))}
            </div>

            {/* Bottom Statement Tagline */}
            <div className="pt-8 sm:pt-16">
              <p className="text-xs sm:text-sm text-neutral-500 max-w-md font-mono">
                {footer.tagline}
              </p>
            </div>
          </div>

          {/* Right Block: Newsletter Form & Social / Legal Links */}
          <div className="lg:col-span-5 lg:border-l lg:border-neutral-800/90 lg:pl-10 xl:pl-14 flex flex-col justify-between space-y-10">
            
            {/* Newsletter Form */}
            <NewsletterForm />

            {/* Right Sub-links, Socials & Legal */}
            <div className="space-y-6 pt-4 border-t border-neutral-800/50">
              {/* Secondary Domain Links */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
                <Link
                  href="https://upthrust.agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#FF3800] transition-colors underline-offset-2 hover:underline inline-flex items-center gap-1"
                >
                  <span>upthrust.agency</span>
                  <span>↗</span>
                </Link>
                <Link
                  href="https://upthrust.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#FF3800] transition-colors underline-offset-2 hover:underline inline-flex items-center gap-1"
                >
                  <span>upthrust.io</span>
                  <span>↗</span>
                </Link>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-4 text-xs text-neutral-400">
                {footer.socialLinks.map((social, i) => (
                  <Link
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {social.label}
                    {i < footer.socialLinks.length - 1 && <span className="ml-4 text-neutral-600">,</span>}
                  </Link>
                ))}
              </div>

              {/* Legal & Copyright */}
              <div className="text-[11px] text-neutral-500 space-y-1">
                {footer.legalLinks.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="block hover:text-neutral-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <p className="pt-1">{footer.copyright}</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}
