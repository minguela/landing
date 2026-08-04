# Landing — Migración a Frontend Layers

## Baseline

| Métrica | Estado |
|---------|--------|
| Node | v22.22.3 |
| Nuxt | 4.4.6 |
| Vue | 3.5.34 |
| TypeScript | tsconfig presente pero sin typescript/vue-tsc instalados |
| Pinia | No |
| TanStack Query | No |
| API calls | No (sitio 100% estático) |
| Gestor paquetes | pnpm (pnpm-lock.yaml) |
| Lint | nuxt typecheck (falla por falta de deps) |
| Tests | No |
| Build | Funciona (output en .output/) |

## Arquitectura actual

```
app/
  app.vue              — layout shell
  pages/               — index, blog/index, blog/[slug], now
  components/          — 14 componentes (HeroSection, ProjectCard, etc.)
  composables/         — useAnalytics, useSiteI18n
  data/                — site.ts (tipos + datos), blog.ts (tipos + datos)
data/                  — duplicado legacy de app/data/
```

## Problemas detectados

1. Datos y tipos mezclados en `data/` — sin separación domain/infrastructure
2. `index.vue` (155 líneas) orquesta TODO: SEO, i18n, analytics, navegación
3. Carpeta `data/` duplicada (raíz + `app/data/`)
4. TypeScript no funcional (faltan devDependencies)
5. Componentes reciben props planas sin contratos tipados
6. Sin separación de capas — todo en `app/`

## Mapa de dominios

| Layer | Owner | Contenido |
|-------|-------|-----------|
| 00.core | Shared global | i18n, site config, SEO, analytics, tipos base |
| 10.portfolio | Portfolio | Projects, stack, focus, work values, hero, credibility, links |
| 20.blog | Blog | Blog posts (datos + UI) |

## Layers objetivo

```
layers/
  00.core/
    app/
      domain/        — Locale, SiteConfig, tipos base
      application/   — useToggleLocale, useSiteConfig
      infrastructure/— runtimeConfig adapter
      composables/   — useSiteI18n (migrado)
      constants/     — site defaults
  10.portfolio/
    app/
      domain/        — Project, StackGroup, WorkValue, FocusItem
      application/   — getPortfolioContent (caso de uso)
      infrastructure/— portfolioData (repositorio estático)
      components/    — HeroSection, ProjectCard, StackCloud, etc.
      composables/   — usePortfolioPage
      pages/         — index.vue (route shell)
  20.blog/
    app/
      domain/        — BlogPost
      application/   — getBlogPosts, getBlogPostBySlug
      infrastructure/— blogRepository (datos estáticos)
      components/    — blog components
      composables/   — useBlogPage, useBlogPostPage
      pages/         — blog/index.vue, blog/[slug].vue
```

## Vertical Slices

### Slice 1: Infraestructura base + 00.core
- Estado: in-progress
- Instalar TypeScript + vue-tsc
- Crear layers/00.core con domain, composables, constants
- Migrar useSiteI18n a 00.core
- Actualizar nuxt.config.ts con layers

### Slice 2: 10.portfolio
- Estado: pending
- Crear domain models
- Crear infrastructure (datos)
- Crear application (use cases)
- Migrar componentes
- Crear route shell

### Slice 3: 20.blog
- Estado: pending
- Crear domain models
- Crear infrastructure (datos)
- Crear application (use cases)
- Migrar componentes
- Crear route shells

### Slice 4: Limpieza legacy + validación final
- Estado: pending
- Eliminar app/data/, data/ legacy
- Verificar build, lint
- Actualizar app.vue

## Criterios de aceptación

- [ ] TypeScript operativo (typecheck pasa)
- [ ] Domain aislado de Vue/Nuxt
- [ ] Infrastructure contiene acceso a datos
- [ ] Application expresa casos de uso
- [ ] Pages son route shells finas
- [ ] Build funciona
- [ ] Comportamiento preservado
