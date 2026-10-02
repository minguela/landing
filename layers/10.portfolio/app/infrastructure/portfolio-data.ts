import type { PortfolioContent, Project } from '../domain/portfolio'

const projectsEn: Project[] = [
  {
    name: 'Roam',
    slug: '01',
    domain: 'Travel operations',
    tagline: 'A trip workspace built around the messy reality between an idea and a departure.',
    description: 'Roam turns itineraries, locations and trip decisions into one operational workspace that remains useful on desktop and mobile.',
    challenge: 'Travel plans scatter across notes, maps and messages, leaving no dependable version of the trip.',
    response: 'A map-and-timeline product with structured itinerary actions, clear ownership and resilient trip data.',
    proof: ['Map + timeline workspace', 'Structured itinerary', 'Responsive field use'],
    technologies: ['Next.js', 'TypeScript', 'Neon', 'Clerk', 'Mapbox'],
    status: 'Private product',
    availability: 'private',
    accent: 'cobalt',
    artifact: 'journey',
    featured: true
  },
  {
    name: 'Cesta Carrefour',
    slug: '02',
    domain: 'Commerce workflow',
    tagline: 'From an ordinary shopping list to a cart a person can actually review.',
    description: 'A Nuxt application and Chromium extension that resolve product candidates, remember decisions and hand a reviewed list to an existing Carrefour session.',
    challenge: 'Product matching is ambiguous, retailer pages are volatile and checkout must remain explicitly human.',
    response: 'A layered review workflow with safe fallbacks, remembered choices and a deliberate extension handoff before purchase.',
    proof: ['Nuxt Layers', 'MV3 extension bridge', 'Human-in-the-loop'],
    technologies: ['Nuxt 4', 'Vue 3', 'PGlite / Neon', 'Chromium MV3'],
    status: 'Case study',
    availability: 'preview',
    accent: 'orange',
    artifact: 'handoff'
  },
  {
    name: 'Menu Planner',
    slug: '03',
    domain: 'Nutrition workflow',
    tagline: 'Nutrition planning that makes documents and AI useful without making them the interface.',
    description: 'A planning product that connects OCR, AI workflows, Supabase and Vercel while keeping fallback paths visible and usable.',
    challenge: 'Unstructured documents and unreliable upstream services create friction at the exact moment a user needs a clear plan.',
    response: 'A product flow that turns document input into editable planning data and degrades safely when automation is unavailable.',
    proof: ['OCR ingestion', 'AI-assisted planning', 'Resilient delivery'],
    technologies: ['Nuxt', 'Supabase', 'OpenAI', 'Docker'],
    status: 'Case study',
    availability: 'public',
    accent: 'lime',
    artifact: 'pipeline'
  },
  {
    name: 'Car Finder',
    slug: '04',
    domain: 'Decision support',
    tagline: 'An evidence workspace for comparing cars without losing the source behind a claim.',
    description: 'A local-first tool for importing listings, curating technical evidence and publishing structured comparisons for people and AI assistants.',
    challenge: 'Listings disappear, equipment claims conflict and important buying decisions end up based on fragile browser tabs.',
    response: 'A source-aware catalogue with duplicate review, cautious evidence states and public Markdown and JSON views.',
    proof: ['Source preservation', 'Duplicate review', 'AI-readable exports'],
    technologies: ['Node.js', 'SQLite / Neon', 'HTML extraction', 'JSON-LD'],
    status: 'Local tool',
    availability: 'local',
    accent: 'red',
    artifact: 'evidence'
  },
  {
    name: 'NAS Gateway',
    slug: '05',
    domain: 'Private infrastructure',
    tagline: 'A private file workspace where the filesystem stays the source of truth.',
    description: 'A Nuxt interface over NAS storage with stable identities, search metadata, favourites, trash and activity history.',
    challenge: 'A useful file interface needs product-level metadata without pretending a database owns the underlying files.',
    response: 'A split-responsibility architecture: bytes remain on disk while SQLite carries searchable, recoverable product state.',
    proof: ['Filesystem authority', 'Stable metadata', 'OIDC access'],
    technologies: ['Nuxt', 'SQLite', 'Authentik', 'Docker'],
    status: 'Private system',
    availability: 'private',
    accent: 'violet',
    artifact: 'filesystem'
  },
  {
    name: 'Renovaciones',
    slug: '06',
    domain: 'Personal operations',
    tagline: 'Renewals and subscriptions organised as a timeline, not another forgotten spreadsheet.',
    description: 'A cross-platform product for tracking renewals, recurring costs and notification channels across web and mobile.',
    challenge: 'Insurance, subscriptions and licences live on different cycles and usually become visible only when they charge.',
    response: 'A single operational timeline with cost views, cloud sync and configurable notification paths.',
    proof: ['Web + mobile', 'Cost overview', 'Notification workflows'],
    technologies: ['Expo', 'React Native', 'Supabase', 'Vercel'],
    status: 'Case study',
    availability: 'public',
    accent: 'aqua',
    artifact: 'timeline'
  }
]

