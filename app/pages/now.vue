<script setup lang="ts">
import { siteContent } from '~~/data/site'
import type { FocusItem } from '~~/data/site'

const config = useRuntimeConfig()
const { locale, localeMeta, toggleLocale } = useSiteI18n()
const analytics = useAnalytics()

const siteUrl = config.public.siteUrl
const githubUrl = config.public.githubUrl
const linkedinUrl = config.public.linkedinUrl
const email = config.public.email
const emailHref = `mailto:${email}`
const cvHref = '/cv/david-minguela-cv.pdf'

const content = computed(() => siteContent[locale.value])

const nowProjectItems = computed(() => [
  {
    emoji: '🧠',
    title: locale.value === 'en' ? 'AI-assisted interface design' : 'Diseño de interfaces asistido por IA',
    description: locale.value === 'en'
      ? 'Exploring where AI meaningfully improves product UX without adding noise — working on smart input systems, contextual suggestions and adaptive layouts that respect user intent.'
      : 'Explorando dónde la IA mejora de forma real la UX de producto sin añadir ruido — trabajando en sistemas de entrada inteligente, sugerencias contextuales y layouts adaptativos que respetan la intención del usuario.',
    status: 'active',
    statusLabel: locale.value === 'en' ? 'Active' : 'Activo',
  },
  {
    emoji: '📄',
    title: locale.value === 'en' ? 'OCR document pipelines v2' : 'Pipelines OCR documentales v2',
    description: locale.value === 'en'
      ? 'Rebuilding the OCR ingestion stack with better fallback strategies, multi-engine routing (Tesseract + Surya + Azure) and real-time progress feedback. Goal: 99% uptime and <2s median processing for standard docs.'
      : 'Reconstruyendo el stack de ingesta OCR con mejores estrategias de fallback, enrutamiento multi-motor (Tesseract + Surya + Azure) y feedback de progreso en tiempo real. Objetivo: 99% uptime y <2s de procesamiento medio para documentos estándar.',
    status: 'active',
    statusLabel: locale.value === 'en' ? 'Active' : 'Activo',
  },
  {
    emoji: '🏠',
    title: locale.value === 'en' ? 'Homelab resilience hardening' : 'Refuerzo de resiliencia del homelab',
    description: locale.value === 'en'
      ? 'Adding automatic health checks, zero-downtime deploy rollouts for Docker containers, and a proper off-site backup strategy. Moved monitoring to a dedicated Grafana + Prometheus stack with Alertmanager for proactive incident response.'
      : 'Añadiendo health checks automáticos, despliegues sin downtime para contenedores Docker y una estrategia de backup off-site. Migrando monitorización a un stack dedicado de Grafana + Prometheus con Alertmanager para respuesta proactiva a incidencias.',
    status: 'active',
    statusLabel: locale.value === 'en' ? 'Active' : 'Activo',
  },
  {
    emoji: '💰',
    title: locale.value === 'en' ? 'Product monetisation experiments' : 'Experimentos de monetización de producto',
    description: locale.value === 'en'
      ? 'Testing pricing models for Menu Planner and exploring revenue streams beyond consulting — subscriptions, one-time purchases, and usage-based tiers. Currently running A/B tests on landing pages.'
      : 'Probando modelos de precio para Menu Planner y explorando fuentes de ingresos más allá de consultoría — suscripciones, compras únicas y tiers por uso. Actualmente ejecutando tests A/B en las páginas de aterrizaje.',
    status: 'experiment',
    statusLabel: locale.value === 'en' ? 'Experiment' : 'Experimento',
  },
  {
    emoji: '📝',
    title: locale.value === 'en' ? 'Writing & knowledge sharing' : 'Escritura y divulgación',
    description: locale.value === 'en'
      ? 'Drafting a series on frontend architecture decisions, self-hosted infrastructure patterns, and the intersection of product thinking and engineering. Publishing on the blog and experimenting with short-form technical notes.'
      : 'Redactando una serie sobre decisiones de arquitectura frontend, patrones de infraestructura self-hosted y la intersección entre pensamiento de producto e ingeniería. Publicando en el blog y experimentando con notas técnicas cortas.',
    status: 'ongoing',
    statusLabel: locale.value === 'en' ? 'Ongoing' : 'En curso',
  },
  {
    emoji: '🛠️',
    title: locale.value === 'en' ? 'Renovaciones App v2 planning' : 'Planificación de Renovaciones App v2',
    description: locale.value === 'en'
      ? 'Mapping out the next iteration of the renovation planning tool — better calendar integration, budget tracking, and contractor coordination. In the research and wireframing phase.'
      : 'Mapeando la siguiente iteración de la herramienta de planificación de reformas — mejor integración con calendario, seguimiento de presupuesto y coordinación de contratistas. En fase de investigación y wireframes.',
    status: 'planning',
    statusLabel: locale.value === 'en' ? 'Planning' : 'Planificando',
  },
])

