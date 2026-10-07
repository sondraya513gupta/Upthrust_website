import React from "react";

export function StrategyMockup() {
  return (
    <div className="relative w-full h-[220px] sm:h-[260px] md:h-[280px] rounded-xl bg-[#FAFAFA] p-3 text-neutral-800 shadow-2xl border border-neutral-200/80 overflow-hidden select-none font-sans text-[10px]">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between border-b border-neutral-200 pb-2 mb-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#FF3800]" />
          <span className="font-bold text-neutral-900 tracking-tight">Audience Personas &amp; Positioning Matrix</span>
        </div>
        <span className="text-[9px] font-mono text-neutral-400">STAGE-01</span>
      </div>

      {/* Grid of Strategy Cards */}
      <div className="grid grid-cols-12 gap-2 h-[calc(100%-28px)]">
        {/* Left Column: User Personas */}
        <div className="col-span-5 flex flex-col gap-1.5">
          <div className="rounded-lg bg-white p-2 border border-neutral-200 shadow-xs flex flex-col gap-1">
            <div className="flex items-center gap-1.5">
              <div className="h-4 w-4 rounded-full bg-[#FF3800]/20 flex items-center justify-center text-[#FF3800] text-[8px] font-bold">
                P1
              </div>
              <span className="font-bold text-[9px]">The Visionary Founder</span>
            </div>
            <p className="text-[8px] text-neutral-500 leading-tight">
              Needs bold, category-defining identity that accelerates Series A round.
            </p>
            <div className="flex gap-1 mt-0.5">
              <span className="px-1 py-0.5 rounded bg-orange-50 text-[#FF3800] text-[7px] font-bold">High Growth</span>
              <span className="px-1 py-0.5 rounded bg-neutral-100 text-neutral-600 text-[7px]">Series A</span>
            </div>
          </div>

          <div className="rounded-lg bg-white p-2 border border-neutral-200 shadow-xs flex flex-col gap-1 flex-1">
            <span className="font-bold text-[9px] text-neutral-900">Value Proposition Canvas</span>
            <div className="grid grid-cols-2 gap-1 mt-1 text-[7px]">
              <div className="bg-neutral-50 p-1 rounded border border-neutral-100">
                <span className="font-bold text-[#FF3800] block">Pains</span>
                <span>Generic market presence, low retention</span>
              </div>
              <div className="bg-neutral-50 p-1 rounded border border-neutral-100">
                <span className="font-bold text-emerald-600 block">Gains</span>
                <span>10x brand recall, pricing power</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Wireframe & Moodboard Matrix */}
        <div className="col-span-7 flex flex-col gap-1.5">
          <div className="rounded-lg bg-neutral-900 p-2 text-white flex-1 flex flex-col justify-between">
            <div className="flex justify-between items-center text-[8px] text-neutral-400">
              <span className="font-mono text-[#FF3800]">COMPETITIVE RADAR</span>
              <span>Q3 AUDIT</span>
            </div>
            <div className="flex items-center justify-center py-2">
              <div className="relative w-24 h-24 rounded-full border border-neutral-700 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-dashed border-neutral-600" />
                <div className="absolute top-2 right-4 h-2 w-2 rounded-full bg-[#FF3800]" />
                <span className="absolute text-[7px] text-neutral-300 font-bold">Upthrust Tier</span>
              </div>
            </div>
            <div className="flex justify-between text-[7px] text-neutral-400 border-t border-neutral-800 pt-1">
              <span>Differentiation: 94%</span>
              <span className="text-emerald-400">+38% Market Share</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function IdentityMockup() {
  return (
    <div className="relative w-full h-[220px] sm:h-[260px] md:h-[280px] rounded-xl bg-[#111111] p-3 text-white shadow-2xl border border-neutral-800 overflow-hidden select-none font-sans text-[10px]">
      <div className="grid grid-cols-12 gap-2 h-full">
        {/* Photos & Brand Poster */}
        <div className="col-span-6 flex flex-col gap-2 h-full">
          <div className="relative flex-1 rounded-lg bg-gradient-to-tr from-neutral-800 to-neutral-700 p-2 overflow-hidden border border-neutral-700 flex flex-col justify-between">
            <span className="text-[9px] font-mono tracking-widest text-[#FF3800]">BRAND GUIDELINES</span>
            <div className="my-auto text-center">
              <span className="font-display italic text-2xl font-black text-white tracking-tighter">UPTHRUST</span>
              <p className="text-[8px] text-neutral-400 mt-0.5">Visual Identity System v2.4</p>
            </div>
            <div className="flex justify-between text-[7px] text-neutral-400">
              <span>SPECIMEN #01</span>
              <span>RGB / CMYK / PANTONE</span>
            </div>
          </div>

          {/* Color Palettes */}
          <div className="grid grid-cols-4 gap-1.5 h-10">
            <div className="rounded bg-[#FF3800] flex items-end p-1 text-[7px] font-mono font-bold text-white">#FF3800</div>
            <div className="rounded bg-[#0A0A0A] border border-neutral-800 flex items-end p-1 text-[7px] font-mono text-neutral-400">#0A0A0A</div>
            <div className="rounded bg-[#06B6D4] flex items-end p-1 text-[7px] font-mono font-bold text-black">#06B6D4</div>
            <div className="rounded bg-[#A855F7] flex items-end p-1 text-[7px] font-mono font-bold text-white">#A855F7</div>
          </div>
        </div>

        {/* Right side: Mockup Poster Sheet & Iconography */}
        <div className="col-span-6 flex flex-col gap-2 h-full">
          <div className="h-28 rounded-lg bg-neutral-900 p-2.5 border border-neutral-800 flex flex-col justify-between">
            <div className="flex justify-between items-center text-[8px] text-neutral-400 font-mono">
              <span>ICON SYSTEM</span>
              <span className="text-[#FF3800]">24x24 GRID</span>
            </div>
            <div className="grid grid-cols-4 gap-2 my-auto place-items-center">
              <div className="h-6 w-6 rounded bg-neutral-800 flex items-center justify-center text-xs text-[#FF3800]">✦</div>
              <div className="h-6 w-6 rounded bg-neutral-800 flex items-center justify-center text-xs text-white">▲</div>
              <div className="h-6 w-6 rounded bg-neutral-800 flex items-center justify-center text-xs text-neutral-300">●</div>
              <div className="h-6 w-6 rounded bg-neutral-800 flex items-center justify-center text-xs text-emerald-400">■</div>
            </div>
            <span className="text-[7px] text-neutral-500">Geometry, rhythm &amp; precision</span>
          </div>

          {/* Organic brand squiggle mark */}
          <div className="flex-1 rounded-lg bg-neutral-800/80 p-2 border border-neutral-700 flex items-center justify-center relative overflow-hidden">
            <svg viewBox="0 0 100 40" fill="none" className="w-full h-10 text-[#FF3800]">
              <path d="M5 20 C25 5, 45 35, 65 15 C85 -5, 95 30, 98 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
            <span className="absolute bottom-1 right-2 text-[7px] font-mono text-neutral-400">EXPRESSIVE MARKS</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DigitalMockup() {
  return (
    <div className="relative w-full h-[220px] sm:h-[260px] md:h-[280px] rounded-xl bg-[#090D16] p-3 text-white shadow-2xl border border-neutral-800 overflow-hidden select-none font-sans text-[10px]">
      {/* SaaS Product Window Frame */}
      <div className="flex items-center justify-between border-b border-neutral-800 pb-2 mb-2">
        <div className="flex items-center gap-1.5">
          <div className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-red-500/80" />
            <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
            <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
          </div>
          <span className="font-mono text-[9px] text-neutral-400 ml-2">app.neatlogs.io/analytics</span>
        </div>
        <span className="px-1.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[8px] font-bold">
          LIVE v3.0
        </span>
      </div>

      {/* Dashboard Body */}
      <div className="grid grid-cols-12 gap-2 h-[calc(100%-32px)]">
        {/* Left Stats Column */}
        <div className="col-span-7 flex flex-col gap-1.5">
          <div className="grid grid-cols-2 gap-1.5">
            <div className="rounded-lg bg-neutral-900/90 p-2 border border-neutral-800">
              <span className="text-[8px] text-neutral-400 block">Active Users</span>
              <span className="text-base font-black text-white">48,290</span>
              <span className="text-[7px] text-emerald-400 block mt-0.5">↑ +24.8% vs last week</span>
            </div>
            <div className="rounded-lg bg-neutral-900/90 p-2 border border-neutral-800">
              <span className="text-[8px] text-neutral-400 block">Conversion</span>
              <span className="text-base font-black text-[#FF3800]">8.42%</span>
              <span className="text-[7px] text-emerald-400 block mt-0.5">↑ +3.2% optimization</span>
            </div>
          </div>

          {/* Interactive Chart Graphic */}
          <div className="flex-1 rounded-lg bg-neutral-900/90 p-2 border border-neutral-800 flex flex-col justify-between">
            <span className="text-[8px] text-neutral-400 font-mono">RETENTION COHORT</span>
            <div className="h-12 flex items-end gap-1.5 px-1 py-1">
              {[40, 65, 55, 80, 70, 95, 88, 100].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                  <div
                    style={{ height: `${h}%` }}
                    className={`w-full rounded-t-xs ${
                      i >= 5 ? "bg-[#FF3800]" : "bg-neutral-700"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right UI Elements Column */}
        <div className="col-span-5 flex flex-col gap-1.5">
          <div className="rounded-lg bg-gradient-to-br from-purple-950/60 to-neutral-900 p-2 border border-purple-800/40 flex flex-col justify-between flex-1">
            <div className="flex items-center gap-1.5">
              <div className="h-5 w-5 rounded bg-purple-600 flex items-center justify-center font-black text-[9px]">
                nl
              </div>
              <span className="font-extrabold text-[10px] tracking-tight">neatlogs</span>
            </div>
            <div className="space-y-1 my-1">
              <div className="h-2 rounded bg-neutral-800 w-full" />
              <div className="h-2 rounded bg-neutral-800 w-4/5" />
            </div>
            <button className="w-full py-1 rounded bg-[#FF3800] text-white text-[8px] font-bold text-center">
              Launch Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CampaignMockup() {
  return (
    <div className="relative w-full h-[220px] sm:h-[260px] md:h-[280px] rounded-xl bg-neutral-950 p-3 text-white shadow-2xl border border-neutral-800 overflow-hidden select-none font-sans text-[10px]">
      <div className="grid grid-cols-12 gap-2 h-full">
        {/* Urban Billboard Ad 1 */}
        <div className="col-span-7 flex flex-col gap-2 h-full">
          <div className="relative flex-1 rounded-lg bg-neutral-900 border border-neutral-800 overflow-hidden flex flex-col justify-between p-2.5">
            <div className="flex justify-between items-center text-[8px] font-mono text-neutral-400">
              <span className="text-[#FF3800]">OUT-OF-HOME BILLBOARD</span>
              <span>NYC / METRO</span>
            </div>
            <div className="my-auto text-left">
              <span className="font-display italic text-xl font-black text-white leading-tight uppercase block">
                STOP BLENDING IN.
              </span>
              <span className="font-display italic text-xl font-black text-[#FF3800] leading-tight uppercase block">
                START WINNING.
              </span>
            </div>
            <div className="flex justify-between text-[7px] text-neutral-500 font-mono">
              <span>DIMENSIONS: 48x14 FT</span>
              <span>1.2M DAILY IMPRESSIONS</span>
            </div>
          </div>

          <div className="h-10 rounded bg-neutral-900 border border-neutral-800 px-2 flex items-center justify-between text-[8px]">
            <span className="text-neutral-400 font-mono">CAMPAIGN ROI</span>
            <span className="font-bold text-emerald-400">+412% ATTRIBUTED REVENUE</span>
          </div>
        </div>

        {/* Right Column: Editorial & Social formats */}
        <div className="col-span-5 flex flex-col gap-2 h-full">
          <div className="flex-1 rounded-lg bg-neutral-900 border border-neutral-800 p-2 flex flex-col justify-between">
            <span className="text-[8px] font-mono text-neutral-400">PITCH DECK &amp; MOTION</span>
            <div className="w-full h-14 rounded bg-neutral-800/80 flex items-center justify-center text-[#FF3800]">
              <span className="h-7 w-7 rounded-full bg-neutral-900 flex items-center justify-center text-xs">
                ▶
              </span>
            </div>
            <span className="text-[7px] text-neutral-400">4K Kinetic Typography</span>
          </div>

          <div className="h-12 rounded-lg bg-gradient-to-r from-[#FF3800] to-orange-600 p-2 flex items-center justify-between">
            <span className="font-bold text-[9px] text-white">Full-Funnel Creative Sprints</span>
            <span className="text-xs">→</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServiceMockupBoard({ type }: { type: string }) {
  switch (type) {
    case "strategy":
      return <StrategyMockup />;
    case "identity":
      return <IdentityMockup />;
    case "digital":
      return <DigitalMockup />;
    case "campaign":
      return <CampaignMockup />;
    default:
      return <StrategyMockup />;
  }
}