const projectsEs: Project[] = [
  {
    ...projectsEn[0]!,
    domain: 'Operaciones de viaje',
    tagline: 'Un espacio de viaje para organizar todo lo que ocurre entre la idea y la salida.',
    description: 'Roam reúne itinerarios, lugares y decisiones en un único espacio, accesible desde el ordenador y el móvil.',
    challenge: 'Los viajes se reparten entre notas, mapas y mensajes hasta que deja de existir una versión fiable del plan.',
    response: 'Un mapa y una agenda con acciones claras, responsables definidos y datos de viaje fiables.',
    proof: ['Mapa + agenda', 'Itinerario estructurado', 'Uso móvil sobre el terreno'],
    status: 'Producto privado'
  },
  {
    ...projectsEn[1]!,
    domain: 'Flujo de compra',
    tagline: 'De una lista cualquiera a una cesta que una persona puede revisar de verdad.',
    description: 'Una aplicación Nuxt y una extensión Chromium que identifican productos posibles, conservan tus decisiones y entregan la lista revisada a una sesión de Carrefour ya iniciada.',
    challenge: 'La selección de productos es ambigua, las páginas de la tienda cambian y la decisión final de compra debe seguir en manos de la persona.',
    response: 'Un flujo por capas con revisión, alternativas seguras, elecciones recordadas y entrega deliberada a la extensión antes de comprar.',
    proof: ['Nuxt Layers', 'Puente de extensión MV3', 'Revisión humana'],
    status: 'Caso de estudio'
  },
  {
    ...projectsEn[2]!,
    domain: 'Flujo nutricional',
    tagline: 'Planificación nutricional que aprovecha documentos e IA sin convertirlos en la interfaz.',
    description: 'Un producto que conecta OCR, flujos con IA, Supabase y Vercel, con alternativas claras cuando falla un servicio.',
    challenge: 'La falta de estructura de los documentos y la inestabilidad de los servicios externos dificultan crear un plan claro.',
    response: 'Un flujo que convierte documentos en datos editables y sigue siendo útil cuando falla la automatización.',
    proof: ['Lectura de documentos con OCR', 'Planificación asistida por IA', 'Alternativas ante fallos'],
    status: 'Caso de estudio'
  },
  {
    ...projectsEn[3]!,
    domain: 'Soporte a decisiones',
    tagline: 'Un espacio de investigación para comparar coches sin perder de vista las fuentes.',
    description: 'Una herramienta local para importar anuncios, reunir pruebas técnicas y publicar comparativas estructuradas para personas y asistentes de IA.',
    challenge: 'Los anuncios desaparecen, los datos de equipamiento se contradicen y las decisiones de compra dependen de pestañas difíciles de recuperar.',
    response: 'Un catálogo que conserva las fuentes, permite revisar duplicados y distingue los datos confirmados de los dudosos.',
    proof: ['Conservación de las fuentes', 'Revisión de duplicados', 'Exportaciones en Markdown y JSON'],
    status: 'Herramienta local'
  },
  {
    ...projectsEn[4]!,
    domain: 'Infraestructura privada',
    tagline: 'Un espacio privado para archivos que conserva el sistema de ficheros como fuente principal.',
    description: 'Una interfaz Nuxt para el almacenamiento NAS, con identidades estables, búsqueda, favoritos, papelera e historial de actividad.',
    challenge: 'La interfaz necesita metadatos útiles sin tratar la base de datos como propietaria de los archivos.',
    response: 'Los archivos permanecen en disco; SQLite guarda los metadatos necesarios para buscarlos y recuperar cambios.',
    proof: ['El disco conserva los archivos', 'Metadatos estables', 'Acceso mediante OIDC'],
    status: 'Sistema privado'
  },
  {
    ...projectsEn[5]!,
    domain: 'Operaciones personales',
    tagline: 'Renovaciones y suscripciones organizadas en un calendario fácil de consultar.',
    description: 'Una aplicación para controlar renovaciones, gastos periódicos y avisos desde la web o el móvil.',
    challenge: 'Seguros, suscripciones y licencias viven en ciclos distintos y suelen hacerse visibles únicamente cuando cobran.',
    response: 'Un calendario único con previsión de gastos, sincronización y avisos configurables.',
    proof: ['Web + móvil', 'Vista de costes', 'Flujos de notificación'],
    status: 'Caso de estudio'
  }
]

