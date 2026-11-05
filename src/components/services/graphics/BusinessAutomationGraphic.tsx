'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';

export function BusinessAutomationGraphic() {
  const [activeStep, setActiveStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [executions, setExecutions] = useState(1284);

  const runPipeline = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(1);

    setTimeout(() => setActiveStep(2), 350);
    setTimeout(() => setActiveStep(3), 700);
    setTimeout(() => {
      setActiveStep(4);
      setIsRunning(false);
      setExecutions((e) => e + 1);
    }, 1100);
  };

  const steps = [
    {
      title: 'Inbound Webhook',
      time: '0ms',
      icon: '⚡',
      color: 'border-cyan-400 bg-gradient-to-b from-cyan-950/90 to-blue-950/80 text-cyan-300 shadow-cyan-500/20'
    },
    {
      title: 'Data Validator',
      time: '12ms',
      icon: '🔍',
      color: 'border-purple-400 bg-gradient-to-b from-purple-950/90 to-indigo-950/80 text-purple-300 shadow-purple-500/20'
    },
    {
      title: 'CRM Contact Sync',
      time: '28ms',
      icon: '🗄️',
      color: 'border-emerald-400 bg-gradient-to-b from-emerald-950/90 to-teal-950/80 text-emerald-300 shadow-emerald-500/20'
    },
    {
      title: 'Team Slack Alert',
      time: '41ms',
      icon: '🔔',
      color: 'border-amber-400 bg-gradient-to-b from-amber-950/90 to-rose-950/80 text-amber-300 shadow-amber-500/20'
    }
  ];

  return (
    <div className="w-full max-w-[500px] select-none rounded-2xl bg-gradient-to-b from-[#0B1E19] via-[#071511] to-[#040C0A] border-2 border-emerald-500/50 p-4 sm:p-5 shadow-2xl shadow-emerald-950/50 text-white space-y-4 relative overflow-hidden">
      {/* Background glowing multi-color aura */}
      <div
        className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/15 blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-emerald-500/30 text-xs relative z-10">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white text-sm">🔄 Real-time Automation Engine</span>
          <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 text-[10px] font-mono border border-emerald-400/40 font-bold">
            Zero-Maintenance
          </span>
        </div>
        <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5 font-bold">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          Active Pipeline
        </div>
      </div>

      {/* Main Workflow Visualization */}
      <div className="rounded-xl bg-[#06100D] border border-emerald-500/40 p-3.5 space-y-3 relative z-10">
        {/* Nodes Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {steps.map((s, idx) => {
            const isCompleted = activeStep > idx || activeStep === 4;
            const isCurrent = activeStep === idx + 1 && isRunning;

            return (
              <motion.div
                key={s.title}
                animate={{
                  scale: isCurrent ? 1.08 : 1
                }}
                className={`p-2.5 rounded-xl border-2 text-center transition-all shadow-md ${
                  isCurrent
                    ? `${s.color} ring-2 ring-white/50`
                    : isCompleted
                    ? s.color
                    : 'border-[#1A382E] bg-[#0A1612] text-[#88A699]'
                }`}
              >
                <div className="text-base mb-1">{s.icon}</div>
                <div className="text-[10px] font-bold truncate text-white">{s.title}</div>
                <div className="text-[9px] font-mono font-bold mt-0.5 opacity-90">{s.time}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Execution Log */}
        <div className="p-2.5 rounded-xl bg-gradient-to-r from-emerald-950/60 to-cyan-950/60 border border-emerald-400/30 font-mono text-[10px] text-white flex items-center justify-between">
          <span className="text-emerald-300">Total Executions: {executions.toLocaleString()}</span>
          <span className="text-cyan-300 font-bold">100% Success Rate</span>
        </div>

        {/* Trigger Button with Electric Gradient */}
        <button
          type="button"
          disabled={isRunning}
          onClick={runPipeline}
          className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-400 hover:to-pink-400 active:scale-[0.98] border border-purple-300/40 text-xs font-bold text-white transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-lg shadow-purple-500/30"
        >
          {isRunning ? (
            <>
              <svg className="animate-spin h-3.5 w-3.5 text-white" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              <span>Executing Automated Nodes...</span>
            </>
          ) : (
            <>
              <span className="text-amber-300">⚡</span>
              <span>Test Automation Pipeline</span>
            </>
          )}
        </button>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-emerald-500/30 text-center text-[10px] relative z-10">
        <div className="p-2 rounded-xl bg-gradient-to-b from-cyan-950/60 to-cyan-900/40 border border-cyan-500/40">
          <div className="text-cyan-300 font-medium">Processing Time</div>
          <div className="font-bold text-white text-xs">&lt; 50ms Total</div>
        </div>
        <div className="p-2 rounded-xl bg-gradient-to-b from-purple-950/60 to-purple-900/40 border border-purple-500/40">
          <div className="text-purple-300 font-medium">Manual Entry</div>
          <div className="font-bold text-white text-xs">0 Hours</div>
        </div>
        <div className="p-2 rounded-xl bg-gradient-to-b from-emerald-950/60 to-emerald-900/40 border border-emerald-500/40">
          <div className="text-emerald-300 font-medium">Uptime SLA</div>
          <div className="font-bold text-white text-xs">99.99% Cloud</div>
        </div>
      </div>
    </div>
  );
}
