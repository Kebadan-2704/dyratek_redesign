import React from 'react';

export interface MaskedRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function MaskedReveal({
  children,
  delay = 120,
  className = ''
}: MaskedRevealProps) {
  return (
    <div
      style={{
        animationDelay: `${delay}ms`
      }}
      className={`animate-masked-reveal ${className}`}
    >
      {children}
    </div>
  );
}
