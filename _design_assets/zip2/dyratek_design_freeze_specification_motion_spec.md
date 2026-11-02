# DYRATEK — DESIGN FREEZE SPECIFICATION
**Version:** 1.0 (Final Approved Design Freeze)  
**Status:** Frozen & Approved for Engineering Implementation  

---

## 1. OFFICIAL BRAND DESIGN TOKENS

The visual language is governed by strict Swiss Modernist restraint with a 75–80% dominant Pearl White surface.

### Palette Hierarchy
| Token Name | Hex Code | Role | Usage Ratio | Implementation Rules |
|---|---|---|---|---|
| **Pearl White** | `#F4F1E9` | Dominant Background | 75–80% | Sole page & container background. Eliminates harsh digital whites (`#FFFFFF` only for card surface highlights) and creamy off-whites (`#FCF9F1`). |
| **Dark Forest Green** | `#123D32` | Structural & Brand Contrast | 15–20% | Primary headings, interactive CTA fills, footer anchor, and prominent focal blocks. |
| **Accent Red** | `#C83B35` | Precision Indicator | < 5% | Live telemetry nodes, status indicators, active tabs, and brand slash geometry. Strictly restrained. |
| **Charcoal** | `#2A2A2A` | Readability & Body | Dynamic | Primary editorial body copy, metadata sub-labels, and neutral high-contrast text. |
| **Ash** | `#E5E2DA` | Hairline Grid & Borders | Dynamic | 1px hairline card borders, structural section dividers, and subtle component outlines. |

### Typography Standard
- **Display & Headings**: `Outfit` (Weights: 400 Regular, 500 Medium, 600 SemiBold, 700 Bold). Tight letter tracking (`-0.02em` to `-0.03em`).
- **Body & Editorial Copy**: `Inter` (Weights: 400 Regular, 500 Medium). Optimal line length 60–75 characters; line height `1.55`.
- **System & Technical Metadata**: `JetBrains Mono` (Weights: 400 Regular, 500 Medium). All-caps with `tracking-wider` for taxonomy tags, latency badges, and motion specifications.

---

## 2. SERVICE TAXONOMY AUDIT (14 SERVICES // 4 PILLARS)

All 14 services appear exactly once within their verified four-pillar structure:

### 01 // BUILD (4 Services)
- `01.1` **Web Development** (Websites, Web Apps, Scalable Frameworks)
- `01.2` **App Development** (iOS, Android & Cross-Platform)
- `01.3` **E-commerce Solutions** (Shopify, Custom Composable Platforms)
- `01.4` **Digital Solutions** (Custom Software, Cloud Architecture)

### 02 // INTELLIGENCE (3 Services)
- `02.1` **AI Solutions** (Autonomous Agents, Workflows & Chatbots)
- `02.2` **AI & ML** (Custom Machine Learning Models & Generative AI)
- `02.3` **Data & Analytics** (Real-Time Dashboards, BI & Data Pipelines)

### 03 // AUTOMATE (2 Services)
- `03.1` **Business Automation** (CRM Integrations, Workflow Orchestration)
- `03.2` **Email & WhatsApp Marketing** (Automated Messaging & Conversational Funnels)

### 04 // CREATE & GROW (5 Services)
- `04.1` **UI/UX Design** (Figma Libraries, Interactive Prototyping)
- `04.2` **Creative & Video** (Motion Graphics, Social Reels, Production)
- `04.3` **Digital Marketing** (Brand Positioning, Strategic Campaigns)
- `04.4` **Performance Marketing** (Paid Search/Social, Conversion Funnels)
- `04.5` **Content Strategy & Copywriting** (Technical Copywriting, Scripts)

---

## 3. CONTENT INTEGRITY & DATA GOVERNANCE

1. **Architecture Prototypes Qualification**:
   - Every demonstrated system is explicitly badged as:  
     `"Illustrative Concept — Demonstration of DYRATEK Capabilities (Not a Completed Client Project)"`
2. **Dashboard & Capability Simulation Metrics**:
   - All visual numbers, graphs, charts, and telemetry indicators are verified with explicit tags:  
     `"Non-Production Sample Data"` / `"Sample Metric"`. Zero fabricated client ROI or unverified performance claims.
