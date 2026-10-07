import React from "react";
import { siteContent } from "../content/siteContent";
import { ClientLogoItem } from "./BrandLogos";

export function SocialProofBar() {
  const { statNumber, statLabel, clients } = siteContent.socialProof;

  return (
    <div className="relative z-20 w-full border-t border-black/[0.08] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] flex-col lg:flex-row items-start lg:items-center px-6 py-6 sm:px-10 lg:px-14 gap-6 lg:gap-12">
        {/* Left Stats Block: 100+ Brands trusted us to define how they're seen. */}
        <div className="flex flex-col sm:flex-row sm:items-center lg:flex-col lg:items-start gap-1 sm:gap-3 lg:gap-0.5 shrink-0 border-b lg:border-b-0 lg:border-r border-black/[0.08] pb-4 lg:pb-0 lg:pr-8">
          <span className="text-3xl sm:text-4xl font-black tracking-tight text-black leading-none">
            {statNumber}
          </span>
          <p className="text-xs sm:text-[13px] font-medium leading-snug text-black/80 max-w-[170px] mt-1">
            {statLabel}
          </p>
        </div>

        {/* Client Logos Row */}
        <div className="relative flex-1 w-full overflow-hidden">
          <div className="flex items-center justify-between gap-8 sm:gap-12 md:gap-14 overflow-x-auto no-scrollbar py-1">
            {clients.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex shrink-0 items-center justify-center opacity-90 transition-opacity duration-200 hover:opacity-100"
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
