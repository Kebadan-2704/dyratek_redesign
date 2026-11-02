'use client';

import { useEffect, useSyncExternalStore, RefObject } from 'react';
import gsap from 'gsap';
import { PillarId } from './nexus.types';

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  mq.addEventListener('change', callback);
  return () => mq.removeEventListener('change', callback);
}

function getSnapshot() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getServerSnapshot() {
  return false;
}

export function useNexusMotion(
  containerRef: RefObject<SVGSVGElement | null>,
  activePillar: PillarId | null
) {
  const isReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getSnapshot,
    getServerSnapshot
  );

  // Coordinated Entrance & Core Pulse Animation
  useEffect(() => {
    if (!containerRef.current || isReducedMotion) return;

    const ctx = gsap.context(() => {
      // Timeline for initial entrance
      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
          duration: 0.65
        }
      });

      // 1. Initial State: Staggered Plane Reveals
      tl.fromTo(
        '#nexus-plane-build',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.65 }
      )
        .fromTo(
          '#nexus-plane-automate',
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.65 },
          '-=0.45'
        )
        .fromTo(
          '#nexus-plane-grow',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.65 },
          '-=0.45'
        )
        // 2. Central Core Reveal
        .fromTo(
          '#nexus-core',
          { scale: 0.5, opacity: 0, transformOrigin: '300px 230px' },
          { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.4)' },
          '-=0.3'
        )
        // 3. Supporting Geometry Fade-in
        .fromTo(
          '.nexus-geometry',
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          '-=0.4'
        );
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, isReducedMotion]);

  // Pillar Activation Animation Response
  useEffect(() => {
    if (!containerRef.current || isReducedMotion) return;

    const ctx = gsap.context(() => {
      if (activePillar === 'build') {
        gsap.to('#nexus-plane-build', {
          duration: 0.3,
          ease: 'power2.out',
          scale: 1.02,
          transformOrigin: '215px 155px'
        });
      } else if (activePillar === 'automate') {
        gsap.to('#nexus-plane-automate', {
          duration: 0.3,
          ease: 'power2.out',
          scale: 1.02,
          transformOrigin: '390px 165px'
        });
      } else if (activePillar === 'grow') {
        gsap.to('#nexus-plane-grow', {
          duration: 0.3,
          ease: 'power2.out',
          scale: 1.02,
          transformOrigin: '300px 320px'
        });
      } else {
        // Return to idle
        gsap.to(['#nexus-plane-build', '#nexus-plane-automate', '#nexus-plane-grow'], {
          duration: 0.3,
          ease: 'power2.out',
          scale: 1
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [activePillar, containerRef, isReducedMotion]);

  return { isReducedMotion };
}
