'use client';

import React, { useState } from 'react';

export function EmailWhatsappGraphic() {
  const [channel, setChannel] = useState<'whatsapp' | 'email'>('whatsapp');
  const [isSending, setIsSending] = useState(false);
  const [sentCount, setSentCount] = useState(1420);

  const simulateDispatch = () => {
    if (isSending) return;
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSentCount((c) => c + 1);
    }, 700);
  };

  return (
    <div className="w-full max-w-[500px] select-none rounded-2xl bg-[#0F241E] border border-[#2A5A4D]/60 p-4 sm:p-5 shadow-xl text-white space-y-4">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#2A5A4D]/50 text-xs">
        <div className="flex items-center gap-1.5 bg-[#16382E] p-1 rounded-lg border border-[#2A5A4D]/40">
          <button
            type="button"
            onClick={() => setChannel('whatsapp')}
            className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
              channel === 'whatsapp'
                ? 'bg-[#123D32] text-white shadow-xs'
                : 'text-[#A3B8B0] hover:text-white'
            }`}
          >
            💬 WhatsApp Business API
          </button>
          <button
            type="button"
            onClick={() => setChannel('email')}
            className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
              channel === 'email'
                ? 'bg-[#123D32] text-white shadow-xs'
                : 'text-[#A3B8B0] hover:text-white'
            }`}
          >
            ✉️ Email Automation
          </button>
        </div>

        <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Verified Sender
        </div>
      </div>

      {/* Main Channel Preview */}
      <div className="rounded-xl bg-[#091713] border border-[#2A5A4D]/50 p-3.5 space-y-3">
        {channel === 'whatsapp' ? (
          <div className="space-y-2.5">
            {/* WhatsApp Chat Simulation */}
            <div className="p-3 rounded-xl bg-[#0B211A] border border-[#2A5A4D]/40 space-y-2 text-[11px]">
              <div className="flex items-center gap-2 pb-1.5 border-b border-[#2A5A4D]/30">
                <span className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center text-xs">
                  ✓
                </span>
                <div>
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <span>DYRATEK Automated Concierge</span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-900 text-emerald-300">
                      Official API
                    </span>
                  </div>
                </div>
              </div>

              {/* Chat bubbles */}
              <div className="space-y-1.5 pt-1">
                <div className="max-w-[85%] p-2 rounded-lg bg-[#16382E] text-white space-y-0.5 ml-auto">
                  <div>Hello! Your system update is ready. Click below to verify live telemetry.</div>
                  <div className="text-[9px] text-emerald-300 text-right flex items-center justify-end gap-1">
                    <span>09:42</span>
                    <span className="font-bold">✓✓ Read</span>
                  </div>
                </div>

                <div className="max-w-[80%] p-2 rounded-lg bg-[#0F241E] border border-[#2A5A4D]/30 text-[#A3B8B0]">
                  <div>Automated quick response triggered in 12ms.</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-2.5">
            {/* Email Campaign Simulation */}
            <div className="p-3 rounded-xl bg-[#0B211A] border border-[#2A5A4D]/40 space-y-2 text-[11px]">
              <div className="flex justify-between items-center pb-1.5 border-b border-[#2A5A4D]/30">
                <div className="font-semibold text-white">Campaign: Architectural Studio Onboarding</div>
                <span className="text-[10px] text-emerald-400 font-mono">DMARC 100%</span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center py-1">
                <div className="p-2 rounded bg-[#16382E]/60">
                  <div className="text-[9px] text-[#88A699]">Open Rate</div>
                  <div className="text-base font-bold text-emerald-400 font-mono">68.4%</div>
                </div>
                <div className="p-2 rounded bg-[#16382E]/60">
                  <div className="text-[9px] text-[#88A699]">Click Rate</div>
                  <div className="text-base font-bold text-emerald-400 font-mono">18.2%</div>
                </div>
                <div className="p-2 rounded bg-[#16382E]/60">
                  <div className="text-[9px] text-[#88A699]">Deliverability</div>
                  <div className="text-base font-bold text-emerald-400 font-mono">99.8%</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Trigger Button */}
        <button
          type="button"
          disabled={isSending}
          onClick={simulateDispatch}
          className="w-full py-2.5 px-3 rounded-lg bg-[#1D4A3D] hover:bg-[#255C4D] active:scale-[0.98] border border-[#2A5A4D] text-xs font-semibold text-white transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          {isSending ? (
            <>
              <svg className="animate-spin h-3.5 w-3.5 text-white" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              <span>Dispatching Automated Message...</span>
            </>
          ) : (
            <>
              <span>⚡</span>
              <span>Test Broadcast Flow (#{sentCount})</span>
            </>
          )}
        </button>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#2A5A4D]/40 text-center text-[10px]">
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">WhatsApp Opt-in</div>
          <div className="font-bold text-emerald-400">Meta Verified</div>
        </div>
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Spam Score</div>
          <div className="font-bold text-emerald-400">0.0 (Clean Inbox)</div>
        </div>
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Response Time</div>
          <div className="font-bold text-emerald-400">&lt; 15s Auto Reply</div>
        </div>
      </div>
    </div>
  );
}
