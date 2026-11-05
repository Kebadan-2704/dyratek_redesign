'use client';

import React, { useState } from 'react';

export function ContentStrategyGraphic() {
  const [activeVariant, setActiveVariant] = useState<'b' | 'a'>('b');

  return (
    <div className="w-full max-w-[500px] select-none rounded-2xl bg-[#0F241E] border border-[#2A5A4D]/60 p-4 sm:p-5 shadow-xl text-white space-y-4">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#2A5A4D]/50 text-xs">
        <div className="flex items-center gap-1.5 bg-[#16382E] p-1 rounded-lg border border-[#2A5A4D]/40">
          <button
            type="button"
            onClick={() => setActiveVariant('b')}
            className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
              activeVariant === 'b'
                ? 'bg-[#123D32] text-white shadow-xs'
                : 'text-[#A3B8B0] hover:text-white'
            }`}
          >
            ✨ Studio Copy (High-Converting)
          </button>
          <button
            type="button"
            onClick={() => setActiveVariant('a')}
            className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
              activeVariant === 'a'
                ? 'bg-[#123D32] text-white shadow-xs'
                : 'text-[#A3B8B0] hover:text-white'
            }`}
          >
            ⚠️ Generic AI Template
          </button>
        </div>

        <div className="text-[11px] font-mono text-emerald-400">
          {activeVariant === 'b' ? '+200% Conversion' : 'Low Resonance'}
        </div>
      </div>

      {/* Copywriting A/B Breakdown */}
      <div className="rounded-xl bg-[#091713] border border-[#2A5A4D]/50 p-3.5 space-y-2.5">
        {activeVariant === 'b' ? (
          <div className="p-3 rounded-lg bg-[#123D32]/50 border border-emerald-500/40 space-y-2">
            <div className="flex justify-between items-center text-[10px]">
              <span className="font-bold text-emerald-300 font-mono">SPECIFIC & VALUE-FIRST</span>
              <span className="text-emerald-400 font-mono">Conversion: 5.4%</span>
            </div>
            <div className="text-xs font-semibold text-white leading-relaxed">
              &ldquo;Fast websites, automated workflows, and native mobile apps that run your
              business.&rdquo;
            </div>
            <div className="text-[9px] text-[#A3B8B0] border-t border-[#2A5A4D]/30 pt-1.5 flex justify-between">
              <span>Readability: Grade 7.2 (Clear)</span>
              <span className="text-emerald-300 font-bold">Zero Fluff • Concrete Facts</span>
            </div>
          </div>
        ) : (
          <div className="p-3 rounded-lg bg-amber-950/40 border border-amber-500/40 space-y-2">
            <div className="flex justify-between items-center text-[10px]">
              <span className="font-bold text-amber-300 font-mono">VAGUE & JARGON-HEAVY</span>
              <span className="text-amber-400 font-mono">Conversion: 1.8%</span>
            </div>
            <div className="text-xs font-medium text-amber-100/90 leading-relaxed line-through">
              &ldquo;We leverage holistic paradigm synergies to transform your digital ecosystem with
              innovative solutions.&rdquo;
            </div>
            <div className="text-[9px] text-amber-300/80 border-t border-amber-500/30 pt-1.5 flex justify-between">
              <span>Readability: Grade 14.8 (Obtuse)</span>
              <span>High Bounce Rate</span>
            </div>
          </div>
        )}
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#2A5A4D]/40 text-center text-[10px]">
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Clarity Score</div>
          <div className="font-bold text-emerald-400">98/100</div>
        </div>
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Tone of Voice</div>
          <div className="font-bold text-white">Consistent Architecture</div>
        </div>
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Brand Positioning</div>
          <div className="font-bold text-emerald-400">Defensible</div>
        </div>
      </div>
    </div>
  );
}

