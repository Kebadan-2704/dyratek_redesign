'use client';

import React from 'react';

export function PerformanceTuningGraphic() {
  return (
    <div className="w-full max-w-[500px] select-none rounded-2xl bg-[#0F241E] border border-[#2A5A4D]/60 p-4 sm:p-5 shadow-xl text-white space-y-4">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#2A5A4D]/50 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white">⚡ Speed & Performance Radar</span>
          <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px] font-mono border border-emerald-500/30">
            Lighthouse 100
          </span>
        </div>
        <div className="text-[11px] font-mono text-emerald-400">Turbopack & Brotli</div>
      </div>

      {/* Core Web Vitals Gauges */}
      <div className="rounded-xl bg-[#091713] border border-[#2A5A4D]/50 p-3.5 space-y-3">
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30 space-y-1">
            <div className="text-[10px] text-[#88A699]">LCP</div>
            <div className="text-base font-bold text-emerald-400 font-mono">0.78s</div>
            <div className="text-[9px] text-emerald-300">Optimal (&lt; 2.5s)</div>
          </div>
          <div className="p-2.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30 space-y-1">
            <div className="text-[10px] text-[#88A699]">INP</div>
            <div className="text-base font-bold text-emerald-400 font-mono">38ms</div>
            <div className="text-[9px] text-emerald-300">Instant (&lt; 200ms)</div>
          </div>
          <div className="p-2.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30 space-y-1">
            <div className="text-[10px] text-[#88A699]">CLS</div>
            <div className="text-base font-bold text-emerald-400 font-mono">0.000</div>
            <div className="text-[9px] text-emerald-300">Zero Shift</div>
          </div>
        </div>

        {/* Bundle Compression Visualizer */}
        <div className="p-2.5 rounded-lg bg-[#123D32]/40 border border-[#2A5A4D]/40 space-y-1.5 text-[10px]">
          <div className="flex justify-between text-[#A3B8B0]">
            <span>Asset Bundle Payload</span>
            <span className="text-emerald-400 font-mono font-bold">-86.4% Brotli</span>
          </div>
          <div className="w-full h-2 bg-[#16382E] rounded-full overflow-hidden flex">
            <div className="w-[14%] h-full bg-emerald-400" />
            <div className="w-[86%] h-full bg-white/10" />
          </div>
          <div className="flex justify-between text-[9px] text-[#88A699]">
            <span>Compressed: 64 KB</span>
            <span>Raw: 472 KB</span>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#2A5A4D]/40 text-center text-[10px]">
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">TTFB</div>
          <div className="font-bold text-emerald-400">&lt; 20ms Edge</div>
        </div>
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Image Optimization</div>
          <div className="font-bold text-white">AVIF + WebP</div>
        </div>
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Cache Strategy</div>
          <div className="font-bold text-white">Stale-While-Revalidate</div>
        </div>
      </div>
    </div>
  );
}

