'use client';

import React, { useState } from 'react';

export function AnalyticsReportingGraphic() {
  const [range, setRange] = useState<'7D' | '30D' | '90D'>('30D');

  const stats = {
    '7D': { uplift: '+24.2%', visitors: '4,892', retention: '68%' },
    '30D': { uplift: '+38.4%', visitors: '22,410', retention: '74%' },
    '90D': { uplift: '+52.1%', visitors: '68,120', retention: '81%' }
  };

  return (
    <div className="w-full max-w-[500px] select-none rounded-2xl bg-[#0F241E] border border-[#2A5A4D]/60 p-4 sm:p-5 shadow-xl text-white space-y-4">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#2A5A4D]/50 text-xs">
        <div className="flex items-center gap-1.5 bg-[#16382E] p-1 rounded-lg border border-[#2A5A4D]/40">
          {(['7D', '30D', '90D'] as const).map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRange(r)}
              className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
                range === r ? 'bg-[#123D32] text-white shadow-xs' : 'text-[#A3B8B0] hover:text-white'
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Live Telemetry
        </div>
      </div>

      {/* Analytics Chart & Metrics */}
      <div className="rounded-xl bg-[#091713] border border-[#2A5A4D]/50 p-3.5 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] text-[#88A699]">Conversion Uplift</div>
            <div className="text-xl font-bold text-white font-mono">{stats[range].uplift}</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-[#88A699]">Verified Visitors</div>
            <div className="text-base font-bold text-emerald-400 font-mono">
              {stats[range].visitors}
            </div>
          </div>
        </div>

        {/* Dynamic SVG Sparkline */}
        <div className="h-20 w-full relative">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80" fill="none">
            <defs>
              <linearGradient id="analyticsGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 65 Q 40 50, 75 55 T 150 35 T 225 25 T 300 10 L 300 80 L 0 80 Z"
              fill="url(#analyticsGrad)"
            />
            <path
              d="M0 65 Q 40 50, 75 55 T 150 35 T 225 25 T 300 10"
              stroke="#10B981"
              strokeWidth="2.5"
              fill="none"
            />
            <circle cx="300" cy="10" r="4" fill="#10B981" className="animate-pulse" />
          </svg>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#2A5A4D]/40 text-center text-[10px]">
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Event Tracking</div>
          <div className="font-bold text-white">First-Party Only</div>
        </div>
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Retention Rate</div>
          <div className="font-bold text-emerald-400">{stats[range].retention}</div>
        </div>
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Privacy Standard</div>
          <div className="font-bold text-white">GDPR Compliant</div>
        </div>
      </div>
    </div>
  );
}

