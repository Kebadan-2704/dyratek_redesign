'use client';

import React, { useState } from 'react';

export function ApiIntegrationsGraphic() {
  const [isSending, setIsSending] = useState(false);
  const [latency, setLatency] = useState(32);
  const [statusCode] = useState(200);

  const sendRequest = () => {
    if (isSending) return;
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setLatency(Math.floor(Math.random() * 15) + 25);
    }, 600);
  };

  return (
    <div className="w-full max-w-[500px] select-none rounded-2xl bg-[#0F241E] border border-[#2A5A4D]/60 p-4 sm:p-5 shadow-xl text-white space-y-4">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#2A5A4D]/50 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white">⚡ API Integration Gateway</span>
          <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px] font-mono border border-emerald-500/30">
            REST & GraphQL
          </span>
        </div>
        <div className="text-[11px] font-mono text-emerald-400">OAuth 2.0 & Webhooks</div>
      </div>

      {/* API Console Playground */}
      <div className="rounded-xl bg-[#091713] border border-[#2A5A4D]/50 p-3 font-mono text-[11px] space-y-2.5">
        {/* Request Line */}
        <div className="flex items-center gap-2 bg-[#16382E] p-2 rounded-lg border border-[#2A5A4D]/30">
          <span className="px-2 py-0.5 rounded bg-emerald-700 text-white font-bold text-[10px]">
            POST
          </span>
          <span className="text-[#A3B8B0] text-[10px] truncate">
            https://api.dyratek.com/v1/sync-records
          </span>
        </div>

        {/* JSON Request Payload */}
        <div className="p-2.5 rounded-lg bg-[#0A1814] border border-[#2A5A4D]/40 text-[10px] space-y-0.5 text-[#88A699]">
          <div className="text-emerald-400">&#123;</div>
          <div className="pl-3">
            <span className="text-teal-300">&quot;source&quot;</span>: &quot;crm_inbound&quot;,
          </div>
          <div className="pl-3">
            <span className="text-teal-300">&quot;destination&quot;</span>: &quot;enterprise_db&quot;,
          </div>
          <div className="pl-3">
            <span className="text-teal-300">&quot;encryption&quot;</span>: &quot;AES-256-GCM&quot;
          </div>
          <div className="text-emerald-400">&#125;</div>
        </div>

        {/* Live Response Bar */}
        <div className="flex items-center justify-between p-2 rounded-lg bg-[#123D32]/50 border border-emerald-500/30 text-[10px]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-300 font-bold">{statusCode} OK</span>
            <span className="text-[#88A699]">({latency}ms)</span>
          </div>
          <span className="text-[#A3B8B0]">Payload: 1.2 KB</span>
        </div>

        {/* Send Button */}
        <button
          type="button"
          disabled={isSending}
          onClick={sendRequest}
          className="w-full py-2 px-3 rounded-lg bg-[#1D4A3D] hover:bg-[#255C4D] active:scale-[0.98] border border-[#2A5A4D] text-xs font-semibold text-white transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          {isSending ? (
            <>
              <svg className="animate-spin h-3.5 w-3.5 text-white" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              <span>Sending Network Request...</span>
            </>
          ) : (
            <>
              <span>⚡</span>
              <span>Send Live API Request</span>
            </>
          )}
        </button>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#2A5A4D]/40 text-center text-[10px]">
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Rate Limiting</div>
          <div className="font-bold text-white">Token Bucket</div>
        </div>
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Authentication</div>
          <div className="font-bold text-white">mTLS & JWT</div>
        </div>
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Reliability</div>
          <div className="font-bold text-white">Automated Retry</div>
        </div>
      </div>
    </div>
  );
}
