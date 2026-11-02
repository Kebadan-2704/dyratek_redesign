import { Service, Pillar } from '@/types';

export const SERVICES: Service[] = [
  // ==========================================
  // PILLAR 01 // BUILD (4 Services)
  // ==========================================
  {
    id: 'web-development',
    slug: 'web-development',
    index: '01',
    pillarIndex: '01.1',
    name: 'Web Development',
    shortName: 'Web Dev',
    pillarId: 'build',
    pillarName: 'Build',
    tagline: 'High-performance web applications and enterprise platforms engineered for scale.',
    description:
      'We architect, build, and deploy high-performance web applications using modern component-driven frameworks, edge infrastructure, and rigorous engineering principles.',
    strategicObjective:
      'Replace brittle, fragmented web properties with deterministic, sub-second web platforms engineered for peak traffic and long-term maintainability.',
    capabilities: [
      {
        title: 'Modern Front-End Engineering',
        description: 'Server Components, static edge delivery, and reactive interfaces built with Next.js, React, and TypeScript.'
      },
      {
        title: 'Full-Stack Architecture',
        description: 'Robust serverless microservices, distributed caching, and transactional SQL/NoSQL data layers.'
      },
      {
        title: 'API & Microservice Integration',
        description: 'Resilient REST, GraphQL, and webhook pipelines with contract testing and error telemetry.'
      },
      {
        title: 'Performance Optimization & Core Web Vitals',
        description: 'Sub-second page generation, asset compression, bundle reduction, and flawless lighthouse metric engineering.'
      },
      {
        title: 'Enterprise CMS & Headless Backends',
        description: 'Structured content modeling and composable headless integrations for marketing and editorial independence.'
      }
    ],
    deliverables: [
      'Production-ready codebase with full TypeScript coverage',
      'Automated CI/CD deployment pipelines on edge infrastructure',
      'Modular design token and UI component library',
      'Comprehensive technical documentation and runbooks',
      'Core Web Vitals compliance verification report'
    ],
    methodology: [
      { step: '01', title: 'System Architecture', detail: 'Technical specification, data modeling, routing structure, and infrastructure planning.' },
      { step: '02', title: 'Foundational Sprint', detail: 'Repository setup, build tooling, design token mapping, and core layout scaffolding.' },
      { step: '03', title: 'Feature Engineering', detail: 'Component implementation, business logic, state handling, and endpoint integrations.' },
      { step: '04', title: 'Hardening & QA', detail: 'Cross-browser verification, accessibility compliance audits, and latency profiling.' },
      { step: '05', title: 'Deployment & Telemetry', detail: 'Zero-downtime cutover, DNS routing, caching rule enforcement, and error monitoring.' }
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Docker'],
    metricsOrOutcomes: [
      'Lighthouse performance targets >= 95',
      'Sub-200ms TTFB across edge regions',
      '100% intellectual property ownership'
    ],
    relatedServiceSlugs: ['app-development', 'ecommerce-solutions', 'ui-ux-design'],
    meta: {
      title: 'Web Development | High-Performance Engineering — DYRATEK',
      description: 'Enterprise web application development, modern frontend architecture, and scalable full-stack systems built by DYRATEK.'
    }
  },
  {
    id: 'app-development',
    slug: 'app-development',
    index: '02',
    pillarIndex: '01.2',
    name: 'App Development',
    shortName: 'App Dev',
    pillarId: 'build',
    pillarName: 'Build',
    tagline: 'Native and cross-platform mobile applications crafted for intuitive user utility.',
    description:
      'We engineer production-grade mobile applications for iOS and Android, pairing platform-native design patterns with resilient offline sync and secure API infrastructure.',
    strategicObjective:
      'Deliver fluid, responsive mobile touchpoints that retain active users through instant interaction feedback and robust background operations.',
    capabilities: [
      {
        title: 'Cross-Platform Frameworks',
        description: 'Unified React Native codebases delivering authentic 60fps performance across iOS and Android.'
      },
      {
        title: 'Offline-First State Management',
        description: 'Local datastore caching, optimistic UI updates, and intelligent background synchronization.'
      },
      {
        title: 'Device Hardware Integration',
        description: 'Deep integration with biometrics, camera pipelines, geolocation, and push notification services.'
      },
      {
        title: 'App Store Submission & Compliance',
        description: 'End-to-end management of Apple App Store and Google Play Store review guidelines and signing protocols.'
      },
      {
        title: 'Real-Time Telemetry & Crash Reporting',
        description: 'Instrumentation for operational tracing, device-level crash diagnostics, and session health.'
      }
    ],
    deliverables: [
      'Compiled iOS and Android production binary artifacts',
      'Store-ready metadata, asset packs, and compliance sheets',
      'Secure authentication and session token management logic',
      'Automated TestFlight and Internal Testing distribution lanes'
    ],
    methodology: [
      { step: '01', title: 'Mobile Blueprint', detail: 'Device compatibility scope, offline strategy, and interaction flow definition.' },
      { step: '02', title: 'Prototype & Scaffolding', detail: 'Native module configuration, design system translation, and navigation stack.' },
      { step: '03', title: 'Core Functionality', detail: 'API sync, secure storage implementation, and interactive view assembly.' },
      { step: '04', title: 'Device Matrix Testing', detail: 'Regression testing across screen sizes, OS revisions, and latency conditions.' },
      { step: '05', title: 'Store Delivery', detail: 'Code signing, production binary staging, and compliance submission review.' }
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'Swift / Kotlin Bridges', 'Supabase', 'GraphQL'],
    metricsOrOutcomes: [
      'Zero-lag 60fps view transitions',
      'Consistent offline data integrity',
      'Clean App Store approval turnaround'
    ],
    relatedServiceSlugs: ['web-development', 'digital-solutions', 'ui-ux-design'],
    meta: {
      title: 'App Development | iOS & Android Cross-Platform — DYRATEK',
      description: 'Production mobile applications engineered with React Native, offline-first reliability, and seamless API integration.'
    }
  },
  {
    id: 'ecommerce-solutions',
    slug: 'ecommerce-solutions',
    index: '03',
    pillarIndex: '01.3',
    name: 'E-commerce Solutions',
    shortName: 'E-commerce',
    pillarId: 'build',
    pillarName: 'Build',
    tagline: 'High-converting digital storefronts and composable commercial architectures.',
    description:
      'We design and develop high-speed commercial infrastructure, combining composable headless checkouts, inventory synchronizations, and frictionless buying flows.',
    strategicObjective:
      'Maximize digital transaction throughput and checkout completion rates with instantaneous catalogue browsing and unified payment gateways.',
    capabilities: [
      {
        title: 'Headless & Composable Commerce',
        description: 'Next.js storefronts decoupled from commerce engines for unparalleled page rendering speeds.'
      },
      {
        title: 'Shopify Plus & Custom Themes',
        description: 'Bespoke liquid architectures, private apps, custom checkout extensions, and theme engineering.'
      },
      {
        title: 'Multi-Gateway Payment Integration',
        description: 'Secure, PCI-compliant Stripe, PayPal, and regional payment orchestration with fraud screening.'
      },
      {
        title: 'ERP & Inventory Synchronization',
        description: 'Two-way catalog, customer, and real-time inventory updates across warehouses and physical stores.'
      },
      {
        title: 'Cart & Checkout Conversion Engineering',
        description: 'One-click checkout workflows, persistent micro-carts, and automated order confirmation funnels.'
      }
    ],
    deliverables: [
      'Custom commerce storefront with headless or native integration',
      'Configured payment processors, tax calculations, and shipping rules',
      'Automated transactional email and SMS notification schemas',
      'Inventory sync middleware with error recovery queues'
    ],
    methodology: [
      { step: '01', title: 'Commerce Scoping', detail: 'SKU hierarchy, pricing tiers, payment gateways, and shipping parameters.' },
      { step: '02', title: 'Store Architecture', detail: 'Checkout flow modeling, customer account pathways, and catalogue structure.' },
      { step: '03', title: 'Storefront Engineering', detail: 'Speed-optimized product grids, filter mechanisms, and cart interfaces.' },
      { step: '04', title: 'Transaction Verification', detail: 'End-to-end payment simulations, test webhooks, and tax rule verification.' },
      { step: '05', title: 'Go-Live Execution', detail: 'Catalogue migration, 301 redirect map verification, and analytics cutover.' }
    ],
    techStack: ['Shopify Plus', 'Next.js Commerce', 'Stripe', 'Sanity CMS', 'Webhooks', 'Algolia'],
    metricsOrOutcomes: [
      'Sub-500ms catalog search and filter responses',
      'Optimized checkout completion funnels',
      'Resilient multi-warehouse inventory parity'
    ],
    relatedServiceSlugs: ['web-development', 'business-automation', 'performance-marketing'],
    meta: {
      title: 'E-commerce Solutions | Composable & Headless Stores — DYRATEK',
      description: 'High-performance e-commerce development, Shopify Plus engineering, and composable checkout solutions by DYRATEK.'
    }
  },
  {
    id: 'digital-solutions',
    slug: 'digital-solutions',
    index: '04',
    pillarIndex: '01.4',
    name: 'Digital Solutions',
    shortName: 'Digital Solutions',
    pillarId: 'build',
    pillarName: 'Build',
    tagline: 'Custom business software, client portals, and bespoke internal operational systems.',
    description:
      'We engineer bespoke digital platforms and internal operating tools tailored to complex organizational workflows that off-the-shelf software cannot satisfy.',
    strategicObjective:
      'Consolidate disjointed manual workflows into centralized, secure internal systems that enhance organizational agility and data accuracy.',
    capabilities: [
      {
        title: 'Custom B2B & Client Portals',
        description: 'Role-gated secure environments for client onboarding, asset management, and billing dashboards.'
      },
      {
        title: 'Internal Operational Dashboards',
        description: 'Real-time operational command centers connecting multiple backend databases into unified tables.'
      },
      {
        title: 'Role-Based Access Control (RBAC)',
        description: 'Granular organizational security models, permission trees, audit logs, and session timeouts.'
      },
      {
        title: 'Custom Workflow Engines',
        description: 'Multi-stage approval pathways, state-machine processing, and automated audit trails.'
      },
      {
        title: 'Legacy System Modernization',
        description: 'Re-engineering obsolete legacy software into modular cloud architectures without downtime.'
      }
    ],
    deliverables: [
      'Tailored web software platform with role-based authentication',
      'Secure administrative back-office and reporting console',
      'Database schemas with automated migration scripts',
      'Operational administrator documentation and handover training'
    ],
    methodology: [
      { step: '01', title: 'Workflow Mapping', detail: 'Operational bottleneck audit, user role definition, and data flow modeling.' },
      { step: '02', title: 'Data Architecture', detail: 'Relational schema design, normalization, indexing, and security boundaries.' },
      { step: '03', title: 'System Development', detail: 'Sprint-based implementation of core logic, permission validation, and views.' },
      { step: '04', title: 'User Acceptance Testing', detail: 'Internal stakeholder pilots, edge case validation, and security scans.' },
      { step: '05', title: 'Operational Rollout', detail: 'Phased staff migration, legacy data transfer, and monitoring activation.' }
    ],
    techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'AWS / Cloudflare'],
    metricsOrOutcomes: [
      'Elimination of manual spreadsheet reconciliation',
      'Strict audit trails for critical operations',
      'Reduced workflow completion turnaround times'
    ],
    relatedServiceSlugs: ['web-development', 'business-automation', 'ui-ux-design'],
    meta: {
      title: 'Digital Solutions | Custom Business Software & Portals — DYRATEK',
      description: 'Bespoke enterprise software, internal tools, and client portals engineered by DYRATEK for streamlined operations.'
    }
  },

  // ==========================================
  // PILLAR 02 // AUTOMATE (2 Services)
  // ==========================================
  {
    id: 'business-automation',
    slug: 'business-automation',
    index: '05',
    pillarIndex: '02.1',
    name: 'Business Automation',
    shortName: 'Automation',
    pillarId: 'automate',
    pillarName: 'Automate',
    tagline: 'Orchestrated API integrations, webhook pipelines, and error-resilient process workflows.',
    description:
      'We eliminate administrative friction by interconnecting your CRM, ERP, and operational toolchains with robust, self-healing automated workflows.',
    strategicObjective:
      'Free high-value teams from repetitive administrative tasks through deterministic automation pipelines with full error telemetry.',
    capabilities: [
      {
        title: 'CRM & ERP Synchronization',
        description: 'Bi-directional real-time data sync across HubSpot, Salesforce, Zoho, and enterprise backends.'
      },
      {
        title: 'Event-Driven Webhook Pipelines',
        description: 'Custom serverless listeners that process transactional triggers with retry queues and fallback alerts.'
      },
      {
        title: 'Document & Invoice Generation',
        description: 'Automated contract assembly, PDF stamping, digital signature routing, and storage filing.'
      },
      {
        title: 'Automated Lead Qualification & Routing',
        description: 'Instant lead scoring, enrichment, and assignment based on commercial parameters and territory.'
      },
      {
        title: 'Custom Middleware Development',
        description: 'Dedicated cloud functions translating payloads between incompatible third-party services.'
      }
    ],
    deliverables: [
      'Documented automation architecture and logic mapping diagrams',
      'Configured workflow pipelines with automated exception logging',
      'Dead-letter queues and alerting integrations (Slack/Email)',
      'Security audit confirming token encryption and minimal scope access'
    ],
    methodology: [
      { step: '01', title: 'Process Audit', detail: 'Inventory of repetitive manual touchpoints, payload structures, and SLAs.' },
      { step: '02', title: 'Integration Architecture', detail: 'API rate limit calculation, authentication methods, and failure scenarios.' },
      { step: '03', title: 'Pipeline Construction', detail: 'Building deterministic connectors, payload transformations, and error handling.' },
      { step: '04', title: 'Simulation & Load Testing', detail: 'Dry-run testing with simulated payloads, edge cases, and throttles.' },
      { step: '05', title: 'Live Cutover', detail: 'Controlled transition from manual execution to real-time automated execution.' }
    ],
    techStack: ['Make.com', 'n8n', 'Zapier', 'Node.js / Serverless', 'PostgreSQL', 'Webhooks'],
    metricsOrOutcomes: [
      'Zero manual data re-entry across integrated platforms',
      'Sub-minute lead dispatch and CRM attribution',
      'Automated error alerts before operational impact'
    ],
    relatedServiceSlugs: ['email-whatsapp-marketing', 'digital-solutions', 'web-development'],
    meta: {
      title: 'Business Automation | Workflow Orchestration & APIs — DYRATEK',
      description: 'Streamline operations with enterprise workflow automation, CRM sync, and reliable integration pipelines engineered by DYRATEK.'
    }
  },
  {
    id: 'email-whatsapp-marketing',
    slug: 'email-whatsapp-marketing',
    index: '06',
    pillarIndex: '02.2',
    name: 'Email & WhatsApp Marketing',
    shortName: 'Email & WhatsApp',
    pillarId: 'automate',
    pillarName: 'Automate',
    tagline: 'Automated lifecycle messaging, conversational engagement, and high-retention funnels.',
    description:
      'We build automated conversational pipelines and segmented email flows that nurture prospective buyers and increase customer lifetime value at scale.',
    strategicObjective:
      'Convert inbound attention into sustained revenue through timed, personalized messaging sequences across high-engagement direct channels.',
    capabilities: [
      {
        title: 'Lifecycle & Behavioral Automations',
        description: 'Event-triggered sequences for welcome series, cart abandonment, onboarding, and win-back.'
      },
      {
        title: 'WhatsApp Business API Integration',
        description: 'Official API implementation for transactional confirmations, automated customer queries, and broadcasts.'
      },
      {
        title: 'Audience Segmentation & RFM Modeling',
        description: 'Dynamic cohort categorization based on recency, frequency, and monetary value of user interactions.'
      },
      {
        title: 'Deliverability & Domain Health Protocol',
        description: 'SPF, DKIM, DMARC, and BIMI configuration ensuring maximum inbox placement and reputation defense.'
      },
      {
        title: 'High-Converting Template Design',
        description: 'Responsive, accessible HTML email design and conversational WhatsApp message schemas.'
      }
    ],
    deliverables: [
      'Configured multi-step automated email workflows in your ESP',
      'Approved WhatsApp Business API template catalog and routing trees',
      'Domain authentication verification report (SPF/DKIM/DMARC)',
      'Editorial content matrix and campaign calendar'
    ],
    methodology: [
      { step: '01', title: 'Journey Blueprint', detail: 'Customer touchpoint identification and trigger condition mapping.' },
      { step: '02', title: 'Infrastructure Setup', detail: 'Domain DNS configuration, WhatsApp business verification, and ESP sync.' },
      { step: '03', title: 'Content & Template Creation', detail: 'Copywriting, responsive email design, and message formatting.' },
      { step: '04', title: 'Trigger Testing', detail: 'End-to-end sandbox simulations of event firing and message delivery.' },
      { step: '05', title: 'Launch & Telemetry', detail: 'Flow activation, deliverability monitoring, and performance benchmarking.' }
    ],
    techStack: ['Klaviyo', 'WhatsApp Cloud API', 'HubSpot', 'Postmark', 'Twilio', 'Brevo'],
    metricsOrOutcomes: [
      '> 99% inbox deliverability across verified domains',
      'Automated revenue generation without ongoing manual sending',
      'Instant WhatsApp response times for transactional events'
    ],
    relatedServiceSlugs: ['business-automation', 'content-strategy-copywriting', 'performance-marketing'],
    meta: {
      title: 'Email & WhatsApp Marketing | Lifecycle Automation — DYRATEK',
      description: 'Drive retention and revenue with automated email sequences and verified WhatsApp Business API funnels engineered by DYRATEK.'
    }
  },

  // ==========================================
  // PILLAR 03 // CREATE & GROW (5 Services)
  // ==========================================
  {
    id: 'ui-ux-design',
    slug: 'ui-ux-design',
    index: '07',
    pillarIndex: '03.1',
    name: 'UI/UX Design',
    shortName: 'UI/UX Design',
    pillarId: 'create-grow',
    pillarName: 'Create & Grow',
    tagline: 'Architectural digital interfaces, design systems, and frictionless user experiences.',
    description:
      'We craft structured, mathematically balanced interfaces grounded in Swiss modernist aesthetics, intuitive mental models, and production-ready component tokens.',
    strategicObjective:
      'Eliminate user cognitive load and accelerate engineering velocity by providing unambiguous, high-fidelity design specifications.',
    capabilities: [
      {
        title: 'Design Systems & Token Architecture',
        description: 'Comprehensive Figma libraries with standardized semantic tokens, typography scales, and variants.'
      },
      {
        title: 'Information Architecture & Wireframing',
        description: 'Hierarchical navigation structures, low-fidelity wireframes, and logical user flow mapping.'
      },
      {
        title: 'High-Fidelity Interface Design',
        description: 'Pixel-precise desktop, tablet, and mobile layouts executed with editorial rigor and brand discipline.'
      },
      {
        title: 'Interactive Prototyping',
        description: 'High-fidelity clickable prototypes that replicate realistic user states, gestures, and transitions.'
      },
      {
        title: 'Accessibility Audits (WCAG 2.2 AA)',
        description: 'Contrast verification, keyboard navigation paths, touch target evaluation, and screen reader flow checks.'
      }
    ],
    deliverables: [
      'Comprehensive Figma design file with organized page hierarchy',
      'Published component library with autolayout and design token documentation',
      'Interactive prototype for desktop and mobile viewports',
      'Detailed developer handoff specifications with asset exports'
    ],
    methodology: [
      { step: '01', title: 'Research & Discovery', detail: 'Stakeholder interviews, user persona mapping, and architectural layout exploration.' },
      { step: '02', title: 'Wireframes & Flow', detail: 'Low-fidelity structural layouts establishing content hierarchy and logic.' },
      { step: '03', title: 'Design System & Tokens', detail: 'Defining the atomic palette, typography scale, spacing grids, and primitives.' },
      { step: '04', title: 'High-Fidelity UI', detail: 'Composing polished responsive screens with micro-interaction states.' },
      { step: '05', title: 'Handoff & Validation', detail: 'Developer documentation, redline reviews, and implementation QA.' }
    ],
    techStack: ['Figma', 'FigJam', 'Tokens Studio', 'Zeroheight', 'Principle'],
    metricsOrOutcomes: [
      'WCAG 2.2 AA contrast and accessibility compliance',
      '100% token consistency between Figma and Tailwind CSS',
      'Streamlined development handoff with zero ambiguous states'
    ],
    relatedServiceSlugs: ['web-development', 'app-development', 'creative-video'],
    meta: {
      title: 'UI/UX Design | Systems & Product Interfaces — DYRATEK',
      description: 'Precision digital product design, design systems, and user experience engineering informed by Swiss modernist discipline.'
    }
  },
  {
    id: 'creative-video',
    slug: 'creative-video',
    index: '08',
    pillarIndex: '03.2',
    name: 'Creative & Video',
    shortName: 'Creative & Video',
    pillarId: 'create-grow',
    pillarName: 'Create & Grow',
    tagline: 'High-impact motion design, video editing, and branded creative production.',
    description:
      'We produce captivating digital video assets, motion graphics, and social narratives engineered to command attention and articulate complex business value.',
    strategicObjective:
      'Differentiate your brand in saturated digital feeds through crisp visual pacing, clear typography, and cinematic motion design.',
    capabilities: [
      {
        title: 'Short-Form Video Production',
        description: 'Engaging, platform-native reels and clips formatted for vertical consumption on Instagram, TikTok, and YouTube Shorts.'
      },
      {
        title: 'Product Walkthroughs & Explainer Motion',
        description: 'Clear, kinetic vector animations explaining software workflows, product mechanics, and business offerings.'
      },
      {
        title: 'High-Conversion Paid Ad Creatives',
        description: 'Multi-variant commercial ad cuts designed with bold hooks, pacing variations, and direct response triggers.'
      },
      {
        title: 'Brand Motion Guidelines & Intros',
        description: 'Micro-animations, logo reveals, and motion design tokens for brand consistency across video channels.'
      },
      {
        title: 'Audio Mastering & Sound Design',
        description: 'Clean voice-over cleanup, bespoke sound effects, and balanced audio leveling for broadcast quality.'
      }
    ],
    deliverables: [
      'Master high-definition exports in 9:16, 1:1, and 16:9 aspect ratios',
      'Burned-in open and closed caption files (.SRT / .VTT)',
      'Organized project asset archives with raw cuts and motion templates',
      'Storyboard and script documentation'
    ],
    methodology: [
      { step: '01', title: 'Creative Brief & Concept', detail: 'Target audience analysis, core message framing, and visual hook brainstorm.' },
      { step: '02', title: 'Script & Storyboarding', detail: 'Scene-by-scene script writing, timing markers, and visual style frames.' },
      { step: '03', title: 'Production & Animation', detail: 'Motion graphic composition, asset assembly, and dynamic camera choreography.' },
      { step: '04', title: 'Editorial Review', detail: 'Client feedback rounds, pacing adjustments, and subtitle timing verification.' },
      { step: '05', title: 'Final Mastering', detail: 'Color grading, audio leveling, and multichannel export encoding.' }
    ],
    techStack: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Cinema 4D', 'Illustrator'],
    metricsOrOutcomes: [
      'Optimized 3-second hook retention rates',
      'Cross-platform multi-format deliverables',
      'Consistent branded motion identity'
    ],
    relatedServiceSlugs: ['performance-marketing', 'digital-marketing', 'content-strategy-copywriting'],
    meta: {
      title: 'Creative & Video | Motion Design & Video Production — DYRATEK',
      description: 'Engaging motion graphics, commercial video editing, and short-form video production crafted for modern digital channels.'
    }
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    index: '09',
    pillarIndex: '03.3',
    name: 'Digital Marketing',
    shortName: 'Digital Marketing',
    pillarId: 'create-grow',
    pillarName: 'Create & Grow',
    tagline: 'Strategic multichannel marketing, search positioning, and digital brand elevation.',
    description:
      'We formulate and execute integrated digital marketing strategies that establish commercial authority, attract organic search demand, and build durable brand presence.',
    strategicObjective:
      'Construct a sustainable digital presence that continuously generates qualified organic inquiries across high-intent touchpoints.',
    capabilities: [
      {
        title: 'Technical & Strategic SEO',
        description: 'Semantic markup architecture, crawl budget optimization, indexation health, and high-intent keyword strategies.'
      },
      {
        title: 'Multichannel Content Distribution',
        description: 'Synchronized broadcasting across professional networks, digital publications, and industry directories.'
      },
      {
        title: 'Digital Brand Positioning',
        description: 'Strategic market differentiation, competitive moat analysis, and commercial narrative formulation.'
      },
      {
        title: 'Reputation & Authority Building',
        description: 'Structured internal and external link architectures that signal institutional domain credibility.'
      },
      {
        title: 'Analytics & Attribution Frameworks',
        description: 'Server-side tracking, cookieless attribution modeling, and executive KPI reporting dashboards.'
      }
    ],
    deliverables: [
      'Comprehensive technical SEO audit and remediation checklist',
      'Targeted keyword roadmap mapped by commercial search intent',
      'Quarterly multichannel content distribution blueprint',
      'Custom real-time analytics reporting console'
    ],
    methodology: [
      { step: '01', title: 'Market & Audit Sprint', detail: 'Search visibility diagnostic, competitor analysis, and audience research.' },
      { step: '02', title: 'Strategic Roadmap', detail: 'Defining core content pillars, technical remediation steps, and KPIs.' },
      { step: '03', title: 'Technical Execution', detail: 'On-page optimizations, metadata overhaul, and canonical structure setup.' },
      { step: '04', title: 'Channel Activation', detail: 'Systematic content publication, distribution cadences, and syndication.' },
      { step: '05', title: 'Review & Refinement', detail: 'Monthly ranking analysis, traffic attribution, and strategy recalibration.' }
    ],
    techStack: ['Google Search Console', 'Ahrefs', 'Semrush', 'GA4 / PostHog', 'Screaming Frog'],
    metricsOrOutcomes: [
      'Zero indexation errors or duplicate content penalties',
      'Measurable gains in high-intent non-branded organic impressions',
      'Transparent channel attribution'
    ],
    relatedServiceSlugs: ['performance-marketing', 'content-strategy-copywriting', 'web-development'],
    meta: {
      title: 'Digital Marketing | Strategic Growth & Technical SEO — DYRATEK',
      description: 'Strategic digital marketing, technical search engine optimization, and multichannel brand positioning by DYRATEK.'
    }
  },
  {
    id: 'performance-marketing',
    slug: 'performance-marketing',
    index: '10',
    pillarIndex: '03.4',
    name: 'Performance Marketing',
    shortName: 'Performance',
    pillarId: 'create-grow',
    pillarName: 'Create & Grow',
    tagline: 'Precision paid acquisition, conversion rate optimization, and scalable media buying.',
    description:
      'We manage high-efficiency paid search, social, and programmatic media campaigns focused on strict return on ad spend (ROAS) and predictable customer acquisition.',
    strategicObjective:
      'Scale profitable commercial customer acquisition through continuous creative testing, disciplined bidding, and dedicated landing page funnels.',
    capabilities: [
      {
        title: 'Paid Search (Google Ads)',
        description: 'High-intent search keyword bidding, negative query pruning, target CPA optimization, and ad extensions.'
      },
      {
        title: 'Paid Social (Meta, LinkedIn)',
        description: 'Audience lookalikes, custom interest layering, account-based targeting, and dynamic retargeting.'
      },
      {
        title: 'Landing Page Conversion Rate Optimization (CRO)',
        description: 'Bespoke high-speed landing pages engineered for specific ad hooks with rapid conversion points.'
      },
      {
        title: 'Creative Variant Testing Matrix',
        description: 'Rigorous A/B testing of hooks, headlines, video cuts, and value propositions to lower CAC.'
      },
      {
        title: 'Server-Side Conversions API (CAPI)',
        description: 'First-party conversion tracking resilient against ad blockers and browser tracking constraints.'
      }
    ],
    deliverables: [
      'Configured ad account structures with naming conventions',
      'Weekly performance reporting detailing spend, CAC, and ROAS',
      'Creative testing matrix with performance attribution',
      'Server-side Conversions API integration verification'
    ],
    methodology: [
      { step: '01', title: 'Audience & Budget Planning', detail: 'CAC modeling, competitive ad landscape review, and baseline budgeting.' },
      { step: '02', title: 'Tracking Architecture', detail: 'Setting up CAPI, pixel events, UTM conventions, and conversion triggers.' },
      { step: '03', title: 'Campaign Staging', detail: 'Writing ad copy variants, creative asset formatting, and campaign setup.' },
      { step: '04', title: 'Testing & Optimization', detail: 'Daily budget allocation, bid adjustments, and ad group pruning.' },
      { step: '05', title: 'Scaling Protocol', detail: 'Budget expansion on proven winner segments while maintaining ROAS targets.' }
    ],
    techStack: ['Google Ads', 'Meta Ads Manager', 'LinkedIn Campaign Manager', 'Stape.io CAPI', 'Looker Studio'],
    metricsOrOutcomes: [
      'Disciplined focus on true Customer Acquisition Cost (CAC)',
      '100% server-side conversion signal parity',
      'Systematic creative iteration cadence'
    ],
    relatedServiceSlugs: ['digital-marketing', 'creative-video', 'content-strategy-copywriting'],
    meta: {
      title: 'Performance Marketing | Paid Acquisition & ROAS — DYRATEK',
      description: 'Disciplined paid media management across Google, Meta, and LinkedIn focused on measurable return on ad spend and scalable CAC.'
    }
  },
  {
    id: 'content-strategy-copywriting',
    slug: 'content-strategy-copywriting',
    index: '11',
    pillarIndex: '03.5',
    name: 'Content Strategy & Copywriting',
    shortName: 'Content & Copy',
    pillarId: 'create-grow',
    pillarName: 'Create & Grow',
    tagline: 'Technical copywriting, brand narratives, and commercial messaging frameworks.',
    description:
      'We craft rigorous, persuasive commercial copy and editorial frameworks that clarify technical capabilities, eliminate fluff, and compel prospective buyers to act.',
    strategicObjective:
      'Translate complex technical offerings into authoritative, lucid commercial language that builds credibility with executive decision-makers.',
    capabilities: [
      {
        title: 'Executive Value Proposition Framing',
        description: 'Distilling complex product systems into crisp, memorable positioning statements and elevator matrices.'
      },
      {
        title: 'Technical Web Copywriting',
        description: 'Punchy hero headlines, benefits architectures, and unambiguous feature breakdowns for digital products.'
      },
      {
        title: 'Editorial Articles & Thought Leadership',
        description: 'In-depth essays, whitepapers, and technical guides that establish intellectual authority in your sector.'
      },
      {
        title: 'Direct-Response Ad & Video Scripts',
        description: 'Tight, compelling audio/visual scripts with sharp hooks designed for high-conversion paid channels.'
      },
      {
        title: 'Tone of Voice & Messaging Architecture',
        description: 'Comprehensive brand voice guidelines, word choice taxonomies, and editorial stylebooks.'
      }
    ],
    deliverables: [
      'Complete website copy document with section-by-section layout guidance',
      'Brand messaging guidelines including primary and secondary value pillars',
      'Editorial calendar with planned research briefs and outlines',
      'Ad script bundle with 3-5 alternative hook variants'
    ],
    methodology: [
      { step: '01', title: 'Messaging Extraction', detail: 'Deep stakeholder interviews to identify technical differentiators and customer pains.' },
      { step: '02', title: 'Narrative Framework', detail: 'Developing the core brand thesis, tone of voice attributes, and vocabulary rules.' },
      { step: '03', title: 'Drafting & Structuring', detail: 'Writing high-density headlines, proof points, and conversational body copy.' },
      { step: '04', title: 'Editorial Polish', detail: 'Eliminating corporate jargon, verifying technical precision, and rhythmic cadence.' },
      { step: '05', title: 'Handoff & Implementation', detail: 'Aligning copy directly with design components and CMS schemas.' }
    ],
    techStack: ['Notion', 'Google Workspace', 'Grammarly Enterprise', 'Hemingway'],
    metricsOrOutcomes: [
      'Zero vague jargon or empty marketing filler',
      'Direct alignment between brand voice and engineering reality',
      'Modular copy structured directly for UI components'
    ],
    relatedServiceSlugs: ['ui-ux-design', 'digital-marketing', 'creative-video'],
    meta: {
      title: 'Content Strategy & Copywriting | Technical Messaging — DYRATEK',
      description: 'Authoritative technical copywriting, commercial messaging frameworks, and executive brand narratives by DYRATEK.'
    }
  }
];

