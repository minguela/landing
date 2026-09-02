# Editorial Portfolio Redesign

## Purpose

Redesign `dminguela.es` so it convinces two audiences at once:

- hiring teams looking for a senior frontend/product engineer;
- clients looking for someone who can turn a complex workflow into a useful product.

The portfolio must feel authored, specific and credible. It must not resemble a generic dark AI/SaaS template.

## Positioning

The central idea is: **David builds useful systems for real decisions, not demo interfaces.**

The page should prove breadth without presenting David as a generalist with no point of view. Frontend engineering remains the core, while product thinking, AI workflows and infrastructure show the depth behind delivery.

## Visual direction

The design uses an editorial technical-dossier language:

- warm off-white paper rather than a full dark canvas;
- near-black ink, cobalt blue and safety orange accents;
- oversized, tightly composed typography with a restrained serif italic accent;
- visible rules, indexes, coordinates and annotations instead of glass cards;
- asymmetric layouts inspired by printed project sheets and engineering notebooks;
- purposeful motion limited to the project ticker, hover states and small status indicators;
- no stock illustration, generated artwork, glassmorphism or decorative gradient blobs.

Dark surfaces remain available only inside project artefacts where they clarify a product or infrastructure view.

## Content architecture

### Header

A compact masthead contains the DM wordmark, role, locale switch and direct contact action. Navigation points to Work, Approach, Stack and Notes.

### Hero

The hero leads with an authored statement rather than the generic title “Senior Frontend Developer”. It states what David builds and for whom, while retaining the senior frontend title as supporting evidence.

The right-hand side is a “build index”: a typographic list of the selected systems, their domain and current state. This makes the breadth visible above the fold without another dashboard mockup.

### Credibility rail

Replace unverified numeric metrics with four defensible capability signals: product systems, frontend architecture, AI workflows and owned infrastructure.

### Selected work

Use six real systems:

1. **Roam** — featured case; a travel operations workspace with itinerary, map, collaboration and export workflows.
2. **Cesta Carrefour** — a shopping-list-to-reviewable-cart system with a Chromium extension and explicit human confirmation.
3. **Menu Planner** — nutrition planning with OCR, AI workflows and resilient fallbacks.
4. **Car Finder** — a local-first evidence and comparison workspace for vehicle decisions.
5. **NAS Gateway** — a private file workspace over a real filesystem with stable metadata and activity history.
6. **Renovaciones** — cross-platform renewal and subscription management.

Roam gets a full-width case sheet. The remaining projects appear as a varied editorial grid rather than repeated cards. Each item shows the problem, the system response and concrete proof points. Links appear only when a known public destination exists; private or local systems are labelled honestly.

### Approach

Present four operating principles: reduce ambiguity, design the system boundary, ship the whole workflow, and own operations. Avoid generic claims such as “clean code” or “passionate developer”.

### Stack

Show the stack as a compact working toolkit grouped by delivery responsibility, not as a logo cloud.

### Build notes

Replace the fake live terminal and simulated revenue/visitor metrics with an honest field-notes section that points to `/now` and `/blog`. Notes describe current technical themes without claiming real-time telemetry.

### Contact

End with a direct two-audience invitation: joining a product team or helping turn a difficult workflow into software.

## Credibility rules

- Remove the fabricated “Wall of Love” from the home page.
- Remove all simulated live stats and any claim that generated values are real-time.
- Do not invent customer names, revenue, traffic, user counts or production status.
- Label private, local, preview and public work accurately.
- Project copy must be available in both English and Spanish; switching locale must not leave English project descriptions on the Spanish page.

## Architecture

Keep the existing Nuxt Layers boundary:

- `domain/portfolio.ts` owns presentation-independent portfolio types;
- `infrastructure/portfolio-data.ts` owns bilingual static content;
- `presentation/portfolio-display.ts` owns small deterministic display decisions;
- the page composes focused Vue components;
- global CSS owns the visual system and motion preferences.

No new runtime dependency is required. The design uses the installed Inter and JetBrains Mono fonts plus a system serif accent.

## Responsive and accessibility requirements

- The hero and project sheets collapse into a clear single-column reading order below the large breakpoint.
- All project links and actions remain keyboard accessible with visible focus.
- Decorative artefacts are hidden from assistive technology.
- Contrast remains AA-compatible for body copy and actions.
- Motion respects `prefers-reduced-motion`.
- No horizontal overflow at 375 px.

## Verification

- Add a regression test proving Spanish content localizes project narratives and action labels.
- Run the presentation tests, Nuxt typecheck and production build.
- Inspect the complete page at desktop and mobile widths.
- Check browser console output and core links.
