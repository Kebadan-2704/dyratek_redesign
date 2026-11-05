# Comprehensive UX, Motion, and Technical Audit

**Project:** DYRATEK Corporate Website  
**Branch:** `redesign/animated-v2`  
**Date:** November 2026  
**Auditor:** Senior Front-End Engineer, Motion Designer & UX Auditor  
**Baseline Status:** Next.js 16.4.3 (Turbopack), React 19.3.0, TypeScript 5, Tailwind CSS v4

---

## 1. What the Website Is and Does

### 1.1 Business Purpose & Identity
DYRATEK is a modern digital engineering and design studio specializing in three core pillars:
1. **BUILD:** Fast web applications, mobile apps (iOS & Android), e-commerce storefronts, and custom operational software.
2. **AUTOMATE:** Business workflow automation, app integrations, inquiry routing, and automated email/WhatsApp customer messaging.
3. **GROW:** User-centric UI/UX design, product video & motion graphics, SEO optimization, performance marketing/advertising, and plain-language copywriting.

The studio's value proposition is "Clarity & Reliability" — bridging the gap between flashy creative agencies that build slow, unmaintainable sites and purely technical firms that produce confusing, unusable interfaces.

### 1.2 Target Audience
- Growing small-to-medium businesses, founders, operations directors, and product owners who need reliable digital tools without corporate fluff or technical jargon.
- Non-technical decision makers who value transparency, straightforward milestones, fast page loads, and clear communication.

### 1.3 Main User Goals
- Understand exactly what services DYRATEK offers and how the 3-pillar model works.
- Examine demonstration sample projects to evaluate design aesthetics and technical capabilities.
- Understand the 5-stage project methodology (Discover → Plan → Design & Build → Review → Launch).
- Review clear answers to frequent questions (timelines, pricing models, technology choices).
- Submit a structured project inquiry or contact request with project details, budget band, and selected service category.

### 1.4 Complete Inventory of Routes, Pages & Sections

| Route | Type | Purpose & Key Sections | Forms / Interactions |
| :--- | :--- | :--- | :--- |
| `/` | Static / PPR | **Home:** Hero section with narrative & tangible interactive storefront/inquiry preview scene; 3-Pillar Taxonomy; Sample Projects showcase; 5-Step Process tabbed stepper; Final CTA banner. | Interactive Process stepper tabs; Contact & Services navigation links. |
| `/about` | Static | **About:** Studio narrative; "No fluff, just useful tools" approach; 3 Core Principles (Fast Loading, Clear Structure, Dependable Tools); Studio standards; CTA. | Navigation links, pillar links. |
| `/services` | Static | **Services Index:** Overview of all 11 services categorized into Build (4), Automate (2), and Grow (5); Quick anchor jump links; Deliverables preview. | Anchor jump links, service card drill-downs. |
| `/services/web-development` | Static (SSG) | **Service Detail 01:** Web Development capabilities, deliverables, 5-stage timeline, tech stack, related services, FAQ. | Direct contact CTA link with pre-selected context. |
| `/services/app-development` | Static (SSG) | **Service Detail 02:** Mobile App Development for iOS & Android. | Direct contact CTA link. |
| `/services/ecommerce-solutions` | Static (SSG) | **Service Detail 03:** Online Stores, cart drawers, payment links, inventory synchronization. | Direct contact CTA link. |
| `/services/digital-solutions` | Static (SSG) | **Service Detail 04:** Custom Software, client portals, role-based dashboards. | Direct contact CTA link. |
| `/services/business-automation` | Static (SSG) | **Service Detail 05:** Business Automation, software links, inquiry routing. | Direct contact CTA link. |
| `/services/email-whatsapp-marketing`| Static (SSG) | **Service Detail 06:** Email & WhatsApp messaging workflows, receipts, domain setup. | Direct contact CTA link. |
| `/services/ui-ux-design` | Static (SSG) | **Service Detail 07:** Website & App Design, wireframes, style guides, WCAG contrast. | Direct contact CTA link. |
| `/services/creative-video` | Static (SSG) | **Service Detail 08:** Video & Motion, walkthroughs, social formats, title animations. | Direct contact CTA link. |
| `/services/digital-marketing` | Static (SSG) | **Service Detail 09:** SEO, Google index review, site hierarchy, meta tags. | Direct contact CTA link. |
| `/services/performance-marketing`| Static (SSG) | **Service Detail 10:** Online Advertising, search & social campaigns, conversion tracking. | Direct contact CTA link. |
| `/services/content-strategy-copywriting`| Static (SSG) | **Service Detail 11:** Plain-language copywriting, product descriptions, customer FAQs. | Direct contact CTA link. |
| `/work` | Static | **Work Index:** Showcase of demonstration projects (`Online Store & Inventory Updates`, `Automated Inquiry Follow-Up`, `Design Kit for Web & Mobile`) with concept disclaimer. | Project card links, filter tabs. |
| `/work/online-store` | Static (SSG) | **Project Detail:** E-Commerce Architecture case study, challenge/solution, technical deliverables, services involved. | Breadcrumbs, back navigation. |
| `/work/inquiry-follow-up` | Static (SSG) | **Project Detail:** Workflow Automation engine case study, lead routing and alert systems. | Breadcrumbs, back navigation. |
| `/work/design-kit` | Static (SSG) | **Project Detail:** Design System case study, token coordination, accessibility review. | Breadcrumbs, back navigation. |
| `/faq` | Static | **FAQ:** 10 categorized questions & answers covering Working With Us, Technology & Code, Timelines & Pricing, and Support & Security. | Accordion / list view. |
| `/contact` | Client / Static | **Contact:** Structured briefing form (Name, Email, Company, Service category selector, Budget band radio pills, Project brief textarea); Direct Review sidebar. | Client-side validated form, field error focus management, submit state. |
| `/privacy` | Static | **Privacy Policy:** Minimal, GDPR-compliant privacy statement confirming zero third-party tracking scripts. | Legal links. |
| `/terms` | Static | **Terms of Service:** Standard commercial terms placeholder. | Legal links. |
| `/_not-found` | Static | **404 Page:** Custom error page with quick links to Home, Services, Work, and Contact. | Recovery links. |

