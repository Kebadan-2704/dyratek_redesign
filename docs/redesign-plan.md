# DYRATEK Frontend Redesign & Motion Engineering Plan

**Target Branch:** `redesign/animated-v2`  
**Standard:** Award-Quality Editorial & Motion Craft (Awwwards / FWA tier with 100/100 Lighthouse floor)  
**Author:** Senior Front-End Engineer & Motion Designer  

---

## 1. Visual Design Direction: "Engineered Clarity & Tactile Editorial"

### 1.1 Aesthetic Philosophy
The visual direction reflects DYRATEK's core identity: a digital studio that combines architectural engineering rigor with human-centered product design. 

We deliberately avoid:
- Generic AI-slop purple/violet neon gradients and dark "SaaS hype" templates.
- Decorative, meaningless 3D blobs that tank mobile performance and drain battery.
- Microscopic text (< 13px) or unreadable grey-on-grey low contrast text.
- Fabricated metrics, invented client logos, or fake testimonial quotes.

Instead, we commit to **Tactile Editorial Modernism**:
- Deep, grounded organic tones (Forest Green, warm Porcelain, subtle Surface Tint).
- Crisp structural borders reminiscent of Swiss architectural layouts.
- Authentic interactive prototypes that prove engineering competency directly on the page.
- Smooth, weighted physical motion that feels tactile, responsive, and purposeful.

### 1.2 Design System Tokens & CSS Variables

```css
:root {
  /* Surface & Canvas Tokens */
  --bg-primary: #FBFBF9;       /* Warm Porcelain ground */
  --bg-surface: #F3F4F1;       /* Tinted secondary sections */
  --bg-surface-elevated: #FFFFFF; /* Crisp card container */
  --bg-dark: #0B2720;          /* Deep architectural forest dark */
  
  /* Brand Inks & Accent Tokens */
  --color-forest: #123D32;     /* Primary brand anchor */
  --color-forest-dark: #0B2720;/* Deep hover / high-contrast */
  --color-forest-tint: #E8EFEA;/* Subtle chip / pill background */
  --color-forest-glow: rgba(18, 61, 50, 0.08);
  --color-terracotta: #C83B35; /* Signature brand focal point (logo mark) */
  
  /* Text Contrast Hierarchy (WCAG AAA / AA compliant) */
  --text-primary: #1E2221;     /* Charcoal high-contrast body ink (14.2:1) */
  --text-secondary: #555B57;   /* Muted slate-sage caption ink (6.1:1) */
  --text-on-dark: #FBFBF9;     /* Pristine off-white for dark cards */
  --text-on-dark-muted: #D8D4CA;
  
  /* Structural Borders */
  --border-subtle: #E1E4E0;
  --border-focus: #123D32;
  
  /* Spatial Geometry & Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --radius-2xl: 28px;
  
  /* Elevation Shadows */
  --shadow-subtle: 0 1px 3px 0 rgba(18, 61, 50, 0.04);
  --shadow-card: 0 4px 20px -2px rgba(18, 61, 50, 0.05), 0 2px 6px -1px rgba(18, 61, 50, 0.03);
  --shadow-hover: 0 16px 36px -6px rgba(18, 61, 50, 0.09), 0 6px 14px -3px rgba(18, 61, 50, 0.05);
  --shadow-focus: 0 0 0 3px rgba(18, 61, 50, 0.2);
}
```

### 1.3 Typography Scale
- **Primary Typeface:** `Plus Jakarta Sans` (`--font-plus-jakarta-sans`)
- **Code / Monospace Pill Typeface:** `ui-monospace, SFMono-Regular, Menlo, monospace`
- **Scale:**
  - Display Hero: `text-4xl sm:text-5xl lg:text-[54px] tracking-[-0.03em] leading-[1.08]`
  - H1 Page Title: `text-3xl sm:text-4xl lg:text-5xl tracking-[-0.025em] leading-[1.12]`
  - H2 Section Header: `text-2xl sm:text-3xl lg:text-4xl tracking-[-0.02em] leading-[1.2]`
  - H3 Card Header: `text-xl sm:text-2xl font-bold tracking-[-0.015em] leading-[1.25]`
  - Body Large: `text-lg sm:text-xl text-[#555B57] leading-[1.6]`
  - Body Standard: `text-base text-[#1E2221] leading-[1.65]`
  - Micro-Tags / Captions: Strictly `>= 13px` (`text-[13px]` or `text-sm`)

