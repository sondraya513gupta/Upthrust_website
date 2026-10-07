import * as React from "react";

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
          [key: string]: unknown;
        },
        HTMLElement
      >;
    }
  }

  namespace React {
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
            [key: string]: unknown;
          },
          HTMLElement
        >;
      }
    }
  }
}
