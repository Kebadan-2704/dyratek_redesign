'use client';

import React, { useState } from 'react';

export function TechnicalConsultingGraphic() {
  const [phase, setPhase] = useState<'audit' | 'architecture' | 'execution'>('architecture');

  return (
    <div className="w-full max-w-[500px] select-none rounded-2xl bg-[#0F241E] border border-[#2A5A4D]/60 p-4 sm:p-5 shadow-xl text-white space-y-4">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#2A5A4D]/50 text-xs">
        <div className="flex items-center gap-1.5 bg-[#16382E] p-1 rounded-lg border border-[#2A5A4D]/40">
          {(['audit', 'architecture', 'execution'] as const).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPhase(p)}
              className={`px-2.5 py-1 rounded text-[11px] font-semibold capitalize transition-all ${
                phase === p ? 'bg-[#123D32] text-white shadow-xs' : 'text-[#A3B8B0] hover:text-white'
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        <div className="text-[11px] font-mono text-emerald-400">SOC 2 & ISO Ready</div>
      </div>

      {/* Consulting Roadmap Blueprint */}
      <div className="rounded-xl bg-[#091713] border border-[#2A5A4D]/50 p-3.5 space-y-2.5 text-[11px]">
        {phase === 'audit' && (
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold text-white">
              <span>Codebase & Infra Audit</span>
              <span className="text-emerald-400 font-mono">Stage 01</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30 space-y-1 text-[10px] text-[#A3B8B0]">
              <div>• Tech debt analysis and bottleneck discovery</div>
              <div>• Third-party dependency security & license verification</div>
              <div>• Infrastructure cost audit and optimization roadmap</div>
            </div>
          </div>
        )}

        {phase === 'architecture' && (
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold text-white">
              <span>System Design & Cloud Matrix</span>
              <span className="text-emerald-400 font-mono">Stage 02</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30 space-y-1 text-[10px] text-[#A3B8B0]">
              <div>• Edge CDN routing + serverless microservice boundaries</div>
              <div>• High-availability database cluster with read-replicas</div>
              <div>• Zero-trust security policy & RBAC permission model</div>
            </div>
          </div>
        )}

        {phase === 'execution' && (
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold text-white">
              <span>Engineering Governance</span>
              <span className="text-emerald-400 font-mono">Stage 03</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30 space-y-1 text-[10px] text-[#A3B8B0]">
              <div>• Automated CI/CD pipeline with continuous regression tests</div>
              <div>• Incident response runbooks & disaster recovery drills</div>
              <div>• Engineering team mentoring & best-practice handover</div>
            </div>
          </div>
        )}
      </div>

      {/* Strategic Highlights */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#2A5A4D]/40 text-center text-[10px]">
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Cloud Spend</div>
          <div className="font-bold text-emerald-400">-40% Average</div>
        </div>
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Technical Debt</div>
          <div className="font-bold text-white">Zero High-Risk</div>
        </div>
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Delivery Speed</div>
          <div className="font-bold text-emerald-400">2.5x Velocity</div>
        </div>
      </div>
    </div>
  );
}