const sharedCredibility = [
  { text: { en: 'Product systems', es: 'Sistemas de producto' } },
  { text: { en: 'Frontend architecture', es: 'Arquitectura frontend' } },
  { text: { en: 'AI workflows', es: 'Flujos con IA' } },
  { text: { en: 'Self-managed infrastructure', es: 'Infraestructura autogestionada' } }
]

const portfolioDataEn: PortfolioContent = {
  copy: {
    seo: {
      title: 'David Minguela — Frontend Architect',
      description: 'Frontend architecture with Vue 3, Nuxt 4 and TypeScript, hexagonal design, AI-assisted engineering and product systems.'
    },
    nav: { projects: 'Selected work', work: 'Approach', stack: 'Toolkit', notes: 'Notes', contact: 'Start a conversation' },
    hero: {
      eyebrow: 'Independent builder · Frontend Architect',
      greeting: "Hey, I'm David Minguela.",
      title: 'I turn difficult workflows into',
      titleAccent: 'useful software.',
      role: 'Frontend architecture with Vue 3, Nuxt 4 and TypeScript.',
      subtitle: 'I design maintainable systems with hexagonal boundaries and use AI throughout daily development, from analysis to implementation and review.',
      cta: 'Explore selected work',
      cv: 'Read my CV',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Start a project',
      indexLabel: 'Build index / 2026',
      indexHint: 'Six systems · one point of view'
    },
    sections: {
      projects: { eyebrow: 'Selected work / 01—06', title: 'Software with a job to do.', description: 'A portfolio of real systems: private tools, public products and infrastructure built around decisions, not demos.' },
      work: { eyebrow: 'Operating principles / 04', title: 'How the work holds together.', description: 'The interface is only one layer. I shape the product boundary, the data and the operational path around it.' },
      stack: { eyebrow: 'Working toolkit', title: 'Tools organised by responsibility.', description: 'Technology choices follow the system. These are the pieces I currently reach for to design, ship and operate it.' },
      focus: { eyebrow: 'Current field notes', title: 'Questions I am pushing on now.', description: 'The recurring ideas connecting current builds, experiments and technical writing.' }
    },
    projectCard: { label: 'Case study', challenge: 'The problem', response: 'The solution', evidence: 'System details', public: 'Case study', preview: 'Case study', private: 'Private system', local: 'Local tool' },
    credibilityLabel: 'Working across',
    focusLabel: 'Field note',
    buildNotes: { eyebrow: 'Build log', title: 'No fake telemetry. Just the work.', description: 'Short notes on what I am building, changing and learning — including the awkward parts that polished case studies usually remove.', now: 'What I am doing now', blog: 'Read the technical notes' },
    finalCta: { eyebrow: 'Open channel', title: 'Have a difficult workflow?', subtitle: 'I can join a product team or help turn an operational problem into software people can rely on.', team: 'For product teams', client: 'For focused builds', email: 'Start a conversation', cv: 'Read my CV' },
    footer: { builtWith: 'Designed and built with Nuxt', email: 'minguela9109@gmail.com', note: 'No generated testimonials. No fictional metrics.' }
  },
  projects: projectsEn,
  credibility: sharedCredibility,
  workValues: [
    { title: 'Reduce ambiguity first', text: 'Before choosing components, make the decisions, actors and failure states of the workflow visible.' },
    { title: 'Design the boundary', text: 'Use hexagonal boundaries to separate domain rules, application flow, infrastructure and interface concerns so each can evolve clearly.' },
    { title: 'Design the whole journey', text: 'A well-designed screen is only part of the delivery. Authentication, data, recovery paths, mobile use and deployment all matter.' },
    { title: 'Use AI with engineering judgment', text: 'AI speeds up analysis, implementation and review; I retain technical ownership, validate changes and design systems that can recover.' }
  ],
  stackGroups: [
    { title: 'Shape', description: 'Product language and interface systems.', items: ['Vue 3', 'Nuxt 4', 'TypeScript', 'React', 'Next.js', 'Tailwind'] },
    { title: 'Persist', description: 'Data that survives the happy path.', items: ['Postgres', 'Neon', 'Supabase', 'SQLite', 'Drizzle'] },
    { title: 'Connect', description: 'Automation, maps and intelligent inputs.', items: ['OpenAI', 'OCR', 'n8n', 'Mapbox', 'Browser extensions'] },
    { title: 'Operate', description: 'The path from repository to a running system.', items: ['Vercel', 'Docker', 'Traefik', 'Cloudflare', 'GitHub Actions'] }
  ],
  currentFocus: [
    { marker: 'NOW.01', title: 'AI as a workflow participant', text: 'Interfaces where automation proposes, people decide and the system preserves why.' },
    { marker: 'NOW.02', title: 'Evidence-aware products', text: 'Turning documents, pages and changing sources into claims users can inspect and correct.' },
    { marker: 'NOW.03', title: 'Small systems with real operations', text: 'Taking focused tools all the way through access, persistence, observability and recovery.' }
  ],
  heroSignals: ['Frontend architecture', 'Vue 3 · Nuxt 4 · TypeScript', 'Hexagonal design', 'AI-assisted development'],
  appEndpoints: []
}

