import React from "react";
import { siteContent } from "../content/siteContent";
import { ClientLogoItem } from "./BrandLogos";

export function SocialProofBar() {
  const { statNumber, statLabel, clients } = siteContent.socialProof;

  return (
    <div className="relative z-20 w-full border-t border-black/[0.08] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col md:flex-row items-stretch md:items-center px-6 py-5 sm:px-10 lg:px-16 gap-6 md:gap-8">
        {/* Left Stats Block */}
        <div className="flex items-center gap-3.5 shrink-0 border-b md:border-b-0 md:border-r border-black/[0.1] pb-4 md:pb-0 md:pr-8">
          <span className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-950">
            {statNumber}
          </span>
          <p className="max-w-[130px] text-xs font-medium leading-snug text-neutral-600">
            {statLabel}
          </p>
        </div>

        {/* Client Logos Row */}
        <div className="relative flex-1 overflow-hidden">
          <div className="flex items-center justify-between gap-6 sm:gap-10 md:gap-12 overflow-x-auto no-scrollbar py-1">
            {clients.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex shrink-0 items-center justify-center opacity-85 transition-opacity duration-200 hover:opacity-100"
              >
                <ClientLogoItem id={client.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