---

## 2. Animation System: ONE Tool Per Job

To maintain 60fps performance, zero hydration glitches, and avoid conflicts, we delegate tasks strictly to one designated library:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        DYRATEK MOTION ARCHITECTURE                     │
├────────────────────────────────────────────────────────────────────────┤
│ 1. LENIS (Smooth Scroll Engine)                                        │
│    └─ Global momentum scroll provider, virtualized RAF loop            │
│ 2. GSAP + SCROLLTRIGGER (Scroll Choreography)                          │
│    └─ Synchronized with Lenis RAF                                      │
│    └─ Hero parallax, pinned section timeline, scroll progress lines    │
│    └─ useGSAP hook with automatic scope cleanup                        │
│ 3. MOTION (Framer Motion v14) (Component & Interactive Dynamics)      │
│    └─ Staggered line/word reveal masks                                 │
│    └─ Layout transitions (layoutId on active tabs & pillar pills)      │
│    └─ Spring-physics accordion expansions & interactive drawer         │
│    └─ Button tap, magnetic hover, and card tilt interactions           │
│ 4. SIGNATURE SHOWPIECES (3 Curated Effects)                            │
│    └─ Ambient Dynamic Grid Canvas (Canvas 2D, lightweight, responsive) │
│    └─ Tangible Device Simulation (Multi-viewport interactive app scene)│
│    └─ Bento Interactive Prototype Cards (Direct user inspection tabs)  │
└────────────────────────────────────────────────────────────────────────┘
```

### 2.1 Motion Rules & Performance Budget
1. **Duration:** 200ms – 400ms for UI actions (hover, tap, toggle); 500ms – 750ms for viewport entry reveals.
2. **Easing Standard:** `cubic-bezier(0.16, 1, 0.3, 1)` (snappy ease-out, no bouncing rubber-banding).
3. **Hardware Acceleration:** Only animate `transform` and `opacity`. Never animate `top`, `margin`, `width`, or `height`.
4. **Scroll Fire-Once:** Staggered reveals use `once: true` via IntersectionObserver or ScrollTrigger `once: true`.
5. **Prefers-Reduced-Motion:** Full fallback mode disabling all motion transforms, immediately rendering static elements.
6. **Mobile Touch Safe:** Disable heavy cursor-tracking parallax on touch devices (`pointer: coarse`).

---

## 3. Page-by-Page & Section-by-Section Plan

### 3.1 Global Shell (`Header` & `Footer` & `SmoothScroll`)
- **`SmoothScrollProvider`:** Wrap the application in a Lenis smooth scroll provider synced with `ScrollTrigger.update()`. Disables automatically when `prefers-reduced-motion` is active.
- **Header:**
  - Sticky glass header with dynamic backdrop blur (`backdrop-blur-md bg-[#FBFBF9]/90`).
  - Active page indicator indicator with Motion `layoutId="activeNavIndicator"`.
  - Services Mega Dropdown: Smooth spring popover with keyboard arrow key navigation.
  - Mobile Menu: Fluid spring-based full-screen drawer with trapped focus and accessible ESC closing.
- **Footer:**
  - Increase link padding to guarantee `>= 48px` minimum touch target on mobile viewports (fixing Lighthouse a11y 96 → 100).
  - Add back-to-top button with smooth scroll action.

### 3.2 Homepage (`/`)
1. **Hero Section:**
   - **Narrative Left:** Staggered word reveal with Motion. Magnetic primary CTA button ("Contact us") with subtle physics pull on cursor proximity. Secondary button ("See our services") with border draw hover effect.
   - **Showpiece Right:** Interactive Tangible Device Scene (Desktop Storefront Demo + Floating Real-Time Workflow Alert). Visitors can click interactive product cards, toggle cart drawer state, and trigger mock inquiry notifications.
   - **Ambient Background:** Elegant, low-opacity isometric architectural grid canvas reacting gently to cursor coordinates.
2. **Services Taxonomy Section (3 Pillars: Build, Automate, Grow):**
   - Interactive Pillar Switcher tabs with Motion `layoutId="pillarHighlight"`.
   - Dynamic cards showing deliverables, included services, and capabilities for each pillar.
   - GSAP ScrollTrigger stagger card entrance as the section enters the viewport.
3. **Prototypes Section (Demonstration Concepts):**
   - 3 Curated Bento Cards showcasing `Online Store & Inventory Updates`, `Automated Inquiry Follow-Up`, and `Design Kit for Web & Mobile`.
   - Interactive live preview tabs within each card allowing visitors to toggle between Architecture Highlights, Deliverables, and Live Schema.
4. **Process Section (5-Stage Methodology):**
   - Connected progress rail connecting Step 01 to 05.
   - Step buttons with synchronized tab panels. Smooth cross-fade and height transition using Motion AnimatePresence.
5. **CTA Section:**
   - Deep Forest `#123D32` container with subtle ambient particle shimmer. High-contrast typography and clear contact redirection.

### 3.3 Services Pages (`/services` & `/services/[slug]`)
- **Index:** Hero with quick pillar filter chips. Pillar sections with clear anchor scroll targets. Service cards with subtle hover lift and deliverable tag pills.
- **Service Detail (11 Static Pages):**
  - Hero with category badge, title, and descriptive tagline.
  - Interactive 5-step methodology timeline.
  - Deliverables checklist with custom SVG icons.
  - Related services recommendations.
  - Contextual CTA pre-linking to `/contact?service=[slug]`.

### 3.4 Work Pages (`/work` & `/work/[slug]`)
- **Index:** Demonstration projects index with clear concept notice banner. Category filter chips (`Store & Inventory`, `Workflow Automation`, `Design System`).
- **Project Detail (3 Concept Studies):**
  - Challenge vs Solution comparison layout.
  - Architecture specifications table.
  - Technologies stack chips.
  - Concept disclaimer badge.

### 3.5 About Page (`/about`)
- Hero with studio identity.
- "No fluff, just useful tools" 2-column manifesto.
- 3 Core Principles cards with hover elevation.
- Standard project delivery benchmarks.

### 3.6 FAQ Page (`/faq`)
- Category navigation filter (Working With Us, Technology & Code, Timelines & Pricing, Support & Security).
- Physics-based smooth accordion expanding and collapsing with Motion springs (`overflow-hidden`, zero layout shift).
- Clear, readable typography.

### 3.7 Contact Page (`/contact`)
- Interactive project briefing form with:
  - Input field focus rings with Forest Green glow.
  - Service selection dropdown.
  - Budget band interactive toggle pills.
  - Client-side validation with instant inline error messages and auto-focus on error.
  - Success submission animation with celebration state and direct summary receipt.
- Direct Review sidebar with clear explanation of next steps.

### 3.8 Legal Pages (`/privacy` & `/terms`)
- Clean, readable typography layout with structural sidebar navigation.

### 3.9 Not Found (`/_not-found`)
- Custom 404 with friendly recovery links and interactive return action.

---

## 4. Verification & Target Metrics

| Metric | Target | Verification Method |
| :--- | :--- | :--- |
| **Lighthouse Performance** | **>= 95 (Goal 100)** | Headless Chrome audit |
| **Lighthouse Accessibility** | **100** | Fix touch target sizes in footer links |
| **Lighthouse Best Practices** | **100** | Strict HTTPS, zero console errors |
| **Lighthouse SEO** | **100** | Metadata API, JSON-LD, Sitemap |
| **FCP / LCP** | **< 1.2s** | Real browser timing |
| **CLS** | **0.00** | No layout shift during fonts/motion |
| **INP** | **< 100ms** | Lightweight event handlers |
| **Responsive Coverage** | **390, 768, 1024, 1440, 1920px** | Playwright multi-viewport tests |
| **Reduced Motion** | **100% compliant** | `@media (prefers-reduced-motion)` verification |
| **Typecheck & Lint** | **0 errors, 0 warnings** | `npx tsc --noEmit` & `npm run lint` |

