export type Locale = 'en' | 'es'

export type ProjectItem = {
  name: string
  slug: string
  tagline: string
  description: string
  highlights: string[]
  status: string
  href: string
}

export type StackGroup = {
  title: string
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

export type CopySection = {
  eyebrow: string
  title: string
  description: string
}

export type SiteCopy = {
  nav: {
    projects: string
    stack: string
    apps: string
    focus: string
    contact: string
  }
  hero: {
    chip: string
    title: string
    lead: string
    body: string
    ctaProjects: string
    ctaGithub: string
    ctaLinkedin: string
    ctaEmail: string
    structureEyebrow: string
    structureTitle: string
    structureStatus: string
    structureRootLabel: string
    structureRootDescription: string
    contactEyebrow: string
  }
  sections: {
    projects: CopySection
    stack: CopySection
    apps: CopySection
    focus: CopySection
  }
  projectCard: {
    label: string
    footer: string
    viewDestination: string
  }
  links: {
    label: string
    openDestination: string
    githubDescription: string
    linkedinDescription: string
    emailDescription: string
  }
  focusLabel: string
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
  projects: ProjectItem[]
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
    projects: [
      {
        name: 'Menu Planner',
        slug: '01',
        tagline: 'Nutrition planning app shaped around OCR, AI and reliable delivery flows',
        description:
          'A nutrition planning product that ties together self-hosted OCR, AI workflows, Supabase and Vercel, with automatic fallback in the places where reliability matters most.',
        highlights: ['OCR + AI', 'Supabase', 'Vercel', 'Docker fallback'],
        status: 'Product + infrastructure',
        href: 'https://menu-planner.dminguela.es'
      },
      {
        name: 'Renovaciones App',
        slug: '02',
        tagline: 'Planning workflows for renovation projects with a clear operational layer',
        description:
          'An app for renovation planning that keeps scope, decisions and execution visible without turning the workflow into a mess.',
        highlights: ['Product UX', 'Planning', 'Frontend workflows', 'Operations'],
        status: 'App in evolution',
        href: 'https://renovaciones.dminguela.es'
      }
    ],
    stackGroups: [
      {
        title: 'Frontend core',
        items: ['Nuxt', 'Vue', 'TypeScript', 'Tailwind']
      },
      {
        title: 'Product + platform',
        items: ['Supabase', 'Vercel', 'GitHub Actions', 'OpenAI', 'AWS', 'CloudFront']
      },
      {
        title: 'Infra + automation',
        items: ['Docker', 'Traefik', 'Cloudflare']
      },
      {
        title: 'Engineering practice',
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
        stack: 'Stack',
        apps: 'Apps',
        focus: 'Focus',
        contact: 'Contact'
      },
      hero: {
        chip: 'Senior frontend developer · product-minded builder',
        title: 'David Minguela',
        lead: 'Senior Frontend Developer building polished web products, strong frontend systems and AI-assisted workflows that solve real operational problems.',
        body: 'My background is in Vue and Nuxt architecture, large migrations, product definition and technical leadership. Lately I have been spending most of my time around OCR pipelines, automation and the systems behind them.',
        ctaProjects: 'View projects',
        ctaGithub: 'GitHub',
        ctaLinkedin: 'LinkedIn',
        ctaEmail: 'Email',
        structureEyebrow: 'Live structure',
        structureTitle: 'dminguela.es ecosystem',
        structureStatus: 'ready for deployment',
        structureRootLabel: 'root',
        structureRootDescription: 'Main entry point for portfolio, product context and the apps that are already live.',
        contactEyebrow: 'contact'
      },
      sections: {
        projects: {
          eyebrow: 'Selected projects',
          title: 'Products with clear product thinking and real technical depth',
          description: 'A tight selection of products that shows how frontend craft, product judgment and practical infrastructure can reinforce each other.'
        },
        stack: {
          eyebrow: 'Technical stack',
          title: 'Nuxt-first frontend with a strong sense of systems behind it',
          description: 'The frontend is the visible layer, but the work also reflects judgment around deployment, automation and how products behave once they are live.'
        },
        apps: {
          eyebrow: 'Apps and links',
          title: 'A clean hub for the apps that are already public',
          description: 'Only the products that are actually live are surfaced here, together with the core professional links.'
        },
        focus: {
          eyebrow: 'Current focus',
          title: 'Current work around AI, OCR and frontend systems that age well',
          description: 'The frontend work is tied to automation, document pipelines and product decisions that still need to make sense once the project leaves the prototype stage.'
        }
      },
      projectCard: {
        label: 'Project',
        footer: 'Part of a broader product and frontend ecosystem built around clarity, reliability and execution.',
        viewDestination: 'View destination'
      },
      links: {
        label: 'link',
        openDestination: 'Open destination',
        githubDescription: 'Code, experiments and public work from the main GitHub account.',
        linkedinDescription: 'Professional profile with background, experience and context.',
        emailDescription: 'Direct contact for product, frontend or collaboration conversations.'
      },
      focusLabel: 'current focus',
      footer: {
        builtWith: 'Built with Nuxt + Tailwind',
        email: 'Email'
      },
      seo: {
        title: 'Portfolio · Senior Frontend Developer',
        description: 'Portfolio and technical hub of David Minguela, a senior frontend developer focused on Vue, Nuxt, product architecture, OCR workflows and automation.'
      }
    }
  },
  es: {
    heroSignals: [
      'Arquitectura frontend',
      'Migraciones Vue / Nuxt',
      'Workflows asistidos por IA',
      'Pipelines OCR',
      'Automatización self-hosted'
    ],
    projects: [
      {
        name: 'Menu Planner',
        slug: '01',
        tagline: 'Aplicación de planificación nutricional pensada alrededor de OCR, IA y flujos fiables',
        description:
          'Un producto de planificación nutricional que conecta OCR self-hosted, flujos con IA, Supabase y Vercel, con fallback automático justo en los puntos donde la fiabilidad importa de verdad.',
        highlights: ['OCR + IA', 'Supabase', 'Vercel', 'Fallback Docker'],
        status: 'Producto + infraestructura',
        href: 'https://menu-planner.dminguela.es'
      },
      {
        name: 'Renovaciones App',
        slug: '02',
        tagline: 'Flujos de planificación para reformas con una capa operativa clara',
        description:
          'Una app para planificación de reformas que mantiene alcance, decisiones y ejecución visibles sin convertir el flujo en algo confuso.',
        highlights: ['Product UX', 'Planificación', 'Flujos frontend', 'Operaciones'],
        status: 'App en evolución',
        href: 'https://renovaciones.dminguela.es'
      }
    ],
    stackGroups: [
      {
        title: 'Núcleo frontend',
        items: ['Nuxt', 'Vue', 'TypeScript', 'Tailwind']
      },
      {
        title: 'Producto + plataforma',
        items: ['Supabase', 'Vercel', 'GitHub Actions', 'OpenAI', 'AWS', 'CloudFront']
      },
      {
        title: 'Infraestructura + automatización',
        items: ['Docker', 'Traefik', 'Cloudflare']
      },
      {
        title: 'Práctica de ingeniería',
        items: ['Unit testing', 'Integration testing', 'Definición de producto', 'Liderazgo técnico']
      }
    ],
    currentFocus: [
      {
        title: 'Workflows asistidos por IA',
        text: 'Diseñando interfaces y sistemas donde la IA ayuda con el trabajo real, no como una capa añadida porque sí.'
      },
      {
        title: 'Pipelines OCR',
        text: 'Construyendo flujos OCR con fallback y observabilidad para que los documentos entren en el producto sin convertirse en un problema operativo.'
      },
      {
        title: 'Automatización self-hosted',
        text: 'Explorando automatización self-hosted cuando tener el control del stack aporta más visibilidad, más control y menos dependencias innecesarias.'
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
        stack: 'Stack',
        apps: 'Apps',
        focus: 'Focus',
        contact: 'Contacto'
      },
      hero: {
        chip: 'Senior frontend developer · product-minded builder',
        title: 'David Minguela',
        lead: 'Senior Frontend Developer centrado en productos web bien resueltos, sistemas frontend sólidos y workflows asistidos por IA que atacan problemas reales de operación.',
        body: 'Vengo de arquitectura en Vue y Nuxt, migraciones de gran escala, definición de producto y liderazgo técnico. Últimamente estoy muy metido en pipelines OCR, automatización y en los sistemas que los sostienen.',
        ctaProjects: 'Ver proyectos',
        ctaGithub: 'GitHub',
        ctaLinkedin: 'LinkedIn',
        ctaEmail: 'Email',
        structureEyebrow: 'Estructura activa',
        structureTitle: 'ecosistema dminguela.es',
        structureStatus: 'listo para desplegar',
        structureRootLabel: 'root',
        structureRootDescription: 'Punto de entrada principal para el portfolio, el contexto de producto y las apps que ya están publicadas.',
        contactEyebrow: 'contacto'
      },
      sections: {
        projects: {
          eyebrow: 'Proyectos seleccionados',
          title: 'Productos con criterio de producto y profundidad técnica real',
          description: 'Una selección corta de productos que deja ver cómo se refuerzan entre sí el oficio frontend, el criterio de producto y una infraestructura práctica.'
        },
        stack: {
          eyebrow: 'Stack técnico',
          title: 'Frontend Nuxt-first con una capa de sistemas bien pensada detrás',
          description: 'El frontend es la parte visible, pero el trabajo también refleja criterio sobre despliegue, automatización y cómo se comporta el producto cuando ya está vivo.'
        },
        apps: {
          eyebrow: 'Apps y enlaces',
          title: 'Un hub limpio para las aplicaciones que ya son públicas',
          description: 'Aquí solo aparecen los productos que están realmente activos, junto con los enlaces profesionales principales.'
        },
        focus: {
          eyebrow: 'Foco actual',
          title: 'Trabajo actual alrededor de IA, OCR y sistemas frontend que envejecen bien',
          description: 'El trabajo frontend se cruza aquí con automatización, pipelines documentales y decisiones de producto que tienen que seguir teniendo sentido después del prototipo.'
        }
      },
      projectCard: {
        label: 'Proyecto',
        footer: 'Parte de un ecosistema más amplio construido alrededor de claridad, fiabilidad y ejecución.',
        viewDestination: 'Ver destino'
      },
      links: {
        label: 'enlace',
        openDestination: 'Abrir destino',
        githubDescription: 'Código, experimentos y trabajo público desde la cuenta principal de GitHub.',
        linkedinDescription: 'Perfil profesional con experiencia, recorrido y contexto adicional.',
        emailDescription: 'Contacto directo para hablar de producto, frontend o colaboraciones.'
      },
      focusLabel: 'foco actual',
      footer: {
        builtWith: 'Hecho con Nuxt + Tailwind',
        email: 'Email'
      },
      seo: {
        title: 'Portfolio · Senior Frontend Developer',
        description: 'Portfolio y hub técnico de David Minguela: senior frontend developer especializado en Vue/Nuxt, arquitectura de producto, pipelines OCR, automatización y self-hosting.'
      }
    }
  }
}

