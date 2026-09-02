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
    technologies: ['Nuxt', 'Vue', 'PGlite / Neon', 'Chromium MV3'],
    status: 'Preview available',
    availability: 'preview',
    href: 'https://cesta-carrefour-preview.vercel.app',
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
    status: 'Public product',
    availability: 'public',
    href: 'https://menu-planner.dminguela.es',
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
    status: 'Local-first tool',
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
    status: 'Product in evolution',
    availability: 'public',
    href: 'https://renovaciones.dminguela.es',
    accent: 'aqua',
    artifact: 'timeline'
  }
]

const projectsEs: Project[] = [
  {
    ...projectsEn[0]!,
    domain: 'Operaciones de viaje',
    tagline: 'Un espacio de viaje construido alrededor de todo lo que ocurre entre una idea y la salida.',
    description: 'Roam reúne itinerarios, ubicaciones y decisiones en un espacio operativo que sigue siendo útil en escritorio y móvil.',
    challenge: 'Los viajes se reparten entre notas, mapas y mensajes hasta que deja de existir una versión fiable del plan.',
    response: 'Un producto de mapa y agenda con acciones estructuradas, propiedad clara y datos de viaje resistentes.',
    proof: ['Mapa + agenda', 'Itinerario estructurado', 'Uso móvil sobre el terreno'],
    status: 'Producto privado'
  },
  {
    ...projectsEn[1]!,
    domain: 'Flujo de compra',
    tagline: 'De una lista cualquiera a una cesta que una persona puede revisar de verdad.',
    description: 'Una aplicación Nuxt y una extensión Chromium que resuelven candidatos, recuerdan decisiones y entregan la lista revisada a una sesión existente de Carrefour.',
    challenge: 'La selección de productos es ambigua, las páginas del retailer cambian y la compra debe seguir siendo explícitamente humana.',
    response: 'Un flujo por capas con revisión, fallbacks seguros, elecciones recordadas y entrega deliberada a la extensión antes de comprar.',
    proof: ['Nuxt Layers', 'Puente de extensión MV3', 'Humano en el circuito'],
    status: 'Preview disponible'
  },
  {
    ...projectsEn[2]!,
    domain: 'Flujo nutricional',
    tagline: 'Planificación nutricional que hace útiles los documentos y la IA sin convertirlos en la interfaz.',
    description: 'Un producto que conecta OCR, flujos con IA, Supabase y Vercel, manteniendo visibles y utilizables las rutas de respaldo.',
    challenge: 'Los documentos sin estructura y los servicios externos poco fiables añaden fricción justo cuando hace falta un plan claro.',
    response: 'Un flujo que convierte documentos en datos editables y se degrada con seguridad cuando la automatización no está disponible.',
    proof: ['Entrada OCR', 'Planificación asistida por IA', 'Entrega resiliente'],
    status: 'Producto público'
  },
  {
    ...projectsEn[3]!,
    domain: 'Soporte a decisiones',
    tagline: 'Un espacio de evidencias para comparar coches sin perder la fuente detrás de cada afirmación.',
    description: 'Una herramienta local-first para importar anuncios, curar evidencias técnicas y publicar comparativas estructuradas para personas y asistentes de IA.',
    challenge: 'Los anuncios desaparecen, el equipamiento se contradice y una compra importante acaba dependiendo de pestañas frágiles.',
    response: 'Un catálogo consciente de sus fuentes, con revisión de duplicados, estados prudentes y vistas públicas en Markdown y JSON.',
    proof: ['Fuentes preservadas', 'Revisión de duplicados', 'Exportaciones legibles por IA'],
    status: 'Herramienta local-first'
  },
  {
    ...projectsEn[4]!,
    domain: 'Infraestructura privada',
    tagline: 'Un espacio privado de archivos donde el sistema de ficheros conserva la autoridad.',
    description: 'Una interfaz Nuxt sobre almacenamiento NAS con identidades estables, metadatos de búsqueda, favoritos, papelera e historial de actividad.',
    challenge: 'Una interfaz útil necesita metadatos de producto sin fingir que la base de datos posee los archivos reales.',
    response: 'Una arquitectura de responsabilidades separadas: los bytes siguen en disco y SQLite mantiene el estado recuperable y buscable.',
    proof: ['Autoridad del filesystem', 'Metadatos estables', 'Acceso OIDC'],
    status: 'Sistema privado'
  },
  {
    ...projectsEn[5]!,
    domain: 'Operaciones personales',
    tagline: 'Renovaciones y suscripciones organizadas como una línea temporal, no como otra hoja olvidada.',
    description: 'Un producto multiplataforma para controlar renovaciones, costes recurrentes y canales de aviso en web y móvil.',
    challenge: 'Seguros, suscripciones y licencias viven en ciclos distintos y suelen hacerse visibles únicamente cuando cobran.',
    response: 'Una sola línea temporal operativa con vistas de coste, sincronización cloud y canales de notificación configurables.',
    proof: ['Web + móvil', 'Vista de costes', 'Flujos de notificación'],
    status: 'Producto en evolución'
  }
]

