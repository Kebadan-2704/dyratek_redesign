'use client';

import React, { useState } from 'react';
import { PROCESS_STAGES } from '@/data/process';

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState<string>('01');

  const currentStage = PROCESS_STAGES.find((s) => s.step === activeStep) || PROCESS_STAGES[0];
  const activeIndex = PROCESS_STAGES.findIndex((s) => s.step === activeStep);
  const progressPercentage = ((activeIndex + 1) / PROCESS_STAGES.length) * 100;

  return (
    <section className="w-full bg-[#F4F1E9] py-20 lg:py-28 border-b border-[#E5E2DA]" id="process">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#E5E2DA]">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs tracking-widest uppercase text-[#C83B35] font-semibold">
              <span className="w-1.5 h-1.5 bg-[#C83B35] inline-block" aria-hidden="true" />
              <span>05 // COLLABORATIVE METHODOLOGY</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl lg:text-[44px] leading-tight text-[#123D32] uppercase tracking-tight">
              The 5-Stage Blueprint
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-[#2A2A2A]/70 flex items-center gap-3">
            <span>TIMELINE PROGRESSION:</span>
            <span className="font-bold text-[#123D32]">{activeStep} / 05</span>
          </div>
        </div>

        {/* Global Progress Bar Line */}
        <div className="w-full bg-[#E5E2DA] h-1 mb-8 relative">
          <div
            className="bg-[#123D32] h-1 transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* Interactive Step Tab Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-4 mb-8">
          {PROCESS_STAGES.map((stage) => {
            const isActive = stage.step === activeStep;
            return (
              <button
                key={stage.step}
                type="button"
                onClick={() => setActiveStep(stage.step)}
                className={`p-4 text-left border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#123D32] text-[#F4F1E9] border-[#123D32] shadow-md'
                    : 'bg-[#ECE8DF] text-[#2A2A2A] border-[#E5E2DA] hover:border-[#123D32]/50'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className={`font-mono text-xs font-bold flex items-center gap-1.5 ${isActive ? 'text-[#F4F1E9]' : 'text-[#123D32]'}`}>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#C83B35]" aria-hidden="true" />}
                    STAGE {stage.step}
                  </span>
                  <span className="font-mono text-[9px] opacity-70">
                    {stage.duration}
                  </span>
                </div>
                <div className="font-heading font-bold text-sm uppercase truncate">
                  {stage.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Architecture Card */}
        <div className="bg-[#F4F1E9] border-2 border-[#123D32] p-6 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[#C83B35] font-bold uppercase">
                <span className="w-1.5 h-1.5 bg-[#C83B35]" />
                STAGE {currentStage.step} &bull; {currentStage.phase}
              </div>

              <h3 className="font-heading font-extrabold text-2xl lg:text-3xl uppercase text-[#123D32]">
                {currentStage.name}: {currentStage.focus}
              </h3>

              <p className="font-body text-sm lg:text-base text-[#2A2A2A]/85 leading-relaxed">
                {currentStage.description}
              </p>

              <div className="pt-4 border-t border-[#E5E2DA] font-mono text-xs">
                <span className="text-[#123D32] font-bold block mb-1">GOVERNANCE GATE:</span>
                <span className="text-[#2A2A2A]/80">{currentStage.governance}</span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#ECE8DF] border border-[#E5E2DA] p-6 space-y-4">
              <div className="font-mono text-xs uppercase text-[#123D32] font-bold pb-2 border-b border-[#E5E2DA]">
                Contract Deliverables
              </div>
              <ul className="space-y-2.5 font-mono text-xs text-[#2A2A2A]/80">
                {currentStage.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#C83B35] font-bold">0{idx + 1}.</span>
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
