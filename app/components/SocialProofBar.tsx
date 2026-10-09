import React from "react";
import { siteContent } from "../content/siteContent";
import { ClientLogoItem } from "./BrandLogos";

export function SocialProofBar() {
  const { statNumber, statLabel, clients } = siteContent.socialProof;

  return (
    <div className="relative z-20 w-full shrink-0 bg-transparent border-y border-black/[0.12]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-4 px-6 py-6 sm:px-10 lg:flex-row lg:items-center lg:gap-14 lg:px-14 lg:py-8">
        {/* Left Stats Block */}
        <div className="flex flex-col sm:flex-row sm:items-center lg:flex-col lg:items-start gap-1 sm:gap-3 lg:gap-0.5 shrink-0 border-b lg:border-b-0 lg:border-r border-black/[0.15] pb-6 lg:pb-0 lg:pr-14">
          <span className="text-4xl sm:text-5xl font-black tracking-tight text-black leading-none">
            {statNumber}
          </span>
          <p className="text-sm font-medium leading-snug text-black/80 max-w-[170px] mt-2">
            {statLabel}
          </p>
        </div>

        {/* Client Logos Row */}
        <div className="relative flex-1 w-full overflow-hidden">
          <div className="flex items-center justify-between gap-8 sm:gap-12 md:gap-14 overflow-x-auto no-scrollbar py-2">
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
