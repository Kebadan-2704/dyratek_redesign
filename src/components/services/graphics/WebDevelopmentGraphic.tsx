'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';

export function WebDevelopmentGraphic() {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  return (
    <div className="w-full max-w-[500px] select-none rounded-2xl bg-[#0F241E] border border-[#2A5A4D]/60 p-4 sm:p-5 shadow-xl text-white space-y-4">
      {/* Top Header: Device Viewport Switcher & Latency */}
      <div className="flex items-center justify-between pb-3 border-b border-[#2A5A4D]/50 text-xs">
        <div className="flex items-center gap-1.5 bg-[#16382E] p-1 rounded-lg border border-[#2A5A4D]/40">
          <button
            type="button"
            onClick={() => setDevice('desktop')}
            className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
              device === 'desktop'
                ? 'bg-[#123D32] text-white shadow-xs'
                : 'text-[#A3B8B0] hover:text-white'
            }`}
          >
            🖥 Desktop
          </button>
          <button
            type="button"
            onClick={() => setDevice('tablet')}
            className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
              device === 'tablet'
                ? 'bg-[#123D32] text-white shadow-xs'
                : 'text-[#A3B8B0] hover:text-white'
            }`}
          >
            📱 Tablet
          </button>
          <button
            type="button"
            onClick={() => setDevice('mobile')}
            className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
              device === 'mobile'
                ? 'bg-[#123D32] text-white shadow-xs'
                : 'text-[#A3B8B0] hover:text-white'
            }`}
          >
            📲 Mobile
          </button>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          TTFB: 18ms
        </div>
      </div>

      {/* Browser Viewport Simulation */}
      <div className="rounded-xl bg-[#091713] border border-[#2A5A4D]/50 p-3 space-y-2.5">
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between pb-2 border-b border-[#2A5A4D]/30 text-[11px]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="px-3 py-1 rounded-md bg-[#16382E] text-[10px] text-[#A3B8B0] font-mono flex items-center gap-1.5 border border-[#2A5A4D]/30">
            <span className="text-emerald-400">🔒</span>
            <span>https://dyratek.com/web</span>
          </div>
          <span className="text-[10px] text-emerald-400 font-mono">200 OK</span>
        </div>

        {/* Dynamic Canvas Container that adapts to chosen device */}
        <motion.div
          layout
          className={`mx-auto rounded-lg bg-[#123D32]/40 border border-[#2A5A4D]/40 p-3 space-y-2 transition-all ${
            device === 'desktop'
              ? 'w-full'
              : device === 'tablet'
              ? 'w-4/5'
              : 'w-1/2'
          }`}
        >
          {/* Header row in simulated site */}
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="h-2 w-16 bg-white/40 rounded-full" />
            <div className="flex gap-1.5">
              <div className="h-2 w-6 bg-white/20 rounded-full" />
              <div className="h-2 w-6 bg-white/20 rounded-full" />
            </div>
          </div>

          {/* Grid Layout Cards */}
          <div className="grid grid-cols-2 gap-2 py-1">
            <div className="p-2 rounded bg-white/5 border border-white/10 space-y-1">
              <div className="h-2 w-10 bg-emerald-400/80 rounded-full" />
              <div className="h-1.5 w-full bg-white/20 rounded-full" />
              <div className="h-1.5 w-3/4 bg-white/20 rounded-full" />
            </div>
            <div className="p-2 rounded bg-white/5 border border-white/10 space-y-1">
              <div className="h-2 w-8 bg-teal-300/80 rounded-full" />
              <div className="h-1.5 w-full bg-white/20 rounded-full" />
              <div className="h-1.5 w-1/2 bg-white/20 rounded-full" />
            </div>
          </div>
        </motion.div>

        {/* DOM & Code Telemetry Strip */}
        <div className="flex items-center justify-between pt-1 text-[10px] font-mono text-[#88A699]">
          <span>React 19 + Next.js App Router</span>
          <span className="text-emerald-400 font-bold">100% Type-Safe</span>
        </div>
      </div>

      {/* Web Vitals Benchmarks */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#2A5A4D]/40 text-center text-[10px]">
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">LCP</div>
          <div className="font-bold text-emerald-400">0.8s (Fast)</div>
        </div>
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">CLS</div>
          <div className="font-bold text-emerald-400">0.00 (Zero Shift)</div>
        </div>
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Accessibility</div>
          <div className="font-bold text-emerald-400">100/100 WCAG AA</div>
        </div>
      </div>
    </div>
  );
}
