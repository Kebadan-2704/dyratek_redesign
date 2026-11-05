'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';

export function UiUxDesignGraphic() {
  const [activeState, setActiveState] = useState<'default' | 'hover' | 'active'>('default');
  const [activeToken, setActiveToken] = useState('Electric Violet');

  const tokens = [
    { name: 'Electric Violet', hex: '#7C3AED', tag: 'Primary Accent' },
    { name: 'Neon Cyan', hex: '#06B6D4', tag: 'Interactive' },
    { name: 'Sunset Coral', hex: '#F97316', tag: 'Focal / CTA' },
    { name: 'Rose Pink', hex: '#EC4899', tag: 'Delight / Ping' },
    { name: 'Bright Emerald', hex: '#10B981', tag: 'Success Status' },
    { name: 'Sun Amber', hex: '#F59E0B', tag: 'Warning / Highlight' }
  ];

  const currentHex = tokens.find((t) => t.name === activeToken)?.hex || '#7C3AED';

  return (
    <div className="w-full max-w-[500px] select-none rounded-2xl bg-gradient-to-b from-[#0B1E19] via-[#071511] to-[#040C0A] border-2 border-emerald-500/50 p-4 sm:p-5 shadow-2xl shadow-emerald-950/50 text-white space-y-4 relative overflow-hidden">
      {/* Background glowing multi-color aura */}
      <div
        className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-amber-500/15 blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-emerald-500/30 text-xs relative z-10">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white text-sm">🎨 Design System Studio</span>
          <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-purple-900 to-indigo-900 text-purple-300 text-[10px] font-mono border border-purple-400/40 font-bold">
            Figma Tokens v3
          </span>
        </div>
        <div className="text-[11px] font-mono text-cyan-300 font-bold">WCAG 2.2 AAA Validated</div>
      </div>

      {/* Main Artboard Canvas */}
      <div className="rounded-xl bg-[#06100D] border border-emerald-500/40 p-3.5 space-y-3 relative z-10">
        {/* Full Spectrum Token Swatches */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {tokens.map((t) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setActiveToken(t.name)}
              className={`p-1.5 rounded-xl border-2 text-center transition-all cursor-pointer ${
                activeToken === t.name
                  ? 'border-white bg-[#142A22] scale-105 shadow-md'
                  : 'border-transparent bg-[#0A1612] hover:border-white/40'
              }`}
            >
              <div
                className="w-full h-5 rounded-lg mb-1 shadow-sm"
                style={{ backgroundColor: t.hex }}
              />
              <div className="text-[8px] font-mono font-bold text-white truncate">{t.hex}</div>
            </button>
          ))}
        </div>

        {/* Interactive Component Frame with Auto-Layout Rulers */}
        <div className="p-3.5 rounded-xl bg-gradient-to-br from-[#0F2820] to-[#081713] border border-emerald-500/40 space-y-2.5 relative">
          <div className="flex items-center justify-between text-[10px] font-mono text-cyan-300 border-b border-emerald-500/30 pb-1.5 font-bold">
            <span className="flex items-center gap-1.5">
              <span>📐</span> Frame: Button / Auto-Layout (px: 24, py: 12)
            </span>
            <span className="text-amber-300">8px Grid System</span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex gap-1.5 text-[10px] bg-[#06100D] p-1 rounded-lg border border-emerald-500/30">
              {(['default', 'hover', 'active'] as const).map((st) => (
                <button
                  key={st}
                  type="button"
                  onClick={() => setActiveState(st)}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold capitalize transition-all cursor-pointer ${
                    activeState === st ? 'bg-white text-black' : 'text-[#88A699] hover:text-white'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>

            {/* Dynamic Button Preview Morphing to Active Swatch */}
            <motion.div
              animate={{
                scale: activeState === 'active' ? 0.95 : activeState === 'hover' ? 1.05 : 1,
                y: activeState === 'hover' ? -2 : 0
              }}
              style={{
                backgroundColor: currentHex,
                boxShadow: `0 8px 24px -4px ${currentHex}66`
              }}
              className="px-5 py-2.5 rounded-xl text-white text-xs font-bold shadow-lg cursor-pointer flex items-center gap-2 border border-white/30"
            >
              <span>Explore Prototype</span>
              <span>→</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Design System Foundations */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-emerald-500/30 text-center text-[10px] relative z-10">
        <div className="p-2 rounded-xl bg-gradient-to-b from-purple-950/60 to-purple-900/40 border border-purple-500/40">
          <div className="text-purple-300 font-medium">Type Hierarchy</div>
          <div className="font-bold text-white text-xs">4:5 Modular Scale</div>
        </div>
        <div className="p-2 rounded-xl bg-gradient-to-b from-cyan-950/60 to-cyan-900/40 border border-cyan-500/40">
          <div className="text-cyan-300 font-medium">Touch Targets</div>
          <div className="font-bold text-white text-xs">Min 48x48px</div>
        </div>
        <div className="p-2 rounded-xl bg-gradient-to-b from-amber-950/60 to-amber-900/40 border border-amber-500/40">
          <div className="text-amber-300 font-medium">Tokens Sync</div>
          <div className="font-bold text-white text-xs">Auto-Sync CSS</div>
        </div>
      </div>
    </div>
  );
}
