# Anandhu Krishna Portfolio — Design System (`DESIGN.md`)

**Direction:** Option 4 — **Tactile Craft Bento**
**Default Theme:** Light Mode (`[data-theme="light"]`), with first-class persisted toggle to Dark Mode (`[data-theme="dark"]`).

---

## 1. Visual Theme & Atmosphere

A crisp, architectural bento system modeled after anodized precision instruments and studio drafting trays. Generous matte surfaces frame asymmetric information groups through subtle **double-bezel** tray construction (`outer frame -> crisp 1px inner ring`) instead of blurry glassmorphism or glowing dark cards.

- **Density:** Balanced (`5 / 10`) — breathable white space inside asymmetric tiles (`8/4`, `6/3/3`, `7/5`).
- **Variance:** Offset Asymmetric (`7 / 10`) — mixes hero feature trays, narrow telemetry cards, interactive micro-demo panels, and two-column career strips; 3-equal bento boxes are forbidden.
- **Motion:** Measured & Tactile (`5 / 10`) — deterministic CSS transitions matching `transitions-polish` tokens, hardware-accelerated (`transform`, `opacity`), plus optional synthesized subtle audio cues (`SpatialSynth`) gated by user toggle. A small GSAP + ScrollTrigger motion layer (`js/motion.js`, see §5 *Motion Layer*) adds five signature moments; nothing else animates on scroll.

---

## 2. Tokens — Colors (Dual-Theme Semantic Contract)

All UI elements, interactive micro-demos, SVG architecture diagrams, and status messages MUST reference **CSS semantic custom properties**—never hardcoded hex values inside component styles.

### Light Mode (Default — `:root`, `[data-theme="light"]`)
| Role | Token | Value | Functional Usage |
| :--- | :--- | :--- | :--- |
| Canvas Background | `--bg` | `#ECEEF2` | Page ground, body fill, HTML `theme-color` meta sync |
| Elevated Surface | `--surface` | `#F9FAFC` | Nav pill, outer bento card body, drawer/modal panel |
| Inner Hardware Tray | `--tray` | `#E4E7EE` | Recessed sub-panels, interactive SVG/widget wells, skill pills |
| Hairline Divider | `--border-subtle` | `#D4D8E0` | 1px card frames, inner double-bezel seams, SVG connectors |
| Control Border (AA 3:1+) | `--border-control` | `#7A8396` | Interactive inputs, checkboxes, inactive tabs (`3.65:1` on surface) |
| Primary Ink | `--text` | `#12151C` | Display headings, primary titles, body strong (`17.49:1` on surface) |
| Secondary / Muted Ink | `--muted` | `#4E5666` | Body paragraphs, descriptions, mono metadata (`7.06:1` on surface) |
| Primary Brand Accent | `--accent` | `#B34B16` | Primary CTA fill (`5.34:1` with `#FFFFFF`), active links, SVG primary flow |
| Accent Accessible Ink | `--accent-ink` | `#963D10` | Accent text over tinted chips (`6.09:1` on `--accent-tint`) |
| Accent Tint Fill | `--accent-tint` | `#F7ECE6` | Hero kicker chip background, active tab highlight well |
| Inverse Button Ink | `--btn-fg` | `#FFFFFF` | Text inside `--accent` filled primary CTAs |
| Top Edge Rim Highlight | `--rim` | `rgba(255, 255, 255, 0.88)` | Subtle `inset 0 1px 0` top bevel light catch |
| Status Success | `--status-success` | `#156E3F` | Verified contact transmission, copy confirmation (`6.03:1`) |
| Status Error | `--status-error` | `#B91C1C` | Inline validation messages, network failure (`6.20:1`) |

### Dark Mode (`html[data-theme="dark"]`)
| Role | Token | Value | Functional Usage |
| :--- | :--- | :--- | :--- |
| Canvas Background | `--bg` | `#121316` | Matte anodized graphite ground, `theme-color` meta sync |
| Elevated Surface | `--surface` | `#1A1C21` | Nav pill, outer bento card body, drawer/modal panel |
| Inner Hardware Tray | `--tray` | `#131519` | Recessed widget/SVG trays, input fills, skill tokens |
| Hairline Divider | `--border-subtle` | `#2B2E36` | 1px structural seams, double-bezel inner rings |
| Control Border (AA 3:1+) | `--border-control` | `#6B7280` | Interactive input outlines, switch tracks (`3.53:1` on surface) |
| Primary Ink | `--text` | `#F0F2F5` | Headings, active titles (`15.20:1` on surface) |
| Secondary / Muted Ink | `--muted` | `#9CA3AF` | Descriptions, metadata (`6.71:1` on surface) |
| Primary Brand Accent | `--accent` | `#E87A3D` | Primary CTA fill (`6.44:1` with `#121316`), active controls, SVG primary lines |
| Accent Accessible Ink | `--accent-ink` | `#F39A68` | Accent text inside tinted badges on dark trays |
| Accent Tint Fill | `--accent-tint` | `rgba(232, 122, 61, 0.14)` | Kicker badge fill, active status pill well |
| Inverse Button Ink | `--btn-fg` | `#121316` | High-contrast graphite ink on `--accent` buttons |
| Top Edge Rim Highlight | `--rim` | `rgba(255, 255, 255, 0.06)` | Precision anodized top bevel catch (`inset 0 1px 0`) |
| Status Success | `--status-success` | `#34D399` | Contact confirmation & copied indicators (`8.87:1`) |
| Status Error | `--status-error` | `#F87171` | Form validation & error recovery banners (`6.16:1`) |

