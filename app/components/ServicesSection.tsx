"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent, ServiceItem } from "../content/siteContent";
import { ServicesBackground } from "./ServicesBackground";

export function ServicesSection() {
  const { services } = siteContent;
  const slideCount = services.items.length;
  const maxIndex = slideCount - 1;
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    const container = sliderRef.current;
    if (!container) return;
    const clamped = Math.max(0, Math.min(maxIndex, index));
    container.scrollTo({ left: clamped * container.clientWidth, behavior: "smooth" });
    setActiveIndex(clamped);
  }, [maxIndex]);

  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;

    const onScroll = () => {
      const index = Math.round(container.scrollLeft / Math.max(container.clientWidth, 1));
      setActiveIndex(Math.max(0, Math.min(maxIndex, index)));
    };

    const onWheel = (event: WheelEvent) => {
      // Only hijack vertical scroll for horizontal slide movement if the user explicitly horizontally scrolls,
      // or if scrolling vertically inside the track before hitting boundaries with generous tolerance.
      if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;

      const maxScroll = container.scrollWidth - container.clientWidth;
      const atStart = container.scrollLeft <= 5;
      const atEnd = container.scrollLeft >= maxScroll - 5;

      // Allow natural vertical page scroll to continue to the footer or hero when at boundaries
      if ((event.deltaY > 0 && atEnd) || (event.deltaY < 0 && atStart)) {
        return;
      }

      event.preventDefault();
      container.scrollLeft += event.deltaY;
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    container.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      container.removeEventListener("scroll", onScroll);
      container.removeEventListener("wheel", onWheel);
    };
  }, [maxIndex]);


  return (
    <section
      id="services"
      className="relative h-screen w-full overflow-hidden bg-black text-white"
      aria-label="Services Showcase"
    >
      <ServicesBackground />

      <div
        ref={sliderRef}
        className="relative z-10 h-full w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory no-scrollbar"
      >
        <div className="relative flex h-full" style={{ width: `${slideCount * 100}%` }}>
          {/* Continuous 3D Orange Curve Line background layer — moves dynamically with every page */}
          <div className="pointer-events-none absolute inset-0 z-0 select-none">
            <Image
              src="/pic1.png"
              alt="3D orange curved pipe line background"
              fill
              priority
              unoptimized
              sizes="400vw"
              className="h-full w-full object-fill opacity-90"
            />
          </div>

          {services.items.map((service: ServiceItem, index: number) => (
            <article
              key={service.id}
              className="relative z-10 flex h-full w-[25%] shrink-0 snap-start flex-col px-6 pt-10 sm:px-10 sm:pt-12 md:px-14 lg:px-16 xl:px-[64px]"
              style={{ width: `${100 / slideCount}%` }}
              aria-label={service.title}
              aria-current={activeIndex === index ? "true" : undefined}
            >
              <div className="relative z-10">
                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/55 sm:text-[11px]">
                  {service.kicker}
                </p>
                <h2 className="text-[36px] font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:whitespace-nowrap md:text-[52px] lg:text-[56px]">
                  {service.title}
                </h2>
              </div>

              <div className="relative z-10 mt-8 flex flex-1 items-center gap-8 pb-10 md:mt-6 md:gap-10 lg:gap-12">
                <div className="w-full max-w-[520px] shrink-0 md:w-[46%] md:max-w-none">
                  <div className="relative aspect-[984/664] w-full overflow-hidden rounded-[18px] shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
                    <Image
                      src={service.imageSrc}
                      alt={`${service.title} work`}
                      fill
                      sizes="(max-width: 768px) 90vw, 46vw"
                      priority={index === 0}
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                <div className="hidden max-w-[360px] flex-col justify-center md:flex">
                  <p className="text-[15px] leading-snug text-white sm:text-base lg:text-[17px]">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {service.capabilities.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-px text-[15px] leading-none text-white" aria-hidden>
                          ✦
                        </span>
                        <span className="text-[14px] font-medium leading-snug text-white">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link
                      href={service.ctaHref}
                      className="inline-flex items-center justify-center rounded-[3px] bg-white px-8 py-3 text-[12px] font-extrabold uppercase tracking-[0.16em] text-[#FF4200] transition-colors hover:bg-[#FF4200] hover:text-white"
                    >
                      {service.ctaText}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pb-8 md:hidden">
                <p className="text-[15px] leading-snug text-white">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.capabilities.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="text-white" aria-hidden>✦</span>
                      <span className="text-[14px] font-medium text-white">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.ctaHref}
                  className="mt-5 inline-flex items-center justify-center rounded-[3px] bg-white px-8 py-3 text-[12px] font-extrabold uppercase tracking-[0.16em] text-[#FF4200]"
                >
                  {service.ctaText}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-5 z-20 flex justify-center gap-2">
        {services.items.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollToIndex(idx)}
            aria-label={`Go to ${item.title}`}
            className={`pointer-events-auto h-1.5 rounded-full transition-all ${activeIndex === idx ? "w-7 bg-[#FF4200]" : "w-2 bg-white/30 hover:bg-white/60"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
