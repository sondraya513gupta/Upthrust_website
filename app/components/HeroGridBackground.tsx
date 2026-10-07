import React from "react";

export function HeroGridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0">
      {/* Background Grid Pattern */}
      <svg
        className="absolute inset-0 h-full w-full stroke-black/[0.05]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="blueprint-grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path d="M 80 0 L 0 0 0 80" fill="none" strokeWidth="1" />
            {/* Center crosshair */}
            <path
              d="M 37 40 L 43 40 M 40 37 L 40 43"
              fill="none"
              stroke="rgba(0, 0, 0, 0.12)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
      </svg>

      {/* Technical CAD / Architectural Drawing in Bottom Right */}
      <div className="absolute right-[-40px] bottom-[-40px] sm:right-0 sm:bottom-0 w-[420px] h-[420px] sm:w-[540px] sm:h-[540px] lg:w-[680px] lg:h-[680px] opacity-[0.22] transition-opacity duration-500 hover:opacity-30">
        <svg
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-neutral-800"
        >
          {/* Outer Construction Lines & Axes */}
          <line x1="100" y1="700" x2="750" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="50" y1="400" x2="750" y2="400" stroke="currentColor" strokeWidth="1" strokeDasharray="8 6" />
          <line x1="450" y1="50" x2="450" y2="750" stroke="currentColor" strokeWidth="1" strokeDasharray="8 6" />
          <line x1="200" y1="200" x2="700" y2="700" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />

          {/* Concentric Arena / Colosseum Rings */}
          <circle cx="450" cy="400" r="320" stroke="currentColor" strokeWidth="1.2" strokeDasharray="6 4" />
          <circle cx="450" cy="400" r="280" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="450" cy="400" r="250" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="450" cy="400" r="220" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="450" cy="400" r="180" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="450" cy="400" r="140" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="450" cy="400" r="100" stroke="currentColor" strokeWidth="2" />
          <circle cx="450" cy="400" r="60" stroke="currentColor" strokeWidth="1" />
          <circle cx="450" cy="400" r="25" stroke="currentColor" strokeWidth="1.5" />

          {/* Radial Radial Sectors / Tier Dividers */}
          {Array.from({ length: 36 }).map((_, i) => {
            const angle = (i * 10 * Math.PI) / 180;
            const x1 = 450 + Math.cos(angle) * 100;
            const y1 = 400 + Math.sin(angle) * 100;
            const x2 = 450 + Math.cos(angle) * 280;
            const y2 = 400 + Math.sin(angle) * 280;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="currentColor"
                strokeWidth={i % 3 === 0 ? "1.4" : "0.75"}
                strokeDasharray={i % 2 === 0 ? "none" : "2 2"}
              />
            );
          })}

          {/* Structural Stepped Rectangles & Buttresses */}
          <rect x="560" y="220" width="120" height="70" transform="rotate(35 560 220)" stroke="currentColor" strokeWidth="1.2" />
          <rect x="620" y="320" width="110" height="60" transform="rotate(50 620 320)" stroke="currentColor" strokeWidth="1" />
          <rect x="520" y="490" width="130" height="80" transform="rotate(75 520 490)" stroke="currentColor" strokeWidth="1.2" />
          <rect x="340" y="580" width="110" height="60" transform="rotate(110 340 580)" stroke="currentColor" strokeWidth="1" />
          <rect x="230" y="520" width="120" height="70" transform="rotate(130 230 520)" stroke="currentColor" strokeWidth="1.2" />

          {/* Sectional Hatching Marks */}
          <path d="M 520 280 L 580 340 M 530 270 L 590 330 M 540 260 L 600 320" stroke="currentColor" strokeWidth="0.8" />
          <path d="M 640 420 L 700 480 M 650 410 L 710 470 M 660 400 L 720 460" stroke="currentColor" strokeWidth="0.8" />
          <path d="M 400 620 L 460 680 M 410 610 L 470 670 M 420 600 L 480 660" stroke="currentColor" strokeWidth="0.8" />

          {/* Dimension Arrows and Technical Annotations */}
          <circle cx="450" cy="400" r="3" fill="currentColor" />
          <text x="465" y="395" fontSize="11" fontFamily="monospace" fill="currentColor" opacity="0.8">R=320.00</text>
          <text x="680" y="260" fontSize="10" fontFamily="monospace" fill="currentColor" opacity="0.8">SEC-A</text>
          <text x="310" y="660" fontSize="10" fontFamily="monospace" fill="currentColor" opacity="0.8">AX-09</text>
        </svg>
      </div>
    </div>
  );
}
