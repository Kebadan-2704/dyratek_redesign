---
name: Swiss Modern Minimal
colors:
  surface: '#fcf9f1'
  surface-dim: '#dcdad2'
  surface-bright: '#fcf9f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3eb'
  surface-container: '#f1eee6'
  surface-container-high: '#ebe8e0'
  surface-container-highest: '#e5e2da'
  on-surface: '#1c1c17'
  on-surface-variant: '#414845'
  inverse-surface: '#31312b'
  inverse-on-surface: '#f4f1e9'
  outline: '#717975'
  outline-variant: '#c0c8c4'
  surface-tint: '#3d665a'
  primary: '#00261e'
  on-primary: '#ffffff'
  primary-container: '#123d32'
  on-primary-container: '#7da899'
  inverse-primary: '#a4d0c0'
  secondary: '#b22b27'
  on-secondary: '#ffffff'
  secondary-container: '#fe6258'
  on-secondary-container: '#650006'
  tertiary: '#381610'
  on-tertiary: '#ffffff'
  tertiary-container: '#522b24'
  on-tertiary-container: '#c99187'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bfecdc'
  primary-fixed-dim: '#a4d0c0'
  on-primary-fixed: '#002019'
  on-primary-fixed-variant: '#254e42'
  secondary-fixed: '#ffdad6'
  secondary-fixed-dim: '#ffb4ac'
  on-secondary-fixed: '#410002'
  on-secondary-fixed-variant: '#8f0e13'
  tertiary-fixed: '#ffdad4'
  tertiary-fixed-dim: '#f4b8ad'
  on-tertiary-fixed: '#32120c'
  on-tertiary-fixed-variant: '#663b34'
  background: '#fcf9f1'
  on-background: '#1c1c17'
  surface-variant: '#e5e2da'
typography:
  display-xl:
    fontFamily: Outfit
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Outfit
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 46px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 54px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.015em
  title-md:
    fontFamily: Outfit
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
spacing:
  gutter: 1.5rem
  gutter-desktop: 2.5rem
  margin: 1.25rem
  margin-desktop: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

This design system is anchored in the foundational tenets of International Typographic Style (Swiss Modernism) synthesized with high-end corporate minimalism. Built for discerning technological, industrial, and architectural enterprises, it communicates intellectual authority, absolute clarity, and architectural precision.

The visual mood rejects tech ephemera—eschewing neon glows, gratuitous gradients, heavy drop shadows, and visual bloat. Instead, it relies on structured whitespace, mathematical alignment, high-contrast typography, and purposeful line-work. The aesthetic evokes the permanence and tactile quality of archival paper combined with rigorous digital execution.

## Colors

The palette operates under a strict distribution hierarchy:
- **Pearl White (`#F4F1E9`)**: Dominates 75% to 80% of the canvas. It provides a tactile, archival warmth far superior to sterile `#FFFFFF`, serving as the primary surface and negative space canvas.
- **Deep Forest Green (`#123D32`)**: Occupies 15% to 20% of the interface. Employed for structural line rules, primary display headlines, high-contrast brand geometry, active states, and dominant interactive elements.
- **Accent Red (`#C83B35`)**: Reserved strictly for under 5% visual footprint. Used exclusively for focal indicators, status pips, active badge counters, precision rules, and critical alerts. It must never be applied to large surface areas.
- **Structural Lines and Borders**: Rendered with `#123D32` at reduced opacity (12% to 20%) to construct architectural hairline dividers that ground the layout without visual noise.

## Typography

The typographic pairing balances modernist geometric expression with utilitarian discipline:
- **Outfit** carries structural headlines, title anchors, and numerical callouts. Set with negative tracking to convey density and architectural form.
- **Inter** handles continuous narrative text, user interface controls, metadata labels, and tabular information. It ensures flawless readability across all viewport scales.
- **Uppercase Labels**: Category identifiers, micro-tags, and section index indicators leverage `label-md` or `label-sm` in full uppercase with expanded letter-spacing (`0.06em` to `0.08em`) to mirror Swiss editorial page numbering.

## Layout & Spacing

