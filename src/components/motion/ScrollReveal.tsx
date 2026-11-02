'use client';

import React, { useEffect, useRef, useState } from 'react';

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  threshold = 0.15
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    observer.observe(currentElement);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div
      ref={elementRef}
      style={{
        transitionDuration: '600ms',
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
      }}
      className={`transition-all ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-6 motion-reduce:opacity-100 motion-reduce:translate-y-0'
      } ${className}`}
    >
      {children}
    </div>
  );
}
