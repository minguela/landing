import type { PortfolioContent } from '../domain/portfolio'

// Static portfolio data — source of truth
const portfolioDataEn: PortfolioContent = {
  copy: {
    seo: {
      title: 'David Minguela — Senior Frontend Developer',
      description: 'Portfolio and technical hub: frontend architecture, AI-assisted workflows, OCR pipelines, and self-hosted automation.'
    },
    nav: {
      projects: 'Projects',
      work: 'Work',
      stack: 'Stack'
    },
    hero: {
      greeting: "Hey, I'm David",
      title: 'Senior Frontend Developer',
      subtitle: 'I design and build frontend systems that scale — from architecture to delivery. Specialised in Nuxt, Vue, TypeScript, AI-assisted workflows, OCR pipelines and self-hosted automation.',
      cta: 'View my projects',
      cv: 'Download CV'
    },
    sections: {
      projects: {
        eyebrow: 'Projects',
        title: 'What I build',
        description: 'Products, tools and infrastructure I design, build and maintain.'
      },
      work: {
        eyebrow: 'How I work',
        title: 'Product-minded engineering',
        description: 'I bring product thinking to frontend architecture — building with intent, measuring outcomes, and keeping the user visible at every step.'
      },
      stack: {
        eyebrow: 'Stack',
        title: 'Technologies I work with',
        description: 'The tools and platforms I use daily to build, deploy and maintain products.'
      },
      focus: {
        eyebrow: 'Current focus',
        title: 'What I am working on',
        description: 'Areas where I am deepening expertise and building products.'
      }
    },
    projectCard: {
      label: 'Project',
      live: 'Live',
      repo: 'Repo'
    },
    credibilityLabel: 'Trusted by teams building',
    focusLabel: 'Currently focused on',
    finalCta: {
      title: 'Let\'s build something together',
      subtitle: 'I\'m open to collaborating on frontend architecture, AI-assisted workflows, and infrastructure projects.',
      email: 'Email me',
      cv: 'See my CV'
    },
    footer: {
      builtWith: 'Built with Nuxt + Tailwind CSS',
      email: 'minguela9109@gmail.com'
    }
  },
  projects: [
    {
      name: 'Menu Planner',
      slug: '01',
      tagline: 'Nutrition planning app with OCR, AI and resilient delivery flows',
      description: 'A nutrition planning product that connects self-hosted OCR, AI workflows, Supabase and Vercel with automatic fallback to keep the user experience stable end to end.',
      highlights: ['OCR + AI', 'Supabase', 'Vercel', 'Docker fallback'],
      status: 'Product + infrastructure',
      href: 'https://menu-planner.dminguela.es'
    },
    {
      name: 'Renovaciones App',
      slug: '02',
      tagline: 'Planning workflows for renovation and execution-heavy projects',
      description: 'An app concept focused on renovation planning, operational clarity and product structure for workflows that need to stay practical, understandable and scalable.',
      highlights: ['Product UX', 'Planning', 'Frontend workflows', 'Operations'],
      status: 'App in evolution',
      href: 'https://renovaciones.dminguela.es'
    },
    {
      name: 'Homelab OCR Stack',
      slug: '03',
      tagline: 'Self-hosted OCR and automation infrastructure for reliable pipelines',
      description: 'A self-hosted stack built around Docker, Traefik, Cloudflare Tunnel, n8n, Watchtower, backups and monitoring to support practical automation and resilient document flows.',
      highlights: ['Docker', 'Traefik', 'Cloudflare', 'n8n + monitoring'],
      status: 'Infra + automation',
      href: 'https://status.dminguela.es'
    }
  ],
  credibility: [
    { value: '3+', label: { en: 'Production apps', es: 'Apps en producción' } },
    { value: '2', label: { en: 'AI pipelines', es: 'Pipelines de IA' } },
    { value: '14', label: { en: 'Docker services', es: 'Servicios Docker' } },
    { value: '6', label: { en: 'Domains managed', es: 'Dominios gestionados' } }
  ],
  workValues: [
    {
      icon: 'ph:brackets-curly',
      title: { en: 'Architecture first', es: 'Arquitectura primero' },
      text: { en: 'I design systems that stay maintainable as products scale. Layers, boundaries, and clear contracts.', es: 'Diseño sistemas que se mantienen mantenibles cuando los productos escalan. Capas, límites y contratos claros.' }
    },
    {
      icon: 'ph:users-three',
      title: { en: 'Product thinking', es: 'Pensamiento de producto' },
      text: { en: 'I connect engineering decisions with user outcomes. Every architectural choice ties back to the product.', es: 'Conecto decisiones de ingeniería con resultados de usuario. Cada elección arquitectónica se vincula al producto.' }
    },
    {
      icon: 'ph:robot',
      title: { en: 'AI-augmented', es: 'Aumentado con IA' },
      text: { en: 'I integrate AI where it reduces friction — OCR pipelines, automated workflows, intelligent assistants.', es: 'Integro IA donde reduce fricción — pipelines OCR, flujos automatizados, asistentes inteligentes.' }
    },
    {
      icon: 'ph:server',
      title: { en: 'Self-hosted', es: 'Self-hosted' },
      text: { en: 'I run my own infrastructure with Docker, Traefik and Cloudflare. Full control, zero vendor lock-in.', es: 'Gestiono mi propia infraestructura con Docker, Traefik y Cloudflare. Control total, cero dependencia de proveedor.' }
    }
  ],
  stackGroups: [
    { title: 'Frontend core', items: ['Nuxt', 'Vue', 'TypeScript', 'Tailwind'] },
    { title: 'Product + platform', items: ['Supabase', 'Vercel', 'GitHub Actions', 'OpenAI'] },
    { title: 'Infra + automation', items: ['Docker', 'Traefik', 'Cloudflare', 'n8n'] }
  ],
  currentFocus: [
    { title: 'AI-assisted workflows', text: 'Designing interfaces and systems where AI reduces friction, supports decisions and fits cleanly into real product workflows.' },
    { title: 'OCR pipelines', text: 'Building OCR flows with fallback, observability and practical delivery so documents become usable product inputs.' },
    { title: 'Self-hosted automation', text: 'Exploring controllable, efficient infrastructure for automation that benefits from owning the operational layer.' },
    { title: 'Product-oriented frontend architecture', text: 'Creating frontend systems that scale in clarity, speed, maintainability and developer experience as products evolve.' }
  ],
  heroSignals: ['Frontend architecture', 'AI-assisted workflows', 'OCR pipelines', 'Self-hosted automation'],
  appEndpoints: [
    { label: 'menu-planner.dminguela.es', href: 'https://menu-planner.dminguela.es', description: 'Nutrition planning product with OCR and AI-assisted flows.', external: true, monospace: true },
    { label: 'renovaciones.dminguela.es', href: 'https://renovaciones.dminguela.es', description: 'Entry point for renovation planning and execution workflows.', external: true, monospace: true },
    { label: 'status.dminguela.es', href: 'https://status.dminguela.es', description: 'Future endpoint for service health, observability and status.', external: true, monospace: true },
    { label: 'n8n.dminguela.es', href: 'https://n8n.dminguela.es', description: 'Planned automation and orchestration subdomain.', external: true, monospace: true }
  ]
}