---

## 3. Tokens — Typography

Three distinct functional font voices loaded from Google Fonts with `font-display: swap`:
- **Display (`--font-display`):** `'Bricolage Grotesque', system-ui, sans-serif` — weights `600, 700, 800`. Tight tracking (`-0.03em` hero, `-0.02em` section/card titles).
- **Body & UI (`--font-sans`):** `'Manrope', system-ui, sans-serif` — weights `400, 500, 600, 700`. Relaxed reading line height (`1.6`), max line measure `62ch`.
- **Technical Mono (`--font-mono`):** `'Martian Mono', ui-monospace, monospace` — weights `400, 600`. Used strictly for coordinates, dates, stack chips, metrics (`font-variant-numeric: tabular-nums`), and micro-demo code snippets.

### Constrained Type Scale (`rem` / `px` only, never `em`)
| Role | Token | Value | Weight / Tracking |
| :--- | :--- | :--- | :--- |
| Hero H1 | `--text-hero` | `clamp(2.25rem, 4.2vw, 3.25rem)` (36–52px) | `800` / `lh 1.06` / `-0.03em` |
| Section H2 | `--text-h2` | `clamp(1.625rem, 2.5vw, 2.25rem)` (26–36px) | `700` / `lh 1.15` / `-0.025em` |
| Card Title H3 | `--text-h3` | `1.25rem` (20px) / Feature `1.5rem` (24px) | `700` / `lh 1.25` / `-0.015em` |
| Body Copy | `--text-body` | `1rem` (16px) — Lead `1.125rem` (18px) | `400–500` / `lh 1.6` |
| Input Fields (iOS Safe) | `--text-input` | `1rem` (16px minimum) | `400` / `lh 1.4` |
| Metadata / Tags | `--text-mono-sm` | `0.75rem` (12px) · Badges `0.6875rem` (11px) | `400–600` / `+0.03em` |

**Banned Faces:** `Inter`, `Roboto`, `Space Grotesk`, `Plus Jakarta Sans`, `Outfit`, `DM Sans`, `Syne`, `Fraunces`, `Playfair Display`.

---

## 4. Tokens — Spacing, Shapes & Motion

### Spacing Scale (`--space-*`)
`4px` (`--space-1`), `8px` (`--space-2`), `12px` (`--space-3`), `16px` (`--space-4`), `24px` (`--space-6`), `32px` (`--space-8`), `48px` (`--space-12`), `64px` (`--space-16`), `96px` (`--space-24`). No intermediate off-scale padding values.

### Corner Radii & Hardware Double-Bezel Shapes
- `--radius-outer`: `18px` (Outer bento tile shell, mobile menu tray, modal dialog)
- `--radius-inner`: `12px` (Inner nested bezel panel, portrait frame, SVG well)
- `--radius-control`: `10px` (Primary/secondary CTA buttons, form inputs)
- `--radius-chip`: `6px` (Skill tokens, interactive micro-demo tabs, stack tags)
- `--radius-pill`: `999px` (Detached top navigation island, EN/FR/Theme/Sound pill toggles)
- **Shadow Scale (Background-Tinted, No Neon Blur):**
  - `--shadow-nav`: `0 8px 24px rgba(18, 21, 28, 0.06)` (Dark: `0 10px 28px rgba(0, 0, 0, 0.35)`)
  - `--shadow-card`: `0 2px 6px rgba(18, 21, 28, 0.04)` (Dark: `none`)

### Motion Tokens (`transitions-polish`)
- `--duration-micro`: `80ms` (Tooltip / audio tone debounce)
- `--duration-quick`: `150ms` (Modal/drawer close, text swap, copy-state feedback)
- `--duration-fast`: `250ms` (Modal/drawer open, tab transition, button hover lift)
- `--duration-medium`: `350ms` (Theme attribute color transition, mobile drawer settle)
- `--ease-smooth-out`: `cubic-bezier(0.22, 1, 0.36, 1)`
- **Press Feedback:** `.btn:active { transform: scale(0.97); transition-duration: 100ms; }`
- **Reduced Motion:** Under `@media (prefers-reduced-motion: reduce)`, all non-essential transitions and reveal offsets collapse to `0ms` / `none`.

