export type Locale = 'en' | 'es'

export type ProjectItem = {
  name: string
  slug: string
  tagline: string
  description: string
  problem: string
  role: string
  decision: string
  technologies: string[]
  status: string
  href: string
  cta: string
}

export type StackGroup = {
  title: string
  description: string
  items: string[]
}

export type LinkItem = {
label: string
href: string
description: string
external?: boolean
monospace?: boolean
}

export type FocusItem = {
  title: string
  text: string
}

export type WorkItem = {
  title: string
  text: string
}

export type CopySection = {
eyebrow: string
title: string
description: string
}

export type SiteCopy = {
nav: {
projects: string
work: string
stack: string
contact: string
}
hero: {
title: string
lead: string
body: string
ctaProjects: string
ctaGithub: string
ctaLinkedin: string
ctaEmail: string
ctaCv: string
previewLabel: string
previewTitle: string
}
sections: {
projects: CopySection
work: CopySection
stack: CopySection
focus: CopySection
}
projectCard: {
label: string
problem: string
role: string
decision: string
stack: string
preview: string
}
links: {
label: string
openDestination: string
githubDescription: string
linkedinDescription: string
emailDescription: string
cvDescription: string
}
focusLabel: string
credibilityLabel: string
finalCta: {
title: string
description: string
contact: string
cv: string
}
footer: {
builtWith: string
email: string
}
seo: {
title: string
description: string
}
}

export type SiteContent = {
  heroSignals: string[]
  credibility: string[]
  projects: ProjectItem[]
  workValues: WorkItem[]
  stackGroups: StackGroup[]
  currentFocus: FocusItem[]
  appEndpoints: LinkItem[]
  copy: SiteCopy
}

