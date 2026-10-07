"use client";

import React, { useEffect, useState } from "react";
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
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Ensure Google model-viewer custom element is loaded
    if (typeof window !== "undefined") {
      if (!customElements.get("model-viewer")) {
        const script = document.createElement("script");
        script.type = "module";
        script.src =
          "https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js";
        script.onload = () => setScriptLoaded(true);
        document.head.appendChild(script);
      } else {
        setScriptLoaded(true);
      }
    }
  }, []);

  return (
    <div className="relative z-20 flex justify-center items-center w-[270px] sm:w-[350px] md:w-[430px] lg:w-[490px] xl:w-[530px] h-[350px] sm:h-[450px] md:h-[510px] lg:h-[570px] xl:h-[610px] select-none">
      {/* 3D WebGL GLB Model with Photorealistic Iridescent Tone Mapping */}
      <model-viewer
        src={modelSrc}
        alt={alt}
        poster={posterSrc}
        auto-rotate
        rotation-per-second="12deg"
        camera-controls
        interaction-prompt="none"
        shadow-intensity="1.4"
        shadow-softness="0.7"
        exposure="1.2"
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
          filter: "contrast(1.16) saturate(1.28) brightness(1.02)",
        }}
      >
        {/* Instant High-Resolution Poster while Model Streams */}
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
              filter: "contrast(1.16) saturate(1.28) brightness(1.02)",
            }}
          />
        </div>
      </model-viewer>

      {/* Subtle Interactive 3D Orbit Badge */}
      <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-white/80 border border-black/[0.08] backdrop-blur-md px-3 py-1 text-[10px] font-mono text-neutral-600 uppercase tracking-widest opacity-75 shadow-xs transition-opacity hover:opacity-100">
        ✦ Interactive 3D Model
      </div>
    </div>
  );
}