const nowReadingItems = computed(() => [
  {
    title: locale.value === 'en' ? 'The Pragmatic Engineer' : 'The Pragmatic Engineer',
    author: 'Gergely Orosz',
    type: 'newsletter',
  },
  {
    title: locale.value === 'en' ? 'Staff Engineer: Leadership beyond the management track' : 'Staff Engineer: Leadership beyond the management track',
    author: 'Will Larson',
    type: 'book',
  },
  {
    title: locale.value === 'en' ? 'Designing Data-Intensive Applications' : 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    type: 'book',
  },
])

const onToggleLocale = () => {
  const from = locale.value
  const to = from === 'en' ? 'es' : 'en'
  analytics.trackLocaleSwitch(from, to)
  toggleLocale()
}

onMounted(() => {
  analytics.trackPageView(locale.value, '/now')
})

useHead(() => ({
  htmlAttrs: {
    lang: localeMeta.value.htmlLang,
  },
}))

useSeoMeta({
  title: () => locale.value === 'en'
    ? 'Now — David Minguela'
    : 'Ahora — David Minguela',
  description: () => locale.value === 'en'
    ? 'What David Minguela is focused on right now: AI-assisted interfaces, OCR pipelines, homelab infrastructure, product monetisation and writing.'
    : 'En qué está enfocado David Minguela ahora mismo: interfaces con IA, pipelines OCR, infraestructura homelab, monetización de producto y escritura.',
  ogTitle: () => locale.value === 'en' ? 'Now — David Minguela' : 'Ahora — David Minguela',
  ogDescription: () => locale.value === 'en'
    ? 'Current projects, focus areas and what I\'m reading.'
    : 'Proyectos actuales, áreas de enfoque y lo que estoy leyendo.',
  ogUrl: `${siteUrl}/now`,
  twitterTitle: () => locale.value === 'en' ? 'Now — David Minguela' : 'Ahora — David Minguela',
})

const statusClasses: Record<string, string> = {
  active: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/20',
  experiment: 'bg-amber-400/10 text-amber-300 border-amber-400/20',
  ongoing: 'bg-cyan-400/10 text-cyan-300 border-cyan-400/20',
  planning: 'bg-purple-400/10 text-purple-300 border-purple-400/20',
}

const typeLabels: Record<string, string> = {
  newsletter: 'Newsletter',
  book: locale.value === 'en' ? 'Book' : 'Libro',
}
</script>