---

## 2. Tech Stack

- **Framework:** Next.js 16.4.3 (Turbopack, Partial Prerendering / Cache Components enabled)
- **Runtime & Language:** Node.js v24, React 19.3.0, TypeScript 5.8
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss";` with `@theme inline` tokens)
- **Animation Engines Installed:**
  - `gsap` (3.15.1) + `@gsap/react` (2.1.2)
  - `lenis` (1.3.27)
  - `motion` (14.9.1)
  - `animejs` (4.5.0)
  - `three` (0.187.0) + `@react-three/fiber` (9.8.2) + `@types/three`
  - `@formkit/auto-animate` (0.10.0)
- **State Management:** Native React state (`useState`, `useRef`, `useCallback`)
- **Backend / Data:** Pure static data architecture (`src/data/services.ts`, `src/data/projects.ts`, `src/data/navigation.ts`, `src/data/faq.ts`, `src/data/process.ts`). Zero brittle external CMS dependencies.
- **Auditing & QA Tools:** Playwright 1.64.1, `@axe-core/playwright` 4.14.0, Google Lighthouse 13.6.0.

---

## 3. Content & Brand Inventory

### 3.1 Color Palette
- **Forest Green Primary:** `#123D32` (headings, primary buttons, active tabs, brand accents)
- **Deep Forest Dark:** `#0B2720` (hover states, dark surfaces)
- **Porcelain Ground:** `#FBFBF9` (main page background, clean off-white)
- **Surface Tint:** `#F3F4F1` (secondary section backgrounds, subtle alternating bands)
- **Card White:** `#FFFFFF` (elevated cards, inputs, containers)
- **Charcoal Body:** `#1E2221` (primary text, high contrast WCAG-AAA compliant)
- **Sage Muted:** `#555B57` (secondary descriptions, meta tags, labels)
- **Border Ash:** `#E1E4E0` (structural dividers, card borders)
- **Terracotta Accent:** `#C83B35` (strictly reserved for the signature Dyratek logo mark and surgical focal points)

### 3.2 Typography & Hierarchy
- **Font Family:** `Plus Jakarta Sans` (weights: 400, 500, 600, 700) loaded via `next/font/google` with `display: swap`.
- **Minimum Font Rule:** Strictly `>= 13px` (`0.8125rem`). No microscopic text anywhere.
- **Hierarchy Scale:**
  - Hero Display: 44px – 56px (leading 1.1)
  - H1 Page Titles: 36px – 48px
  - H2 Section Headings: 28px – 36px
  - H3 Card Headings: 20px – 24px
  - Body Text: 16px – 18px (leading 1.6, max 65ch width for ideal readability)
  - Secondary / Captions: 13px – 14px

### 3.3 Integrity of Claims & Content Authenticity
- Strict compliance with `CONTENT_TO_CONFIRM.md`: No invented client logos, false awards, fake metric counters ("+99% ROI"), or fabricated claims.
- The 3 projects are explicitly labeled as **Demonstration Concepts** (`Online Store & Inventory Updates`, `Automated Inquiry Follow-Up`, `Design Kit for Web & Mobile`).
- Accurate 11 services across 3 pillars (Build, Automate, Grow).

---

