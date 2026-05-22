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

export const heroSignals = [
  'Frontend architecture',
  'Vue / Nuxt migrations',
  'AI-assisted workflows',
  'OCR pipelines',
  'Self-hosted automation'
]

export const projects: ProjectItem[] = [
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
      'An app concept focused on renovation planning, operational clarity and product structure for workflows that need to stay practical, understandable and scalable.',
    highlights: ['Product UX', 'Planning', 'Frontend workflows', 'Operations'],
    status: 'App in evolution',
    href: 'https://renovaciones.dminguela.es'
  },
  {
    name: 'Homelab OCR Stack',
    slug: '03',
    tagline: 'Self-hosted OCR and automation infrastructure for reliable pipelines',
    description:
      'A self-hosted stack built around Docker, Traefik, Cloudflare Tunnel, n8n, Watchtower, backups and monitoring to support practical automation and resilient document flows.',
    highlights: ['Docker', 'Traefik', 'Cloudflare', 'n8n + monitoring'],
    status: 'Infra + automation',
    href: 'https://status.dminguela.es'
  }
]

export const stackGroups: StackGroup[] = [
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
    items: ['Docker', 'Traefik', 'Cloudflare', 'n8n']
  },
  {
    title: 'Engineering practice',
    items: ['Unit testing', 'Integration testing', 'Product definition', 'Technical leadership']
  }
]

export const currentFocus = [
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
]

export const appEndpoints = [
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
  },
  {
    label: 'status.dminguela.es',
    href: 'https://status.dminguela.es',
    description: 'Future endpoint for service health, observability and status.',
    external: true,
    monospace: true
  },
  {
    label: 'n8n.dminguela.es',
    href: 'https://n8n.dminguela.es',
    description: 'Planned automation and orchestration subdomain.',
    external: true,
    monospace: true
  }
]
