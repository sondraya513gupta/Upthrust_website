import React from "react";

export function ZomatoLogo({ className = "h-5" }: { className?: string }) {
  return (
    <span className={`font-black tracking-tight text-xl md:text-2xl lowercase select-none text-neutral-900 ${className}`}>
      zomato
    </span>
  );
}

export function BoschLogo({ className = "h-6" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 select-none ${className}`}>
      <svg viewBox="0 0 32 32" className="w-5 h-5 shrink-0" fill="currentColor">
        {/* Bosch Circle with Armature Icon */}
        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2.8" fill="none" />
        <rect x="14" y="5" width="4" height="22" rx="1.5" />
        <rect x="5" y="14" width="22" height="4" rx="1.5" />
      </svg>
      <span className="font-black text-lg md:text-xl tracking-wider uppercase text-neutral-900">
        BOSCH
      </span>
    </div>
  );
}

export function LorealLogo({ className = "h-5" }: { className?: string }) {
  return (
    <span className={`font-semibold tracking-[0.22em] text-lg md:text-xl uppercase select-none text-neutral-900 font-serif ${className}`}>
      L&apos;ORÉAL
    </span>
  );
}

export function VegaLogo({ className = "h-5" }: { className?: string }) {
  return (
    <span className={`font-black tracking-[0.18em] text-lg md:text-xl uppercase select-none text-neutral-900 ${className}`}>
      VEGA
    </span>
  );
}

export function DellLogo({ className = "h-6" }: { className?: string }) {
  return (
    <div className={`flex items-center select-none font-black text-xl md:text-2xl text-neutral-900 ${className}`}>
      <span>D</span>
      <span className="inline-block transform -rotate-[22deg] origin-center -mx-[1px] translate-y-[-1px]">
        E
      </span>
      <span>LL</span>
    </div>
  );
}

export function ClientLogoItem({ id }: { id: string }) {
  switch (id) {
    case "zomato":
      return <ZomatoLogo />;
    case "bosch":
      return <BoschLogo />;
    case "loreal":
    case "loreal-2":
      return <LorealLogo />;
    case "vega":
      return <VegaLogo />;
    case "dell":
      return <DellLogo />;
    default:
      return null;
  }
}