Layouts follow a strict, visible 12-column grid system inspired by vintage Swiss posters and contemporary architectural monographs:
- **Grid Structure**: On desktop viewports (≥1024px), content resides in a 12-column framework bounded by `margin-desktop` (4rem) and separated by `gutter-desktop` (2.5rem). On mobile viewports (&lt;768px), this collapses to a 4-column framework with 1.25rem margins and 1rem gutters.
- **Rhythm & Cadence**: Structural components snap to vertical rhythm increments defined by `space-xl` through `space-3xl`. Large sections breathe through intentional, uninterrupted zones of `#F4F1E9`.
- **Dividing Framework**: Columns and horizontal modules are frequently separated by single-pixel hairline rules (`#123D32` at 15% opacity), reinforcing the modular grid visibly across the surface.

## Elevation & Depth

This design system avoids simulated Z-axis elevation, soft dropshadows, and skeuomorphic gradients. Depth is established purely through planar construction, structural rules, and tonal layering:
- **Planar Hierarchy**: Components sit directly on `#F4F1E9`. Secondary elevated modules or highlighted sections use pure white (`#FFFFFF`) or inverted Deep Forest Green (`#123D32`).
- **Hairline Boundaries**: Modals, dropdowns, and flyout surfaces differentiate themselves via a crisp 1px solid perimeter border (`rgba(18, 61, 50, 0.18)`), eliminating the requirement for diffuse drop shadows.
- **Micro-Shadows**: In complex overlay contexts (such as pinned navigation or critical dialogs), an ultra-subtle, non-diffused tectonic shadow is permitted: `0 8px 0px rgba(18, 61, 50, 0.04)`.

## Shapes

The geometric identity is completely sharp (`roundedness: 0`), reflecting pure industrial and architectural precision:
- **Perimeters**: All interactive surfaces, buttons, text inputs, card containers, and dialogs utilize strict 0px border radii.
- **Exceptions**: The only non-rectangular elements are circular status indicators (e.g., a 6px Accent Red dot indicating an active node or system status) and specific brand iconography.

## Components

### Buttons
- **Primary**: Background `#123D32`, text `#F4F1E9`, 0px border radius, uppercase `Inter` 12px weight 600 with `0.06em` tracking. Padding: 0.875rem vertical, 1.75rem horizontal. Hover state transitions background to `#1b4f42`.
- **Secondary / Outline**: Transparent background, 1px solid `#123D32`, text `#123D32`. Hover fills with `#123D32` and switches text to `#F4F1E9`.
- **Accent Indicator Button**: Primary style with a 4px Accent Red square or dot embedded directly beside the label.

### Cards & Grid Containers
- Built on `#F4F1E9` or pure `#FFFFFF`, bounded by 1px solid `#123D32` at 15% opacity.
- Internal padding calibrated strictly to `space-lg` (1.5rem) or `space-xl` (2.5rem).
- Optional metadata index (e.g., `01 /`, `02 /`) positioned in the top-left in `label-sm` with Deep Forest Green at 50% opacity.

### Form Inputs
- Flat container with bottom-only 1.5px solid rule in `#123D32` (or subtle 1px complete box), background transparent against `#F4F1E9`.
- Text input in `Inter` 15px `#123D32`. Floating or top-aligned labels in `Inter` 11px uppercase.
- Focus state thickens border rule to 2px `#123D32`. Error states trigger an Accent Red (`#C83B35`) 1.5px rule with red inline micro-text.

### Checkboxes & Radio Buttons
- Checkboxes: 16px × 16px square, 1.5px border `#123D32`, 0px radius. Checked state fills solid `#123D32` with a sharp white checkmark.
- Radio buttons: 16px × 16px square (retaining sharp modernism) or unrounded enclosure holding an inner solid `#123D32` 6px square marker when selected.

### Badges & Status Chips
- Height 22px, padding 0 8px, 0px border-radius.
- Border 1px solid `rgba(18, 61, 50, 0.2)`. Background transparent.
- Status indicator: Features a distinct 5px solid Accent Red (`#C83B35`) square preceding the uppercase label text.

### Dividers & Grid Rules
- Continuous horizontal and vertical 1px hairpins with `background-color: rgba(18, 61, 50, 0.15)`. Used abundantly to establish the signature Swiss matrix rhythm across large viewports.