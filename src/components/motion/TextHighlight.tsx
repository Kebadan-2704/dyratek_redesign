'use client';

import React, { useEffect, useRef, useState } from 'react';

export interface TextHighlightProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}

export function TextHighlight({
  children,
  className = '',
  threshold = 0.35
}: TextHighlightProps) {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = containerRef.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHighlighted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(current);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div
      ref={containerRef}
      style={{
        transitionDuration: '700ms',
        transitionTimingFunction: 'ease-out'
      }}
      className={`transition-colors ${
        isHighlighted
          ? 'text-[#123D32]'
          : 'text-[#A09D94] motion-reduce:text-[#123D32]'
      } ${className}`}
    >
      {children}
    </div>
  );
}
