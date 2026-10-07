import React from "react";
import Image from "next/image";
import { siteContent } from "../content/siteContent";
import { HeroGridBackground } from "./HeroGridBackground";
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
      className="relative flex flex-col justify-between overflow-hidden bg-white min-h-[calc(100vh-80px)] select-none pt-2 pb-2"
      aria-label="Hero Section"
    >
      {/* CAD Blueprint & Architectural Grid Background */}
      <HeroGridBackground />

      {/* Main Interactive Stage */}
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col items-center justify-between px-4 sm:px-8 lg:px-10 z-10 my-auto py-1 sm:py-2">
        
        {/* Top Headline: BOLD DESIGN (Figma: Width 1,363.12px x Height 160.6px, Top 81px, Left 38.44px, Color #FF4200) */}
        <div className="w-full max-w-[1363px] mx-auto pt-1 sm:pt-2 flex justify-center items-center z-10">
          <Image
            src="/bold-design.svg"
            alt="BOLD DESIGN"
            width={1363}
            height={161}
            priority
            className="w-full h-auto max-w-[1363px] max-h-[161px] object-contain select-none drop-shadow-xs"
          />
          <h1 className="sr-only">BOLD DESIGN THAT PERFORMS</h1>
        </div>

        {/* Center Stage: Neoclassical 3D Iridescent Bust & Annotations */}
        <div className="relative w-full flex items-center justify-center -my-3 sm:-my-6 md:-my-10 lg:-my-14 z-20 min-h-[350px] sm:min-h-[460px] md:min-h-[520px]">
          
          {/* Annotation 1: Left Mid-Top (STRATEGY IS CHEAPER) */}
          <div className="absolute left-2 sm:left-6 md:left-[6%] lg:left-[10%] top-[10%] sm:top-[14%] md:top-[18%] z-30 text-left">
            <p className="font-bold text-[11px] sm:text-xs md:text-sm lg:text-[14px] tracking-wide text-black uppercase leading-tight font-sans">
              {hero.leftNote1.line1}
            </p>
            <div className="relative inline-block mt-0.5">
              <span className="font-bold text-[11px] sm:text-xs md:text-sm lg:text-[14px] tracking-wide text-black uppercase font-sans">
                {hero.leftNote1.line2}
              </span>
              <HandDrawnOval />
            </div>
          </div>

          {/* Annotation 2: Left Mid-Bottom (IDENTITY · EXPERIENCE · MOTION ·) */}
          {/* Figma Spec: Inter 700 Bold, 40px, Line-height 120%, Letter-spacing -4%, Color #000000 */}
          <div className="absolute left-2 sm:left-6 md:left-[5%] lg:left-[8%] bottom-[6%] sm:bottom-[10%] md:bottom-[14%] z-30 space-y-0.5 text-left">
            <p className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-[40px] leading-[1.2] tracking-[-0.04em] text-black font-sans uppercase">
              {hero.leftNote2.items[0]} ·
            </p>
            <p className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-[40px] leading-[1.2] tracking-[-0.04em] text-black font-sans uppercase">
              {hero.leftNote2.items[1]} ·
            </p>
            <div className="relative inline-block">
              <span className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-[40px] leading-[1.2] tracking-[-0.04em] text-black font-sans uppercase">
                {hero.leftNote2.items[2]} ·
              </span>
              <HandDrawnUnderline />
            </div>
          </div>

          {/* Centerpiece Neoclassical Bust with Iridescent Shader & 3D Interaction */}
          <Statue3DViewer
            modelSrc="/statue.glb"
            posterSrc={hero.bustImage.src}
            alt={hero.bustImage.alt}
          />

          {/* Word: "THAT" (Exact Vector from Figma positioned to the right of bust's neck) */}
          <div className="absolute right-[4%] sm:right-[10%] md:right-[14%] lg:right-[18%] top-[37%] sm:top-[39%] md:top-[41%] z-10 pointer-events-none">
            <Image
              src="/that.svg"
              alt="THAT"
              width={294}
              height={92}
              priority
              className="w-[100px] sm:w-[150px] md:w-[200px] lg:w-[260px] xl:w-[294px] h-auto object-contain select-none"
            />
          </div>

          {/* Annotation 3: Right Mid-Top (COMFORTABLE IS EXPENSIVE) */}
          <div className="absolute right-2 sm:right-6 md:right-[6%] lg:right-[10%] top-[10%] sm:top-[14%] md:top-[18%] z-30 text-left">
            <p className="font-bold text-[11px] sm:text-xs md:text-sm lg:text-[18px] tracking-tight text-black uppercase leading-tight font-sans">
              {hero.rightNote.line1}
            </p>
            <div className="relative inline-block mt-0.5">
              <span className="font-bold text-[11px] sm:text-xs md:text-sm lg:text-[18px] tracking-tight text-black uppercase font-sans">
                {hero.rightNote.line2}
              </span>
              <HandDrawnSquiggle />
            </div>
          </div>
        </div>

        {/* Bottom Headline: PERFORMS (Exact Vector from Figma in #FF4200) */}
        <div className="w-full max-w-[1240px] mx-auto pb-1 sm:pb-3 flex justify-center items-center z-10">
          <Image
            src="/performs.svg"
            alt="PERFORMS"
            width={1131}
            height={161}
            priority
            className="w-full h-auto max-w-[1131px] max-h-[161px] object-contain select-none drop-shadow-xs"
          />
        </div>

      </div>
    </section>
  );
}
