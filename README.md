# landing

Landing/portfolio personal moderna de David Minguela para dminguela.es.

## Stack

- Nuxt 4
- Vue 3
- TypeScript
- Tailwind CSS v4
- pnpm

## Scripts

- `pnpm dev` → desarrollo local en http://localhost:3000
- `pnpm build` → build de producción
- `pnpm preview` → preview local del build
- `pnpm generate` → generación estática si más adelante la quieres

## Variables opcionales

Copia `env.example` a `.env` si quieres personalizar enlaces públicos sin tocar el código:

- `NUXT_PUBLIC_SITE_URL`
- `NUXT_PUBLIC_GITHUB_URL`
- `NUXT_PUBLIC_LINKEDIN_URL`
- `NUXT_PUBLIC_EMAIL`

Si `NUXT_PUBLIC_LINKEDIN_URL` no está definida, la landing mostrará una variante configurable.

## Estructura principal

- `app/pages/index.vue` → composición de la landing
- `app/components/*` → bloques UI reutilizables
- `data/site.ts` → contenido data-driven
- `app/assets/css/main.css` → tema y utilidades visuales
- `public/favicon.svg` → favicon placeholder
- `public/og-image.svg` → imagen Open Graph
- `SERVER-HANDOFF.md` → contexto para continuar el despliegue en servidor

## Desarrollo local

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm preview
```

## Deploy recomendado

Vercel es la opción principal. También queda documentado un handoff para correrlo en servidor propio con PM2 o Docker.

## Analytics (Fase 1)

Se ha activado instrumentación base con Vercel Analytics:

- Tráfico/páginas en dashboard de Vercel.
- Eventos custom para:
  - `page_view`
  - `locale_switch`
  - `cta_click` (hero)
  - `app_link_click` (Menu Planner / Renovaciones)
  - `profile_link_click` (GitHub / LinkedIn / Email)
  - `cv_download_click`

No requiere variables extra para Fase 1 (usa integración de Vercel).

## Analytics (Fase 2)

Añadido sobre Fase 1:

- `section_view` con `IntersectionObserver` para medir alcance real por secciones (`projects`, `stack`, `apps`, `focus`).
- `page_view` enriquecido con adquisición:
  - `referrer_domain`
  - `utm_source`
  - `utm_medium`
  - `utm_campaign`

Con esto ya puedes montar en Vercel Analytics:
- funnel básico: `page_view` -> `cta_click(hero_projects)` -> `app_link_click`
- cortes por idioma (`locale`) y por campaña UTM.
