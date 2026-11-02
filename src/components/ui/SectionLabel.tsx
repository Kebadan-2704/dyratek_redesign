import React from 'react';

export interface SectionLabelProps {
  index?: string;
  label: string;
  className?: string;
}

export function SectionLabel({ index, label, className = '' }: SectionLabelProps) {
  return (
    <div className={`inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] font-bold text-[#123D32] ${className}`}>
      <span className="w-1.5 h-1.5 bg-[#C83B35] inline-block flex-shrink-0" aria-hidden="true" />
      <span>
        {index ? `${index} // ` : ''}
        {label}
      </span>
    </div>
  );
}

