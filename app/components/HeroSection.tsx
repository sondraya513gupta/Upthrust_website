import React from "react";
import Image from "next/image";
import { siteContent } from "../content/siteContent";
import { HeroGridBackground } from "./HeroGridBackground";
import {
  HandDrawnOval,
  HandDrawnUnderline,
  HandDrawnSquiggle,
} from "./HandDrawnMarks";

export function HeroSection() {
  const { hero } = siteContent;

  return (
    <section
      className="relative flex flex-col justify-between overflow-hidden bg-white min-h-[calc(100vh-140px)] select-none pt-2 pb-4"
      aria-label="Hero Section"
    >
      {/* CAD Blueprint & Grid Background */}
      <HeroGridBackground />

      {/* Main Interactive Stage */}
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col items-center justify-between px-4 sm:px-8 lg:px-12 z-10 my-auto py-2">
        
        {/* Top Headline: BOLD DESIGN */}
        <div className="w-full text-center relative z-10 pt-2 sm:pt-4">
          <h1 className="font-display italic font-black text-[#FF3800] tracking-[-0.04em] leading-[0.88] text-[12vw] sm:text-[11vw] md:text-[9.5vw] lg:text-[124px] xl:text-[144px] uppercase select-none drop-shadow-sm transform -skew-x-[8deg] whitespace-nowrap">
            {hero.headlineTop}
          </h1>
        </div>

        {/* Center Stage: Neoclassical Iridescent Bust & Side Annotations */}
        <div className="relative w-full flex items-center justify-center -my-4 sm:-my-8 md:-my-12 lg:-my-16 z-20 min-h-[300px] sm:min-h-[400px] md:min-h-[480px]">
          
          {/* Annotation 1: Left Mid-Top (STRATEGY IS CHEAPER) */}
          <div className="absolute left-2 sm:left-6 md:left-[8%] lg:left-[11%] top-[8%] sm:top-[12%] md:top-[16%] z-30">
            <p className="font-black text-[11px] sm:text-xs md:text-sm lg:text-base tracking-wider text-black uppercase leading-tight font-sans">
              {hero.leftNote1.line1}
            </p>
            <div className="relative inline-block mt-0.5">
              <span className="font-black text-[11px] sm:text-xs md:text-sm lg:text-base tracking-wider text-black uppercase font-sans">
                {hero.leftNote1.line2}
              </span>
              <HandDrawnOval />
            </div>
          </div>

          {/* Annotation 2: Left Mid-Bottom (IDENTITY • EXPERIENCE • MOTION) */}
          <div className="absolute left-2 sm:left-6 md:left-[6%] lg:left-[8%] bottom-[8%] sm:bottom-[12%] md:bottom-[16%] z-30 space-y-0.5 text-left">
            <p className="font-black text-xs sm:text-sm md:text-base lg:text-xl tracking-wider text-black uppercase leading-snug font-sans">
              {hero.leftNote2.items[0]} •
            </p>
            <p className="font-black text-xs sm:text-sm md:text-base lg:text-xl tracking-wider text-black uppercase leading-snug font-sans">
              {hero.leftNote2.items[1]} •
            </p>
            <div className="relative inline-block">
              <span className="font-black text-xs sm:text-sm md:text-base lg:text-xl tracking-wider text-black uppercase leading-snug font-sans">
                {hero.leftNote2.items[2]} •
              </span>
              <HandDrawnUnderline />
            </div>
          </div>

          {/* Centerpiece 3D Iridescent Bust (Venus) */}
          <div className="relative z-20 flex justify-center items-center w-[240px] sm:w-[320px] md:w-[400px] lg:w-[460px] xl:w-[500px] max-w-[85vw] transition-transform duration-500 hover:scale-[1.015]">
            <Image
              src={hero.bustImage.src}
              alt={hero.bustImage.alt}
              width={hero.bustImage.width}
              height={hero.bustImage.height}
              priority
              className="h-auto w-full object-contain pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.16)]"
            />
          </div>

          {/* Word: "THAT" (Positioned on the right of the bust's neck/shoulder) */}
          <div className="absolute right-[4%] sm:right-[10%] md:right-[15%] lg:right-[20%] top-[38%] sm:top-[40%] md:top-[42%] z-10 pointer-events-none">
            <span className="font-display italic font-black text-[#FF3800] tracking-tight leading-none text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl uppercase transform -skew-x-[8deg] select-none">
              {hero.headlineMiddle}
            </span>
          </div>

          {/* Annotation 3: Right Mid-Top (COMFORTABLE IS EXPENSIVE) */}
          <div className="absolute right-2 sm:right-6 md:right-[8%] lg:right-[12%] top-[10%] sm:top-[14%] md:top-[18%] z-30 text-left">
            <p className="font-black text-[11px] sm:text-xs md:text-sm lg:text-base tracking-wider text-black uppercase leading-tight font-sans">
              {hero.rightNote.line1}
            </p>
            <div className="relative inline-block mt-0.5">
              <span className="font-black text-[11px] sm:text-xs md:text-sm lg:text-base tracking-wider text-black uppercase font-sans">
                {hero.rightNote.line2}
              </span>
              <HandDrawnSquiggle />
            </div>
          </div>
        </div>

        {/* Bottom Headline: PERFORMS */}
        <div className="w-full text-center relative z-10 pb-2 sm:pb-4">
          <span className="font-display italic font-black text-[#FF3800] tracking-[-0.04em] leading-[0.88] text-[12vw] sm:text-[11vw] md:text-[9.5vw] lg:text-[124px] xl:text-[144px] uppercase select-none drop-shadow-sm block transform -skew-x-[8deg] whitespace-nowrap">
            {hero.headlineBottom}
          </span>
        </div>

      </div>
    </section>
  );
}
