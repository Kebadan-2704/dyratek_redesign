'use client';

import React from 'react';

export function MaintenanceSupportGraphic() {
  return (
    <div className="w-full max-w-[500px] select-none rounded-2xl bg-[#0F241E] border border-[#2A5A4D]/60 p-4 sm:p-5 shadow-xl text-white space-y-4">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#2A5A4D]/50 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white">🛡️ 24/7 System Health Monitor</span>
          <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px] font-mono border border-emerald-500/30">
            All Systems Operational
          </span>
        </div>
        <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          99.99% Uptime
        </div>
      </div>

      {/* Heartbeat & Infrastructure Nodes */}
      <div className="rounded-xl bg-[#091713] border border-[#2A5A4D]/50 p-3.5 space-y-3">
        {/* Animated Heartbeat SVG */}
        <div className="h-10 w-full relative flex items-center bg-[#0C1B16] rounded-lg px-2 overflow-hidden border border-[#2A5A4D]/30">
          <svg className="w-full h-full" viewBox="0 0 400 40" fill="none">
            <path
              d="M0 20 L 120 20 L 130 5 L 140 35 L 150 12 L 160 26 L 170 20 L 280 20 L 290 5 L 300 35 L 310 12 L 320 26 L 330 20 L 400 20"
              stroke="#10B981"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Nodes Health Matrix */}
        <div className="grid grid-cols-3 gap-2 text-[10px]">
          <div className="p-2 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30 space-y-0.5">
            <div className="text-[#88A699]">Edge CDN</div>
            <div className="text-emerald-400 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Healthy (12ms)
            </div>
          </div>
          <div className="p-2 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30 space-y-0.5">
            <div className="text-[#88A699]">Database Pool</div>
            <div className="text-emerald-400 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              100% Synced
            </div>
          </div>
          <div className="p-2 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30 space-y-0.5">
            <div className="text-[#88A699]">SSL Certificate</div>
            <div className="text-emerald-400 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Valid (312d)
            </div>
          </div>
        </div>

        {/* Security Patch Status */}
        <div className="p-2 rounded-lg bg-[#123D32]/40 border border-[#2A5A4D]/40 flex items-center justify-between text-[10px]">
          <span className="text-[#A3B8B0]">Security Vulnerabilities:</span>
          <span className="text-emerald-400 font-mono font-bold">0 CVE Detected • Verified</span>
        </div>
      </div>

      {/* SLA Highlights */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#2A5A4D]/40 text-center text-[10px]">
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Response SLA</div>
          <div className="font-bold text-emerald-400">&lt; 15 mins</div>
        </div>
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Automated Backups</div>
          <div className="font-bold text-white">Daily Snapshots</div>
        </div>
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Patch Frequency</div>
          <div className="font-bold text-white">Continuous CI</div>
        </div>
      </div>
    </div>
  );
}

