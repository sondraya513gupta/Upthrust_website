"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "../content/siteContent";
import { ServicesBackground } from "./ServicesBackground";
import { ServiceMockupBoard } from "./ServiceMockupBoard";

export function ServicesSection() {
  const { services } = siteContent;
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.scrollWidth / services.items.length;
      sliderRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
      setActiveCardIndex(index);
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth } = sliderRef.current;
      const cardWidth = scrollWidth / services.items.length;
      const newIndex = Math.round(scrollLeft / cardWidth);
      if (newIndex !== activeCardIndex && newIndex >= 0 && newIndex < services.items.length) {
        setActiveCardIndex(newIndex);
      }
    }
  };

  return (
    <section
      id="services"
      className="relative w-full bg-black text-white overflow-hidden py-12 sm:py-16 lg:py-20 select-none border-t border-neutral-900"
      aria-label="Services Section"
    >
      {/* 3D Wireframe Perspective Background */}
      <ServicesBackground />

      {/* Top Header Badge & Navigation Controls */}
      <div className="relative z-20 mx-auto flex max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-16 mb-8 sm:mb-12">
        {/* Purple Badge: ❖ SERVICES */}
        <div className="inline-flex items-center gap-2">
          <span className="text-purple-400 text-base sm:text-lg">❖</span>
          <span className="text-sm sm:text-base font-extrabold tracking-[0.2em] text-purple-400 uppercase">
            {services.sectionBadge}
          </span>
        </div>

        {/* Carousel Prev/Next Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollToIndex(Math.max(0, activeCardIndex - 1))}
            disabled={activeCardIndex === 0}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/40 disabled:opacity-30 disabled:pointer-events-none"
            aria-label="Previous service"
          >
            ←
          </button>
          <button
            onClick={() => scrollToIndex(Math.min(services.items.length - 1, activeCardIndex + 1))}
            disabled={activeCardIndex === services.items.length - 1}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/40 disabled:opacity-30 disabled:pointer-events-none"
            aria-label="Next service"
          >
            →
          </button>
        </div>
      </div>

      {/* Horizontal Cards Showcase Track with Continuous 3D Pipe */}
      <div className="relative z-10 w-full">
        {/* Scrollable Track */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex w-full overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-6 sm:px-10 lg:px-16 pb-6 gap-6 sm:gap-8"
        >
          {/* Continuous 3D Copper Coil Background (Spans full length of cards) */}
          <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-[3400px] h-[340px] sm:h-[420px] lg:h-[480px] z-0 opacity-80 mix-blend-screen select-none">
            <Image
              src="/pic1.png"
              alt="Upthrust continuous 3D looped tubular orange coil"
              fill
              className="object-contain object-left scale-105"
              priority
            />
          </div>

          {/* Service Cards */}
          {services.items.map((service, index) => {
            const isActive = activeCardIndex === index;

            return (
              <div
                key={service.id}
                onClick={() => scrollToIndex(index)}
                className={`relative z-10 flex flex-col justify-between shrink-0 w-[90vw] sm:w-[680px] md:w-[740px] lg:w-[820px] xl:w-[860px] snap-center rounded-2xl bg-black/75 backdrop-blur-md p-6 sm:p-8 lg:p-10 transition-all duration-300 border ${
                  isActive
                    ? "border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.22)]"
                    : "border-neutral-800 hover:border-neutral-700"
                }`}
              >
                {/* Card Header: Kicker + Large Title */}
                <div className="mb-6">
                  <span className="block text-[10px] sm:text-xs font-mono tracking-widest text-neutral-400 uppercase font-semibold">
                    {service.kicker}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black tracking-tight text-white leading-tight mt-1">
                    {service.title}
                  </h2>
                </div>

                {/* Card Main Body: Split into Visual Mockup & Information */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Left Column: Interactive UI/Visual Mockup Board */}
                  <div className="md:col-span-6 w-full relative z-10">
                    <ServiceMockupBoard type={service.visualType} />
                  </div>

                  {/* Right Column: Explanatory Copy, Capabilities & Contact CTA */}
                  <div className="md:col-span-6 flex flex-col justify-between space-y-4 sm:space-y-5 text-left relative z-10">
                    
                    {/* Lead Description */}
                    <p className="text-sm sm:text-base text-neutral-200 font-medium leading-relaxed">
                      {service.description}
                    </p>

                    {/* Bullet Points with Sparkle Icon */}
                    <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                      {service.capabilities.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#FF3800] text-xs mt-0.5 shrink-0">✦</span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Solid White Rectangular CTA Button with Bold Orange Text */}
                    <div className="pt-2">
                      <Link
                        href={service.ctaHref}
                        className="inline-block bg-white text-[#FF3800] font-black text-xs sm:text-sm uppercase tracking-wider px-7 py-3 rounded-md shadow-lg transition-all duration-200 hover:bg-neutral-100 hover:shadow-xl active:scale-95"
                      >
                        {service.ctaText}
                      </Link>
                    </div>

                  </div>
                </div>

                {/* Card Index Marker */}
                <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-neutral-500 border-t border-neutral-900 pt-3">
                  <span>SERVICE 0{index + 1} / 0{services.items.length}</span>
                  <span className="text-neutral-600">UPTHRUST EXPERTISE</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {services.items.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeCardIndex === i ? "w-8 bg-[#FF3800]" : "w-2 bg-neutral-700 hover:bg-neutral-500"
              }`}
              aria-label={`Go to service ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
