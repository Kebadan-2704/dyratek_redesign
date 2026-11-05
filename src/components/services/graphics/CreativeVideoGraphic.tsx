'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';

export function CreativeVideoGraphic() {
  const [isPlaying, setIsPlaying] = useState(true);

  const rainbowColors = [
    '#06B6D4',
    '#10B981',
    '#22C55E',
    '#84CC16',
    '#EAB308',
    '#F97316',
    '#EF4444',
    '#EC4899',
    '#D946EF',
    '#A855F7',
    '#8B5CF6',
    '#6366F1',
    '#3B82F6',
    '#0EA5E9'
  ];

  return (
    <div className="w-full max-w-[500px] select-none rounded-2xl bg-gradient-to-b from-[#0B1E19] via-[#071511] to-[#040C0A] border-2 border-emerald-500/50 p-4 sm:p-5 shadow-2xl shadow-emerald-950/50 text-white space-y-4 relative overflow-hidden">
      {/* Background glowing multi-color aura */}
      <div
        className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-cyan-500/15 blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-emerald-500/30 text-xs relative z-10">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white text-sm">🎬 Motion & Video Studio</span>
          <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white text-[10px] font-mono font-bold shadow-xs">
            4K 60fps ProRes
          </span>
        </div>
        <div className="text-[11px] font-mono text-cyan-300 font-bold">Rec.709 & HDR Wide</div>
      </div>

      {/* Video Monitor & Timeline */}
      <div className="rounded-xl bg-[#06100D] border border-emerald-500/40 p-3.5 space-y-2.5 relative z-10">
        {/* Video Canvas Monitor with Cinematic Flare */}
        <div className="relative aspect-video rounded-xl bg-gradient-to-br from-[#06120E] via-[#0A1A14] to-[#040A08] border border-emerald-500/40 flex flex-col justify-between p-3 overflow-hidden shadow-inner">
          <div className="flex justify-between items-center text-[10px] font-mono">
            <span className="flex items-center gap-1.5 text-rose-400 font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
              LIVE REC
            </span>
            <span className="text-cyan-300 font-bold">00:03:42:14</span>
          </div>

          {/* Central Title Animation Preview */}
          <div className="text-center space-y-1 my-auto">
            <motion.div
              animate={isPlaying ? { scale: [1, 1.03, 1] } : undefined}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-base font-extrabold tracking-widest uppercase font-mono bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient"
            >
              DYRATEK CINEMATIC
            </motion.div>
            <div className="text-[10px] text-amber-300 font-mono font-bold tracking-wider">
              ✦ Award-Winning Art Direction ✦
            </div>
          </div>

          {/* Full Rainbow Neon Audio Waveform */}
          <div className="flex items-end justify-center gap-1 h-6">
            {[40, 75, 35, 95, 65, 100, 50, 85, 60, 95, 35, 80, 55, 90].map((h, i) => (
              <motion.div
                key={i}
                animate={isPlaying ? { height: [`${h * 0.3}%`, `${h}%`, `${h * 0.4}%`] } : { height: '30%' }}
                transition={{ repeat: Infinity, duration: 0.9 + (i % 4) * 0.2 }}
                style={{ backgroundColor: rainbowColors[i % rainbowColors.length] }}
                className="w-1.5 rounded-full shadow-sm"
              />
            ))}
          </div>
        </div>

        {/* Timeline Tracks with Colorful Sequence Bars */}
        <div className="p-2.5 rounded-xl bg-[#091511] border border-emerald-500/30 space-y-1.5 text-[9px] font-mono">
          <div className="flex items-center gap-2">
            <span className="w-14 text-cyan-300 font-bold">V1 Video</span>
            <div className="flex-1 h-3.5 rounded-md bg-[#0F2820] border border-cyan-500/40 relative overflow-hidden">
              <div className="w-4/5 h-full bg-gradient-to-r from-cyan-600 to-blue-600 text-[8px] text-white px-2 flex items-center font-bold">
                Cinematic_Cut_4K.mov
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-14 text-purple-300 font-bold">A1 Audio</span>
            <div className="flex-1 h-3.5 rounded-md bg-[#0F2820] border border-purple-500/40 relative overflow-hidden">
              <div className="w-5/6 h-full bg-gradient-to-r from-purple-600 to-pink-600 text-[8px] text-white px-2 flex items-center font-bold">
                Spatial_Audio_Master.wav
              </div>
            </div>
          </div>
        </div>

        {/* Play/Pause Button with Vibrant Gradient */}
        <button
          type="button"
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:opacity-90 active:scale-[0.98] border border-emerald-400/40 text-xs font-bold text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-emerald-500/20"
        >
          <span>{isPlaying ? '⏸ Pause Playhead' : '▶ Play Cinematic Sequence'}</span>
        </button>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-emerald-500/30 text-center text-[10px] relative z-10">
        <div className="p-2 rounded-xl bg-gradient-to-b from-rose-950/60 to-rose-900/40 border border-rose-500/40">
          <div className="text-rose-300 font-medium">Resolution</div>
          <div className="font-bold text-white text-xs">4K Ultra HD</div>
        </div>
        <div className="p-2 rounded-xl bg-gradient-to-b from-amber-950/60 to-amber-900/40 border border-amber-500/40">
          <div className="text-amber-300 font-medium">Frame Rate</div>
          <div className="font-bold text-amber-300 text-xs">60fps ProRes</div>
        </div>
        <div className="p-2 rounded-xl bg-gradient-to-b from-purple-950/60 to-purple-900/40 border border-purple-500/40">
          <div className="text-purple-300 font-medium">Sound Design</div>
          <div className="font-bold text-white text-xs">Dolby Spatial</div>
        </div>
      </div>
    </div>
  );
}
