'use client';

import React, { useState } from 'react';

export function DatabaseDesignGraphic() {
  const [selectedTable, setSelectedTable] = useState<'users' | 'orders' | 'invoices'>('orders');

  return (
    <div className="w-full max-w-[500px] select-none rounded-2xl bg-[#0F241E] border border-[#2A5A4D]/60 p-4 sm:p-5 shadow-xl text-white space-y-4">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#2A5A4D]/50 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white">🗄️ Relational Schema Visualizer</span>
          <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px] font-mono border border-emerald-500/30">
            PostgreSQL / Prisma
          </span>
        </div>
        <div className="text-[11px] font-mono text-emerald-400">Index Scan: 0.74ms</div>
      </div>

      {/* Schema Entity Relationship Cards */}
      <div className="rounded-xl bg-[#091713] border border-[#2A5A4D]/50 p-3 space-y-3">
        <div className="grid grid-cols-3 gap-2 text-[10px]">
          <button
            type="button"
            onClick={() => setSelectedTable('users')}
            className={`p-2 rounded-lg border text-left transition-all ${
              selectedTable === 'users'
                ? 'bg-[#1D4A3D] border-emerald-400 text-white'
                : 'bg-[#16382E]/40 border-[#2A5A4D]/40 text-[#88A699]'
            }`}
          >
            <div className="font-bold text-white">users</div>
            <div className="font-mono text-[9px] mt-1 text-[#A3B8B0]">id (PK)</div>
            <div className="font-mono text-[9px] text-[#88A699]">email (UK)</div>
          </button>

          <button
            type="button"
            onClick={() => setSelectedTable('orders')}
            className={`p-2 rounded-lg border text-left transition-all ${
              selectedTable === 'orders'
                ? 'bg-[#1D4A3D] border-emerald-400 text-white'
                : 'bg-[#16382E]/40 border-[#2A5A4D]/40 text-[#88A699]'
            }`}
          >
            <div className="font-bold text-white">orders</div>
            <div className="font-mono text-[9px] mt-1 text-[#A3B8B0]">id (PK)</div>
            <div className="font-mono text-[9px] text-emerald-300">user_id (FK)</div>
          </button>

          <button
            type="button"
            onClick={() => setSelectedTable('invoices')}
            className={`p-2 rounded-lg border text-left transition-all ${
              selectedTable === 'invoices'
                ? 'bg-[#1D4A3D] border-emerald-400 text-white'
                : 'bg-[#16382E]/40 border-[#2A5A4D]/40 text-[#88A699]'
            }`}
          >
            <div className="font-bold text-white">invoices</div>
            <div className="font-mono text-[9px] mt-1 text-[#A3B8B0]">id (PK)</div>
            <div className="font-mono text-[9px] text-emerald-300">order_id (FK)</div>
          </button>
        </div>

        {/* Query Explain Plan Strip */}
        <div className="p-2.5 rounded-lg bg-[#0E201A] border border-[#2A5A4D]/40 font-mono text-[10px] space-y-1">
          <div className="text-emerald-400 font-bold">EXPLAIN ANALYZE SELECT * FROM {selectedTable}:</div>
          <div className="text-[#A3B8B0]">✔ Scan: Index Only on idx_{selectedTable}_pkey</div>
          <div className="flex justify-between text-[9px] text-[#88A699] pt-1 border-t border-[#2A5A4D]/30">
            <span>Buffer Hit Rate: 100%</span>
            <span className="text-emerald-300 font-bold">Execution: 0.74ms</span>
          </div>
        </div>
      </div>

      {/* Database Foundations */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#2A5A4D]/40 text-center text-[10px]">
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Normalization</div>
          <div className="font-bold text-white">3NF Strict</div>
        </div>
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">ACID Compliance</div>
          <div className="font-bold text-white">Serializable</div>
        </div>
        <div className="p-1.5 rounded-lg bg-[#16382E]/50 border border-[#2A5A4D]/30">
          <div className="text-[#88A699]">Migration Safety</div>
          <div className="font-bold text-white">Zero Downtime</div>
        </div>
      </div>
    </div>
  );
}

