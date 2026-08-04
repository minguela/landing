// useSiteI18n is auto-imported from 00.core layer

export function useNowPage() {
  const { locale, localeMeta, toggleLocale } = useSiteI18n()
  const config = useRuntimeConfig()

  const siteUrl = config.public.siteUrl as string
  const githubUrl = config.public.githubUrl as string
  const emailHref = `mailto:${config.public.email}`
  const cvHref = '/cv/david-minguela-cv.pdf'

  const nowProjectItems = computed(() => [
    {
      emoji: '🧠',
      title: locale.value === 'en' ? 'AI-assisted interface design' : 'Diseño de interfaces asistido por IA',
      description: locale.value === 'en'
        ? 'Exploring where AI meaningfully improves product UX without adding noise — working on smart input systems, contextual suggestions and adaptive layouts that respect user intent.'
        : 'Explorando dónde la IA mejora de forma real la UX de producto sin añadir ruido — trabajando en sistemas de entrada inteligente, sugerencias contextuales y layouts adaptativos que respetan la intención del usuario.',
      status: 'active' as const,
      statusLabel: locale.value === 'en' ? 'Active' : 'Activo',
    },
    {
      emoji: '📄',
      title: locale.value === 'en' ? 'OCR document pipelines v2' : 'Pipelines OCR documentales v2',
      description: locale.value === 'en'
        ? 'Rebuilding the OCR ingestion stack with better fallback strategies, multi-engine routing (Tesseract + Surya + Azure) and real-time progress feedback. Goal: 99% uptime and <2s median processing for standard docs.'
        : 'Reconstruyendo el stack de ingesta OCR con mejores estrategias de fallback, enrutamiento multi-motor (Tesseract + Surya + Azure) y feedback de progreso en tiempo real. Objetivo: 99% uptime y <2s de procesamiento medio para documentos estándar.',
      status: 'active' as const,
      statusLabel: locale.value === 'en' ? 'Active' : 'Activo',
    },
    {
      emoji: '🏠',
      title: locale.value === 'en' ? 'Homelab resilience hardening' : 'Refuerzo de resiliencia del homelab',
      description: locale.value === 'en'
        ? 'Adding automatic health checks, zero-downtime deploy rollouts for Docker containers, and a proper off-site backup strategy.'
        : 'Añadiendo health checks automáticos, despliegues sin downtime para contenedores Docker y una estrategia de backup off-site.',
      status: 'active' as const,
      statusLabel: locale.value === 'en' ? 'Active' : 'Activo',
    },
    {
      emoji: '💰',
      title: locale.value === 'en' ? 'Product monetisation experiments' : 'Experimentos de monetización de producto',
      description: locale.value === 'en'
        ? 'Testing pricing models for Menu Planner and exploring revenue streams beyond consulting.'
        : 'Probando modelos de precio para Menu Planner y explorando fuentes de ingresos más allá de consultoría.',
      status: 'experiment' as const,
      statusLabel: locale.value === 'en' ? 'Experiment' : 'Experimento',
    },
    {
      emoji: '📝',
      title: locale.value === 'en' ? 'Writing & knowledge sharing' : 'Escritura y divulgación',
      description: locale.value === 'en'
        ? 'Drafting a series on frontend architecture decisions, self-hosted infrastructure patterns, and the intersection of product thinking and engineering.'
        : 'Redactando una serie sobre decisiones de arquitectura frontend, patrones de infraestructura self-hosted y la intersección entre pensamiento de producto e ingeniería.',
      status: 'ongoing' as const,
      statusLabel: locale.value === 'en' ? 'Ongoing' : 'En curso',
    },
    {
      emoji: '🛠️',
      title: locale.value === 'en' ? 'Renovaciones App v2 planning' : 'Planificación de Renovaciones App v2',
      description: locale.value === 'en'
        ? 'Mapping out the next iteration of the renovation planning tool — better calendar integration, budget tracking, and contractor coordination.'
        : 'Mapeando la siguiente iteración de la herramienta de planificación de reformas — mejor integración con calendario, seguimiento de presupuesto y coordinación de contratistas.',
      status: 'planning' as const,
      statusLabel: locale.value === 'en' ? 'Planning' : 'Planificando',
    },
  ])

  const nowReadingItems = computed(() => [
    { title: 'The Pragmatic Engineer', author: 'Gergely Orosz', type: 'newsletter' as const },
    { title: locale.value === 'en' ? 'Staff Engineer: Leadership beyond the management track' : 'Staff Engineer: Leadership beyond the management track', author: 'Will Larson', type: 'book' as const },
    { title: locale.value === 'en' ? 'Designing Data-Intensive Applications' : 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', type: 'book' as const },
  ])

  const statusClasses: Record<string, string> = {
    active: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/20',
    experiment: 'bg-amber-400/10 text-amber-300 border-amber-400/20',
    ongoing: 'bg-cyan-400/10 text-cyan-300 border-cyan-400/20',
    planning: 'bg-purple-400/10 text-purple-300 border-purple-400/20',
  }

  return {
    locale, localeMeta, toggleLocale, siteUrl, githubUrl, emailHref, cvHref,
    nowProjectItems, nowReadingItems, statusClasses,
  }
}