export const siteContent: Record<Locale, SiteContent> = {
en: {
heroSignals: [
'Frontend architecture',
'Vue / Nuxt migrations',
'AI-assisted workflows',
'OCR pipelines',
'Self-hosted automation'
],
credibility: [
'Frontend architecture',
'Vue / Nuxt migrations',
'Applied AI',
'Automation',
'Technical leadership'
],
projects: [
{
name: 'Menu Planner',
slug: '01',
tagline: 'Nutrition planning shaped around OCR, AI and reliable delivery flows.',
description:
'A product that connects document intake, AI-assisted planning and a delivery layer that stays practical once it leaves the prototype stage.',
problem: 'Turn document-heavy nutrition inputs into a clearer planning workflow.',
role: 'Product frontend, OCR and AI workflow integration, and reliability choices around the delivery path.',
decision: 'Use automation where it removes friction while keeping fallback in the parts of the flow where confidence matters.',
technologies: ['OCR + AI', 'Supabase', 'Vercel', 'Docker fallback'],
status: 'Product + infrastructure',
href: 'https://menu-planner.dminguela.es',
cta: 'Open Menu Planner'
},
{
name: 'Renovaciones App',
slug: '02',
tagline: 'Renovation planning with a clearer operational layer.',
description:
'An app designed to keep scope, decisions and execution visible when a project has many moving parts.',
problem: 'Keep renovation planning legible instead of scattering decisions across disconnected notes and tasks.',
role: 'Frontend workflows and product clarity for an execution-facing planning experience.',
decision: 'Prioritize visible state and operational reading before adding ornamental complexity.',
technologies: ['Product UX', 'Planning', 'Frontend workflows', 'Operations'],
status: 'App in evolution',
href: 'https://renovaciones.dminguela.es',
cta: 'View Renovaciones App'
}
],
workValues: [
{
title: 'Make the problem legible',
text: 'The interface should expose the decisions people need to make, not hide them behind decorative complexity.'
},
{
title: 'Design for change',
text: 'Frontend architecture has to keep pace with migrations, new flows and product learning without becoming brittle.'
},
{
title: 'Connect the visible and the operational',
text: 'Automation, OCR and deployment choices matter when they change reliability and the user experience.'
}
],
stackGroups: [
{
title: 'Frontend core',
description: 'Vue, Nuxt and TypeScript for product interfaces that stay clear while their workflows grow.',
items: ['Nuxt', 'Vue', 'TypeScript', 'Tailwind']
},
{
title: 'Product + platform',
description: 'Delivery and data choices that support real product behavior after launch.',
items: ['Supabase', 'Vercel', 'GitHub Actions', 'OpenAI', 'AWS', 'CloudFront']
},
{
title: 'Infra + automation',
description: 'Infrastructure when control, fallback and visibility improve day-to-day operation.',
items: ['Docker', 'Traefik', 'Cloudflare']
},
{
title: 'Engineering practice',
description: 'The working habits that keep speed, risk and product definition in balance.',
items: ['Unit testing', 'Integration testing', 'Product definition', 'Technical leadership']
}
],
currentFocus: [
{
title: 'AI-assisted workflows',
text: 'Designing interfaces and systems where AI helps with the real work instead of feeling bolted on top of it.'
},
{
title: 'OCR pipelines',
text: 'Building OCR flows with fallback and observability so documents can move through a product without becoming an operational headache.'
},
{
title: 'Self-hosted automation',
text: 'Exploring self-hosted automation when owning the stack gives more control, better visibility and fewer moving parts.'
},
{
title: 'Product-oriented frontend architecture',
text: 'Building frontend systems that stay clear, fast and maintainable as the product gets bigger and the team moves faster.'
}
],
appEndpoints: [
{
label: 'menu-planner.dminguela.es',
href: 'https://menu-planner.dminguela.es',
description: 'Nutrition planning app with OCR, AI-assisted flows and a delivery layer built to hold up in practice.',
external: true,
monospace: true
},
{
label: 'renovaciones.dminguela.es',
href: 'https://renovaciones.dminguela.es',
description: 'Entry point for renovation planning, operational clarity and execution-facing workflows.',
external: true,
monospace: true
}
],
copy: {
nav: {
projects: 'Projects',
work: 'How I work',
stack: 'Stack',
contact: 'Contact'
},
hero: {
title: 'Senior frontend for complex products with clarity, speed and reliability.',
lead: 'I design and build web experiences with Vue and Nuxt, connecting frontend architecture, product judgment and applied AI to solve real operational problems.',
body: 'David Minguela works across migrations, automation, OCR and frontend systems that need to remain maintainable as the product gets bigger.',
ctaProjects: 'View projects',
ctaGithub: 'GitHub',
ctaLinkedin: 'LinkedIn',
ctaEmail: 'Email',
ctaCv: 'Download CV',
previewLabel: 'Product evidence',
previewTitle: 'Live work across planning, OCR and frontend systems'
},
sections: {
projects: {
eyebrow: 'Selected projects',
title: 'Products where product clarity and technical depth reinforce each other',
description: 'A tight selection, with the problem, role and decisions visible before a long stack inventory.'
},
work: {
eyebrow: 'How I work',
title: 'Frontend with product judgment and a systems view',
description: 'I do not stop at implementing screens. I work to make the interface readable, the architecture resilient and the delivery dependable.'
},
stack: {
eyebrow: 'Technical stack',
title: 'Technology grouped by the work it enables',
description: 'The stack stays compact here: enough detail to show depth, with context for why each capability matters.'
},
focus: {
eyebrow: 'Current focus',
title: 'Now: applied AI, OCR and useful automation',
description: 'Current work sits where frontend flows, document pipelines and product decisions meet.'
}
},
projectCard: {
label: 'Project',
problem: 'Problem',
role: 'David handled',
decision: 'Decision',
stack: 'Key technologies',
preview: 'Product preview'
},
links: {
label: 'link',
openDestination: 'Open destination',
githubDescription: 'Code, experiments and public work from the main GitHub account.',
linkedinDescription: 'Professional profile with background, experience and context.',
emailDescription: 'Direct contact for product, frontend or collaboration conversations.',
cvDescription: "Download David Minguela's CV in PDF format."
},
focusLabel: 'current focus',
credibilityLabel: 'Experience signals',
finalCta: {
title: 'Building a complex product that needs frontend clarity and dependable execution?',
description: 'Let us talk about product, architecture and the interface that makes the work easier to use.',
contact: 'Contact',
cv: 'Download CV'
},
footer: {
builtWith: 'Built with Nuxt + Tailwind',
email: 'Email'
},
seo: {
title: 'David Minguela · Senior Frontend Developer for complex products',
description: 'Senior frontend portfolio of David Minguela: Vue and Nuxt architecture, product-minded interfaces, OCR workflows, applied AI and automation.'
}
}
},
es: {
heroSignals: [
'Arquitectura frontend',
'Migraciones Vue / Nuxt',
'Flujos asistidos por IA',
'Pipelines OCR',
'Automatización con control de infraestructura'
],
credibility: [
'Arquitectura frontend',
'Migraciones Vue / Nuxt',
'IA aplicada',
'Automatización',
'Liderazgo técnico'
],
projects: [
{
name: 'Menu Planner',
slug: '01',
tagline: 'Planificación nutricional con OCR, IA y flujos de entrega fiables.',
description:
'Un producto que conecta entrada documental, planificación asistida por IA y una capa de entrega práctica cuando deja de ser un prototipo.',
problem: 'Convertir entradas nutricionales basadas en documentos en un flujo de planificación más claro.',
role: 'Frontend de producto, integración de flujos OCR e IA y decisiones de fiabilidad en la ruta de entrega.',
decision: 'Usar automatización donde reduce fricción y conservar una ruta alternativa donde la confianza del flujo importa.',
technologies: ['OCR + IA', 'Supabase', 'Vercel', 'Respaldo Docker'],
status: 'Producto + infraestructura',
href: 'https://menu-planner.dminguela.es',
cta: 'Abrir Menu Planner'
},
{
name: 'Renovaciones App',
slug: '02',
tagline: 'Planificación de reformas con una capa operativa más clara.',
description:
'Una app pensada para mantener alcance, decisiones y ejecución visibles cuando el proyecto tiene muchas piezas en movimiento.',
problem: 'Mantener legible la planificación de una reforma sin dispersar decisiones entre notas y tareas aisladas.',
role: 'Flujos frontend y claridad de producto para una experiencia orientada a ejecución.',
decision: 'Priorizar estado visible y lectura operativa antes que complejidad decorativa.',
technologies: ['UX de producto', 'Planificación', 'Flujos frontend', 'Operaciones'],
status: 'App en evolución',
href: 'https://renovaciones.dminguela.es',
cta: 'Ver Renovaciones App'
}
],
workValues: [
{
title: 'Hacer legible el problema',
text: 'La interfaz debe exponer las decisiones que importan, no esconderlas detrás de complejidad decorativa.'
},
{
title: 'Diseñar para el cambio',
text: 'La arquitectura frontend tiene que aguantar migraciones, nuevos flujos y aprendizaje de producto sin volverse frágil.'
},
{
title: 'Conectar interfaz y operación',
text: 'Automatización, OCR y despliegue importan cuando cambian fiabilidad y experiencia de uso.'
}
],
stackGroups: [
{
title: 'Núcleo frontend',
description: 'Vue, Nuxt y TypeScript para interfaces de producto que siguen claras cuando el flujo crece.',
items: ['Nuxt', 'Vue', 'TypeScript', 'Tailwind']
},
{
title: 'Producto + plataforma',
description: 'Datos y entrega para sostener el comportamiento real del producto tras el lanzamiento.',
items: ['Supabase', 'Vercel', 'GitHub Actions', 'OpenAI', 'AWS', 'CloudFront']
},
{
title: 'Infraestructura + automatización',
description: 'Infraestructura cuando control, rutas alternativas y visibilidad mejoran la operación diaria.',
items: ['Docker', 'Traefik', 'Cloudflare']
},
{
title: 'Práctica de ingeniería',
description: 'Hábitos para equilibrar velocidad, riesgo y definición de producto.',
items: ['Tests unitarios', 'Tests de integración', 'Definición de producto', 'Liderazgo técnico']
}
],
currentFocus: [
{
title: 'Flujos asistidos por IA',
text: 'Diseñando interfaces y sistemas donde la IA ayuda con el trabajo real, no como una capa añadida porque sí.'
},
{
title: 'Flujos OCR',
text: 'Construyendo flujos OCR con rutas alternativas y observabilidad para que los documentos entren en el producto sin convertirse en un problema operativo.'
},
{
title: 'Automatización con infraestructura propia',
text: 'Explorando automatización con infraestructura propia cuando controlar el sistema aporta más visibilidad y menos dependencias innecesarias.'
},
{
title: 'Arquitectura frontend orientada a producto',
text: 'Construyendo sistemas frontend que siguen siendo claros, rápidos y mantenibles cuando el producto crece y el equipo necesita moverse con más velocidad.'
}
],
appEndpoints: [
{
label: 'menu-planner.dminguela.es',
href: 'https://menu-planner.dminguela.es',
description: 'Aplicación de planificación nutricional con OCR, flujos asistidos por IA y una capa de entrega pensada para aguantar en producción.',
external: true,
monospace: true
},
{
label: 'renovaciones.dminguela.es',
href: 'https://renovaciones.dminguela.es',
description: 'Punto de entrada para planificación de reformas, claridad operativa y flujos orientados a ejecución.',
external: true,
monospace: true
}
],
copy: {
nav: {
projects: 'Proyectos',
work: 'Cómo trabajo',
stack: 'Tecnología',
contact: 'Contacto'
},
hero: {
title: 'Frontend senior para productos complejos que necesitan claridad, velocidad y fiabilidad.',
lead: 'Diseño y construyo experiencias web con Vue y Nuxt, conectando arquitectura frontend, criterio de producto e IA aplicada para resolver problemas reales de operación.',
body: 'David Minguela trabaja en migraciones, automatización, OCR y sistemas frontend que deben seguir siendo mantenibles cuando el producto crece.',
ctaProjects: 'Ver proyectos',
ctaGithub: 'GitHub',
ctaLinkedin: 'LinkedIn',
ctaEmail: 'Email',
ctaCv: 'Descargar CV',
previewLabel: 'Prueba de producto',
previewTitle: 'Trabajo vivo entre planificación, OCR y sistemas frontend'
},
sections: {
projects: {
eyebrow: 'Proyectos seleccionados',
title: 'Productos donde claridad de producto y profundidad técnica se refuerzan',
description: 'Una selección corta que deja visibles el problema, el rol y las decisiones antes de desplegar un inventario de stack.'
},
work: {
eyebrow: 'Cómo trabajo',
title: 'Frontend con criterio de producto y cabeza de sistema',
description: 'No me quedo en implementar pantallas. Trabajo para que la interfaz sea legible, la arquitectura aguante el cambio y la entrega sea fiable.'
},
stack: {
eyebrow: 'Stack técnico',
title: 'Tecnología agrupada por el trabajo que habilita',
description: 'El stack se mantiene compacto: suficiente detalle para enseñar profundidad y contexto sobre para qué sirve cada capacidad.'
},
focus: {
eyebrow: 'Foco actual',
title: 'Ahora: IA aplicada, OCR y automatización útil',
description: 'El trabajo actual se sitúa donde se cruzan flujos frontend, flujos documentales y decisiones de producto.'
}
},
projectCard: {
label: 'Proyecto',
problem: 'Problema',
role: 'Qué hizo David',
decision: 'Decisión',
stack: 'Tecnologías clave',
preview: 'Vista de producto'
},
links: {
label: 'enlace',
openDestination: 'Abrir destino',
githubDescription: 'Código, experimentos y trabajo público desde la cuenta principal de GitHub.',
linkedinDescription: 'Perfil profesional con experiencia, recorrido y contexto adicional.',
emailDescription: 'Contacto directo para hablar de producto, frontend o colaboraciones.',
cvDescription: 'Descarga el CV de David Minguela en formato PDF.'
},
focusLabel: 'foco actual',
credibilityLabel: 'Señales de experiencia',
finalCta: {
title: '¿Estás construyendo un producto complejo que necesita claridad frontend y ejecución fiable?',
description: 'Hablemos de producto, arquitectura y de la interfaz que hace el trabajo más fácil de usar.',
contact: 'Contactar',
cv: 'Descargar CV'
},
footer: {
builtWith: 'Hecho con Nuxt + Tailwind',
email: 'Email'
},
seo: {
title: 'David Minguela · Senior Frontend Developer para productos complejos',
description: 'Portfolio senior frontend de David Minguela: arquitectura Vue y Nuxt, interfaces con criterio de producto, OCR, IA aplicada y automatización.'
}
}
}
}
