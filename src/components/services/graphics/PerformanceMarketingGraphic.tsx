'use client';

import React, { useState } from 'react';

export function PerformanceMarketingGraphic() {
  const [platform, setPlatform] = useState<'google' | 'meta'>('google');

  return (
    <div className="w-full max-w-[500px] select-none rounded-2xl bg-[#0F241E] border border-[#2A5A4D]/60 p-4 sm:p-5 shadow-xl text-white space-y-4">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#2A5A4D]/50 text-xs">
        <div className="flex items-center gap-1.5 bg-[#16382E] p-1 rounded-lg border border-[#2A5A4D]/40">
          <button
            type="button"
            onClick={() => setPlatform('google')}
            className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
              platform === 'google'
                ? 'bg-[#123D32] text-white shadow-xs'
                : 'text-[#A3B8B0] hover:text-white'
            }`}
          >
            🎯 Google Ads (Intent)
          </button>
          <button
            type="button"
            onClick={() => setPlatform('meta')}
            className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
              platform === 'meta'
                ? 'bg-[#123D32] text-white shadow-xs'
                : 'text-[#A3B8B0] hover:text-white'
            }`}
          >
            📱 Meta Ads (Social)
          </button>
        </div>

        <div className="text-[11px] font-mono text-emerald-400">ROAS: 4.8x Return</div>
      </div>

      {/* Ad Performance Canvas */}
      <div className="rounded-xl bg-[#091713] border border-[#2A5A4D]/50 p-3.5 space-y-3">
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30 space-y-0.5">
            <div className="text-[9px] text-[#88A699]">ROAS</div>
            <div className="text-lg font-bold text-emerald-400 font-mono">4.82x</div>
            <div className="text-[8px] text-emerald-300">Revenue Multiplier</div>
          </div>
          <div className="p-2.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30 space-y-0.5">
            <div className="text-[9px] text-[#88A699]">CPA (Acquisition)</div>
            <div className="text-lg font-bold text-emerald-400 font-mono">$18.40</div>
            <div className="text-[8px] text-emerald-300">-42% vs Benchmark</div>
          </div>
          <div className="p-2.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30 space-y-0.5">
            <div className="text-[9px] text-[#88A699]">Conversion Rate</div>
            <div className="text-lg font-bold text-emerald-400 font-mono">6.4%</div>
            <div className="text-[8px] text-emerald-300">High-intent traffic</div>
          </div>
        </div>

        {/* Ad Attribution Strip */}
        <div className="p-2 rounded-lg bg-[#123D32]/40 border border-[#2A5A4D]/40 flex items-center justify-between text-[10px]">
          <span className="text-[#A3B8B0]">Server-Side Tracking:</span>
          <span className="text-emerald-400 font-mono font-bold">CAPI & GA4 Linked (100% Attribution)</span>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#2A5A4D]/40 text-center text-[10px]">
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Ad Spend Waste</div>
          <div className="font-bold text-emerald-400">0% (Negative KWs)</div>
        </div>
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">A/B Testing</div>
          <div className="font-bold text-white">Multi-armed Bandit</div>
        </div>
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Budget Scaling</div>
          <div className="font-bold text-emerald-400">Automated Rules</div>
        </div>
      </div>
    </div>
  );
}

