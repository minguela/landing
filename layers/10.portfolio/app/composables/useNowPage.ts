// useSiteI18n is auto-imported from 00.core layer

export function useNowPage() {
  const { locale, localeMeta, toggleLocale } = useSiteI18n()
  const config = useRuntimeConfig()

  const siteUrl = config.public.siteUrl as string
  const githubUrl = config.public.githubUrl as string
  const linkedinUrl = config.public.linkedinUrl as string
  const emailHref = `mailto:${config.public.email}`
  const cvHref = computed(() => locale.value === 'en'
    ? '/cv/david-minguela-cv-en.pdf'
    : '/cv/david-minguela-cv.pdf')

  const nowProjectItems = computed(() => [
    {
      emoji: '🧠',
      title: locale.value === 'en' ? 'AI-assisted interface design' : 'Diseño de interfaces asistido por IA',
      description: locale.value === 'en'
        ? 'Exploring where AI makes a real difference to product experience, through smarter inputs, contextual suggestions and adaptive layouts that respect user intent.'
        : 'Investigo dónde la IA mejora de verdad la experiencia de un producto: entradas más inteligentes, sugerencias útiles y diseños que respetan la intención de cada persona.',
      status: 'active' as const,
      statusLabel: locale.value === 'en' ? 'Active' : 'Activo',
    },
    {
      emoji: '📄',
      title: locale.value === 'en' ? 'OCR document pipelines v2' : 'Procesamiento de documentos con OCR',
      description: locale.value === 'en'
        ? 'Rebuilding document intake with better recovery paths, routing across Tesseract, Surya and Azure, and live progress updates. Goal: 99% availability and under 2 seconds median processing for standard documents.'
        : 'Estoy reconstruyendo la lectura de documentos con mejores alternativas cuando falla un motor, enrutamiento entre Tesseract, Surya y Azure e indicadores de progreso en tiempo real. Objetivo: 99 % de disponibilidad y menos de 2 s de media para documentos estándar.',
      status: 'active' as const,
      statusLabel: locale.value === 'en' ? 'Active' : 'Activo',
    },
    {
      emoji: '🏠',
      title: locale.value === 'en' ? 'Homelab resilience hardening' : 'Mejoras de resiliencia del servidor doméstico',
      description: locale.value === 'en'
        ? 'Adding automated health checks, zero-downtime Docker deployments and a reliable off-site backup strategy.'
        : 'Estoy añadiendo comprobaciones automáticas, despliegues de Docker sin interrupciones y una estrategia fiable de copias de seguridad externas.',
      status: 'active' as const,
      statusLabel: locale.value === 'en' ? 'Active' : 'Activo',
    },
    {
      emoji: '💰',
      title: locale.value === 'en' ? 'Product monetisation experiments' : 'Pruebas de modelos de ingresos',
      description: locale.value === 'en'
        ? 'Testing pricing models for Menu Planner and exploring ways to earn beyond consulting.'
        : 'Estoy probando modelos de precios para Menu Planner y explorando otras vías de ingresos además de la consultoría.',
      status: 'experiment' as const,
      statusLabel: locale.value === 'en' ? 'Experiment' : 'Experimento',
    },
    {
      emoji: '📝',
      title: locale.value === 'en' ? 'Writing & knowledge sharing' : 'Escritura y divulgación',
      description: locale.value === 'en'
        ? 'Writing about frontend architecture, self-managed infrastructure and the connection between product thinking and engineering.'
        : 'Estoy preparando una serie sobre arquitectura frontend, infraestructura autogestionada y el punto de encuentro entre producto e ingeniería.',
      status: 'ongoing' as const,
      statusLabel: locale.value === 'en' ? 'Ongoing' : 'En curso',
    },
    {
      emoji: '🛠️',
      title: locale.value === 'en' ? 'Renovaciones 2.0 planning' : 'Planificación de Renovaciones 2.0',
      description: locale.value === 'en'
        ? 'Planning the next version of Renovaciones, with better calendar integration, budget tracking and contractor coordination.'
        : 'Estoy planificando la próxima versión de Renovaciones: mejor integración con el calendario, control del presupuesto y coordinación de profesionales.',
      status: 'planning' as const,
      statusLabel: locale.value === 'en' ? 'Planning' : 'Planificando',
    },
  ])

  const nowReadingItems = computed(() => [
    { title: 'The Pragmatic Engineer', author: 'Gergely Orosz', type: 'newsletter' as const },
    { title: 'Staff Engineer: Leadership beyond the management track', author: 'Will Larson', type: 'book' as const },
    { title: locale.value === 'en' ? 'Designing Data-Intensive Applications' : 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', type: 'book' as const },
  ])

  const typeLabels = computed(() => ({
    newsletter: locale.value === 'en' ? 'Newsletter' : 'Boletín',
    book: locale.value === 'en' ? 'Book' : 'Libro',
  }))

  const statusClasses: Record<string, string> = {
    active: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/20',
    experiment: 'bg-amber-400/10 text-amber-300 border-amber-400/20',
    ongoing: 'bg-cyan-400/10 text-cyan-300 border-cyan-400/20',
    planning: 'bg-purple-400/10 text-purple-300 border-purple-400/20',
  }

  return {
    locale, localeMeta, toggleLocale, siteUrl, githubUrl, linkedinUrl, emailHref, cvHref,
    nowProjectItems, nowReadingItems, statusClasses, typeLabels,
  }
}
