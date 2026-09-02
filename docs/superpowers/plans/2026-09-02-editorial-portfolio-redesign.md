# Editorial Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the existing portfolio into a distinctive, bilingual editorial dossier of David's real product work for hiring teams and prospective clients.

**Architecture:** Preserve the Nuxt Layers content boundary and replace generic showcase blocks with focused editorial components. Portfolio data remains static and typed; deterministic locale/action presentation stays in the presentation module; Vue components consume those contracts.

**Tech Stack:** Nuxt 4, Vue 3, TypeScript, Tailwind CSS 4, Node test runner

**Spec:** `docs/superpowers/specs/2026-09-02-editorial-portfolio-redesign-design.md`

## Global Constraints

- Do not invent metrics, customers, testimonials or public availability.
- Preserve and incorporate the user's existing uncommitted portfolio-layer changes.
- Do not add a runtime dependency.
- Keep English and Spanish narratives complete.
- Respect reduced motion and a 375 px viewport.
- Do not commit or publish unless the user asks; the current checkout already contains user changes.

---

### Task 1: Bilingual project contract

**Files:**
- Modify: `layers/10.portfolio/app/domain/portfolio.ts`
- Modify: `layers/10.portfolio/app/infrastructure/portfolio-data.ts`
- Modify: `layers/10.portfolio/app/presentation/portfolio-display.ts`
- Modify: `tests/portfolio-presentation.test.mjs`

**Interfaces:**
- Produces: typed `Project`, `LocalizedText`, `ProjectAvailability` and `getProjectAction(project, locale)` contracts.
- Consumes: existing `getPortfolioContent(locale)` content repository.

- [x] **Step 1: Write a failing locale/action regression test**

Assert that Spanish project narratives are Spanish, private projects return a non-link action, and public projects return the known link.

- [x] **Step 2: Run the focused test and verify the expected failure**

Run: `npm test`

Expected: failure because projects are currently inherited from the English content object and project actions do not exist.

- [x] **Step 3: Implement the content model and six selected projects**

Add localized project fields for domain, tagline, description, challenge, response and proof points. Add accurate availability states and optional public URLs.

- [x] **Step 4: Run the focused tests**

Run: `npm test`

Expected: all presentation tests pass.

### Task 2: Editorial shell and hero

**Files:**
- Modify: `app/assets/css/main.css`
- Modify: `app/components/SiteHeader.vue`
- Modify: `app/components/HeroSection.vue`
- Modify: `app/components/CredibilityStrip.vue`

**Interfaces:**
- Consumes: `PortfolioContent.copy`, `PortfolioContent.projects`, `PortfolioContent.credibility`.
- Produces: masthead, positioning hero, project index and capability rail.

- [x] **Step 1: Replace the dark glass token system with paper/ink editorial tokens**

Define the colour, type, border, focus and layout primitives in global CSS. Retain accessible button and link states.

- [x] **Step 2: Recompose header and hero around the new positioning**

Render the authored headline, supporting senior role, two CTAs and above-the-fold build index. Keep locale and analytics interactions.

- [x] **Step 3: Convert the credibility strip into non-numeric capability signals**

Render four capability statements without unsupported counts.

- [x] **Step 4: Run typecheck**

Run: `npm run typecheck`

Expected: exit code 0.

### Task 3: Selected-work case sheets

**Files:**
- Modify: `app/components/ProjectCard.vue`
- Modify: `app/components/ProjectPreview.vue`
- Modify: `layers/10.portfolio/app/pages/index.vue`
- Modify: `app/assets/css/main.css`

**Interfaces:**
- Consumes: localized `Project` records and `getProjectAction`.
- Produces: one featured case sheet and five responsive editorial project sheets.

- [x] **Step 1: Implement the featured and compact project compositions**

Use index, domain, problem/response copy, proof points and honest availability actions. Vary composition through data-driven accent and artefact type, not duplicated markup.

- [x] **Step 2: Replace generic preview skeletons with project-specific artefacts**

Create CSS/SVG-like diagrams for map/itinerary, cart handoff, OCR flow, evidence comparison, filesystem and renewal timeline.

- [x] **Step 3: Verify keyboard semantics and mobile reading order in source**

Ensure real links are anchors, private actions are labels, decorative previews are `aria-hidden`, and text precedes non-essential decoration on mobile.

- [x] **Step 4: Run tests and typecheck**

Run: `npm test && npm run typecheck`

Expected: both commands exit 0.

### Task 4: Approach, toolkit and honest build notes

**Files:**
- Modify: `app/components/WorkValuePanel.vue`
- Modify: `app/components/StackCloud.vue`
- Modify: `app/components/FocusPanel.vue`
- Modify: `app/components/LiveTerminal.vue`
- Modify: `layers/10.portfolio/app/pages/index.vue`
- Modify: `app/assets/css/main.css`

**Interfaces:**
- Consumes: work values, stack groups, current focus and localized section copy.
- Produces: approach grid, toolkit ledger and field-notes section.

- [x] **Step 1: Restyle principles and stack as editorial ledgers**

Use rules, numbering and concise copy instead of glass cards or a logo cloud.

- [x] **Step 2: Replace simulated terminal values with static field notes**

Remove timers, random numbers, fake revenue, fake visitors and real-time claims. Link to `/now` and `/blog`.

- [x] **Step 3: Remove the fabricated testimonial section from the home composition**

Do not render `WallOfLove` on the landing.

- [x] **Step 4: Run tests and typecheck**

Run: `npm test && npm run typecheck`

Expected: both commands exit 0.

### Task 5: Contact, responsive polish and production verification

**Files:**
- Modify: `app/components/FinalCta.vue`
- Modify: `app/components/SiteFooter.vue`
- Modify: `app/assets/css/main.css`
- Modify: `layers/10.portfolio/app/pages/index.vue`

**Interfaces:**
- Consumes: final CTA and footer copy, public profile URLs.
- Produces: dual-audience contact close and compact footer.

- [x] **Step 1: Recompose the contact close and footer**

Address both product-team and client contexts, preserve email/CV analytics and expose Now/Blog/profile links.

- [x] **Step 2: Run automated gates**

Run sequentially: `npm test`, `npm run typecheck`, `npm run build`.

Expected: every command exits 0 without application errors.

- [x] **Step 3: Inspect desktop and mobile in the local app**

Review the complete page at a desktop viewport and 375 px width. Confirm no horizontal overflow, readable hierarchy, working locale switch, project links and reduced-motion-safe animation.

- [x] **Step 4: Inspect console output and final diff**

Confirm no browser errors and that only landing files, tests and the two design documents changed.