const portfolioDataEs: PortfolioContent = {
  ...portfolioDataEn,
  copy: {
    ...portfolioDataEn.copy,
    seo: {
      title: 'David Minguela — Senior Frontend Developer',
      description: 'Portfolio y hub técnico: arquitectura frontend, flujos asistidos por IA, pipelines OCR y automatización self-hosted.'
    },
    nav: {
      projects: 'Proyectos',
      work: 'Trabajo',
      stack: 'Stack'
    },
    hero: {
      greeting: 'Hola, soy David',
      title: 'Senior Frontend Developer',
      subtitle: 'Diseño y construyo sistemas frontend que escalan — de la arquitectura a la entrega. Especializado en Nuxt, Vue, TypeScript, flujos con IA, pipelines OCR y automatización self-hosted.',
      cta: 'Ver mis proyectos',
      cv: 'Descargar CV'
    },
    sections: {
      projects: { eyebrow: 'Proyectos', title: 'Lo que construyo', description: 'Productos, herramientas e infraestructura que diseño, construyo y mantengo.' },
      work: { eyebrow: 'Cómo trabajo', title: 'Ingeniería con mirada de producto', description: 'Aporto pensamiento de producto a la arquitectura frontend — construyendo con intención, midiendo resultados y manteniendo al usuario visible en cada paso.' },
      stack: { eyebrow: 'Stack', title: 'Tecnologías con las que trabajo', description: 'Las herramientas y plataformas que uso a diario para construir, desplegar y mantener productos.' },
      focus: { eyebrow: 'Foco actual', title: 'En qué estoy trabajando', description: 'Áreas donde estoy profundizando experiencia y construyendo productos.' }
    },
    projectCard: { label: 'Proyecto', live: 'Ver', repo: 'Repo' },
    credibilityLabel: 'Respaldado por equipos que construyen',
    focusLabel: 'Actualmente centrado en',
    finalCta: {
      title: 'Construyamos algo juntos',
      subtitle: 'Estoy abierto a colaborar en arquitectura frontend, flujos asistidos por IA y proyectos de infraestructura.',
      email: 'Escríbeme',
      cv: 'Ver mi CV'
    },
    footer: {
      builtWith: 'Hecho con Nuxt + Tailwind CSS',
      email: 'minguela9109@gmail.com'
    }
  }
}

const portfolioContentMap: Record<'en' | 'es', PortfolioContent> = {
  en: portfolioDataEn,
  es: portfolioDataEs
}

export function getPortfolioContent(locale: 'en' | 'es'): PortfolioContent {
  return portfolioContentMap[locale] || portfolioContentMap.en
}
