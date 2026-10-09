import React from "react";
import Image from "next/image";
import { siteContent } from "../content/siteContent";
import {
  HandDrawnOval,
  HandDrawnUnderline,
  HandDrawnSquiggle,
} from "./HandDrawnMarks";
import { Statue3DViewer } from "./Statue3DViewer";

export function HeroSection() {
  const { hero } = siteContent;

  return (
    <section
      className="relative flex min-h-0 flex-1 flex-col justify-between select-none"
      aria-label="Hero Section"
    >
      <h1 className="sr-only">BOLD DESIGN THAT PERFORMS</h1>

      {/* Full hero layout container */}
      <div className="relative z-[2] mx-auto flex h-full w-full max-w-[1440px] flex-1 flex-col px-4 sm:px-6 lg:px-10">

        {/* ── ROW 1: BOLD DESIGN ── sits above the statue at z-10, statue is z-20 so it overlaps */}
        <div className="relative z-10 w-full pt-1 sm:pt-2">
          <Image
            src="/bold-design.svg"
            alt="BOLD DESIGN"
            width={1363}
            height={161}
            priority
            className="h-auto w-full object-contain select-none"
            style={{ maxHeight: "18vh" }}
          />
        </div>

        {/* ── MIDDLE ZONE: statue + side annotations + THAT ── */}
        {/* Negative margin pulls statute up into BOLD DESIGN and down into PERFORMS */}
        <div
          className="relative z-[3] flex w-full flex-1 items-center justify-center"
          style={{ marginTop: "-10vh", marginBottom: "-10vh" }}
        >
          {/* LEFT ANNOTATIONS */}

          {/* "Strategy is Cheaper" — upper-left */}
          <div className="absolute left-2 sm:left-6 md:left-[5%] lg:left-[8%] top-[14%] z-[5] text-left">
            <p className="font-sans text-[10px] font-bold uppercase leading-tight tracking-wide text-black sm:text-xs md:text-[13px] lg:text-[14px]">
              {hero.leftNote1.line1}
            </p>
            <div className="relative mt-0.5 inline-block">
              <span className="font-sans text-[10px] font-bold uppercase tracking-wide text-black sm:text-xs md:text-[13px] lg:text-[14px]">
                {hero.leftNote1.line2}
              </span>
              <HandDrawnOval />
            </div>
          </div>

          {/* "Identity · Experience · Motion ·" — lower-left */}
          <div className="absolute left-2 sm:left-6 md:left-[4%] lg:left-[6%] bottom-[10%] z-[5] space-y-0 text-left">
            <p className="font-sans text-base font-black uppercase leading-[1.15] tracking-[-0.03em] text-black sm:text-xl md:text-2xl lg:text-[32px] xl:text-[38px]">
              {hero.leftNote2.items[0]} ·
            </p>
            <p className="font-sans text-base font-black uppercase leading-[1.15] tracking-[-0.03em] text-black sm:text-xl md:text-2xl lg:text-[32px] xl:text-[38px]">
              {hero.leftNote2.items[1]} ·
            </p>
            <div className="relative inline-block">
              <span className="font-sans text-base font-black uppercase leading-[1.15] tracking-[-0.03em] text-black sm:text-xl md:text-2xl lg:text-[32px] xl:text-[38px]">
                {hero.leftNote2.items[2]} ·
              </span>
              <HandDrawnUnderline />
            </div>
          </div>

          {/* THE 3D STATUE — dominant center element */}
          <Statue3DViewer
            modelSrc="/statue.glb"
            posterSrc={hero.bustImage.src}
            alt={hero.bustImage.alt}
          />

          {/* "THAT" SVG — floats right of statue, middle zone */}
          <div className="pointer-events-none absolute right-[2%] sm:right-[8%] md:right-[12%] lg:right-[16%] top-[40%] z-[2]">
            <Image
              src="/that.svg"
              alt="THAT"
              width={294}
              height={92}
              priority
              className="h-auto object-contain select-none w-[90px] sm:w-[140px] md:w-[190px] lg:w-[250px] xl:w-[294px]"
            />
          </div>

          {/* "Comfortable Is Expensive" — upper-right */}
          <div className="absolute right-2 sm:right-6 md:right-[5%] md:top-[18%] lg:right-[9%] top-[14%] z-[5] text-left">
            <p className="font-sans text-[10px] font-bold uppercase leading-tight tracking-tight text-black sm:text-xs md:text-[14px] lg:text-[17px]">
              {hero.rightNote.line1}
            </p>
            <div className="relative mt-0.5 inline-block">
              <span className="font-sans text-[10px] font-bold uppercase tracking-tight text-black sm:text-xs md:text-[14px] lg:text-[17px]">
                {hero.rightNote.line2}
              </span>
              <HandDrawnSquiggle />
            </div>
          </div>
        </div>

        {/* ── ROW 3: PERFORMS ── sits below statue, statue z-20 overlaps down into it */}
        <div className="relative z-[2] w-full max-w-[1240px] pb-1">
          <Image
            src="/performs.svg"
            alt="PERFORMS"
            width={1240}
            height={161}
            priority
            className="h-auto w-full object-contain select-none"
            style={{ maxHeight: "18vh" }}
          />
        </div>
      </div>
    </section>
  );
}
