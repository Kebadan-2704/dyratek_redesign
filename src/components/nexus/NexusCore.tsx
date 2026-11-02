import React from 'react';
import { PillarId } from './nexus.types';

interface NexusCoreProps {
  activePillar: PillarId | null;
  isReducedMotion: boolean;
}

export function NexusCore({ activePillar, isReducedMotion }: NexusCoreProps) {
  const isPillarActive = Boolean(activePillar);

  return (
    <g className="nexus-core select-none" id="nexus-core">
      <defs>
        {/* Restrained Core Luminous Glow Gradient */}
        <radialGradient id="nexusCoreLuminance" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C83B35" stopOpacity={isPillarActive ? '0.75' : '0.45'} />
          <stop offset="60%" stopColor="#C83B35" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#C83B35" stopOpacity="0" />
        </radialGradient>

        {/* Ambient Halo */}
        <radialGradient id="nexusAmbientHalo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#123D32" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#123D32" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Outer Ambient Diffusion Ring */}
      <circle
        cx="300"
        cy="230"
        r={isPillarActive ? 42 : 32}
        fill="url(#nexusCoreLuminance)"
        className={`transition-all duration-500 ease-out ${
          isReducedMotion ? '' : 'animate-[pulseSubtle_4s_ease-in-out_infinite]'
        }`}
      />

      {/* Radiating Light Transmission Seams to Planes */}
      {/* Seam to Plane 01 (BUILD) */}
      <line
        x1="300"
        y1="230"
        x2="230"
        y2="197"
        stroke={activePillar === 'build' ? '#C83B35' : '#123D32'}
        strokeWidth={activePillar === 'build' ? 2 : 1}
        strokeOpacity={activePillar === 'build' ? 1 : 0.4}
        className="transition-all duration-300"
      />
      {/* Seam to Plane 02 (AUTOMATE) */}
      <line
        x1="300"
        y1="230"
        x2="380"
        y2="192"
        stroke={activePillar === 'automate' ? '#C83B35' : '#C83B35'}
        strokeWidth={activePillar === 'automate' ? 2.5 : 1}
        strokeOpacity={activePillar === 'automate' ? 1 : 0.45}
        className="transition-all duration-300"
      />
      {/* Seam to Plane 03 (CREATE & GROW) */}
      <line
        x1="300"
        y1="230"
        x2="300"
        y2="320"
        stroke={activePillar === 'grow' ? '#C83B35' : '#123D32'}
        strokeWidth={activePillar === 'grow' ? 2 : 1}
        strokeOpacity={activePillar === 'grow' ? 1 : 0.4}
        className="transition-all duration-300"
      />

      {/* Precision Core Intersection Ring */}
      <circle
        cx="300"
        cy="230"
        r="14"
        fill="none"
        stroke="#123D32"
        strokeWidth="1"
        strokeOpacity="0.4"
        strokeDasharray="2 2"
      />

      {/* Engineered Multifaceted Prismatic Core (Isometric Diamond) */}
      {/* Top Diamond Facet */}
      <polygon
        points="300,218 310,224 300,230 290,224"
        fill="#F4F1E9"
        stroke="#123D32"
        strokeWidth="1.2"
        className="transition-colors duration-300"
      />
      {/* Left Diamond Facet */}
      <polygon
        points="290,224 300,230 300,242 290,236"
        fill="#123D32"
        stroke="#123D32"
        strokeWidth="1.2"
        className="transition-colors duration-300"
      />
      {/* Right Diamond Facet */}
      <polygon
        points="300,230 310,224 310,236 300,242"
        fill="#0D2C24"
        stroke="#123D32"
        strokeWidth="1.2"
        className="transition-colors duration-300"
      />

      {/* Central Red Luminous Micro-Node */}
      <circle
        cx="300"
        cy="230"
        r={isPillarActive ? 4.5 : 3.5}
        fill="#C83B35"
        className="transition-all duration-300"
      />
      {/* Center White Pinpoint Reflection */}
      <circle cx="299.5" cy="229" r="1.2" fill="#F4F1E9" />

      {/* Precision Technical Reticle Lines (Engineered Feel) */}
      <g stroke="#123D32" strokeWidth="0.75" strokeOpacity="0.6">
        <line x1="300" y1="211" x2="300" y2="215" />
        <line x1="300" y1="245" x2="300" y2="249" />
        <line x1="281" y1="230" x2="285" y2="230" />
        <line x1="315" y1="230" x2="319" y2="230" />
      </g>
    </g>
  );
}

