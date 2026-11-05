'use client';

import React from 'react';

export function DigitalMarketingGraphic() {
  return (
    <div className="w-full max-w-[500px] select-none rounded-2xl bg-[#0F241E] border border-[#2A5A4D]/60 p-4 sm:p-5 shadow-xl text-white space-y-4">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#2A5A4D]/50 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white">🔍 SEO & Search Discovery</span>
          <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px] font-mono border border-emerald-500/30">
            #1 Organic Position
          </span>
        </div>
        <div className="text-[11px] font-mono text-emerald-400">Schema.org Validated</div>
      </div>

      {/* Google Search SERP Simulation */}
      <div className="rounded-xl bg-[#091713] border border-[#2A5A4D]/50 p-3.5 space-y-2.5">
        <div className="p-3 rounded-xl bg-[#0C1C17] border border-[#2A5A4D]/40 space-y-1.5">
          <div className="flex items-center gap-2 text-[10px] text-[#A3B8B0]">
            <span className="w-4 h-4 rounded-full bg-[#16382E] flex items-center justify-center text-[9px] text-emerald-400">
              G
            </span>
            <span className="truncate">https://dyratek.com/services</span>
          </div>

          <div className="text-xs font-bold text-emerald-300 hover:underline cursor-pointer">
            DYRATEK Digital Studio — High-Performance Software & Automation
          </div>

          <div className="text-[10px] text-[#88A699] leading-relaxed">
            Clean websites, automated business pipelines, and native mobile apps engineered for speed,
            accessibility, and measurable conversion.
          </div>

          <div className="flex items-center gap-3 pt-1 text-[9px] text-[#A3B8B0] border-t border-[#2A5A4D]/30">
            <span className="text-amber-300">★★★★★ 5.0 Rating</span>
            <span>• Fast Delivery</span>
            <span>• WCAG 2.2 AA</span>
          </div>
        </div>

        {/* Sitelinks Grid */}
        <div className="grid grid-cols-2 gap-1.5 text-[10px]">
          <div className="p-2 rounded bg-[#16382E]/50 border border-[#2A5A4D]/30">
            <div className="font-bold text-white">Web Development</div>
            <div className="text-[8px] text-[#88A699]">Sub-second LCP</div>
          </div>
          <div className="p-2 rounded bg-[#16382E]/50 border border-[#2A5A4D]/30">
            <div className="font-bold text-white">Business Automation</div>
            <div className="text-[8px] text-[#88A699]">Zero-touch Sync</div>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#2A5A4D]/40 text-center text-[10px]">
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Organic CTR</div>
          <div className="font-bold text-emerald-400">8.4% (+140%)</div>
        </div>
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Crawl Index</div>
          <div className="font-bold text-white">100% In Google</div>
        </div>
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Technical SEO</div>
          <div className="font-bold text-emerald-400">100/100 Lighthouse</div>
        </div>
      </div>
    </div>
  );
}

