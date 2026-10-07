import React from "react";

export function HandDrawnOval({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none absolute -inset-x-3 -inset-y-2 h-[calc(100%+16px)] w-[calc(100%+24px)] ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M12 25 C14 10, 45 4, 82 5 C118 6, 134 16, 131 31 C128 44, 98 48, 55 47 C20 46, 5 36, 10 23 C14 14, 32 8, 62 7"
        stroke="#FF3600"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-95"
      />
    </svg>
  );
}

export function HandDrawnUnderline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none absolute -bottom-2 left-0 w-full h-3 ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M2 9 C25 6, 60 14, 85 7 C100 4, 114 9, 118 8"
        stroke="#FF3600"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-95"
      />
      <path
        d="M15 14 C35 12, 70 15, 95 12"
        stroke="#FF3600"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-80"
      />
    </svg>
  );
}

export function HandDrawnSquiggle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none absolute -bottom-2.5 left-0 w-full h-3 ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M2 7 C12 3, 20 11, 30 7 C40 3, 48 11, 58 7 C68 3, 76 11, 86 7 C96 3, 104 11, 114 7 C124 3, 132 11, 142 7 C152 3, 160 11, 170 7 C174 5, 177 6, 178 7"
        stroke="#FF3600"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-95"
      />
    </svg>
  );
}
