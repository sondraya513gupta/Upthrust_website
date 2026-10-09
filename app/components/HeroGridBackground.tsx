import React from "react";
import Image from "next/image";

export function HeroGridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 select-none z-[1]">
      {/* 1. Structural Architectural Grid Pattern with Crosshairs (+) */}
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="architectural-grid"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            {/* Grid Line Borders */}
            <path
              d="M 120 0 L 0 0 0 120"
              fill="none"
              stroke="rgba(0, 0, 0, 0.065)"
              strokeWidth="1"
            />
            {/* Subtle Intersection Crosshair (+) */}
            <path
              d="M -5 0 L 5 0 M 0 -5 L 0 5"
              fill="none"
              stroke="rgba(0, 0, 0, 0.25)"
              strokeWidth="1.2"
            />
            <path
              d="M 115 0 L 125 0 M 120 -5 L 120 5"
              fill="none"
              stroke="rgba(0, 0, 0, 0.25)"
              strokeWidth="1.2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#architectural-grid)" />
      </svg>

      {/* 2. Exact Vector Blueprint CAD Drawing from Figma (Figma Layer: Vector 863.15px x 640.5px) */}
      <div className="absolute right-0 bottom-0 w-[400px] sm:w-[580px] lg:w-[780px] xl:w-[860px] h-auto opacity-[0.32] transition-opacity duration-500 hover:opacity-[0.42]">
        <Image
          src="/blueprint-cad.svg"
          alt=""
          width={863}
          height={641}
          priority
          className="w-full h-auto object-contain pointer-events-none select-none text-black"
        />
      </div>
    </div>
  );
}