<template>
  <main>
    <SiteHeader
      :github-url="githubUrl"
      :linkedin-url="linkedinUrl"
      :email-href="emailHref"
      :nav="content.copy.nav"
      :locale-flag="localeMeta.flag"
      :locale-label="localeMeta.code"
      :locale-switch-label="localeMeta.switchLabel"
      @toggle-locale="onToggleLocale"
    />

    <section class="shell py-10 sm:py-16 lg:py-20">
      <div class="mx-auto max-w-3xl">
        <!-- Header -->
        <div class="mb-10">
          <div class="flex items-center gap-3">
            <span class="rounded-full bg-emerald-400/10 px-3 py-1 font-mono text-[11px] font-semibold uppercase text-emerald-300">
              {{ locale === 'en' ? 'Updated July 2026' : 'Actualizado julio 2026' }}
            </span>
          </div>
          <h1 class="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {{ locale === 'en' ? 'What I\'m doing now' : 'Qué estoy haciendo ahora' }}
          </h1>
          <p class="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            {{ locale === 'en'
              ? 'A snapshot of my current focus, inspired by Derek Sivers\' now page movement. This is what occupies my time, attention and curiosity right now.'
              : 'Una instantánea de mi foco actual, inspirado por el movimiento de páginas /now de Derek Sivers. Esto es lo que ocupa mi tiempo, atención y curiosidad ahora mismo.'
            }}
          </p>
        </div>

        <!-- Projects section -->
        <div class="mb-12">
          <h2 class="mb-6 text-xl font-semibold text-white sm:text-2xl">
            {{ locale === 'en' ? 'Active projects' : 'Proyectos activos' }}
          </h2>

          <div class="grid gap-4">
            <article
              v-for="item in nowProjectItems"
              :key="item.title"
              class="soft-card p-5"
            >
              <div class="flex items-start gap-3">
                <span class="mt-0.5 text-2xl">{{ item.emoji }}</span>
                <div class="min-w-0 flex-1">
                  <div class="flex flex-wrap items-center gap-2">
                    <h3 class="text-base font-semibold text-white sm:text-lg">{{ item.title }}</h3>
                    <span
                      class="shrink-0 rounded-full border px-2 py-0.5 font-mono text-[10px] font-semibold uppercase"
                      :class="statusClasses[item.status]"
                    >
                      {{ item.statusLabel }}
                    </span>
                  </div>
                  <p class="mt-2 text-sm leading-6 text-slate-300">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>

        <!-- Reading section -->
        <div class="mb-12">
          <h2 class="mb-5 text-xl font-semibold text-white sm:text-2xl">
            {{ locale === 'en' ? 'What I\'m reading' : 'Qué estoy leyendo' }}
          </h2>

          <div class="soft-card divide-y divide-white/8">
            <div
              v-for="item in nowReadingItems"
              :key="item.title"
              class="flex items-center gap-4 px-5 py-4"
            >
              <span class="shrink-0 rounded-lg border border-white/10 bg-black/20 px-2 py-1 font-mono text-[10px] uppercase text-slate-400">
                {{ typeLabels[item.type] }}
              </span>
              <div class="min-w-0">
                <p class="text-sm font-medium text-white">{{ item.title }}</p>
                <p class="mt-0.5 text-xs text-slate-500">{{ item.author }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer note -->
        <div class="glass-panel p-5">
          <p class="text-sm leading-6 text-slate-400">
            <span class="font-semibold text-slate-300">{{ locale === 'en' ? 'About this page:' : 'Sobre esta página:' }}</span>
            {{ locale === 'en'
              ? 'This is a /now page. It\'s not a bio or a CV — just what I\'m focused on at this point in my life. '
                + 'I update it every few months. If you have your own site, you should make one too.'
              : 'Esto es una página /now. No es una bio ni un CV — solo en qué estoy enfocado en este momento de mi vida. '
                + 'La actualizo cada pocos meses. Si tienes tu propio sitio, deberías hacer una también.'
            }}
          </p>
        </div>
      </div>
    </section>

    <SiteFooter
      :github-url="githubUrl"
      :linkedin-url="linkedinUrl"
      :email-href="emailHref"
      :cv-href="cvHref"
      :nav="{ projects: content.copy.nav.projects, work: content.copy.nav.work, stack: content.copy.nav.stack }"
      :built-with-label="content.copy.footer.builtWith"
      :email-label="content.copy.footer.email"
    />
  </main>
</template>
