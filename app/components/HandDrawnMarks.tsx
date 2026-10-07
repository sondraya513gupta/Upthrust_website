import React from "react";
import Image from "next/image";

export function HandDrawnOval({ className = "" }: { className?: string }) {
  return (
    <span
      className={`pointer-events-none absolute -inset-x-3 -inset-y-2 flex items-center justify-center select-none ${className}`}
      aria-hidden="true"
    >
      <Image
        src="/hand-drawn-oval.svg"
        alt=""
        width={108}
        height={47}
        className="h-full w-full object-fill scale-110"
        priority
      />
    </span>
  );
}

export function HandDrawnUnderline({ className = "" }: { className?: string }) {
  return (
    <span
      className={`pointer-events-none absolute -bottom-2 left-0 w-full h-[18px] flex items-center justify-start select-none ${className}`}
      aria-hidden="true"
    >
      <Image
        src="/hand-drawn-underline.svg"
        alt=""
        width={124}
        height={20}
        className="w-full h-full object-fill"
        priority
      />
    </span>
  );
}

export function HandDrawnSquiggle({ className = "" }: { className?: string }) {
  return (
    <span
      className={`pointer-events-none absolute -bottom-2 left-0 w-full h-[10px] flex items-center justify-start select-none ${className}`}
      aria-hidden="true"
    >
      <Image
        src="/hand-drawn-squiggle.svg"
        alt=""
        width={172}
        height={9}
        className="w-full h-full object-fill"
        priority
      />
    </span>
  );
}