const sharedCredibility = [
  { value: 'Product', label: { en: 'Systems', es: 'Sistemas' } },
  { value: 'Frontend', label: { en: 'Architecture', es: 'Arquitectura' } },
  { value: 'AI', label: { en: 'Workflows', es: 'Flujos' } },
  { value: 'Owned', label: { en: 'Infrastructure', es: 'Infraestructura' } }
]

const portfolioDataEn: PortfolioContent = {
  copy: {
    seo: {
      title: 'David Minguela — Product-minded frontend engineer',
      description: 'Selected product systems by David Minguela: frontend architecture, AI workflows and owned infrastructure for real operational problems.'
    },
    nav: { projects: 'Selected work', work: 'Approach', stack: 'Toolkit', notes: 'Notes', contact: 'Start a conversation' },
    hero: {
      eyebrow: 'Independent builder · Senior frontend engineer',
      greeting: "Hey, I'm David Minguela.",
      title: 'I turn difficult workflows into',
      titleAccent: 'useful software.',
      role: 'Frontend architecture, product systems and the infrastructure needed to ship them.',
      subtitle: 'I work where product ambiguity meets technical complexity — designing the interface, the system behind it and the path to production.',
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
    projectCard: { label: 'Case', challenge: 'The friction', response: 'The system response', evidence: 'What makes it real', public: 'Open product', preview: 'Open preview', private: 'Private system', local: 'Local tool' },
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
    { title: 'Design the boundary', text: 'Keep product rules, infrastructure and interface concerns separate enough to evolve without theatre.' },
    { title: 'Ship the whole path', text: 'A good screen is not delivery. Auth, data, fallbacks, mobile use and deployment belong to the same problem.' },
    { title: 'Own the operation', text: 'Observe the system, document the decisions and make recovery a product capability rather than an afterthought.' }
  ],
  stackGroups: [
    { title: 'Shape', description: 'Product language and interface systems.', items: ['Vue', 'Nuxt', 'React', 'Next.js', 'TypeScript', 'Tailwind'] },
    { title: 'Persist', description: 'Data that survives the happy path.', items: ['Postgres', 'Neon', 'Supabase', 'SQLite', 'Drizzle'] },
    { title: 'Connect', description: 'Automation, maps and intelligent inputs.', items: ['OpenAI', 'OCR', 'n8n', 'Mapbox', 'Browser extensions'] },
    { title: 'Operate', description: 'The path from repository to a running system.', items: ['Vercel', 'Docker', 'Traefik', 'Cloudflare', 'GitHub Actions'] }
  ],
  currentFocus: [
    { marker: 'NOW.01', title: 'AI as a workflow participant', text: 'Interfaces where automation proposes, people decide and the system preserves why.' },
    { marker: 'NOW.02', title: 'Evidence-aware products', text: 'Turning documents, pages and changing sources into claims users can inspect and correct.' },
    { marker: 'NOW.03', title: 'Small systems with real operations', text: 'Taking focused tools all the way through access, persistence, observability and recovery.' }
  ],
  heroSignals: ['Product systems', 'Frontend architecture', 'AI workflows', 'Owned infrastructure'],
  appEndpoints: [
    { label: 'menu-planner.dminguela.es', href: 'https://menu-planner.dminguela.es', description: 'Public nutrition planning product.', external: true, monospace: true },
    { label: 'renovaciones.dminguela.es', href: 'https://renovaciones.dminguela.es', description: 'Renewal planning product.', external: true, monospace: true }
  ]
}

const portfolioDataEs: PortfolioContent = {
  copy: {
    seo: {
      title: 'David Minguela — Ingeniería frontend con mirada de producto',
      description: 'Sistemas de producto de David Minguela: arquitectura frontend, flujos con IA e infraestructura propia para problemas operativos reales.'
    },
    nav: { projects: 'Proyectos', work: 'Enfoque', stack: 'Herramientas', notes: 'Notas', contact: 'Hablemos' },
    hero: {
      eyebrow: 'Builder independiente · Senior frontend engineer',
      greeting: 'Hola, soy David Minguela.',
      title: 'Convierto flujos difíciles en',
      titleAccent: 'software útil.',
      role: 'Arquitectura frontend, sistemas de producto y la infraestructura necesaria para publicarlos.',
      subtitle: 'Trabajo donde la ambigüedad de producto se cruza con la complejidad técnica: diseño la interfaz, el sistema que la sostiene y el camino hasta producción.',
      cta: 'Explorar proyectos',
      cv: 'Ver mi CV',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Empezar un proyecto',
      indexLabel: 'Índice de proyectos / 2026',
      indexHint: 'Seis sistemas · un punto de vista'
    },
    sections: {
      projects: { eyebrow: 'Proyectos seleccionados / 01—06', title: 'Software con un trabajo que hacer.', description: 'Sistemas reales: herramientas privadas, productos públicos e infraestructura construidos alrededor de decisiones, no de demos.' },
      work: { eyebrow: 'Principios de trabajo / 04', title: 'Cómo consigo que el trabajo se sostenga.', description: 'La interfaz es solo una capa. Diseño a su alrededor el límite del producto, los datos y el camino operativo.' },
      stack: { eyebrow: 'Herramientas de trabajo', title: 'Tecnología ordenada por responsabilidad.', description: 'Las herramientas siguen al sistema. Estas son las piezas que utilizo hoy para diseñarlo, publicarlo y operarlo.' },
      focus: { eyebrow: 'Notas de campo actuales', title: 'Preguntas en las que estoy profundizando.', description: 'Las ideas recurrentes que conectan los productos, experimentos y notas técnicas actuales.' }
    },
    projectCard: { label: 'Caso', challenge: 'La fricción', response: 'La respuesta del sistema', evidence: 'Lo que lo hace real', public: 'Abrir producto', preview: 'Abrir preview', private: 'Sistema privado', local: 'Herramienta local' },
    credibilityLabel: 'Trabajo entre',
    focusLabel: 'Nota de campo',
    buildNotes: { eyebrow: 'Diario de construcción', title: 'Sin telemetría falsa. Solo el trabajo.', description: 'Notas breves sobre lo que construyo, cambio y aprendo, incluidas las partes incómodas que los casos de estudio suelen borrar.', now: 'Qué estoy haciendo ahora', blog: 'Leer las notas técnicas' },
    finalCta: { eyebrow: 'Canal abierto', title: '¿Tienes un flujo difícil?', subtitle: 'Puedo incorporarme a un equipo de producto o ayudarte a convertir un problema operativo en software del que se pueda depender.', team: 'Para equipos de producto', client: 'Para proyectos concretos', email: 'Empezar una conversación', cv: 'Ver mi CV' },
    footer: { builtWith: 'Diseñado y construido con Nuxt', email: 'minguela9109@gmail.com', note: 'Sin testimonios generados. Sin métricas ficticias.' }
  },
  projects: projectsEs,
  credibility: sharedCredibility,
  workValues: [
    { title: 'Reducir primero la ambigüedad', text: 'Antes de elegir componentes, hago visibles las decisiones, actores y estados de fallo del flujo.' },
    { title: 'Diseñar el límite', text: 'Separo reglas de producto, infraestructura e interfaz lo suficiente para que puedan evolucionar sin teatro.' },
    { title: 'Entregar el camino completo', text: 'Una buena pantalla no es una entrega. Auth, datos, fallbacks, móvil y despliegue son parte del mismo problema.' },
    { title: 'Hacerse cargo de la operación', text: 'Observar el sistema, documentar decisiones y convertir la recuperación en capacidad de producto.' }
  ],
  stackGroups: [
    { title: 'Dar forma', description: 'Lenguaje de producto y sistemas de interfaz.', items: ['Vue', 'Nuxt', 'React', 'Next.js', 'TypeScript', 'Tailwind'] },
    { title: 'Persistir', description: 'Datos que sobreviven al camino feliz.', items: ['Postgres', 'Neon', 'Supabase', 'SQLite', 'Drizzle'] },
    { title: 'Conectar', description: 'Automatización, mapas y entradas inteligentes.', items: ['OpenAI', 'OCR', 'n8n', 'Mapbox', 'Extensiones de navegador'] },
    { title: 'Operar', description: 'El camino del repositorio a un sistema en marcha.', items: ['Vercel', 'Docker', 'Traefik', 'Cloudflare', 'GitHub Actions'] }
  ],
  currentFocus: [
    { marker: 'AHORA.01', title: 'IA como participante del flujo', text: 'Interfaces donde la automatización propone, las personas deciden y el sistema conserva el porqué.' },
    { marker: 'AHORA.02', title: 'Productos conscientes de la evidencia', text: 'Convertir documentos, páginas y fuentes cambiantes en afirmaciones que se pueden revisar y corregir.' },
    { marker: 'AHORA.03', title: 'Sistemas pequeños con operación real', text: 'Llevar herramientas concretas hasta acceso, persistencia, observabilidad y recuperación.' }
  ],
  heroSignals: ['Sistemas de producto', 'Arquitectura frontend', 'Flujos con IA', 'Infraestructura propia'],
  appEndpoints: portfolioDataEn.appEndpoints
}

const portfolioContentMap: Record<'en' | 'es', PortfolioContent> = {
  en: portfolioDataEn,
  es: portfolioDataEs
}

export function getPortfolioContent(locale: 'en' | 'es'): PortfolioContent {
  return portfolioContentMap[locale] || portfolioContentMap.en
}
