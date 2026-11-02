import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'primary' | 'muted';
  hasPip?: boolean;
  className?: string;
}

export function Badge({
  children,
  variant = 'default',
  hasPip = false,
  className = ''
}: BadgeProps) {
  const variantStyles = {
    default: 'bg-[#ECE8DF] text-[#123D32] border-[#E5E2DA]',
    accent: 'bg-[#C83B35]/10 text-[#C83B35] border-[#C83B35]/30',
    primary: 'bg-[#123D32] text-[#F4F1E9] border-[#123D32]',
    muted: 'bg-transparent text-[#2A2A2A]/70 border-[#E5E2DA]'
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 h-[22px] px-2 text-[10px] font-mono uppercase tracking-wider font-semibold border ${variantStyles} ${className}`}
    >
      {hasPip && (
        <span
          className={`w-1.5 h-1.5 ${variant === 'accent' ? 'bg-[#C83B35]' : 'bg-[#123D32]'}`}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}

