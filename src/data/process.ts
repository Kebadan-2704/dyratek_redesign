import { ProcessStage } from '@/types';

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: '01',
    name: 'Discover',
    phase: 'ALIGNMENT & ARCHITECTURE',
    duration: 'Weeks 1–2',
    description:
      'Rigorous audit of commercial objectives, user journeys, technical constraints, and system dependencies to define clear engineering boundaries.',
    focus: 'Commercial objectives, technical scoping, infrastructure audit, and requirement specification.',
    deliverables: [
      'Technical specification document & architecture blueprint',
      'Data model and integration inventory',
      'Milestone-based project schedule and risk register'
    ],
    governance: 'Signed Architecture Charter & Sprint Scope'
  },
  {
    step: '02',
    name: 'Design',
    phase: 'SYSTEMATISATION & UX',
    duration: 'Weeks 2–4',
    description:
      'Translation of requirements into mathematical 12-column wireframes, atomic design systems, and interactive prototypes for validation.',
    focus: 'Information architecture, user flow mapping, WCAG contrast verification, and design tokens.',
    deliverables: [
      'Interactive Figma prototypes for desktop and mobile viewports',
      'Published design token library and component states',
      'Content framework and microcopy guidelines'
    ],
    governance: 'Prototype Usability & Visual Direction Sign-off'
  },
  {
    step: '03',
    name: 'Build',
    phase: 'PRODUCTION ENGINEERING',
    duration: 'Weeks 4–8',
    description:
      'Modular full-stack development, component implementation, API orchestration, and continuous automated integration testing.',
    focus: 'Clean TypeScript codebase, component encapsulation, edge routing, and webhook resilience.',
    deliverables: [
      'Production codebase with automated test coverage',
      'Configured staging environments with branch previews',
      'API connectors and database migration schemas'
    ],
    governance: 'Sprint Demonstration & Code Quality Review'
  },
  {
    step: '04',
    name: 'Launch',
    phase: 'ROLLOUT & OBSERVABILITY',
    duration: 'Week 9',
    description:
      'Structured staging cutover, edge CDN caching rules, automated error telemetry, and zero-downtime DNS deployment.',
    focus: 'Performance benchmarking, security hardening, DNS propagation, and runbook handover.',
    deliverables: [
      'Zero-downtime production cutover and DNS switch',
      'Real-time error tracing and performance dashboards',
      'System administrator documentation and handover training'
    ],
    governance: 'Deployment Verification & Go-Live Acceptance'
  },
  {
    step: '05',
    name: 'Grow',
    phase: 'ITERATION & EXPANSION',
    duration: 'Ongoing',
    description:
      'Continuous conversion rate optimization, lifecycle funnel automation, performance marketing execution, and iterative feature sprints.',
    focus: 'Attribution telemetry, checkout friction removal, organic search ranking, and retention loops.',
    deliverables: [
      'Bi-weekly conversion rate audit and backlog grooming',
      'Campaign performance attribution and ROAS reports',
      'Continuous dependency updates and security patches'
    ],
    governance: 'Quarterly Commercial Review & KPI Tracking'
  }
];

