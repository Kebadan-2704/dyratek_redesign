import React from 'react';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  dashed?: boolean;
}

export function Divider({
  orientation = 'horizontal',
  className = '',
  dashed = false
}: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <div
        className={`w-px h-full min-h-[1rem] ${
          dashed ? 'border-l border-dashed border-[#E5E2DA]' : 'bg-[#E5E2DA]'
        } ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className={`w-full h-px ${
        dashed ? 'border-t border-dashed border-[#E5E2DA]' : 'bg-[#E5E2DA]'
      } ${className}`}
      aria-hidden="true"
    />
  );
}

