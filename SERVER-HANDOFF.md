# SERVER-HANDOFF

## Qué es este proyecto

`landing` es la landing/portfolio personal de David Minguela para `dminguela.es`.
Sirve como:

- portfolio profesional
- hub central de apps
- presentación técnica
- acceso a proyectos y subdominios

El diseño está hecho con enfoque premium, oscuro, minimalista y técnico. La landing muestra tanto perfil frontend/product como contexto real de infraestructura y automatización.

## Ruta esperada en server

Ruta objetivo prevista:

```bash
~/apps/landing
```

Si se sincroniza desde el Mac local, el destino esperado es:

```bash
homeserver:~/apps/landing/
```

## Stack usado

- Nuxt 4
- Vue 3
- TypeScript
- Tailwind CSS v4
- pnpm

## Instalación en server

```bash
cd ~/apps/landing
pnpm install
```

Si hace falta definir variables públicas para enlaces:

```bash
cp .env.example .env
# editar si se quiere ajustar dominio, GitHub, LinkedIn o email
```

## Build

```bash
cd ~/apps/landing
pnpm build
```

## Cómo servirlo luego

### Opción recomendada: Vercel

- conectar el repo GitHub
- framework detectado: Nuxt
- comando de build: `pnpm build`
- output gestionado por Vercel automáticamente
- ideal para `dminguela.es`

### Opción servidor con PM2

Para servir la app SSR desde `.output/server/index.mjs`:

```bash
cd ~/apps/landing
pnpm install
pnpm build
pm2 start .output/server/index.mjs --name landing
pm2 save
```

### Opción con Docker

Se puede dockerizar si se quiere un contenedor dedicado para la app Nuxt. La base sería:

1. `pnpm install`
2. `pnpm build`
3. servir `.output/server/index.mjs`
4. exponer un puerto interno y publicarlo detrás de Traefik

## Relación con otros proyectos

### food-menu-creator / menu-planner

Esta landing actúa como puerta de entrada a `menu-planner.dminguela.es`, donde vive la app de planificación nutricional con OCR, IA, Supabase, Vercel y fallback OCR self-hosted.

### renovaciones-app

La landing enlaza y contextualiza `renovaciones.dminguela.es` como app de gestión/planificación de reformas o renovaciones.

### homelab / OCR stack

También presenta el stack de homelab relacionado con OCR y automatización:

- Docker
- Traefik
- Cloudflare Tunnel
- n8n
- Watchtower
- backups
- monitorización

## Comandos útiles

```bash
pnpm dev
pnpm build
pnpm preview
pnpm generate
```

## Notas rápidas

- No hay backend ni base de datos en este proyecto.
- El contenido es data-driven y vive principalmente en `app/data/site.ts`.
- Si se quiere ajustar branding/enlaces públicos, revisar `.env.example` y `nuxt.config.ts`.
- El objetivo principal de despliegue es Vercel, pero el proyecto también puede vivir en servidor propio.
