"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          alt?: string;
          poster?: string;
          "auto-rotate"?: boolean | string;
          "camera-controls"?: boolean | string;
          "interaction-prompt"?: string;
          "rotation-per-second"?: string;
          "shadow-intensity"?: string;
          "shadow-softness"?: string;
          "camera-orbit"?: string;
          "field-of-view"?: string;
          "min-camera-orbit"?: string;
          "max-camera-orbit"?: string;
          "environment-image"?: string;
          "tone-mapping"?: string;
          exposure?: string;
          loading?: "auto" | "lazy" | "eager";
          reveal?: "auto" | "interaction" | "manual";
        },
        HTMLElement
      >;
    }
  }
}

interface Statue3DViewerProps {
  modelSrc?: string;
  posterSrc?: string;
  alt?: string;
}

export function Statue3DViewer({
  modelSrc = "/statue.glb",
  posterSrc = "/pic2.png",
  alt = "Upthrust iridescent neoclassical 3D Venus bust",
}: Statue3DViewerProps) {
  const [modelReady, setModelReady] = useState(false);
  const viewerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // 1. Ensure Google model-viewer script is registered
    if (typeof window !== "undefined") {
      if (!customElements.get("model-viewer")) {
        const script = document.createElement("script");
        script.type = "module";
        script.src =
          "https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js";
        document.head.appendChild(script);
      }
    }
  }, []);

  useEffect(() => {
    // 2. Enhance material properties once 3D GLB finishes loading
    const viewer = viewerRef.current as (HTMLElement & {
      model?: {
        materials: Array<{
          pbrMetallicRoughness: {
            setBaseColorFactor: (color: [number, number, number, number]) => void;
            setMetallicFactor: (factor: number) => void;
            setRoughnessFactor: (factor: number) => void;
          };
        }>;
      };
    }) | null;

    if (!viewer) return;

    const handleModelLoad = () => {
      try {
        if (viewer.model && viewer.model.materials && viewer.model.materials.length > 0) {
          const mat = viewer.model.materials[0];
          // Tint base color to rich deep midnight indigo (#0c1328)
          mat.pbrMetallicRoughness.setBaseColorFactor([0.08, 0.12, 0.28, 1.0]);
          mat.pbrMetallicRoughness.setMetallicFactor(0.92);
          mat.pbrMetallicRoughness.setRoughnessFactor(0.12);
        }
      } catch (e) {
        console.warn("Could not tune material dynamically:", e);
      }
      setModelReady(true);
    };

    viewer.addEventListener("load", handleModelLoad);
    return () => {
      viewer.removeEventListener("load", handleModelLoad);
    };
  }, []);

  return (
    <div className="relative z-20 flex justify-center items-center w-[270px] sm:w-[350px] md:w-[430px] lg:w-[490px] xl:w-[530px] h-[350px] sm:h-[450px] md:h-[510px] lg:h-[570px] xl:h-[610px] select-none">
      
      {/* 3D WebGL GLB Model with Iridescent Studio Environment Mapping */}
      <model-viewer
        ref={viewerRef}
        src={modelSrc}
        alt={alt}
        poster={posterSrc}
        environment-image="/iridescent_env.png"
        auto-rotate
        rotation-per-second="10deg"
        camera-controls
        interaction-prompt="none"
        shadow-intensity="1.3"
        shadow-softness="0.7"
        exposure="1.35"
        tone-mapping="neutral"
        camera-orbit="-22deg 85deg 105%"
        field-of-view="28deg"
        loading="eager"
        reveal="auto"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
          outline: "none",
          cursor: "grab",
          filter: "contrast(1.18) saturate(1.32) brightness(1.02)",
        }}
      >
        {/* Poster Fallback while GLB loads */}
        <div
          slot="poster"
          className="w-full h-full flex items-center justify-center"
        >
          <Image
            src={posterSrc}
            alt={alt}
            width={530}
            height={610}
            priority
            className="h-auto w-full object-contain pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
            style={{
              filter: "contrast(1.18) saturate(1.32) brightness(1.02)",
            }}
          />
        </div>
      </model-viewer>

      {/* Interactive 3D Status Badge */}
      <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-white/85 border border-black/[0.08] backdrop-blur-md px-3 py-1 text-[10px] font-mono text-neutral-700 uppercase tracking-widest opacity-80 shadow-xs">
        ✦ Interactive 3D Model
      </div>
    </div>
  );
}
