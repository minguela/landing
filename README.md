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
- `NUXT_CONTENT_SOURCE` (`local` by default; use `neon` only after database
  migration, import, and read-back have been verified)
- `DATABASE_URL` (server-only Neon connection string; never expose it with a
  `NUXT_PUBLIC_` prefix)
- `NUXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` (only when enabling
  the admin sign-in; without them public pages stay available and admin returns
  503)
- `NUXT_CONTENT_ADMIN_USER_IDS` (comma-separated Clerk user IDs; never emails)
- `NUXT_CLERK_AUTHORIZED_PARTIES` (comma-separated exact site and preview origins)

Si `NUXT_PUBLIC_LINKEDIN_URL` no está definida, la landing mostrará una variante configurable.

### Portfolio y blog en Neon

Las páginas públicas siguen usando contenido local mientras
`NUXT_CONTENT_SOURCE=local`. La base solo se activa al seleccionar
`NUXT_CONTENT_SOURCE=neon`; si falta `DATABASE_URL` o falla Neon, el servidor
responde con error y no sirve contenido local obsoleto como si fuera el dato
publicado.

Con una URL de conexión de la rama Neon correcta y después de hacer copia de
seguridad, se puede ejecutar:

```bash
pnpm content-store migrate --apply
pnpm content-store import --apply
pnpm content-store verify
```

`migrate` crea tablas adicionales dentro de una transacción. `import` es
idempotente, conserva los slugs actuales y no elimina filas que no reconozca.
`verify` comprueba recuentos mínimos y lee de vuelta las traducciones y
proyectos importados. Estos comandos requieren una rama Neon verificada; no se
han ejecutado contra ningún entorno.

### Administración

`/admin` permite listar/guardar proyectos por idioma y artículos bilingües.
Los handlers validan cada mutación, exigen sesión Clerk más un ID propietario
de `NUXT_CONTENT_ADMIN_USER_IDS`, y sólo escriben cuando el origen de contenido
es Neon. Despublicar conserva las filas. Sin Clerk o allowlist la API permanece
bloqueada; antes de activar el entorno se deben verificar Google, el propietario
real y el CRUD/read-back en una preview con su propia rama Neon.

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
del proyecto. Solo acepta el dominio canónico `www.dminguela.es`; omite rutas fuera
del sitio público, quita query strings y fragmentos, y normaliza los slugs del
blog para no enviar valores arbitrarios. No se envían eventos personalizados.

Para excluir tus propias visitas en este navegador, ejecuta en la consola del
navegador:

```js
localStorage.setItem('vercel-analytics-opt-out', 'true')
```

Para volver a incluirlas, ejecuta
`localStorage.removeItem('vercel-analytics-opt-out')` y recarga la página.
