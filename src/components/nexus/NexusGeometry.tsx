import React from 'react';

interface NexusGeometryProps {
  activePillar: string | null;
  isReducedMotion: boolean;
}

export function NexusGeometry({ activePillar, isReducedMotion }: NexusGeometryProps) {
  return (
    <g className="nexus-geometry select-none pointer-events-none" aria-hidden="true">
      <defs>
        {/* Subtle grid pattern */}
        <pattern id="nexusGridPattern" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#E5E2DA" strokeWidth="0.6" strokeOpacity="0.45" />
        </pattern>
        {/* Fine dashed coordinate stroke */}
        <line id="nexusAxisDash" x1="0" y1="0" x2="600" y2="0" stroke="#E5E2DA" strokeDasharray="3 3" strokeWidth="0.8" />
      </defs>

      {/* Background Architectural Coordinate Backdrop */}
      <rect x="20" y="20" width="560" height="440" fill="url(#nexusGridPattern)" opacity="0.3" />

      {/* Axis Guide Lines radiating from Center (300, 230) */}
      {/* Vertical Z-Axis (Construction Plumb Line) */}
      <line
        x1="300"
        y1="40"
        x2="300"
        y2="440"
        stroke="#123D32"
        strokeWidth="0.8"
        strokeDasharray="4 4"
        strokeOpacity={activePillar ? '0.2' : '0.4'}
        className="transition-all duration-300"
      />
      {/* Horizontal Datum Line */}
      <line
        x1="40"
        y1="230"
        x2="560"
        y2="230"
        stroke="#E5E2DA"
        strokeWidth="0.8"
        strokeDasharray="6 4"
        strokeOpacity="0.6"
      />
      {/* 30-degree Axonometric Guide Left */}
      <line
        x1="40"
        y1="80"
        x2="300"
        y2="230"
        stroke="#123D32"
        strokeWidth="0.75"
        strokeDasharray="3 3"
        strokeOpacity={activePillar === 'build' ? '0.6' : '0.2'}
        className="transition-all duration-300"
      />
      {/* 30-degree Axonometric Guide Right */}
      <line
        x1="560"
        y1="80"
        x2="300"
        y2="230"
        stroke="#C83B35"
        strokeWidth="0.75"
        strokeDasharray="3 3"
        strokeOpacity={activePillar === 'automate' ? '0.7' : '0.2'}
        className="transition-all duration-300"
      />

      {/* Subtle Orbital Guide Ring around Core (Axonometric Ellipse) */}
      <ellipse
        cx="300"
        cy="230"
        rx="220"
        ry="85"
        transform="rotate(-8 300 230)"
        fill="none"
        stroke="#123D32"
        strokeWidth="0.9"
        strokeDasharray="5 7"
        strokeOpacity={activePillar ? '0.12' : '0.28'}
        className={isReducedMotion ? '' : 'origin-[300px_230px] animate-[spin_60s_linear_infinite]'}
      />

      {/* Outer Restrained Framing Marks (Editorial Swiss Precision Ticks) */}
      <g stroke="#123D32" strokeWidth="1" strokeOpacity="0.4">
        {/* Top-left Corner Register */}
        <path d="M 40 48 L 40 40 L 48 40" fill="none" />
        {/* Top-right Corner Register */}
        <path d="M 552 40 L 560 40 L 560 48" fill="none" />
        {/* Bottom-left Corner Register */}
        <path d="M 40 432 L 40 440 L 48 440" fill="none" />
        {/* Bottom-right Corner Register */}
        <path d="M 552 440 L 560 440 L 560 432" fill="none" />
      </g>

      {/* Precision Dimension Annotations */}
      <g fontFamily="var(--font-mono)" fontSize="8" fill="#2A2A2A" fillOpacity="0.45" letterSpacing="0.08em">
        <text x="46" y="52">SERVICES</text>
        <text x="510" y="52" textAnchor="end">DYRATEK STUDIO</text>
        <text x="46" y="434">BUILT FOR YOU</text>
        <text x="510" y="434" textAnchor="end">[3 FOCUS AREAS]</text>
      </g>
    </g>
  );
}

