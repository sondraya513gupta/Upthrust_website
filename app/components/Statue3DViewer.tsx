"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

const ModelViewer = "model-viewer" as React.ElementType;

interface Statue3DViewerProps {
  modelSrc?: string;
  posterSrc?: string;
  alt?: string;
}

type ModelViewerEl = HTMLElement & {
  model?: {
    materials: Array<{
      setIridescenceFactor?: (v: number) => void;
      setIridescenceIor?: (v: number) => void;
      setIridescenceThicknessRange?: (v: [number, number]) => void;
      pbrMetallicRoughness: {
        setBaseColorFactor: (color: [number, number, number, number]) => void;
        setMetallicFactor: (factor: number) => void;
        setRoughnessFactor: (factor: number) => void;
      };
    }>;
  };
};

export function Statue3DViewer({
  modelSrc = "/statue.glb",
  posterSrc = "/pic2.png",
  alt = "Upthrust iridescent neoclassical Venus bust",
}: Statue3DViewerProps) {
  const viewerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (customElements.get("model-viewer")) return;
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js";
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    const viewer = viewerRef.current as ModelViewerEl | null;
    if (!viewer) return;

    const handleModelLoad = () => {
      try {
        const materials = viewer.model?.materials ?? [];
        for (const mat of materials) {
          // Deep navy base like pic2.png so colorful env/iridescence can read
          mat.pbrMetallicRoughness.setBaseColorFactor([0.03, 0.05, 0.28, 1]);
          mat.pbrMetallicRoughness.setMetallicFactor(1);
          mat.pbrMetallicRoughness.setRoughnessFactor(0.06);
          mat.setIridescenceFactor?.(1);
          mat.setIridescenceIor?.(1.4);
          mat.setIridescenceThicknessRange?.([120, 480]);
        }
      } catch (e) {
        console.warn("Material tuning notice:", e);
      }
    };

    viewer.addEventListener("load", handleModelLoad);
    return () => viewer.removeEventListener("load", handleModelLoad);
  }, []);

  return (
    <div
      className="relative z-20 flex items-center justify-center select-none"
      style={{
        width: "min(68vw, 720px)",
        height: "min(78vh, 860px)",
        minHeight: "420px",
        minWidth: "320px",
      }}
      suppressHydrationWarning
    >
      <ModelViewer
        ref={viewerRef}
        suppressHydrationWarning
        src={modelSrc}
        alt={alt}
        poster={posterSrc}
        camera-controls=""
        interaction-prompt="none"
        environment-image="/iridescent_env.png"
        shadow-intensity="0.35"
        shadow-softness="1"
        exposure="1.15"
        tone-mapping="commerce"
        camera-orbit="72deg 80deg 98%"
        min-camera-orbit="auto 68deg auto"
        max-camera-orbit="auto 98deg auto"
        field-of-view="26deg"
        auto-rotate=""
        rotation-per-second="30deg"
        auto-rotate-delay="0"
        loading="eager"
        reveal="auto"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
          outline: "none",
          cursor: "grab",
          filter: "contrast(1.2) saturate(1.55) brightness(1.04)",
        }}
      >
        <div slot="poster" className="flex h-full w-full items-center justify-center">
          <Image
            src={posterSrc}
            alt={alt}
            width={720}
            height={860}
            priority
            className="h-full w-auto object-contain pointer-events-none"
          />
        </div>
      </ModelViewer>
    </div>
  );
}