## 4. Functionality That Must NOT Break

1. **Routing & URLs:** All 23 routes must retain identical paths, parameters, slugs, and static generation.
2. **Contact Form Validation & State:**
   - Full client validation (Name, valid Email format, project brief length).
   - Clear validation error messages with automated keyboard focus redirection.
   - Successful submission confirmation state.
3. **Process Stepper:** Tabbed keyboard-accessible interface (`role="tablist"`, `role="tab"`, `aria-selected`, `aria-controls`).
4. **Header Navigation:**
   - Sticky blur/shadow elevation upon scroll (`scrollY > 20`).
   - Desktop hover & keyboard-accessible "Services" flyout dropdown with 3-pillar taxonomy.
   - Mobile slide-out drawer with focus trapping, `Escape` key dismissal, and backdrop overlay.
5. **SEO & Social Graph Metadata:**
   - Next.js Metadata API on every page with unique titles and descriptions.
   - OpenGraph and Twitter card metadata.
   - JSON-LD structured data (`Organization` and `WebSite` schemas).
   - `sitemap.xml` and `robots.txt` dynamic generation.
6. **Skip Link:** Accessible skip-to-content link for keyboard users.

---

## 5. Audit Findings: Baseline Problems & Metrics

### 5.1 Lighthouse Baseline Scores (Captured via Lighthouse 13.6.0 on Production Build)

| Category | Score | Metric / Detail | Status |
| :--- | :---: | :--- | :--- |
| **Performance** | **100** | FCP: 1.0s, LCP: 1.0s, TBT: 60ms, CLS: 0, Speed Index: 1.0s | Pristine |
| **Accessibility** | **96** | Deducted 4 points due to touch targets in footer navigation | Needs Fix |
| **Best Practices** | **100** | No console errors, valid HTTPS/HTTP2, zero vulnerabilities | Pristine |
| **SEO** | **100** | Meta tags, valid robots, valid sitemap, crawlers permitted | Pristine |

### 5.2 Identified Issues & Deficiencies
1. **Touch Target Size (< 48x48px on Mobile):**
   - Footer text links (`text-[13px]`) lacked vertical hit padding, causing Lighthouse touch target warning.
2. **Static & Flat Motion Language:**
   - The current site has almost zero ambient or scroll-driven life. Sections snap onto the screen statically.
   - The hero section uses static HTML mockups rather than cinematic motion or interactive responsiveness.
   - No smooth-scrolling experience (Lenis) exists to unify navigation velocity.
   - No micro-interactions on card hovers, button clicks, or badge states.
   - Page transitions are abrupt without fluid cross-route continuity.
3. **Dead Code & Unmounted Components:**
   - `NexusConvergence`, `NexusCore`, `NexusGeometry`, and `NexusPlane` exist as complex SVG assets in `src/components/nexus/` but are completely unmounted on any page.
   - Empty scratch scripts (`capture_with_cdp.js`, `cdp_inspect.js`) linger in the root directory.
4. **Visual Density & Typography Contrast:**
   - Several secondary sections feel text-heavy without visual breathing room or motion cues to guide scanning.
   - Mobile navigation header transitions can be made significantly smoother and tactile.

---

## 6. Motion & Design Opportunities (Award-Quality Potential)

1. **Cinematic Hero Entry Sequence:**
   - Staggered word/line mask reveal on the primary display heading using Motion.
   - Interactive, ambient particle or wave canvas mesh reflecting the Forest Green / Porcelain palette.
   - Floating interactive device mockup with subtle parallax depth on cursor move.
2. **Integrated Smooth Scrolling (Lenis + GSAP ScrollTrigger):**
   - Synchronized 60fps momentum scroll that gives a weighted, premium editorial feel.
   - ScrollTrigger-driven reveal for section headers, cards, and taxonomy pillars.
3. **Interactive 3-Pillar Taxonomy Showcase:**
   - Elevate the Build / Automate / Grow taxonomy with interactive pillar switcher and morphing highlight indicators.
4. **Tangible Interactive Prototypes (Showpiece Bento Grid):**
   - Transform sample project cards into interactive demo previews with smooth expandable drawers, interactive tabs, and live status pulses.
5. **Interactive 5-Stage Project Stepper:**
   - Timeline progress line connecting stages 01 through 05 that fills smoothly as steps change or scroll into view.
6. **Delightful Micro-interactions:**
   - Magnetic button hover pull on primary CTAs.
   - Shimmer border effects on featured cards using CSS variables and Motion.
   - Smooth accordions with physics-based springs (`motion`).
7. **Accessibility-First Motion:**
   - Full `prefers-reduced-motion` compliance across all GSAP and Motion tweens, immediately disabling transforms and falling back to clean instant opacity transitions.

