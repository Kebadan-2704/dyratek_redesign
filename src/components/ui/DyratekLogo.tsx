import React from 'react';
import Image from 'next/image';

export interface DyratekLogoProps {
  className?: string;
  inverted?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  priority?: boolean;
}

export function DyratekLogo({
  className = '',
  inverted = false,
  size = 'md',
  priority = false
}: DyratekLogoProps) {
  // Responsive height scale mapping
  const heightClasses = {
    sm: 'h-6 sm:h-7',
    md: 'h-7 sm:h-8 lg:h-9',
    lg: 'h-9 sm:h-10 lg:h-12',
    xl: 'h-12 sm:h-14 lg:h-16'
  }[size];

  return (
    <div className={`relative inline-flex items-center ${heightClasses} ${className}`}>
      <Image
        src="/brand/dyratek-logo-transparent.png"
        alt="DYRATEK"
        width={411}
        height={67}
        className={`object-contain h-full w-auto select-none ${inverted ? 'brightness-0 invert' : ''}`}
        priority={priority}
      />
    </div>
  );
}