3. **Contact Channel Placeholder**:
   - `hello@dyratek.com` is formally designated as:  
     `"[Client-Confirmation Placeholder: hello@dyratek.com]"`.

---

## 4. MASTER MOTION ARCHITECTURE & INTERACTION SPECIFICATION

| Component / Sequence | Trigger | Duration & Easing | Initial State | Final State | Touch & Reduced-Motion Alternative |
|---|---|---|---|---|---|
| **01. Brand Reveal (Preloader)** | DOMContentLoaded | 650ms \| `cubic-bezier(0.16, 1, 0.3, 1)` | `opacity: 0, scale: 0.96` | `opacity: 1, scale: 1` | Instant opacity reveal, zero scale delay. |
| **02. Hero Masked Headline** | +120ms post-brand | 650ms (staggered 100ms) \| `cubic-bezier(0.16, 1, 0.3, 1)` | `clip-path: polygon(0 0, 100% 0, 100% 0, 0 0)` | `clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)` | Standard clean opacity fade-in (`opacity: 0 → 1`). |
| **03. Paragraph & CTA Stagger** | +450ms post-headline | 500ms \| `ease-out` | `opacity: 0, translateY: 14px` | `opacity: 1, translateY: 0` | Instant display without translateY offset. |
| **04. Hero Geometric Ambient** | Hero entrance complete | Infinite loop (8000ms) \| `ease-in-out` | `transform: rotate(0deg) scale(1)` | `transform: rotate(1.5deg) scale(1.02)` | Static geometric visual; zero continuous GPU cycles. |
| **05. Scroll Section Reveals** | `IntersectionObserver` (0.15) | 600ms \| `cubic-bezier(0.16, 1, 0.3, 1)` | `opacity: 0, translateY: 24px` | `opacity: 1, translateY: 0` | Native scroll entrance without vertical offset. |
| **06. Progressive Text Highlighting** | Viewport threshold (0.35) | 700ms \| `ease-out` | `color: #A09D94` (Ash muted) | `color: #123D32` (Forest Green) | Rendered in solid Dark Forest Green from initial paint. |
| **07. Service Card Hover** | Pointer hover / focus | 280ms \| `cubic-bezier(0.16, 1, 0.3, 1)` | `border: #E5E2DA, translateY: 0` | `border: #123D32, translateY: -4px, arrow +4px` | Tactile touch scale feedback (`active:scale-[0.99]`). |
| **08. Process Timeline Progression** | Scroll progress | Continuous step sync | Inactive step opacity 0.4 | Active step opacity 1.0, progress indicator +25% | Distinct clean numbered step cards without scroll pinning. |
| **09. Navigation Chrome Transition** | Scroll offset > 40px | 300ms \| `ease` | `background: transparent, border: transparent` | `backdrop-blur: 16px, background: #F4F1E9/90` | Solid background with 1px hairline border. |
| **10. Diagonal Route Wipe** | Route navigation click | 420ms \| `cubic-bezier(0.77, 0, 0.175, 1)` | `clip-path: polygon(-20% 0, 0 0, -20% 100%, -40% 100%)` | Full-bleed `#123D32` diagonal wipe | Instant fade transition. |
| **11. Footer Wordmark Reveal** | Viewport entrance | 750ms \| `cubic-bezier(0.16, 1, 0.3, 1)` | `opacity: 0, scale: 0.98, translateY: 16px` | `opacity: 1, scale: 1, translateY: 0` | Static layout presentation. |

---

## 5. RESPONSIVE BREAKPOINT & ACCESSIBILITY AUDIT

- **Desktop Baseline**: 1440px / 12-column Swiss grid system.
- **Mobile Baseline**: Exactly 375px viewport width, zero horizontal overflow, 16px horizontal margins (`px-4`/`px-5`), touch targets ≥ 44×44px.
- **Accessibility & Contrast**: 
  - Dark Forest Green (`#123D32`) on Pearl White (`#F4F1E9`) passes WCAG AAA contrast (contrast ratio > 9.5:1).
  - Charcoal (`#2A2A2A`) on Pearl White (`#F4F1E9`) passes WCAG AAA contrast (contrast ratio > 10.8:1).
  - Full support for `prefers-reduced-motion: reduce`.
