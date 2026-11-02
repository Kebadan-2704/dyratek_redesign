import { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    slug: 'omnichannel-commerce-architecture',
    title: 'Omnichannel Headless Commerce Platform',
    category: 'Architecture 01 // Modern Commerce & Logistics',
    pillar: '01 // BUILD',
    clientType: 'Illustrative Architecture Archetype',
    year: '2025 CONCEPT',
    heroHeadline: 'Sub-second headless storefront with localized multi-currency routing.',
    summary:
      'An architectural blueprint demonstrating a composable multi-store engine coupling Next.js with modern headless APIs and custom inventory synchronization.',
    challenge:
      'Monolithic e-commerce platforms suffer from bloated client bundles, slow catalog filtering times (> 1.8s), and brittle integration points with multi-warehouse ERP backends.',
    solution:
      'We engineered a composable architecture using Next.js Server Components, edge-cached product catalogs via Cloudflare, and resilient webhook-driven inventory synchronizers.',
    architectureDetails: [
      'Edge CDN catalog caching with sub-180ms global cache hit latency',
      'Dynamic inventory reconciliation handling concurrent checkout states',
      'Unified design token system binding product cards, drawers, and checkout',
      'Multi-region currency and locale detection with zero layout shifting'
    ],
    technologies: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Shopify Storefront API', 'Stripe', 'Redis'],
    deliverables: [
      { label: 'Storefront Core', specification: 'Edge-rendered Next.js catalog with instant client-side filtering' },
      { label: 'Cart Engine', specification: 'Persistent micro-cart with multi-currency checkout routing' },
      { label: 'Sync Middleware', specification: 'Event-driven webhook queue reconciling stock across warehouses' },
      { label: 'Token Library', specification: 'Atomic design system covering 48 responsive commerce components' }
    ],
    servicesInvolved: ['Web Development', 'E-commerce Solutions', 'UI/UX Design'],
    isConcept: true,
    conceptDisclaimer: 'Illustrative Concept — Demonstration of DYRATEK Capabilities (Not a Completed Client Project)'
  },
  {
    slug: 'automated-crm-workflow-engine',
    title: 'Connected Business Automation & Inbound Funnel',
    category: 'Architecture 02 // Enterprise Workflow Orchestration',
    pillar: '02 // AUTOMATE',
    clientType: 'Illustrative Automation Archetype',
    year: '2025 CONCEPT',
    heroHeadline: 'Zero-latency lead routing and multi-channel conversational dispatch.',
    summary:
      'A resilient operational automation pipeline synchronizing inbound high-intent leads from web and messaging channels directly into CRM state machines.',
    challenge:
      'B2B organizations frequently experience lead drop-off and manual entry errors when inquiries originate across fragmented channels (web forms, WhatsApp, email) without automated qualification.',
    solution:
      'We designed an event-driven automation framework leveraging cloud webhooks, data sanitization microservices, and automated CRM pipeline assignment with real-time staff alerting.',
    architectureDetails: [
      'Webhook ingest service with automated rate-limiting and duplicate suppression',
      'WhatsApp Cloud API integration providing automated conversational confirmation',
      'Bi-directional synchronization between HubSpot CRM and Slack notifications',
      'Comprehensive error telemetry with automated dead-letter retry logic'
    ],
    technologies: ['n8n / Node.js', 'WhatsApp Business API', 'HubSpot API', 'Postmark', 'PostgreSQL'],
    deliverables: [
      { label: 'Pipeline Blueprint', specification: 'Formal sequence diagrams and error escalation matrix' },
      { label: 'Webhook Listeners', specification: 'Cloudflare Worker listeners handling JSON payloads with verification' },
      { label: 'Conversational Trees', specification: 'Deterministic inquiry routing templates for WhatsApp Business' },
      { label: 'Telemetry Monitor', specification: 'Operational status dashboard alerting on failed delivery attempts' }
    ],
    servicesInvolved: ['Business Automation', 'Email & WhatsApp Marketing', 'Digital Solutions'],
    isConcept: true,
    conceptDisclaimer: 'Illustrative Concept — Demonstration of DYRATEK Capabilities (Not a Completed Client Project)'
  },
  {
    slug: 'unified-brand-digital-design-system',
    title: 'Unified Brand & Digital Design System',
    category: 'Architecture 03 // System Design & Performance',
    pillar: '03 // CREATE & GROW',
    clientType: 'Illustrative Design Archetype',
    year: '2025 CONCEPT',
    heroHeadline: 'Mathematical Swiss modernist design system translated into code tokens.',
    summary:
      'An end-to-end tokenized design architecture bridging Figma variable libraries directly into Tailwind CSS and React component primitives for strict visual parity.',
    challenge:
      'Digital products struggle with visual drift, inconsistent spacing tokens, inaccessible contrast ratios, and excessive developer redline cycles across distributed engineering teams.',
    solution:
      'We established an atomic design architecture grounded in Swiss modernist discipline: strict 0px border radii, hairline boundary rules, 12-column grids, and automated token sync pipelines.',
    architectureDetails: [
      'WCAG 2.2 AA certified color palette (> 9.5:1 contrast ratios)',
      'Automated token export pipeline syncing Figma variables to Tailwind CSS',
      'Zero-dependency accessible component primitives (accessible disclosure, modals, navigation)',
      'Responsive typographic hierarchy with strict clamp() viewport rules'
    ],
    technologies: ['Figma', 'Tokens Studio', 'Tailwind CSS 4', 'React 19', 'TypeScript', 'Storybook'],
    deliverables: [
      { label: 'Figma System', specification: 'Master component file with 120+ variants across 3 viewports' },
      { label: 'Token Repository', specification: 'Versioned JSON token package publishing to npm' },
      { label: 'Component Library', specification: 'Production React components with strict TypeScript types' },
      { label: 'Accessibility Audit', specification: 'Full report certifying contrast and keyboard navigation paths' }
    ],
    servicesInvolved: ['UI/UX Design', 'Web Development', 'Content Strategy & Copywriting'],
    isConcept: true,
    conceptDisclaimer: 'Illustrative Concept — Demonstration of DYRATEK Capabilities (Not a Completed Client Project)'
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}

