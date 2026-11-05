'use client';

import React, { useState } from 'react';

export function WorkflowOptimizationGraphic() {
  const [view, setView] = useState<'optimized' | 'bottleneck'>('optimized');

  return (
    <div className="w-full max-w-[500px] select-none rounded-2xl bg-[#0F241E] border border-[#2A5A4D]/60 p-4 sm:p-5 shadow-xl text-white space-y-4">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#2A5A4D]/50 text-xs">
        <div className="flex items-center gap-1.5 bg-[#16382E] p-1 rounded-lg border border-[#2A5A4D]/40">
          <button
            type="button"
            onClick={() => setView('optimized')}
            className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
              view === 'optimized'
                ? 'bg-[#123D32] text-white shadow-xs'
                : 'text-[#A3B8B0] hover:text-white'
            }`}
          >
            ⚡ Optimized Flow
          </button>
          <button
            type="button"
            onClick={() => setView('bottleneck')}
            className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
              view === 'bottleneck'
                ? 'bg-[#123D32] text-white shadow-xs'
                : 'text-[#A3B8B0] hover:text-white'
            }`}
          >
            ⚠️ Legacy Bottleneck
          </button>
        </div>

        <div className="text-[11px] font-mono text-emerald-400">
          {view === 'optimized' ? '+94% Velocity' : '-4.2 hrs / day'}
        </div>
      </div>

      {/* Main Comparison Canvas */}
      <div className="rounded-xl bg-[#091713] border border-[#2A5A4D]/50 p-3.5 space-y-3">
        {view === 'optimized' ? (
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-emerald-300">Automated Pipeline Throughput</span>
              <span className="font-mono text-emerald-400">6.2s Total Cycle</span>
            </div>

            <div className="p-3 rounded-lg bg-[#123D32]/50 border border-emerald-500/30 space-y-2">
              <div className="flex justify-between text-[11px] text-[#A3B8B0]">
                <span>Task Queue</span>
                <span className="text-white font-bold">0 Pending (Instant Process)</span>
              </div>
              <div className="w-full h-2 bg-[#16382E] rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" />
              </div>
              <div className="flex justify-between text-[10px] text-emerald-300">
                <span>Error Frequency: 0.00%</span>
                <span>Auto-routed to Department</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-amber-300">Manual Spreadsheets & Email Handoffs</span>
              <span className="font-mono text-amber-400">4 hrs 15 mins</span>
            </div>

            <div className="p-3 rounded-lg bg-amber-950/40 border border-amber-500/30 space-y-2">
              <div className="flex justify-between text-[11px] text-[#A3B8B0]">
                <span>Manual Queue Backlog</span>
                <span className="text-amber-200 font-bold">34 Pending Review</span>
              </div>
              <div className="w-full h-2 bg-[#16382E] rounded-full overflow-hidden">
                <div className="w-2/5 h-full bg-amber-500 rounded-full" />
              </div>
              <div className="flex justify-between text-[10px] text-amber-300">
                <span>Error Frequency: 18.4%</span>
                <span>Requires Manual Correction</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#2A5A4D]/40 text-center text-[10px]">
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Cycle Time</div>
          <div className="font-bold text-emerald-400">94% Reduced</div>
        </div>
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Staff Efficiency</div>
          <div className="font-bold text-emerald-400">+12 hrs / week</div>
        </div>
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Handoff Friction</div>
          <div className="font-bold text-emerald-400">Zero Drop-off</div>
        </div>
      </div>
    </div>
  );
}
