"use client";

import React from "react";
import Image from "next/image";

interface ServiceMockupBoardProps {
  type: string;
  imageSrc?: string;
  title?: string;
}

export function ServiceMockupBoard({ type, imageSrc, title }: ServiceMockupBoardProps) {
  if (imageSrc) {
    return (
      <div className="group relative w-full h-[240px] sm:h-[300px] md:h-[340px] lg:h-[380px] rounded-2xl overflow-hidden bg-neutral-950 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-white/25 hover:shadow-[0_25px_60px_rgba(255,66,0,0.15)] select-none">
        <Image
          src={imageSrc}
          alt={title || `Upthrust ${type} showcase mockup`}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 600px"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          priority
        />
        {/* Subtle glass rim overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
      </div>
    );
  }

  return null;
}
