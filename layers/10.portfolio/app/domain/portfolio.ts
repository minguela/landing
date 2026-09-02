export type ProjectAvailability = 'public' | 'preview' | 'private' | 'local'

export type ProjectAccent = 'cobalt' | 'orange' | 'lime' | 'violet' | 'red' | 'aqua'

export type ProjectArtifact = 'journey' | 'handoff' | 'pipeline' | 'evidence' | 'filesystem' | 'timeline'

export interface Project {
  name: string
  slug: string
  domain: string
  tagline: string
  description: string
  challenge: string
  response: string
  proof: string[]
  technologies: string[]
  status: string
  availability: ProjectAvailability
  href?: string
  accent: ProjectAccent
  artifact: ProjectArtifact
  featured?: boolean
}

export interface StackGroup {
  title: string
  description: string
  items: string[]
}

export interface WorkValue {
  title: string
  text: string
}

export interface FocusItem {
  title: string
  text: string
  marker: string
}

export interface CredibilityItem {
  value: string
  label: Record<'en' | 'es', string>
}

export interface LinkItem {
  label: string
  href: string
  description: string
  external?: boolean
  monospace?: boolean
}

export interface PortfolioContentCopy {
  seo: { title: string; description: string }
  nav: { projects: string; work: string; stack: string; notes: string; contact: string }
  hero: {
    eyebrow: string
    greeting: string
    title: string
    titleAccent: string
    role: string
    subtitle: string
    cta: string
    cv: string
    github: string
    linkedin: string
    email: string
    indexLabel: string
    indexHint: string
  }
  sections: {
    projects: { eyebrow: string; title: string; description: string }
    work: { eyebrow: string; title: string; description: string }
    stack: { eyebrow: string; title: string; description: string }
    focus: { eyebrow: string; title: string; description: string }
  }
  projectCard: {
    label: string
    challenge: string
    response: string
    evidence: string
    public: string
    preview: string
    private: string
    local: string
  }
  credibilityLabel: string
  focusLabel: string
  buildNotes: {
    eyebrow: string
    title: string
    description: string
    now: string
    blog: string
  }
  finalCta: {
    eyebrow: string
    title: string
    subtitle: string
    team: string
    client: string
    email: string
    cv: string
  }
  footer: { builtWith: string; email: string; note: string }
}

export interface PortfolioContent {
  copy: PortfolioContentCopy
  projects: Project[]
  credibility: CredibilityItem[]
  workValues: WorkValue[]
  stackGroups: StackGroup[]
  currentFocus: FocusItem[]
  heroSignals: string[]
  appEndpoints: LinkItem[]
}
