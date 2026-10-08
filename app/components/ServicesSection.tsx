"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "../content/siteContent";
import { ServicesBackground } from "./ServicesBackground";
import { ServiceMockupBoard } from "./ServiceMockupBoard";

export function ServicesSection() {
  const { services } = siteContent;
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check window resize & mobile state
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Sync scroll progress with horizontal card translation
  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const totalScroll = rect.height - window.innerHeight;
    if (totalScroll <= 0) return;

    // Progress from 0 (top of section hits viewport) to 1 (bottom reached)
    const rawProgress = -rect.top / totalScroll;
    const progress = Math.max(0, Math.min(1, rawProgress));
    setScrollProgress(progress);

    // Calculate active card index (0 to 3)
    const cardFraction = progress * (services.items.length - 1);
    const nearestIndex = Math.min(
      services.items.length - 1,
      Math.max(0, Math.round(cardFraction))
    );
    setActiveCardIndex(nearestIndex);
  }, [services.items.length]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Smooth programmatic scroll to a specific card index
  const scrollToCard = (index: number) => {
    if (!containerRef.current) return;
    const clampedIndex = Math.max(0, Math.min(services.items.length - 1, index));
    const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
    const totalScroll = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = containerTop + (clampedIndex / (services.items.length - 1)) * totalScroll;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  // Horizontal translation percentage across the 4 cards (0% to -75%)
  const maxTranslatePercent = ((services.items.length - 1) / services.items.length) * 100;
  const currentTranslatePercent = scrollProgress * maxTranslatePercent;

  return (
    <section
      ref={containerRef}
      id="services"
      className="relative w-full bg-[#000000] text-white select-none h-[380vh] sm:h-[420vh]"
      aria-label="Services Section"
    >
      {/* Deep Pure Black Base Background - Seamlessly Aligned with Hero & Footer */}
      <ServicesBackground />

      {/* Sticky Viewport Pinned While User Scrolls Through the 400vh Track */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-6 sm:py-8 lg:py-10">
        
        {/* Top Header Row: ❖ SERVICES Badge (Left) & Controls (Right) */}
        <div className="relative z-30 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          
          {/* Purple Icon & Section Badge: ❖ SERVICES */}
          <div className="inline-flex items-center gap-2.5">
            <span className="text-[#A855F7] text-base sm:text-lg">❖</span>
            <span className="text-sm sm:text-base font-extrabold tracking-[0.22em] text-[#A855F7] uppercase">
              {services.sectionBadge}
            </span>
          </div>

          {/* Navigation Controls: Index Indicator & Prev / Next Arrows */}
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block text-xs font-mono tracking-widest text-neutral-400">
              0{activeCardIndex + 1} / 0{services.items.length}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollToCard(activeCardIndex - 1)}
                disabled={activeCardIndex === 0}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/40 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                aria-label="Previous service"
              >
                ←
              </button>
              <button
                onClick={() => scrollToCard(activeCardIndex + 1)}
                disabled={activeCardIndex === services.items.length - 1}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/40 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                aria-label="Next service"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Track Container */}
        <div className="relative z-10 w-full flex-1 flex items-center overflow-hidden my-auto">
          
          {/* Animated Cards Track & Continuous 3D Pipe */}
          <div
            ref={trackRef}
            style={{
              transform: `translate3d(-${currentTranslatePercent}%, 0, 0)`,
              transition: isMobile ? "transform 0.1s ease-out" : "transform 0.05s ease-out",
            }}
            className="flex w-[400vw] h-full items-center will-change-transform relative"
          >
            {/* Continuous 3D Dark Orange Looped Pipe (Spans full length across all 4 cards) */}
            <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-[400vw] h-[520px] sm:h-[620px] lg:h-[720px] z-0 select-none">
              <Image
                src="/services-pipe-bg.jpg"
                alt="Continuous 3D looped tubular dark orange coil"
                fill
                sizes="400vw"
                className="object-contain object-left scale-105"
                priority
              />
            </div>

            {/* 4 Service Cards */}
            {services.items.map((service, index) => {
              const isActive = activeCardIndex === index;

              return (
                <div
                  key={service.id}
                  className="relative z-10 w-[100vw] h-full shrink-0 flex items-center justify-center px-4 sm:px-8 lg:px-16"
                >
                  {/* Card Container Frame */}
                  <div
                    className={`relative w-full max-w-[1360px] h-full max-h-[700px] flex flex-col justify-between rounded-3xl bg-black/60 backdrop-blur-md p-6 sm:p-10 lg:p-12 border transition-colors duration-500 ${
                      isActive
                        ? "border-neutral-700 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
                        : "border-neutral-900/80"
                    }`}
                  >
                    {/* Top Header: Kicker + Display Headline */}
                    <div className="mb-6 lg:mb-8">
                      <span className="block text-[11px] sm:text-xs font-mono tracking-[0.2em] text-neutral-400 font-semibold uppercase">
                        {service.kicker}
                      </span>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mt-1">
                        {service.title}
                      </h2>
                    </div>

                    {/* Main Split Grid: Left (Mockup Board) | Right (Description & Capabilities & CTA) */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center flex-1">
                      
                      {/* Left Column: High-Res Mockup Board */}
                      <div className="md:col-span-7 lg:col-span-7 w-full">
                        <ServiceMockupBoard
                          type={service.visualType}
                          imageSrc={service.mockupImage}
                          title={service.title}
                        />
                      </div>

                      {/* Right Column: Explanatory Copy, Capabilities & Contact CTA */}
                      <div className="md:col-span-5 lg:col-span-5 flex flex-col justify-between space-y-6 text-left">
                        
                        {/* Lead Description */}
                        <p className="text-sm sm:text-base lg:text-lg text-neutral-200 font-medium leading-relaxed">
                          {service.description}
                        </p>

                        {/* Capability Bullets with Orange '+' */}
                        <ul className="space-y-3 text-xs sm:text-sm text-neutral-300">
                          {service.capabilities.map((cap, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <span className="text-[#FF4200] font-black text-sm leading-tight shrink-0">
                                +
                              </span>
                              <span className="leading-snug text-neutral-200">{cap}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Optional Spatial Subnote (for Card 4) */}
                        {service.subNote && (
                          <p className="text-[11px] sm:text-xs text-neutral-500 italic leading-snug">
                            {service.subNote}
                          </p>
                        )}

                        {/* Solid White Rectangular CTA Button with Bold Orange Text */}
                        <div className="pt-2">
                          <Link
                            href={service.ctaHref}
                            className="inline-block bg-white text-[#FF4200] font-black text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-lg shadow-xl transition-all duration-300 hover:bg-neutral-100 hover:scale-[1.03] active:scale-95 text-center"
                          >
                            {service.ctaText}
                          </Link>
                        </div>

                      </div>
                    </div>

                    {/* Bottom Card Footer: Card Index & Branding Tag */}
                    <div className="mt-6 flex justify-between items-center text-[10px] sm:text-xs font-mono text-neutral-500 border-t border-neutral-900/80 pt-4">
                      <span>SERVICE 0{index + 1} / 0{services.items.length}</span>
                      <span className="text-neutral-600">UPTHRUST DESIGN</span>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Pagination Dots / Progress Bar */}
        <div className="relative z-30 mx-auto flex items-center justify-center gap-3 pt-4">
          {services.items.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeCardIndex === i
                  ? "w-10 bg-[#FF4200]"
                  : "w-2 bg-neutral-700 hover:bg-neutral-500"
              }`}
              aria-label={`Jump to service ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
