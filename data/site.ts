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
        tagline: 'Nutrition planning app with OCR, AI and resilient delivery flows',
        description:
          'A nutrition planning product that connects self-hosted OCR, AI workflows, Supabase and Vercel with automatic fallback to keep the user experience stable end to end.',
        highlights: ['OCR + AI', 'Supabase', 'Vercel', 'Docker fallback'],
        status: 'Product + infrastructure',
        href: 'https://menu-planner.dminguela.es'
      },
      {
        name: 'Renovaciones App',
        slug: '02',
        tagline: 'Planning workflows for renovation and execution-heavy projects',
        description:
          'An app focused on renovation planning, operational clarity and product structure for workflows that need to stay practical, understandable and scalable.',
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
        text: 'Designing interfaces and systems where AI reduces friction, supports decisions and fits cleanly into real product workflows.'
      },
      {
        title: 'OCR pipelines',
        text: 'Building OCR flows with fallback, observability and practical delivery so documents become usable product inputs.'
      },
      {
        title: 'Self-hosted automation',
        text: 'Exploring controllable, efficient infrastructure for automation that benefits from owning the operational layer.'
      },
      {
        title: 'Product-oriented frontend architecture',
        text: 'Creating frontend systems that scale in clarity, speed, maintainability and developer experience as products evolve.'
      }
    ],
    appEndpoints: [
      {
        label: 'menu-planner.dminguela.es',
        href: 'https://menu-planner.dminguela.es',
        description: 'Nutrition planning product with OCR and AI-assisted flows.',
        external: true,
        monospace: true
      },
      {
        label: 'renovaciones.dminguela.es',
        href: 'https://renovaciones.dminguela.es',
        description: 'Entry point for renovation planning and execution workflows.',
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
        lead: 'Senior Frontend Developer. Product-minded builder. Designing polished web apps, modular frontend systems and AI-enabled workflows with real product intent.',
        body: 'Built on a background of Vue and Nuxt architecture, large-scale migrations, product definition and technical leadership, with current focus on homelab experimentation, OCR pipelines and self-hosted automation.',
        ctaProjects: 'View projects',
        ctaGithub: 'GitHub',
        ctaLinkedin: 'LinkedIn',
        ctaEmail: 'Email',
        structureEyebrow: 'Live structure',
        structureTitle: 'dminguela.es ecosystem',
        structureStatus: 'ready for deployment',
        structureRootLabel: 'root',
        structureRootDescription: 'Main entry point for portfolio, product direction and app discovery.',
        contactEyebrow: 'contact'
      },
      sections: {
        projects: {
          eyebrow: 'Selected projects',
          title: 'Apps built with product intent and technical depth',
          description: 'A focused selection of products that show how product thinking, frontend craft and practical infrastructure can live in the same ecosystem.'
        },
        stack: {
          eyebrow: 'Technical stack',
          title: 'Nuxt-first frontend, automation-aware infrastructure',
          description: 'The site makes a frontend-first impression, while still signalling platform judgment around deployment, automation and developer experience.'
        },
        apps: {
          eyebrow: 'Apps and links',
          title: 'A clean hub for the apps that are already live',
          description: 'Only the currently available products are surfaced here, alongside the core professional links.'
        },
        focus: {
          eyebrow: 'Current focus',
          title: 'Building practical systems around AI, OCR and maintainable frontend architecture',
          description: 'Frontend work here is connected to automation, document pipelines, modern deployment and product decisions that need to hold up in the real world.'
        }
      },
      projectCard: {
        label: 'Project',
        footer: 'Part of a broader ecosystem across product, frontend and infrastructure.',
        viewDestination: 'View destination'
      },
      links: {
        label: 'link',
        openDestination: 'Open destination',
        githubDescription: 'Code, experiments and published projects from the main GitHub account.',
        linkedinDescription: 'Professional profile for network and additional context.',
        emailDescription: 'Direct channel for professional contact and collaborations.'
      },
      focusLabel: 'current focus',
      footer: {
        builtWith: 'Built with Nuxt + Tailwind',
        email: 'Email'
      },
      seo: {
        title: 'Portfolio · Senior Frontend Developer',
        description: 'Portfolio and technical hub of David Minguela: senior frontend developer focused on Vue/Nuxt, product architecture, OCR pipelines, automation and self-hosting.'
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
        tagline: 'Aplicación de planificación nutricional con OCR, IA y flujos resilientes',
        description:
          'Un producto de planificación nutricional que conecta OCR self-hosted, flujos con IA, Supabase y Vercel con fallback automático para mantener estable la experiencia de usuario.',
        highlights: ['OCR + IA', 'Supabase', 'Vercel', 'Fallback Docker'],
        status: 'Producto + infraestructura',
        href: 'https://menu-planner.dminguela.es'
      },
      {
        name: 'Renovaciones App',
        slug: '02',
        tagline: 'Flujos de planificación para reformas y proyectos de ejecución',
        description:
          'Una app centrada en planificación de reformas, claridad operativa y estructura de producto para flujos que deben seguir siendo prácticos, entendibles y escalables.',
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
        text: 'Diseñando interfaces y sistemas donde la IA reduce fricción, ayuda a decidir y encaja bien dentro de flujos de producto reales.'
      },
      {
        title: 'Pipelines OCR',
        text: 'Construyendo flujos OCR con fallback, observabilidad y entrega práctica para convertir documentos en entradas útiles de producto.'
      },
      {
        title: 'Automatización self-hosted',
        text: 'Explorando infraestructura controlable y eficiente para automatizaciones que se benefician de poseer la capa operativa.'
      },
      {
        title: 'Arquitectura frontend orientada a producto',
        text: 'Creando sistemas frontend que escalan en claridad, velocidad, mantenibilidad y experiencia de desarrollo a medida que evoluciona el producto.'
      }
    ],
    appEndpoints: [
      {
        label: 'menu-planner.dminguela.es',
        href: 'https://menu-planner.dminguela.es',
        description: 'Producto de planificación nutricional con OCR y flujos asistidos por IA.',
        external: true,
        monospace: true
      },
      {
        label: 'renovaciones.dminguela.es',
        href: 'https://renovaciones.dminguela.es',
        description: 'Punto de entrada para planificación de reformas y flujos de ejecución.',
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
        lead: 'Senior Frontend Developer. Product-minded builder. Diseñando apps web pulidas, sistemas frontend modulares y workflows con IA con una intención real de producto.',
        body: 'Con experiencia en arquitectura Vue y Nuxt, migraciones de gran escala, definición de producto y liderazgo técnico, y con foco actual en homelab, pipelines OCR y automatización self-hosted.',
        ctaProjects: 'Ver proyectos',
        ctaGithub: 'GitHub',
        ctaLinkedin: 'LinkedIn',
        ctaEmail: 'Email',
        structureEyebrow: 'Estructura activa',
        structureTitle: 'ecosistema dminguela.es',
        structureStatus: 'listo para desplegar',
        structureRootLabel: 'root',
        structureRootDescription: 'Punto de entrada principal para portfolio, dirección de producto y descubrimiento de apps.',
        contactEyebrow: 'contacto'
      },
      sections: {
        projects: {
          eyebrow: 'Proyectos seleccionados',
          title: 'Apps construidas con intención de producto y profundidad técnica',
          description: 'Una selección enfocada de productos que muestra cómo el pensamiento de producto, el oficio frontend y la infraestructura práctica pueden convivir en el mismo ecosistema.'
        },
        stack: {
          eyebrow: 'Stack técnico',
          title: 'Frontend Nuxt-first con sensibilidad por automatización e infraestructura',
          description: 'La web transmite una impresión claramente frontend, manteniendo criterio de plataforma en despliegue, automatización y developer experience.'
        },
        apps: {
          eyebrow: 'Apps y enlaces',
          title: 'Un hub limpio para las aplicaciones que ya están activas',
          description: 'Aquí solo se muestran los productos actualmente disponibles junto con los enlaces profesionales principales.'
        },
        focus: {
          eyebrow: 'Foco actual',
          title: 'Construyendo sistemas prácticos alrededor de IA, OCR y arquitectura frontend mantenible',
          description: 'El trabajo frontend aquí se conecta con automatización, pipelines documentales, despliegue moderno y decisiones de producto que deben sostenerse en el mundo real.'
        }
      },
      projectCard: {
        label: 'Proyecto',
        footer: 'Parte de un ecosistema más amplio entre producto, frontend e infraestructura.',
        viewDestination: 'Ver destino'
      },
      links: {
        label: 'enlace',
        openDestination: 'Abrir destino',
        githubDescription: 'Código, experimentos y proyectos publicados desde la cuenta principal de GitHub.',
        linkedinDescription: 'Perfil profesional para networking y contexto adicional.',
        emailDescription: 'Canal directo para contacto profesional y colaboraciones.'
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
