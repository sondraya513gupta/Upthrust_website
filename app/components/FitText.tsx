"use client";

import React, { useEffect, useRef, useCallback } from "react";

interface FitTextProps {
  children: React.ReactNode;
  className?: string;
  minFontSize?: number;
  maxFontSize?: number;
}

/**
 * FitText scales its children to fill 100% of the parent container width.
 * Uses binary search on font-size + ResizeObserver for responsiveness.
 * Figma spec: Anton 400, Uppercase, full-bleed headline.
 */
export function FitText({
  children,
  className = "",
  minFontSize = 16,
  maxFontSize = 600,
}: FitTextProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const fit = useCallback(() => {
    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    if (!wrapper || !inner) return;

    const containerWidth = wrapper.offsetWidth;
    if (!containerWidth) return;

    let lo = minFontSize;
    let hi = maxFontSize;

    inner.style.fontSize = hi + "px";
    while (hi - lo > 0.5) {
      const mid = (lo + hi) / 2;
      inner.style.fontSize = mid + "px";
      if (inner.scrollWidth <= containerWidth) {
        lo = mid;
      } else {
        hi = mid;
      }
    }
    inner.style.fontSize = lo + "px";
  }, [minFontSize, maxFontSize]);

  useEffect(() => {
    fit();
    const ro = new ResizeObserver(fit);
    if (wrapperRef.current) ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, [fit]);

  return (
    <div ref={wrapperRef} className={"w-full overflow-hidden " + className}>
      <div
        ref={innerRef}
        style={{ whiteSpace: "nowrap", lineHeight: 1 }}
        className="inline-flex items-baseline"
      >
        {children}
      </div>
    </div>
  );
}