const portfolioDataEs: PortfolioContent = {
  copy: {
    seo: {
      title: 'David Minguela — Arquitecto Frontend',
      description: 'Arquitectura frontend con Vue 3, Nuxt 4 y TypeScript, diseño hexagonal, desarrollo asistido por IA y sistemas de producto.'
    },
    nav: { projects: 'Proyectos', work: 'Cómo trabajo', stack: 'Tecnologías', notes: 'Notas', contact: 'Hablemos' },
    hero: {
      eyebrow: 'Arquitecto frontend independiente',
      greeting: 'Hola, soy David Minguela.',
      title: 'Convierto flujos difíciles en',
      titleAccent: 'software útil.',
      role: 'Arquitectura frontend con Vue 3, Nuxt 4 y TypeScript.',
      subtitle: 'Diseño sistemas mantenibles con arquitectura hexagonal e integro la IA en mi trabajo diario, desde el análisis hasta la implementación y la revisión.',
      cta: 'Explorar proyectos',
      cv: 'Ver mi CV',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Empezar un proyecto',
      indexLabel: 'Índice de proyectos / 2026',
      indexHint: 'Seis sistemas · un punto de vista'
    },
    sections: {
      projects: { eyebrow: 'Casos seleccionados / 01—06', title: 'Software pensado para resolver problemas reales.', description: 'Herramientas, productos e infraestructura que nacen de necesidades concretas y decisiones de diseño.' },
      work: { eyebrow: 'Principios de trabajo / 04', title: 'Diseñar para que el sistema funcione de principio a fin', description: 'La interfaz es solo una parte. También diseño la lógica del producto, sus datos y la forma de mantenerlo en marcha.' },
      stack: { eyebrow: 'Tecnologías de trabajo', title: 'Tecnología organizada por responsabilidades.', description: 'Elijo las herramientas según lo que necesita cada sistema y las utilizo para diseñarlo, publicarlo y mantenerlo.' },
      focus: { eyebrow: 'Notas de campo actuales', title: 'Preguntas en las que estoy profundizando.', description: 'Las ideas recurrentes que conectan los productos, experimentos y notas técnicas actuales.' }
    },
    projectCard: { label: 'Caso de estudio', challenge: 'El problema', response: 'La solución', evidence: 'Detalles del sistema', public: 'Caso de estudio', preview: 'Caso de estudio', private: 'Sistema privado', local: 'Herramienta local' },
    credibilityLabel: 'Ámbitos de trabajo',
    focusLabel: 'Nota de campo',
    buildNotes: { eyebrow: 'Cuaderno de trabajo', title: 'Lo que construyo, con sus aciertos y dificultades.', description: 'Notas sobre lo que desarrollo, cambio y aprendo, incluidos los problemas que suelen quedar fuera de un caso de estudio.', now: 'En qué estoy trabajando', blog: 'Leer los artículos técnicos' },
    finalCta: { eyebrow: 'Contacto abierto', title: '¿Tienes un flujo de trabajo complejo?', subtitle: 'Puedo sumarme a un equipo de producto o ayudarte a convertir un problema operativo en un sistema fiable.', team: 'Para equipos de producto', client: 'Para proyectos concretos', email: 'Escríbeme', cv: 'Ver mi CV' },
    footer: { builtWith: 'Diseñado y desarrollado con Nuxt', email: 'minguela9109@gmail.com', note: 'Sin testimonios inventados ni métricas sin verificar.' }
  },
  projects: projectsEs,
  credibility: sharedCredibility,
  workValues: [
    { title: 'Reducir primero la ambigüedad', text: 'Antes de elegir componentes, aclaro las decisiones, las personas implicadas y lo que puede fallar en cada flujo.' },
    { title: 'Diseñar límites claros', text: 'Aplico arquitectura hexagonal para separar las reglas de negocio, los flujos de aplicación, la infraestructura y la interfaz.' },
    { title: 'Diseñar el recorrido completo', text: 'Una buena pantalla no basta: autenticación, datos, alternativas ante fallos, uso en móvil y despliegue forman parte de la entrega.' },
    { title: 'Usar IA con criterio técnico', text: 'La IA acelera el análisis, la implementación y la revisión. Mantengo la responsabilidad técnica y compruebo que el sistema pueda recuperarse de un fallo.' }
  ],
  stackGroups: [
    { title: 'Dar forma', description: 'Lenguaje de producto y sistemas de interfaz.', items: ['Vue 3', 'Nuxt 4', 'TypeScript', 'React', 'Next.js', 'Tailwind'] },
    { title: 'Persistir', description: 'Datos que sobreviven al camino feliz.', items: ['Postgres', 'Neon', 'Supabase', 'SQLite', 'Drizzle'] },
    { title: 'Conectar', description: 'Automatización, mapas y lectura inteligente de documentos.', items: ['OpenAI', 'OCR', 'n8n', 'Mapbox', 'Extensiones de navegador'] },
    { title: 'Operar', description: 'El camino del repositorio a un sistema en marcha.', items: ['Vercel', 'Docker', 'Traefik', 'Cloudflare', 'GitHub Actions'] }
  ],
  currentFocus: [
    { marker: 'AHORA.01', title: 'IA como participante del flujo', text: 'Interfaces donde la automatización propone, las personas deciden y el sistema conserva el porqué.' },
    { marker: 'AHORA.02', title: 'Productos que muestran sus fuentes', text: 'Convertir documentos, páginas y fuentes cambiantes en información que las personas puedan revisar y corregir.' },
    { marker: 'AHORA.03', title: 'Sistemas pequeños con operación real', text: 'Llevar herramientas concretas hasta acceso, persistencia, observabilidad y recuperación.' }
  ],
  heroSignals: ['Arquitectura frontend', 'Vue 3 · Nuxt 4 · TypeScript', 'Diseño hexagonal', 'Desarrollo asistido por IA'],
  appEndpoints: []
}

const portfolioContentMap: Record<'en' | 'es', PortfolioContent> = {
  en: portfolioDataEn,
  es: portfolioDataEs
}

export function getPortfolioContent(locale: 'en' | 'es'): PortfolioContent {
  return portfolioContentMap[locale] || portfolioContentMap.en
}