---

## 5. Components & Interaction States

- **Floating Pill Navigation (`header.nav-pill`):** Centered max-width `1240px` shell with wordmark (`Anandhu Krishna`), 5 anchor links (`About`, `Experience`, `Projects`, `Skills`, `Contact`), `EN/FR` switcher (`#lang-switch`), Theme toggle (`#dark-mode-toggle`), and Web Audio toggle (`#sound-toggle`). Below `768px`, links collapse into an accessible toggleable drawer (`aria-expanded`, `Escape` dismiss, `44px+` touch targets).
- **Double-Bezel Bento Tile (`.bento-tile`):** Outer shell (`padding: 8px`, `--surface`, `--border-subtle`, `--rim`) enclosing an inner container (`--radius-inner`, `padding: 24px` / `32px`, `border: 1px solid var(--border-subtle)`). On `@media (hover: hover) and (pointer: fine)` only: accent-tinted border plus a soft cursor-following spotlight (`::after` radial gradient, accent at 13%, `--spot-x/--spot-y`) — **no 3D JavaScript tilt**.
- **Buttons:**
  - **Primary (`.btn-primary`):** Solid `--accent` background, `--btn-fg` bold text, min-height `44px`, press scale `0.97`. One clear primary CTA per zone.
  - **Secondary (`.btn-secondary`):** `--tray` fill, `1px solid var(--border-subtle)`, `--text` color, min-height `44px`.
  - **Utility Pill (`.btn-util`):** Round/pill min `40px x 40px` (`44px` hit area on mobile), explicit `aria-label` + text/glyph indicator.
- **Interactive Micro-Demos (Projects 1 & 2):**
  - *Computable Contracts Explorer:* Semantic `role="tablist"` tabs (`Liability Clause`, `Deductible`, `Exclusions`) updating the inline dual-theme SVG node map and structured JSON summary readout. Keyboard Arrow Left/Right + Click supported.
  - *MCP Server & RAG Guardrail Switch:* Accessible `role="switch"` button toggling `PII Masking` (`ON` / `OFF`) inside a realistic query/retrieval log well, translated across `EN` and `FR`.
- **Case Study Brief Modal (`Project 4` + Detail Trigger):** Accessible native `<dialog>` (or `role="dialog" aria-modal="true"`) displaying problem, pipeline SVG schematic, metrics (`-15% churn`, `+25% engagement`, `62% forecast accuracy`), and direct `#contact` jump; traps focus, closes via `Escape` / backdrop / close button, and restores focus to trigger.
- **Inline Form & Validation (`#spatial-contact-form`):** Stacked label above `16px` input (`--border-control`), validation on blur & submit (`aria-invalid="true"`, linked `aria-describedby` error hint), loading spinner + disabled double-submit lock while posting to `formsubmit.co`, offline check (`navigator.onLine`), and localized feedback banner (`#form-feedback`). Fields carry `maxlength` (name 100, email 254, subject 150, message 5000) and a hidden `_honey` spam trap.

---

## 5b. Security Baseline (static site on GitHub Pages)

