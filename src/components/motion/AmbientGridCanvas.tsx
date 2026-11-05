'use client';

import React, { useEffect, useRef } from 'react';

interface AmbientGridCanvasProps {
  className?: string;
  dotColor?: string;
  glowColor?: string;
  gridSize?: number;
}

export function AmbientGridCanvas({
  className = '',
  dotColor = 'rgba(18, 61, 50, 0.08)',
  glowColor = 'rgba(18, 61, 50, 0.22)',
  gridSize = 36
}: AmbientGridCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let isTabActive = !document.hidden;
    let width = 0;
    let height = 0;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchOrLowPower =
      window.matchMedia('(pointer: coarse)').matches ||
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4);

    const targetFps = isTouchOrLowPower ? 30 : 60;
    const frameInterval = 1000 / targetFps;
    let lastFrameTime = 0;

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000
    };

    const drawStaticGrid = () => {
      ctx.clearRect(0, 0, width, height);
      const cols = Math.ceil(width / gridSize) + 1;
      const rows = Math.ceil(height / gridSize) + 1;
      ctx.fillStyle = dotColor;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize;
          const y = j * gridSize;
          ctx.beginPath();
          ctx.arc(x, y, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.parentElement?.clientHeight || window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      drawStaticGrid();
    };

    if (prefersReducedMotion || isTouchOrLowPower) {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    if (prefersReducedMotion) {
      drawStaticGrid();
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
      if (isTabActive && isVisible) {
        lastFrameTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Pause when off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isVisible = entry?.isIntersecting ?? true;
        if (isVisible && isTabActive) {
          lastFrameTime = performance.now();
          animationFrameId = requestAnimationFrame(render);
        } else {
          cancelAnimationFrame(animationFrameId);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const render = (now: number) => {
      if (!isVisible || !isTabActive) return;

      const elapsed = now - lastFrameTime;

      if (elapsed >= frameInterval) {
        lastFrameTime = now - (elapsed % frameInterval);

        // Smooth lerp mouse position
        mouse.x += (mouse.targetX - mouse.x) * 0.14;
        mouse.y += (mouse.targetY - mouse.y) * 0.14;

        ctx.clearRect(0, 0, width, height);

        // Draw iridescent ambient glow around mouse
        if (mouse.x > 0 && mouse.y > 0 && mouse.x < width && mouse.y < height) {
          const radGrad = ctx.createRadialGradient(mouse.x, mouse.y, 10, mouse.x, mouse.y, 180);
          radGrad.addColorStop(0, 'rgba(16, 185, 129, 0.15)'); // Vibrant Emerald
          radGrad.addColorStop(0.4, 'rgba(6, 182, 212, 0.09)'); // Electric Cyan
          radGrad.addColorStop(0.8, 'rgba(139, 92, 246, 0.05)'); // Vivid Violet
          radGrad.addColorStop(1, 'rgba(139, 92, 246, 0)');
          ctx.fillStyle = radGrad;
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, 180, 0, Math.PI * 2);
          ctx.fill();
        }

        const cols = Math.ceil(width / gridSize) + 1;
        const rows = Math.ceil(height / gridSize) + 1;

        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            const x = i * gridSize;
            const y = j * gridSize;

            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 180;

            if (dist < maxDist) {
              const factor = 1 - dist / maxDist;
              // Iridescent color shift from Emerald (155) to Cyan (185) to Violet (260)
              const hue = 155 + factor * 90;
              ctx.fillStyle = `hsla(${hue}, 90%, 48%, ${0.2 + factor * 0.65})`;
              ctx.beginPath();
              ctx.arc(x, y, 1.4 + factor * 2.8, 0, Math.PI * 2);
              ctx.fill();
            } else {
              ctx.fillStyle = dotColor;
              ctx.beginPath();
              ctx.arc(x, y, 1.2, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [dotColor, glowColor, gridSize]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
