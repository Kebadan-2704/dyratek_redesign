'use client';

import React, { useState } from 'react';
import { PROCESS_STAGES } from '@/data/process';

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState<string>('01');

  const currentStage = PROCESS_STAGES.find((s) => s.step === activeStep) || PROCESS_STAGES[0];

  return (
    <section className="w-full bg-[#FBFBF9] py-16 sm:py-20 lg:py-24 border-b border-[#E1E4E0]" id="process">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12 space-y-10">
        {/* Section Header */}
        <div>
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-[#123D32]">
            How your project gets built
          </h2>
          <p className="text-base sm:text-lg text-[#555B57] mt-3 max-w-[65ch] leading-relaxed">
            Every project follows five clear stages from first conversation to final launch.
          </p>
        </div>

        {/* Stepper Navigation: Vertical on Mobile, 5-col on Desktop (No orphan tile!) */}
        <div
          role="tablist"
          aria-label="Project stages"
          className="grid grid-cols-1 sm:grid-cols-5 gap-3"
        >
          {PROCESS_STAGES.map((stage, idx) => {
            const isActive = stage.step === activeStep;
            return (
              <button
                key={stage.step}
                id={`stage-tab-${stage.step}`}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-controls={`stage-panel-${stage.step}`}
                onClick={() => setActiveStep(stage.step)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer min-h-[56px] flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#123D32] text-[#FBFBF9] border-[#123D32] shadow-sm'
                    : 'bg-white text-[#1E2221] border-[#E1E4E0] hover:bg-[#F3F4F1]'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span className={`text-xs font-semibold ${isActive ? 'text-[#D8D4CA]' : 'text-[#555B57]'}`}>
                    Step {idx + 1}
                  </span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#FBFBF9]" aria-hidden="true" />
                  )}
                </div>
                <div className="font-semibold text-sm leading-snug">
                  {stage.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Panel */}
        <div
          id={`stage-panel-${currentStage.step}`}
          role="tabpanel"
          aria-labelledby={`stage-tab-${currentStage.step}`}
          className="rounded-2xl bg-white border border-[#E1E4E0] p-6 sm:p-10 shadow-xs"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-semibold text-[#123D32] uppercase tracking-wide">
                Stage focus
              </div>
              <h3 className="font-bold text-2xl sm:text-3xl text-[#123D32]">
                {currentStage.focus}
              </h3>
              <p className="text-base text-[#555B57] leading-relaxed">
                {currentStage.description}
              </p>
            </div>

            <div className="lg:col-span-5 rounded-xl bg-[#F3F4F1] p-6 space-y-3.5 border border-[#E1E4E0]">
              <div className="text-xs font-semibold text-[#123D32] uppercase tracking-wide pb-2 border-b border-[#E1E4E0]">
                What is covered
              </div>
              <ul className="space-y-2.5 text-sm text-[#1E2221]">
                {currentStage.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#123D32] mt-2 flex-shrink-0" aria-hidden="true" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
