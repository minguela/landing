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

## Analytics

La integración oficial de Vercel Analytics registra visitas y páginas en el panel
del proyecto. Solo acepta el dominio canónico `dminguela.es`; omite rutas fuera
del sitio público, quita query strings y fragmentos, y normaliza los slugs del
blog para no enviar valores arbitrarios. No se envían eventos personalizados.

Para excluir tus propias visitas en este navegador, ejecuta en la consola del
navegador:

```js
localStorage.setItem('vercel-analytics-opt-out', 'true')
```

Para volver a incluirlas, ejecuta
`localStorage.removeItem('vercel-analytics-opt-out')` y recarga la página.
