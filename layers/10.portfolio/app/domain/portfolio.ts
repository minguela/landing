export interface Project {
  name: string
  slug: string
  tagline: string
  description: string
  highlights: string[]
  status: string
  href: string
}

export interface StackGroup {
  title: string
  items: string[]
}

export interface WorkValue {
  icon: string
  title: Record<'en' | 'es', string>
  text: Record<'en' | 'es', string>
}

export interface FocusItem {
  title: string
  text: string
}

export interface CredibilityItem {
  value: string
  label: Record<'en' | 'es', string>
}

export interface Testimonial {
  text: Record<'en' | 'es', string>
  author: string
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
  nav: Record<string, string>
  hero: Record<string, unknown>
  sections: Record<string, { eyebrow: string; title: string; description: string }>
  projectCard: { label: string; live: string; repo: string }
  credibilityLabel: string
  focusLabel: string
  finalCta: Record<string, string>
  footer: { builtWith: string; email: string }
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
