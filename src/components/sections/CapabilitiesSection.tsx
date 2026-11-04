'use client';

import React, { useState } from 'react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

export function CapabilitiesSection() {
  const [activeTab, setActiveTab] = useState<'commerce' | 'analytics' | 'automation'>('commerce');
  const [simulatedDispatched, setSimulatedDispatched] = useState(false);

  return (
    <section className="w-full bg-[#F4F1E9] py-20 lg:py-28 border-b border-[#E5E2DA]" id="capabilities">
      <div className="max-w-7xl mx-auto px-5 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-12 border-b border-[#E5E2DA]">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs tracking-widest uppercase text-[#123D32] font-semibold">
              <span className="w-1.5 h-1.5 bg-[#C83B35] inline-block" aria-hidden="true" />
              <span>04 / SAMPLE WORK</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl lg:text-[44px] leading-tight text-[#123D32] uppercase tracking-tight">
              See what we can build for you.
            </h2>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs mt-4 md:mt-0 flex-wrap">
            <span className="w-2 h-2 rounded-full bg-[#C83B35] flex-shrink-0" aria-hidden="true" />
            <span className="font-bold text-[#C83B35] break-words">
              SAMPLE PREVIEW — INTERACTIVE DEMO
            </span>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* MODULE 1: Modern SaaS Web & Mobile Workspace (7 Col) */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={100}>
              <div className="bg-[#F4F1E9] p-6 lg:p-8 border-t-2 border-t-[#123D32] border border-[#E5E2DA] flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start pb-3 border-b border-[#E5E2DA] mb-4">
                    <div>
                      <span className="font-mono text-[10px] uppercase text-[#C83B35] font-bold">
                        MODULE 01 // DASHBOARDS
                      </span>
                      <h3 className="font-heading font-bold text-lg text-[#123D32] mt-1">
                        Custom Web &amp; Mobile Dashboards
                      </h3>
                    </div>
                    <span className="px-2 py-0.5 bg-[#ECE8DF] border border-[#E5E2DA] font-mono text-[9px] text-[#123D32] font-bold">
                      LIVE DEMO
                    </span>
                  </div>

                  {/* Designed SaaS Preview Card */}
                  <div className="bg-[#ECE8DF] border border-[#E5E2DA] p-4 space-y-3">
                    {/* Browser Chrome Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-[#E5E2DA] text-[#2A2A2A]/60 font-mono text-[10px]">
                      <div className="flex items-center gap-1.5 overflow-hidden">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#E5E2DA] flex-shrink-0" aria-hidden="true" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#E5E2DA] flex-shrink-0" aria-hidden="true" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#E5E2DA] flex-shrink-0" aria-hidden="true" />
                        <span className="ml-2 text-[#2A2A2A] font-medium truncate max-w-[130px] sm:max-w-none">app.dyratek.com/dashboard</span>
                      </div>
                      <span className="text-[#123D32] font-bold">PREVIEW V1.0</span>
                    </div>

                    {/* Internal UI Layout Mockup with Interactive Tabs */}
                    <div className="grid grid-cols-12 gap-3 pt-1">
                      <div
                        role="tablist"
                        aria-label="Simulation Domains"
                        className="col-span-4 sm:col-span-3 bg-[#F4F1E9] p-2.5 border border-[#E5E2DA] space-y-1.5 font-mono text-[10px]"
                      >
                        <div className="font-bold text-[#123D32] pb-1 border-b border-[#E5E2DA]">PROJECTS</div>
                        <button
                          type="button"
                          role="tab"
                          id="tab-commerce"
                          aria-selected={activeTab === 'commerce'}
                          aria-controls="panel-commerce"
                          onClick={() => setActiveTab('commerce')}
                          className={`w-full text-left px-1.5 py-1 flex items-center justify-between cursor-pointer transition-colors ${
                            activeTab === 'commerce' ? 'bg-[#ECE8DF] text-[#123D32] font-bold' : 'text-[#2A2A2A]'
                          }`}
                        >
                          <span>Commerce</span>
                          {activeTab === 'commerce' && <span className="w-1.5 h-1.5 bg-[#C83B35] rounded-full" aria-hidden="true" />}
                        </button>
                        <button
                          type="button"
                          role="tab"
                          id="tab-automation"
                          aria-selected={activeTab === 'automation'}
                          aria-controls="panel-automation"
                          onClick={() => setActiveTab('automation')}
                          className={`w-full text-left px-1.5 py-1 flex items-center justify-between cursor-pointer transition-colors ${
                            activeTab === 'automation' ? 'bg-[#ECE8DF] text-[#123D32] font-bold' : 'text-[#2A2A2A]'
                          }`}
                        >
                          <span>Automation</span>
                          {activeTab === 'automation' && <span className="w-1.5 h-1.5 bg-[#C83B35] rounded-full" aria-hidden="true" />}
                        </button>
                        <button
                          type="button"
                          role="tab"
                          id="tab-analytics"
                          aria-selected={activeTab === 'analytics'}
                          aria-controls="panel-analytics"
                          onClick={() => setActiveTab('analytics')}
                          className={`w-full text-left px-1.5 py-1 flex items-center justify-between cursor-pointer transition-colors ${
                            activeTab === 'analytics' ? 'bg-[#ECE8DF] text-[#123D32] font-bold' : 'text-[#2A2A2A]'
                          }`}
                        >
                          <span>Analytics</span>
                          {activeTab === 'analytics' && <span className="w-1.5 h-1.5 bg-[#C83B35] rounded-full" aria-hidden="true" />}
                        </button>
                      </div>

                      <div
                        role="tabpanel"
                        id={`panel-${activeTab}`}
                        aria-labelledby={`tab-${activeTab}`}
                        className="col-span-8 sm:col-span-9 bg-[#F4F1E9] p-3 border border-[#E5E2DA] space-y-3"
                      >
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1">
                          <div className="font-heading font-bold text-xs text-[#123D32]">
                            {activeTab === 'commerce' && 'Daily Store Activity'}
                            {activeTab === 'automation' && 'Automated Task Queue'}
                            {activeTab === 'analytics' && 'Page Speed & Uptime'}
                          </div>
                          <span className="font-mono text-[8px] px-1.5 py-0.5 bg-[#123D32] text-[#F4F1E9] w-max">
                            SAMPLE DATA
                          </span>
                        </div>

                        <div className="grid grid-cols-3 gap-2 font-mono">
                          <div className="bg-[#ECE8DF] p-1.5 border border-[#E5E2DA]">
                            <div className="text-[9px] text-[#2A2A2A]/60">
                              {activeTab === 'commerce' ? 'Orders Today' : activeTab === 'automation' ? 'Tasks Done' : 'Uptime'}
                            </div>
                            <div className="text-xs font-bold text-[#123D32]">
                              {activeTab === 'commerce' ? '1,482' : activeTab === 'automation' ? '89,410' : '99.98%'}
                            </div>
                          </div>
                          <div className="bg-[#ECE8DF] p-1.5 border border-[#E5E2DA]">
                            <div className="text-[9px] text-[#2A2A2A]/60">
                              {activeTab === 'commerce' ? 'Store Speed' : activeTab === 'automation' ? 'Queue State' : 'Response'}
                            </div>
                            <div className="text-xs font-bold text-[#123D32]">
                              {activeTab === 'commerce' ? '0.4s' : activeTab === 'automation' ? 'Active' : '42ms'}
                            </div>
                          </div>
                          <div className="bg-[#ECE8DF] p-1.5 border border-[#E5E2DA]">
                            <div className="text-[9px] text-[#2A2A2A]/60">Status</div>
                            <div className="text-xs font-bold text-[#C83B35]">Live</div>
                          </div>
                        </div>

                        {/* Vector Bar Metric Visualization */}
                        <div className="h-14 w-full bg-[#ECE8DF] border border-[#E5E2DA] flex items-end p-1 gap-1">
                          <div className="w-1/12 bg-[#123D32]/30 h-3" />
                          <div className="w-1/12 bg-[#123D32]/40 h-5" />
                          <div className="w-1/12 bg-[#123D32]/50 h-4" />
                          <div className="w-1/12 bg-[#123D32]/60 h-8" />
                          <div className="w-1/12 bg-[#123D32]/70 h-7" />
                          <div className="w-1/12 bg-[#123D32]/80 h-10" />
                          <div className="w-1/12 bg-[#123D32]/90 h-9" />
                          <div className="w-1/12 bg-[#123D32] h-12" />
                          <div className="w-1/12 bg-[#C83B35] h-11" />
                          <div className="w-1/12 bg-[#123D32] h-10" />
                          <div className="w-1/12 bg-[#123D32] h-13" />
                          <div className="w-1/12 bg-[#123D32] h-12" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center font-mono text-[11px] text-[#2A2A2A]/60 pt-4 mt-4 border-t border-[#E5E2DA]">
                  <span>SAMPLE INTERFACE PREVIEW</span>
                  <span className="text-[#123D32] font-semibold">FAST MODERN CODE</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* MODULE 2: Business Automation & Connected Workflow (5 Col) */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={200}>
              <div className="bg-[#F4F1E9] p-6 lg:p-8 border-t-2 border-t-[#C83B35] border border-[#E5E2DA] flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start pb-3 border-b border-[#E5E2DA] mb-4">
                    <div>
                      <span className="font-mono text-[10px] uppercase text-[#C83B35] font-bold">
                        MODULE 02 // AUTOMATION
                      </span>
                      <h3 className="font-heading font-bold text-lg text-[#123D32] mt-1">
                        Fast Inquiries &amp; Customer Updates
                      </h3>
                    </div>
                    <span className="px-2 py-0.5 bg-[#ECE8DF] border border-[#E5E2DA] font-mono text-[9px] text-[#123D32] font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C83B35]" aria-hidden="true" />
                      TEST IT OUT
                    </span>
                  </div>

                  {/* Conversational Drawer Mockup with Interactive Simulation Trigger */}
                  <div className="bg-[#ECE8DF] border border-[#E5E2DA] p-3.5 space-y-3 font-mono text-xs">
                    <div className="flex gap-2 items-start justify-end">
                      <div className="bg-[#123D32] text-[#F4F1E9] p-2.5 max-w-[90%] text-[11px] leading-relaxed">
                        &ldquo;New customer inquiry received via WhatsApp.&rdquo;
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-[#2A2A2A]/70 py-1">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#C83B35] animate-ping motion-reduce:animate-none" aria-hidden="true" />
                        <span>Automated check: Validating customer inquiry</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSimulatedDispatched(!simulatedDispatched)}
                        className="px-2 py-0.5 bg-[#F4F1E9] border border-[#E5E2DA] text-[#123D32] font-bold hover:bg-[#123D32] hover:text-[#F4F1E9] transition-colors cursor-pointer"
                      >
                        {simulatedDispatched ? 'Reset' : 'Try it'}
                      </button>
                    </div>

                    <div className="bg-[#F4F1E9] p-3 border border-[#E5E2DA] space-y-2">
                      <div className="flex items-center justify-between text-[10px] text-[#123D32] font-bold">
                        <span className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-[#C83B35]" aria-hidden="true" />
                          DYRATEK AUTOMATION ENGINE
                        </span>
                        <span className="text-[#2A2A2A]/60">SAMPLE RESULT</span>
                      </div>
                      <p className="font-body text-xs text-[#2A2A2A] leading-normal">
                        {simulatedDispatched
                          ? 'Customer details saved to your contact list. A confirmation message was sent to their phone.'
                          : 'When a customer sends a message, their details save automatically to your contact list.'}
                      </p>
                      <div className="pt-1.5 flex gap-2 font-mono text-[9px]">
                        <span className="px-1.5 py-0.5 bg-[#ECE8DF] text-[#123D32] font-semibold border border-[#E5E2DA]">
                          CONTACTS: UPDATED
                        </span>
                        <span className="px-1.5 py-0.5 bg-[#ECE8DF] text-[#123D32] font-semibold border border-[#E5E2DA] flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C83B35]" aria-hidden="true" />
                          MESSAGE: SENT
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center font-mono text-[11px] text-[#2A2A2A]/60 pt-4 mt-4 border-t border-[#E5E2DA]">
                  <span>NOTIFICATIONS</span>
                  <span className="text-[#C83B35] font-bold">AUTOMATED UPDATES</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
