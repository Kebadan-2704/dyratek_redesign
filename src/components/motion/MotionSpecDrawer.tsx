'use client';

import React, { useEffect } from 'react';

export interface MotionSpecItem {
  id: string;
  name: string;
  trigger: string;
  duration: string;
  easing: string;
  initialState: string;
  finalState: string;
  fallback: string;
}

export const MOTION_SPEC_SEQUENCES: MotionSpecItem[] = [
  {
    id: '01',
    name: '01. Brand Reveal (Preloader)',
    trigger: 'DOMContentLoaded',
    duration: '650ms',
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    initialState: 'opacity: 0, scale: 0.96',
    finalState: 'opacity: 1, scale: 1',
    fallback: 'Instant opacity reveal, zero scale delay.'
  },
  {
    id: '02',
    name: '02. Hero Masked Headline',
    trigger: '+120ms post-brand reveal',
    duration: '650ms (staggered 100ms)',
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    initialState: 'clip-path: polygon(0 0, 100% 0, 100% 0, 0 0)',
    finalState: 'clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    fallback: 'Standard clean opacity fade-in (opacity: 0 → 1).'
  },
  {
    id: '03',
    name: '03. Paragraph & CTA Stagger',
    trigger: '+450ms post-headline',
    duration: '500ms',
    easing: 'ease-out',
    initialState: 'opacity: 0, translateY: 14px',
    finalState: 'opacity: 1, translateY: 0',
    fallback: 'Instant display without translateY offset.'
  },
  {
    id: '04',
    name: '04. Hero Geometric Ambient',
    trigger: 'Hero entrance complete',
    duration: 'Infinite loop (8000ms)',
    easing: 'ease-in-out',
    initialState: 'transform: rotate(0deg) scale(1)',
    finalState: 'transform: rotate(1.5deg) scale(1.02)',
    fallback: 'Static geometric visual; zero continuous GPU cycles.'
  },
  {
    id: '05',
    name: '05. Scroll Section Reveals',
    trigger: 'IntersectionObserver (threshold 0.15)',
    duration: '600ms',
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    initialState: 'opacity: 0, translateY: 24px',
    finalState: 'opacity: 1, translateY: 0',
    fallback: 'Native scroll entrance without vertical offset.'
  },
  {
    id: '06',
    name: '06. Progressive Text Highlighting',
    trigger: 'Viewport threshold (0.35)',
    duration: '700ms',
    easing: 'ease-out',
    initialState: 'color: #A09D94 (Ash muted)',
    finalState: 'color: #123D32 (Dark Forest Green)',
    fallback: 'Rendered in solid Dark Forest Green from initial paint.'
  },
  {
    id: '07',
    name: '07. Service Card Hover',
    trigger: 'Pointer hover / focus',
    duration: '280ms',
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    initialState: 'border: #E5E2DA, translateY: 0',
    finalState: 'border: #123D32, translateY: -4px, arrow +4px',
    fallback: 'Tactile touch scale feedback (active:scale-[0.99]).'
  },
  {
    id: '08',
    name: '08. Process Timeline Progression',
    trigger: 'Scroll progress synchronization',
    duration: 'Continuous step sync',
    easing: 'linear',
    initialState: 'Inactive step opacity 0.4',
    finalState: 'Active step opacity 1.0, progress indicator +25%',
    fallback: 'Distinct clean numbered step cards without scroll pinning.'
  },
  {
    id: '09',
    name: '09. Navigation Chrome Transition',
    trigger: 'Scroll offset > 40px',
    duration: '300ms',
    easing: 'ease',
    initialState: 'background: transparent, border: transparent',
    finalState: 'backdrop-blur: 16px, background: #F4F1E9/90, border: #E5E2DA',
    fallback: 'Solid background with 1px hairline border.'
  },
  {
    id: '10',
    name: '10. Diagonal Route Wipe',
    trigger: 'Route navigation click',
    duration: '420ms',
    easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
    initialState: 'clip-path: polygon(-20% 0, 0 0, -20% 100%, -40% 100%)',
    finalState: 'Full-bleed #123D32 diagonal wipe',
    fallback: 'Instant clean route fade transition.'
  },
  {
    id: '11',
    name: '11. Footer Wordmark Reveal',
    trigger: 'Viewport entrance',
    duration: '750ms',
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    initialState: 'opacity: 0, scale: 0.98, translateY: 16px',
    finalState: 'opacity: 1, scale: 1, translateY: 0',
    fallback: 'Static layout presentation.'
  }
];

export function MotionSpecDrawer({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="DYRATEK Master Motion Architecture & Interaction Specification"
    >
      <div className="w-full max-w-2xl bg-[#F4F1E9] h-full border-l border-[#E5E2DA] flex flex-col justify-between overflow-hidden shadow-2xl animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#E5E2DA] flex items-center justify-between bg-[#ECE8DF]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase text-[#C83B35] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#C83B35] animate-pulse" />
              <span>APPROVED DESIGN FREEZE SPECIFICATION</span>
            </div>
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl uppercase text-[#123D32] mt-1">
              Master Motion Architecture (11 Sequences)
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 border border-[#E5E2DA] bg-[#F4F1E9] text-[#123D32] font-mono text-sm font-bold hover:bg-[#123D32] hover:text-[#F4F1E9] transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Close motion specification drawer"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Sequence Table / Cards */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 divide-y divide-[#E5E2DA]">
          {MOTION_SPEC_SEQUENCES.map((seq) => (
            <div key={seq.id} className="pt-6 first:pt-0 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="font-heading font-bold text-base text-[#123D32] uppercase">
                  {seq.name}
                </span>
                <span className="px-2 py-0.5 bg-[#ECE8DF] border border-[#E5E2DA] text-[#C83B35] font-bold text-[10px]">
                  {seq.duration}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="bg-[#ECE8DF] p-2.5 border border-[#E5E2DA]">
                  <span className="text-[#2A2A2A]/60 block text-[9px] uppercase">TRIGGER</span>
                  <span className="text-[#123D32] font-semibold">{seq.trigger}</span>
                </div>
                <div className="bg-[#ECE8DF] p-2.5 border border-[#E5E2DA]">
                  <span className="text-[#2A2A2A]/60 block text-[9px] uppercase">EASING FUNCTION</span>
                  <span className="text-[#123D32] font-semibold">{seq.easing}</span>
                </div>
              </div>

              <div className="space-y-1.5 text-[11px] bg-[#F4F1E9] p-3 border border-[#E5E2DA]">
                <div>
                  <span className="text-[#2A2A2A]/60 text-[9px] uppercase mr-2">INITIAL:</span>
                  <code className="text-[#2A2A2A] font-mono">{seq.initialState}</code>
                </div>
                <div>
                  <span className="text-[#2A2A2A]/60 text-[9px] uppercase mr-2">FINAL:</span>
                  <code className="text-[#123D32] font-bold font-mono">{seq.finalState}</code>
                </div>
                <div className="pt-1 border-t border-[#E5E2DA]/80 text-[#C83B35] text-[10px]">
                  <span className="font-bold">REDUCED MOTION:</span> {seq.fallback}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-[#E5E2DA] bg-[#ECE8DF] flex justify-between items-center font-mono text-[11px] text-[#2A2A2A]/70">
          <span>STANDARD: SWISS MODERNIST CHOREOGRAPHY</span>
          <span className="text-[#123D32] font-bold">11/11 SEQUENCES ACTIVE</span>
        </div>
      </div>
    </div>
  );
}
