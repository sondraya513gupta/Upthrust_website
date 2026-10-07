import React from "react";

export function ServicesBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0">
      {/* Deep Black Base */}
      <div className="absolute inset-0 bg-[#000000]" />

      {/* Warped 3D Perspective Wireframe Mesh */}
      <svg
        viewBox="0 0 1600 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full object-cover opacity-35"
        preserveAspectRatio="none"
      >
        {/* Horizontal Perspective Wave Lines */}
        {Array.from({ length: 18 }).map((_, i) => {
          const y = 50 + i * 48;
          return (
            <path
              key={`h-${i}`}
              d={`M0 ${y} Q 400 ${y - 40 + i * 4}, 800 ${y + 30 - i * 3} T 1600 ${y - 20}`}
              stroke="white"
              strokeWidth="0.8"
              strokeOpacity={0.08 + (i % 3 === 0 ? 0.05 : 0)}
            />
          );
        })}

        {/* Vertical Perspective Wave Lines */}
        {Array.from({ length: 26 }).map((_, i) => {
          const x = 40 + i * 60;
          return (
            <path
              key={`v-${i}`}
              d={`M${x} 0 Q ${x + (i - 13) * 6} 450, ${x + (i - 13) * 12} 900`}
              stroke="white"
              strokeWidth="0.8"
              strokeOpacity={0.07 + (i % 4 === 0 ? 0.05 : 0)}
            />
          );
        })}

        {/* Ambient Subtle Glows */}
        <circle cx="200" cy="300" r="250" fill="#FF4200" fillOpacity="0.06" filter="blur(80px)" />
        <circle cx="1100" cy="400" r="300" fill="#FF4200" fillOpacity="0.08" filter="blur(90px)" />
      </svg>
    </div>
  );
}
