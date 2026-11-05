'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROCESS_STAGES } from '@/data/process';
import { MotionFadeIn } from '@/components/motion/MotionFadeIn';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState<string>('01');
  const [scrollProgress, setScrollProgress] = useState(0.2);
  const sectionRef = useRef<HTMLElement>(null);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const shouldReduceMotion = useReducedMotion();

  const currentIndex = PROCESS_STAGES.findIndex((s) => s.step === activeStep);
  const currentStage = PROCESS_STAGES[currentIndex] || PROCESS_STAGES[0];

  // Scroll-Scrubbed Progress Rail
  useEffect(() => {
    if (shouldReduceMotion) return;
    if (typeof window === 'undefined') return;

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 75%',
        end: 'bottom 45%',
        scrub: true,
        onUpdate: (self) => {
          setScrollProgress(Math.max(0.1, self.progress));
          // Subtly sync active step as user scrolls through the section
          const scrubIndex = Math.min(
            PROCESS_STAGES.length - 1,
            Math.floor(self.progress * PROCESS_STAGES.length)
          );
          if (self.progress > 0.05 && self.progress < 0.95) {
            setActiveStep(PROCESS_STAGES[scrubIndex].step);
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      nextIndex = (index + 1) % PROCESS_STAGES.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      nextIndex = (index - 1 + PROCESS_STAGES.length) % PROCESS_STAGES.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = PROCESS_STAGES.length - 1;
    } else {
      return;
    }
    setActiveStep(PROCESS_STAGES[nextIndex].step);
    tabsRef.current[nextIndex]?.focus();
  };

  const progressPercent = Math.max(((currentIndex + 1) / PROCESS_STAGES.length) * 100, scrollProgress * 100);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FBFBF9] py-12 sm:py-16 lg:py-20 border-b border-[#E1E4E0]"
      id="process"
    >
      <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 space-y-10">
        {/* Section Header */}
        <MotionFadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
            <div>
              <span className="inline-block px-3 py-1 rounded-md bg-[#F0F3F1] text-xs font-semibold text-[#123D32] mb-3">
                Execution Methodology
              </span>
              <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-[#123D32] tracking-tight">
                How your project gets built
              </h2>
              <p className="text-base sm:text-lg text-[#555B57] mt-2 max-w-[65ch] leading-relaxed">
                Every project follows five clear stages from first conversation to final launch.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-3 text-xs font-medium text-[#1E2221] bg-white px-4 py-2 rounded-xl border border-[#E1E4E0] shadow-xs">
              <span className="font-semibold text-[#123D32]">Stage {currentIndex + 1} of {PROCESS_STAGES.length}</span>
              <div className="w-24 h-2 bg-[#E1E4E0] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#123D32] rounded-full"
                  initial={false}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: 'easeOut' }}
                />
              </div>
            </div>
          </div>
        </MotionFadeIn>

        {/* Stepper Navigation */}
        <div className="relative">
          {/* Progress rail behind tabs on desktop */}
          <div className="hidden sm:block absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[3px] bg-[#E1E4E0] -z-0" aria-hidden="true">
            <motion.div
              className="h-full bg-[#123D32]"
              initial={false}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: 'easeOut' }}
            />
          </div>

          <div
            role="tablist"
            aria-label="Project stages"
            className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative z-10"
          >
            {PROCESS_STAGES.map((stage, idx) => {
              const isActive = stage.step === activeStep;
              const isPast = idx < currentIndex;
              return (
                <button
                  key={stage.step}
                  ref={(el) => { tabsRef.current[idx] = el; }}
                  id={`stage-tab-${stage.step}`}
                  role="tab"
                  type="button"
                  tabIndex={isActive ? 0 : -1}
                  aria-selected={isActive}
                  aria-controls={`stage-panel-${stage.step}`}
                  onClick={() => setActiveStep(stage.step)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className={`relative p-4 rounded-xl text-left border transition-all cursor-pointer min-h-[64px] flex flex-col justify-between group outline-none focus-visible:ring-2 focus-visible:ring-[#123D32] focus-visible:ring-offset-2 ${
                    isActive
                      ? 'bg-[#123D32] text-[#FBFBF9] border-[#123D32] shadow-sm'
                      : isPast
                      ? 'bg-white text-[#1E2221] border-[#B7BEB9] hover:bg-[#F3F4F1]'
                      : 'bg-white text-[#1E2221] border-[#E1E4E0] hover:bg-[#F3F4F1]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1.5">
                    <span className={`text-xs font-semibold ${isActive ? 'text-[#D8D4CA]' : 'text-[#555B57]'}`}>
                      Stage 0{idx + 1}
                    </span>
                    {isActive ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FBFBF9]" aria-hidden="true" />
                    ) : isPast ? (
                      <svg className="w-4 h-4 text-[#123D32]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-[#E1E4E0] group-hover:bg-[#555B57]" aria-hidden="true" />
                    )}
                  </div>
                  <div className="font-semibold text-sm leading-snug">
                    {stage.name}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Panel (Always solid resting contrast, no washed-out mid-fade) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage.step}
            id={`stage-panel-${currentStage.step}`}
            role="tabpanel"
            aria-labelledby={`stage-tab-${currentStage.step}`}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0.9, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0.9, y: -4 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="rounded-2xl bg-white border border-[#E1E4E0] p-6 sm:p-10 shadow-xs"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-md bg-[#F0F3F1] text-xs font-semibold text-[#123D32] uppercase tracking-wide">
                    Stage {currentIndex + 1} of 5
                  </span>
                  <span className="text-xs text-[#1E2221] font-semibold">
                    {currentStage.name}
                  </span>
                </div>

                <h3 className="font-bold text-2xl sm:text-3xl text-[#123D32] tracking-tight">
                  {currentStage.focus}
                </h3>

                <p className="text-base sm:text-lg text-[#3D433F] leading-relaxed max-w-[65ch]">
                  {currentStage.description}
                </p>

                {/* Step Switch Controls with Accessible Disabled Contrast */}
                <div className="pt-4 flex items-center gap-3 border-t border-[#E1E4E0]">
                  <button
                    type="button"
                    disabled={currentIndex === 0}
                    onClick={() => setActiveStep(PROCESS_STAGES[currentIndex - 1].step)}
                    className="min-h-[44px] px-5 py-2 rounded-xl text-xs font-semibold border border-[#E1E4E0] text-[#123D32] hover:bg-[#F3F4F1] disabled:bg-[#F0F3F1] disabled:text-[#7A827D] disabled:border-[#E1E4E0] disabled:cursor-not-allowed transition-colors"
                  >
                    ← Previous stage
                  </button>
                  <button
                    type="button"
                    disabled={currentIndex === PROCESS_STAGES.length - 1}
                    onClick={() => setActiveStep(PROCESS_STAGES[currentIndex + 1].step)}
                    className="min-h-[44px] px-5 py-2 rounded-xl text-xs font-semibold bg-[#123D32] text-[#FBFBF9] hover:bg-[#0B2720] disabled:bg-[#E1E4E0] disabled:text-[#7A827D] disabled:cursor-not-allowed transition-colors shadow-xs"
                  >
                    Next stage →
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-xl bg-[#FBFBF9] p-6 space-y-4 border border-[#E1E4E0]">
                <div className="text-xs font-semibold text-[#123D32] uppercase tracking-wide pb-2 border-b border-[#E1E4E0] flex items-center justify-between">
                  <span>Key Deliverables</span>
                  <span className="text-[#555B57] font-medium">{currentStage.deliverables.length} checkpoints</span>
                </div>
                <ul className="space-y-3 text-sm text-[#1E2221]">
                  {currentStage.deliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#EBF2EE] text-[#123D32] flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="leading-snug font-medium text-[#1E2221]">{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