// ==========================================
// APPROVED 3-PILLAR STRUCTURE
// ==========================================
export const PILLARS: Pillar[] = [
  {
    id: 'build',
    index: '01',
    code: '01 // BUILD',
    name: 'Build',
    tagline: 'Foundational digital engineering & resilient software platforms.',
    description:
      'Foundational digital products engineered with modern frameworks, high performance, and responsive precision.',
    services: SERVICES.filter((s) => s.pillarId === 'build')
  },
  {
    id: 'automate',
    index: '02',
    code: '02 // AUTOMATE',
    name: 'Automate',
    tagline: 'Operational automation & synchronized conversational loops.',
    description:
      'Operational automation and synchronized conversational communication loops that streamline business flow.',
    services: SERVICES.filter((s) => s.pillarId === 'automate')
  },
  {
    id: 'create-grow',
    index: '03',
    code: '03 // CREATE & GROW',
    name: 'Create & Grow',
    tagline: 'High-fidelity design, media production & multichannel growth.',
    description:
      'High-fidelity user interface systems, multimedia production, and full-funnel digital marketing execution.',
    services: SERVICES.filter((s) => s.pillarId === 'create-grow')
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServicesByPillar(pillarId: Pillar['id']): Service[] {
  return SERVICES.filter((s) => s.pillarId === pillarId);
}

export function getPillarById(pillarId: Pillar['id']): Pillar | undefined {
  return PILLARS.find((p) => p.id === pillarId);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}

