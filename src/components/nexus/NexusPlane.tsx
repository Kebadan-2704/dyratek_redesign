import React from 'react';
import { PillarId } from './nexus.types';

interface NexusPlaneProps {
  pillarId: PillarId;
  activePillar: PillarId | null;
  onSelect: (pillar: PillarId) => void;
  onHover: (pillar: PillarId | null) => void;
  isReducedMotion: boolean;
}

export function NexusPlane({
  pillarId,
  activePillar,
  onSelect,
  onHover,
  isReducedMotion
}: NexusPlaneProps) {
  const isActive = activePillar === pillarId;
  const isInactive = Boolean(activePillar && activePillar !== pillarId);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(pillarId);
    }
  };

  // Base opacity and transition classes
  const groupClasses = `cursor-pointer outline-none transition-all duration-300 ${
    isInactive ? 'opacity-40' : 'opacity-100'
  } ${isActive ? 'brightness-110 drop-shadow-md' : 'hover:brightness-105'}`;

  // ----------------------------------------------------
  // PLANE 01: BUILD — Substantial Vertical Monolith
  // ----------------------------------------------------
  if (pillarId === 'build') {
    return (
      <g
        id="nexus-plane-build"
        role="button"
        tabIndex={0}
        aria-label="Pillar 01: BUILD. Engineering digital foundations, websites, applications and commerce platforms."
        aria-pressed={isActive}
        className={groupClasses}
        onClick={() => onSelect('build')}
        onMouseEnter={() => onHover('build')}
        onMouseLeave={() => onHover(null)}
        onFocus={() => onHover('build')}
        onBlur={() => onHover(null)}
        onKeyDown={handleKeyDown}
      >
        <defs>
          <linearGradient id="buildFrontGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#164A3D" />
            <stop offset="100%" stopColor="#0E3027" />
          </linearGradient>
          <linearGradient id="buildTopGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1C5B4B" />
            <stop offset="100%" stopColor="#144337" />
          </linearGradient>
        </defs>

        {/* Dynamic Elevation Group */}
        <g
          transform={
            isActive && !isReducedMotion
              ? 'translate(-4, -6)'
              : 'translate(0, 0)'
          }
          className="transition-transform duration-300 ease-out"
        >
          {/* Top Thickness Facet */}
          <polygon
            points="140,80 162,67 312,137 290,150"
            fill="url(#buildTopGrad)"
            stroke="#123D32"
            strokeWidth="1.2"
          />

          {/* Rear / Side Thickness Facet */}
          <polygon
            points="290,150 312,137 312,217 290,230"
            fill="#0A221C"
            stroke="#123D32"
            strokeWidth="1.2"
          />

          {/* Main Front Vertical Face */}
          <polygon
            points="140,80 290,150 290,230 140,160"
            fill="url(#buildFrontGrad)"
            stroke={isActive ? '#F4F1E9' : '#123D32'}
            strokeWidth={isActive ? '1.8' : '1.2'}
            className="transition-all duration-300"
          />

          {/* Architectural Construction Ribs / Mullions */}
          <g stroke="#1C5B4B" strokeWidth="1" strokeOpacity="0.8">
            <line x1="190" y1="103" x2="190" y2="183" />
            <line x1="240" y1="126" x2="240" y2="206" />
            <line x1="140" y1="120" x2="290" y2="190" strokeDasharray="2 3" strokeOpacity="0.5" />
          </g>

          {/* Illuminating Seam into Core */}
          <line
            x1="290"
            y1="230"
            x2="140"
            y2="160"
            stroke={isActive ? '#C83B35' : '#123D32'}
            strokeWidth={isActive ? 2 : 1.2}
            className="transition-colors duration-300"
          />

          {/* Integrated Swiss Architectural Badge & Typography */}
          <g transform="translate(142, 85)">
            {/* Number 01 Tag */}
            <rect x="0" y="0" width="22" height="15" fill="#F4F1E9" />
            <text
              x="11"
              y="11"
              fill="#123D32"
              fontFamily="var(--font-mono)"
              fontSize="9"
              fontWeight="800"
              textAnchor="middle"
            >
              01
            </text>

            {/* Label text */}
            <text
              x="28"
              y="11"
              fill="#F4F1E9"
              fontFamily="var(--font-heading)"
              fontSize="12"
              fontWeight="800"
              letterSpacing="0.06em"
            >
              BUILD
            </text>
          </g>

          {/* Dimension Metric Tag */}
          <g transform="translate(148, 148)" opacity="0.85">
            <text
              x="0"
              y="0"
              fill="#E5E2DA"
              fontFamily="var(--font-mono)"
              fontSize="8"
              letterSpacing="0.08em"
            >
              WEBSITES &amp; APPS
            </text>
          </g>
        </g>
      </g>
    );
  }

  // ----------------------------------------------------
  // PLANE 02: AUTOMATE — Lighter Structural Plane with Red Edge Detail
  // ----------------------------------------------------
  if (pillarId === 'automate') {
    return (
      <g
        id="nexus-plane-automate"
        role="button"
        tabIndex={0}
        aria-label="Pillar 02: AUTOMATE. Connecting business operations through structured automation and marketing workflows."
        aria-pressed={isActive}
        className={groupClasses}
        onClick={() => onSelect('automate')}
        onMouseEnter={() => onHover('automate')}
        onMouseLeave={() => onHover(null)}
        onFocus={() => onHover('automate')}
        onBlur={() => onHover(null)}
        onKeyDown={handleKeyDown}
      >
        <defs>
          <linearGradient id="automateSurfaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F4F1E9" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#ECE8DF" stopOpacity="0.88" />
          </linearGradient>
        </defs>

        {/* Dynamic Elevation Group */}
        <g
          transform={
            isActive && !isReducedMotion
              ? 'translate(4, -6)'
              : 'translate(0, 0)'
          }
          className="transition-transform duration-300 ease-out"
        >
          {/* Main Lighter Structural Plane */}
          <polygon
            points="310,150 470,95 470,195 310,230"
            fill="url(#automateSurfaceGrad)"
            stroke="#123D32"
            strokeWidth="1.2"
          />

          {/* Bottom Depth Facet */}
          <polygon
            points="310,230 470,195 470,205 310,240"
            fill="#D5D0C3"
            stroke="#123D32"
            strokeWidth="1"
          />

          {/* Restrained Accent Red Leading Edge Detail */}
          <line
            x1="310"
            y1="150"
            x2="470"
            y2="95"
            stroke="#C83B35"
            strokeWidth={isActive ? '3' : '2'}
            className="transition-all duration-300"
          />

          {/* Kinetic Energy Conduit Lines (Connectivity) */}
          <g stroke="#C83B35" strokeWidth="1" strokeOpacity={isActive ? '0.9' : '0.45'}>
            <line
              x1="350"
              y1="165"
              x2="445"
              y2="132"
              strokeDasharray={isActive ? '4 3' : '2 3'}
              className="transition-all duration-300"
            />
            <line
              x1="330"
              y1="195"
              x2="425"
              y2="162"
              strokeDasharray={isActive ? '4 3' : '2 3'}
              className="transition-all duration-300"
            />
          </g>

          {/* Red Pulse Focal Node */}
          <circle
            cx="470"
            cy="95"
            r={isActive ? 5 : 3.5}
            fill="#C83B35"
            className="transition-all duration-300"
          />
          <circle cx="470" cy="95" r="8" fill="none" stroke="#C83B35" strokeOpacity="0.4" strokeWidth="1" />

          {/* Integrated Swiss Architectural Badge & Typography */}
          <g transform="translate(378, 106)">
            {/* Number 02 Tag */}
            <rect x="0" y="0" width="22" height="15" fill="#C83B35" />
            <text
              x="11"
              y="11"
              fill="#F4F1E9"
              fontFamily="var(--font-mono)"
              fontSize="9"
              fontWeight="800"
              textAnchor="middle"
            >
              02
            </text>

            {/* Label text */}
            <text
              x="28"
              y="11"
              fill="#123D32"
              fontFamily="var(--font-heading)"
              fontSize="12"
              fontWeight="800"
              letterSpacing="0.06em"
            >
              AUTOMATE
            </text>
          </g>

          {/* Dimension Metric Tag */}
          <g transform="translate(378, 134)" opacity="0.85">
            <text
              x="0"
              y="0"
              fill="#123D32"
              fontFamily="var(--font-mono)"
              fontSize="8"
              letterSpacing="0.08em"
            >
              APP AUTOMATION
            </text>
          </g>
        </g>
      </g>
    );
  }

  // ----------------------------------------------------
  // PLANE 03: CREATE & GROW — Horizontal Foundation Plane
  // ----------------------------------------------------
  return (
    <g
      id="nexus-plane-grow"
      role="button"
      tabIndex={0}
      aria-label="Pillar 03: CREATE & GROW. Building digital identities, creative experiences and measurable marketing growth."
      aria-pressed={isActive}
      className={groupClasses}
      onClick={() => onSelect('grow')}
      onMouseEnter={() => onHover('grow')}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover('grow')}
      onBlur={() => onHover(null)}
      onKeyDown={handleKeyDown}
    >
      <defs>
        <linearGradient id="growSurfaceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#164A3D" />
          <stop offset="100%" stopColor="#10362C" />
        </linearGradient>
        <linearGradient id="growFrontLeftGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0B261F" />
          <stop offset="100%" stopColor="#0E3027" />
        </linearGradient>
        <linearGradient id="growFrontRightGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0E3027" />
          <stop offset="100%" stopColor="#081E18" />
        </linearGradient>
      </defs>

      {/* Dynamic Expansion / Elevation Group */}
      <g
        transform={
          isActive && !isReducedMotion
            ? 'translate(0, 5)'
            : 'translate(0, 0)'
        }
        className="transition-transform duration-300 ease-out"
      >
        {/* Front-Left Vertical Bevel (Thickness) */}
        <polygon
          points="110,310 300,410 300,426 110,326"
          fill="url(#growFrontLeftGrad)"
          stroke="#123D32"
          strokeWidth="1.2"
        />

        {/* Front-Right Vertical Bevel (Thickness) */}
        <polygon
          points="300,410 490,310 490,326 300,426"
          fill="url(#growFrontRightGrad)"
          stroke="#123D32"
          strokeWidth="1.2"
        />

        {/* Main Horizontal Foundation Surface Plane */}
        <polygon
          points="110,310 300,230 490,310 300,410"
          fill="url(#growSurfaceGrad)"
          stroke={isActive ? '#F4F1E9' : '#123D32'}
          strokeWidth={isActive ? '1.8' : '1.2'}
          className="transition-all duration-300"
        />

        {/* Foundation Grid Lines radiating across surface */}
        <g stroke="#1F6151" strokeWidth="0.8" strokeOpacity={isActive ? '0.9' : '0.5'}>
          <line x1="205" y1="270" x2="395" y2="360" />
          <line x1="157" y1="290" x2="347" y2="385" />
          <line x1="395" y1="270" x2="205" y2="360" />
          <line x1="442" y1="290" x2="252" y2="385" />
          {/* Central convergence seam */}
          <line x1="300" y1="230" x2="300" y2="410" stroke="#C83B35" strokeWidth={isActive ? '2' : '1'} strokeOpacity={isActive ? '1' : '0.4'} />
        </g>

        {/* Center-front Vertex Marker */}
        <circle cx="300" cy="410" r={isActive ? 4.5 : 3.5} fill="#F4F1E9" stroke="#123D32" strokeWidth="1" />

        {/* Integrated Swiss Architectural Badge & Typography */}
        <g transform="translate(195, 345)">
          {/* Number 03 Tag */}
          <rect x="0" y="0" width="22" height="15" fill="#F4F1E9" />
          <text
            x="11"
            y="11"
            fill="#123D32"
            fontFamily="var(--font-mono)"
            fontSize="9"
            fontWeight="800"
            textAnchor="middle"
          >
            03
          </text>

          {/* Label text */}
          <text
            x="28"
            y="11"
            fill="#F4F1E9"
            fontFamily="var(--font-heading)"
            fontSize="12"
            fontWeight="800"
            letterSpacing="0.06em"
          >
            GROW
          </text>
        </g>

        {/* Dimension Metric Tag */}
        <g transform="translate(200, 375)" opacity="0.85">
          <text
            x="0"
            y="0"
            fill="#E5E2DA"
            fontFamily="var(--font-mono)"
            fontSize="8"
            letterSpacing="0.08em"
          >
            DESIGN &amp; ADS
          </text>
        </g>
      </g>
    </g>
  );
}
