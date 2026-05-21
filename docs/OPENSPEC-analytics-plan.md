# OpenSpec — Analytics plan for dminguela.es

Status: draft
Owner: David Minguela
Scope: landing (Nuxt)
Last update: 2026-05-21

## 1) Objective
Capture who enters, from where, and what they click, with privacy-aware analytics and event tracking that is useful for product decisions.

## 2) Success criteria
- Pageviews by day/week/month available in a single dashboard.
- Acquisition sources visible (direct, search, social, referral, campaign UTM).
- Clicks measurable for:
  - menu-planner.dminguela.es
  - renovaciones.dminguela.es
  - GitHub
  - LinkedIn
  - Email
  - CV PDF download
- Language switch usage measurable (EN -> ES, ES -> EN).
- Scroll depth and section reach measurable.
- Data visible without code changes after deployment.

## 3) Recommended architecture
Use a two-layer setup:

A) Privacy-first traffic analytics
- Vercel Web Analytics (quick, zero-maintenance) OR Plausible (self-hosted/SaaS).
- Purpose: visits, unique visitors, top pages, referrers, countries/devices.

B) Product event analytics
- PostHog (cloud or self-hosted) for click events and funnels.
- Purpose: event-level behavior (which CTA, which section, CV download, locale switch).

Rationale:
- Layer A is simple and robust for traffic overview.
- Layer B gives actionable product behavior data.

## 4) Event model (OpenSpec)
Event naming convention: snake_case, stable, explicit.

Core events:
- page_view
  - props: page, locale, referrer_domain, utm_source, utm_medium, utm_campaign
- cta_click
  - props: cta_id, cta_label, location, locale, destination, external
- app_link_click
  - props: app_id (menu_planner | renovaciones), location, locale, destination
- profile_link_click
  - props: link_type (github | linkedin | email), location, locale
- cv_download_click
  - props: location, locale, file ('/cv/david-minguela-cv.pdf')
- locale_switch
  - props: from_locale, to_locale, location
- section_view
  - props: section_id, locale, scroll_percent

Optional (phase 2):
- outbound_click_all
  - props: url, host, location, locale

## 5) Tracking map
Header:
- language toggle -> locale_switch
- contact button -> profile_link_click(email)

Hero:
- view projects -> cta_click(hero_projects)
- github -> profile_link_click(github)
- linkedin -> profile_link_click(linkedin)
- download cv -> cv_download_click

Projects cards:
- Menu Planner card button -> app_link_click(menu_planner)
- Renovaciones card button -> app_link_click(renovaciones)

Apps & links grid:
- menu-planner -> app_link_click(menu_planner)
- renovaciones -> app_link_click(renovaciones)
- GitHub/LinkedIn/Email/CV -> corresponding events

## 6) Privacy & compliance
- Add cookie/privacy note only if required by selected tooling and geo scope.
- Anonymize IP where possible.
- Avoid sending PII in event props.
- Do not track full email addresses or query strings with sensitive data.

## 7) Technical implementation plan (bite-sized)
1. Add analytics providers
   - Install Vercel Analytics package and/or PostHog Nuxt SDK.
2. Add runtime config
   - `NUXT_PUBLIC_POSTHOG_KEY`
   - `NUXT_PUBLIC_POSTHOG_HOST`
3. Create tracking composable
   - `app/composables/useAnalytics.ts`
   - methods: trackCtaClick, trackAppClick, trackLocaleSwitch, trackCvDownload.
4. Wire events in components
   - SiteHeader, HeroSection, ProjectCard, LinksGrid.
5. Add section visibility tracking
   - IntersectionObserver in `app/pages/index.vue` or dedicated composable.
6. Validate in dev
   - open network + PostHog live events.
7. Deploy and verify in prod
   - confirm events in dashboard from real clicks.

## 8) Dashboard layout
Dashboard 1: Traffic overview
- Visitors, pageviews, referrers, devices, countries, top entry pages.

Dashboard 2: Product engagement
- Top CTA clicks.
- Click-through by locale (EN vs ES).
- CV download count.
- Outbound clicks by destination.

Dashboard 3: Funnel
- page_view -> cta_click(hero_projects) -> app_link_click(menu_planner|renovaciones)

## 9) Rollout phases
Phase 1 (fast):
- Vercel Analytics + basic CTA click events + CV download + locale switch.

Phase 2:
- Section view tracking + funnel dashboards + UTM breakdown.

Phase 3:
- A/B testing for hero CTA microcopy (if needed).

## 10) Acceptance checklist
- [ ] Events received in production dashboard.
- [ ] CV download event fires correctly.
- [ ] Locale switch events show both directions.
- [ ] App click events mapped to only two public apps.
- [ ] No PII in captured properties.
- [ ] README updated with analytics env vars and verification steps.