- **No inline scripts or styles.** Everything that must run before first paint (GA bootstrap, theme, intro gate) lives in `js/boot.js`, loaded synchronously in `<head>`. Never add `<script>…</script>`, `onclick=`, or `style="…"` in HTML: the CSP blocks them.
- **Content-Security-Policy** is a `<meta http-equiv>` in `index.html` (Pages can't send headers). Allowed origins: `self`, `cdnjs.cloudflare.com` (GSAP), `*.googletagmanager.com` / `*.google-analytics.com` / `*.analytics.google.com` (GA4), `fonts.googleapis.com` / `fonts.gstatic.com`, and `formsubmit.co` (form). Adding a new third-party resource means adding its origin to the matching directive.
- **Subresource Integrity:** CDN scripts are pinned to an exact version with `integrity` (cdnjs-published SHA-512) and `crossorigin="anonymous"`. Changing the version means updating the hash.
- **Links:** every `target="_blank"` link has `rel="noopener noreferrer"`.
- **DOM writes:** only fixed SVG icon constants go through `innerHTML`; translated copy is set with `textContent` (plus the `<strong>`-only parser). Never pipe user input or server responses into HTML.

- **Motion Layer (`js/motion.js`, GSAP 3.12.5 + ScrollTrigger from cdnjs, `defer`):**
  - *First-visit intro:* `--bg` cover, name rises, accent hairline draws, cover lifts and hero tiles settle (~1.3s). Once per browser session (`sessionStorage.akr_intro_seen`); skipped for deep links (`#hash`) and reduced motion. Gated before first paint by `html.intro-pending` with a 4s failsafe.
  - *Hero count-up:* `-15%` / `+25%` count from 0 once on screen (after the intro). Final value in an `.sr-only` span; animated digits are `aria-hidden`.
  - *About word reveal:* `.narrative-lead` words scrub from 18% to full opacity with scroll; re-split after EN/FR switches.
  - *Pinned story ("How I ship LLM systems"):* Serve / Retrieve / Verify card pins under the nav for 160% of a viewport with a progress ring. Pins only when the card fits the viewport (min-height 560px); otherwise all steps show statically.
  - *Tile spotlight:* see Double-Bezel Bento Tile.
  - **Reduced motion / no JS:** all five fall back to the static layout (full text, final numbers, all steps visible, no cover).

---

## 6. Layout & Responsive Grid

- **Container:** `--container-max` = `1240px`, `margin: 0 auto`, inline padding `clamp(16px, 4vw, 40px)`. At `>= 1600px` the grid fills the screen: `--container-max: 2400px`, padding `clamp(32px, 2.5vw, 64px)` (48px at 1920, 64px at 2560), and the hero portrait switches from `3:4` to a viewport-capped height (`clamp(420px, 100svh - nav - 160px, 760px)`, cropped with `object-fit: cover`) so the hero stays within the first screen. Paragraphs keep their `58–62ch` measure at every width.
- **Full-bleed bands (`.band`):** a section's background runs edge to edge (`::before`, `inset-inline: calc(50% - 50vw)`, clipped by `html { overflow-x: clip }`) while its content stays in the container. Hero = `--band-cool` (runs up behind the nav), "How I ship" story = `--band-warm`, footer = `--surface`. Band tokens: light `#DCE0E8` / `#F2E3D8`, dark `#0C0D10` / `#1D1916`. Use bands sparingly; no more than three per page.
- **Desktop Grid Composition (`>= 1024px`):**
  - Hero Row 1: `8fr / 4fr` (Headline + CTAs / Optimized Portrait `images/about.jpg`)
  - Hero/About Summary Row 2: `6fr / 3fr / 3fr` (Inference Runtime / 6D Impact Metric / Paris Coordinates & Links)
  - About Narrative & Specs: `7fr / 5fr` (Bio narrative / `2x2` Spec Tiles)
  - Experience & Education: Stacked full-width hardware strips featuring crisp dual-theme organization marks (`Ipsos`, `AXA`, `6D`, `EPITA`) and `2-col` scannable responsibility grids.
  - Projects Grid: Row A (`7fr / 5fr` — Computable Contracts + MCP RAG), Row B (`5fr / 7fr` — Zero-Shot LLM + Predictive Churn Engine).
  - Skills Grid: Asymmetric `2x2` (`LLMs & Deep Learning`, `MLOps & Engineering`, `Graph & Data`, `Cloud & Infrastructure`).
  - Contact Grid: `5fr / 7fr` (Direct Copy Email, Phone, Location / Accessible Form).
- **Tablet (`768px – 1023px`):** Two-column symmetrical collapses (`1fr 1fr`, hero portrait stacks cleanly).
- **Mobile (`< 768px`):** Strict `1fr` single-column collapse; zero horizontal overflow (`overflow-x: clip`), `viewport-fit=cover`, `env(safe-area-inset-*)` padding, all interactive hit targets `>= 44px`.

---

## 7. Anti-Patterns (Strictly Forbidden)

1. **Zero AI Portfolio Clichés:** No `"Hi, I'm..."`, no `"Zero Syntax Errors"`, no `"Initiate Transmission"`, no fake `[LATENCY: ~12ms]`, no `01 // LABEL` eyebrow syntax, no pulsing availability dots, no gradient rainbow header text.
2. **Zero Pure Black / Pure Washout:** Never `#000000` canvas or un-tinted `#FFFFFF` on full-bleed page background.
3. **Zero Heavy Ambient FX:** No mouse-following blurred gradient orbs (`blur(110px)`), no particle `<canvas>`, no pixel grid overlays, no JS 3D tilt or magnetic element drift, no custom replacement mouse cursors.
4. **Zero Hardcoded Mode Locks:** No dark-backed `.jpg` diagrams or neon-glow SVGs in projects or badges; all vector diagrams inherit semantic CSS tokens.
5. **Zero Unreachable Navigation / Hover Traps:** Never hide nav links on mobile without a menu button; never hide essential info behind `:hover` without tap/keyboard focus equivalents.
