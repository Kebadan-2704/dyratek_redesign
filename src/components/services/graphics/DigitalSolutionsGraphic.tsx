'use client';

import React, { useState } from 'react';

export function DigitalSolutionsGraphic() {
  const [role, setRole] = useState<'admin' | 'partner' | 'client'>('admin');

  return (
    <div className="w-full max-w-[500px] select-none rounded-2xl bg-[#0F241E] border border-[#2A5A4D]/60 p-4 sm:p-5 shadow-xl text-white space-y-4">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#2A5A4D]/50 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white">🏛️ Custom Digital Portal & ERP</span>
          <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px] font-mono border border-emerald-500/30">
            RBAC Enabled
          </span>
        </div>
        <div className="text-[11px] font-mono text-emerald-400">SOC 2 Compliant</div>
      </div>

      {/* Portal Interface Preview */}
      <div className="rounded-xl bg-[#091713] border border-[#2A5A4D]/50 p-3.5 space-y-3">
        {/* Role Switcher */}
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-[#88A699]">Active Portal Role:</span>
          <div className="flex gap-1 bg-[#16382E] p-1 rounded-lg border border-[#2A5A4D]/40">
            {(['admin', 'partner', 'client'] as const).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRole(r)}
                className={`px-2 py-0.5 rounded text-[10px] font-semibold capitalize transition-all ${
                  role === r ? 'bg-[#123D32] text-white shadow-xs' : 'text-[#A3B8B0] hover:text-white'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Portal Module Cards */}
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className="p-2.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30 space-y-1">
            <div className="flex justify-between items-center text-[#88A699]">
              <span>Data Streams</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
            <div className="font-bold text-white text-xs">8 Live Feeds</div>
            <div className="text-[9px] text-emerald-300">Bi-directional Sync</div>
          </div>

          <div className="p-2.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30 space-y-1">
            <div className="flex justify-between items-center text-[#88A699]">
              <span>Permissions</span>
              <span className="text-emerald-400 font-mono">256-bit</span>
            </div>
            <div className="font-bold text-white text-xs">Role: {role.toUpperCase()}</div>
            <div className="text-[9px] text-[#A3B8B0]">Encrypted Session</div>
          </div>
        </div>

        {/* Audit Trail Strip */}
        <div className="p-2 rounded-lg bg-[#0E201A] border border-[#2A5A4D]/40 flex items-center justify-between text-[10px] font-mono text-[#88A699]">
          <span>Audit Log: Session verified</span>
          <span className="text-emerald-400">Latency: 22ms</span>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#2A5A4D]/40 text-center text-[10px]">
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Scalability</div>
          <div className="font-bold text-emerald-400">100k+ Users</div>
        </div>
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Custom Integrations</div>
          <div className="font-bold text-white">Any Legacy API</div>
        </div>
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Data Residency</div>
          <div className="font-bold text-white">UK & EU Hosted</div>
        </div>
      </div>
    </div>
  );
}

