import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  topAccent?: 'none' | 'primary' | 'accent' | 'ash';
  hoverEffect?: boolean;
  index?: string;
}

export function Card({
  children,
  className = '',
  topAccent = 'none',
  hoverEffect = false,
  index
}: CardProps) {
  const topAccentStyles = {
    none: '',
    primary: 'border-t-2 border-t-[#123D32]',
    accent: 'border-t-2 border-t-[#C83B35]',
    ash: 'border-t-2 border-t-[#E5E2DA]'
  }[topAccent];

  const hoverStyles = hoverEffect
    ? 'transition-all duration-300 hover:-translate-y-1 hover:border-[#123D32]'
    : '';

  return (
    <div
      className={`relative bg-[#F4F1E9] border border-[#E5E2DA] p-6 sm:p-8 flex flex-col justify-between ${topAccentStyles} ${hoverStyles} ${className}`}
    >
      {index && (
        <span
          className="absolute top-4 right-4 font-mono text-[10px] text-[#2A2A2A]/40 font-bold tracking-wider"
          aria-hidden="true"
        >
          {index}
        </span>
      )}
      {children}
    </div>
  );
}

