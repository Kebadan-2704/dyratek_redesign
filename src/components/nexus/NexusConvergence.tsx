'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { PillarId, PILLARS_CONFIG } from './nexus.types';
import { NexusGeometry } from './NexusGeometry';
import { NexusPlane } from './NexusPlane';
import { NexusCore } from './NexusCore';
import { useNexusMotion } from './useNexusMotion';

export function NexusConvergence() {
  const [activePillar, setActivePillar] = useState<PillarId | null>(null);
  const [selectedPillar, setSelectedPillar] = useState<PillarId | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const { isReducedMotion } = useNexusMotion(svgRef, activePillar || selectedPillar);

  // Effective pillar to show in details
  const effectivePillar = activePillar || selectedPillar;

  const handleSelect = useCallback((pillar: PillarId) => {
    setSelectedPillar((prev) => (prev === pillar ? null : pillar));
  }, []);

  const handleHover = useCallback((pillar: PillarId | null) => {
    setActivePillar(pillar);
  }, []);

  // Keyboard escape handler to return to idle
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActivePillar(null);
        setSelectedPillar(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      className="relative w-full bg-[#ECE8DF] border border-[#E5E2DA] p-4 sm:p-6 flex flex-col justify-between overflow-hidden shadow-sm"
      aria-label="DYRATEK Services — Interactive Guide to Build, Automate, and Grow"
    >
      {/* Top Header Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#E5E2DA] text-[#2A2A2A]/70 font-mono text-[10px] uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full ${
              effectivePillar ? 'bg-[#C83B35]' : 'bg-[#123D32]'
            } transition-colors duration-300 ${isReducedMotion ? '' : 'animate-pulse'}`}
            aria-hidden="true"
          />
          <span className="text-[#123D32] font-bold">THREE FOCUS AREAS</span>
        </div>
        <span className="text-[9px] sm:text-[10px] text-[#2A2A2A]/60">CLICK TO EXPLORE</span>
      </div>

      {/* Interactive Segmented Selector Tabs (Mobile & Touch Accessible) */}
      <div
        className="relative z-10 grid grid-cols-3 gap-1 mt-3 bg-[#E5E2DA]/60 p-1 border border-[#E5E2DA]"
        role="tablist"
        aria-label="Service Pillars"
      >
        {(['build', 'automate', 'grow'] as PillarId[]).map((pid) => {
          const isSelected = effectivePillar === pid;
          return (
            <button
              key={pid}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={`panel-${pid}`}
              onClick={() => handleSelect(pid)}
              onMouseEnter={() => handleHover(pid)}
              onMouseLeave={() => handleHover(null)}
              className={`min-h-[44px] py-2 px-1 sm:px-2 font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                isSelected
                  ? 'bg-[#123D32] text-[#F4F1E9] shadow-sm'
                  : 'text-[#2A2A2A]/80 hover:text-[#123D32] hover:bg-[#F4F1E9]/50'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isSelected ? 'bg-[#C83B35]' : 'bg-transparent border border-current'
                }`}
                aria-hidden="true"
              />
              {pid === 'build' && <span>01.BUILD</span>}
              {pid === 'automate' && (
                <>
                  <span className="sm:hidden">02.AUTO</span>
                  <span className="hidden sm:inline">02.AUTOMATE</span>
                </>
              )}
              {pid === 'grow' && (
                <>
                  <span className="sm:hidden">03.GROW</span>
                  <span className="hidden sm:inline">03.GROW</span>
                </>
              )}
            </button>
          );
        })}
      </div>

      {/* Main Architectural SVG Convergence Canvas */}
      <div className="relative z-10 w-full aspect-[4/3.2] my-2 flex items-center justify-center">
        <svg
          ref={svgRef}
          viewBox="0 0 600 480"
          className="w-full h-full select-none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Interactive diagram showing our three focus areas: Build, Automate, and Grow"
        >
          {/* Supporting Geometric Grid & Coordinates */}
          <NexusGeometry activePillar={effectivePillar} isReducedMotion={isReducedMotion} />

          {/* Plane 03: CREATE & GROW (Foundation Plane at Bottom) */}
          <NexusPlane
            pillarId="grow"
            activePillar={effectivePillar}
            onSelect={handleSelect}
            onHover={handleHover}
            isReducedMotion={isReducedMotion}
          />

          {/* Plane 01: BUILD (Vertical Plane / Monolith) */}
          <NexusPlane
            pillarId="build"
            activePillar={effectivePillar}
            onSelect={handleSelect}
            onHover={handleHover}
            isReducedMotion={isReducedMotion}
          />

          {/* Plane 02: AUTOMATE (Lighter Shear Plane with Red Edge Detail) */}
          <NexusPlane
            pillarId="automate"
            activePillar={effectivePillar}
            onSelect={handleSelect}
            onHover={handleHover}
            isReducedMotion={isReducedMotion}
          />

          {/* Central Convergence Core (Focal Intersection) */}
          <NexusCore activePillar={effectivePillar} isReducedMotion={isReducedMotion} />
        </svg>
      </div>

      {/* Bottom Interactive Readout Panel (Dynamic Descriptions) */}
      <div className="relative z-10 pt-3 border-t border-[#E5E2DA] min-h-[72px] flex flex-col justify-center">
        {effectivePillar ? (
          <div
            id={`panel-${effectivePillar}`}
            role="tabpanel"
            className="animate-in fade-in duration-200 space-y-1"
          >
            <div className="flex flex-wrap items-center justify-between gap-1 text-xs">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="w-1.5 h-1.5 bg-[#C83B35] inline-block flex-shrink-0" aria-hidden="true" />
                <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase text-[#123D32]">
                  {PILLARS_CONFIG[effectivePillar].code}
                </span>
                <span className="text-[#2A2A2A]/40 font-mono text-[10px]">|</span>
                <span className="font-mono text-[9px] sm:text-[10px] text-[#2A2A2A]/70 uppercase">
                  {PILLARS_CONFIG[effectivePillar].metric}
                </span>
              </div>
              <Link
                href={PILLARS_CONFIG[effectivePillar].href}
                className="font-mono text-[10px] font-bold text-[#123D32] hover:text-[#C83B35] transition-colors"
              >
                See services →
              </Link>
            </div>
            <p className="font-body text-xs text-[#2A2A2A] leading-relaxed">
              {PILLARS_CONFIG[effectivePillar].description}
            </p>
          </div>
        ) : (
          <div className="flex items-center justify-between text-[#2A2A2A]/70 font-mono text-[10px]">
            <span className="flex items-center gap-1.5 text-[#123D32] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#123D32]" aria-hidden="true" />
              OUR 3 FOCUS AREAS: BUILD • AUTOMATE • GROW
            </span>
            <span className="hidden sm:inline text-[#2A2A2A]/50">
              CLICK ANY AREA TO LEARN MORE
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
