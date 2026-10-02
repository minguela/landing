import type { Locale } from '../../../00.core/app/domain/locale'
import type { Project, ProjectAccent, ProjectArtifact, ProjectAvailability } from '../../../10.portfolio/app/domain/portfolio'

export interface AdminBlogTranslation {
  title: string
  excerpt: string
  content: string
  tags: string[]
}

export interface AdminBlogPostInput {
  slug: string
  date: string
  readTime: string
  published: boolean
  translations: Record<Locale, AdminBlogTranslation>
}

export interface AdminProjectInput {
  slug: string
  locale: Locale
  published: boolean
  project: Project
}

export class InvalidContentInputError extends Error {
  constructor(message: string) {
    super(`Invalid content input: ${message}`)
    this.name = 'InvalidContentInputError'
  }
}

function invalid(message: string): never {
  throw new InvalidContentInputError(message)
}

function record(value: unknown, name: string): Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) invalid(`${name} must be an object`)
  return value as Record<string, unknown>
}

function text(value: unknown, name: string, max = 4000): string {
  if (typeof value !== 'string' || !value.trim() || value.length > max || /<\/?[a-z][^>]*>/i.test(value)) {
    invalid(`${name} must be non-empty plain text under ${max} characters`)
  }
  return value.trim()
}

function textArray(value: unknown, name: string, maxItems = 30): string[] {
  if (!Array.isArray(value) || value.length > maxItems) invalid(`${name} must be an array with at most ${maxItems} entries`)
  return value.map((item, index) => text(item, `${name}[${index}]`, 120))
}

export function parseContentAdminAllowlist(value: string | undefined): string[] {
  return [...new Set((value ?? '').split(',').map(id => id.trim()).filter(Boolean))]
}

export function authorizeContentAdmin(auth: { isAuthenticated: boolean; userId?: string | null }, allowlist: string[]): string {
  if (!auth.isAuthenticated || !auth.userId) {
    throw Object.assign(new Error('Authentication required'), { statusCode: 401 })
  }
  if (!allowlist.includes(auth.userId)) {
    throw Object.assign(new Error('Content administrator access required'), { statusCode: 403 })
  }
  return auth.userId
}

const locales: Locale[] = ['en', 'es']
const accents: ProjectAccent[] = ['cobalt', 'orange', 'lime', 'violet', 'red', 'aqua']
const artifacts: ProjectArtifact[] = ['journey', 'handoff', 'pipeline', 'evidence', 'filesystem', 'timeline']
const availability: ProjectAvailability[] = ['public', 'preview', 'private', 'local']

export function validateProjectInput(value: unknown): AdminProjectInput {
  const input = record(value, 'project input')
  const project = record(input.project, 'project')
  const slug = text(input.slug, 'slug', 80)
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) invalid('slug has invalid format')
  if (!locales.includes(input.locale as Locale)) invalid('locale must be en or es')
  if (typeof input.published !== 'boolean') invalid('published must be boolean')
  const projectSlug = text(project.slug, 'project.slug', 80)
  if (projectSlug !== slug) invalid('project slug must match the route slug')
  const projectAvailability = text(project.availability, 'project.availability') as ProjectAvailability
  const accent = text(project.accent, 'project.accent') as ProjectAccent
  const artifact = text(project.artifact, 'project.artifact') as ProjectArtifact
  if (!availability.includes(projectAvailability)) invalid('unsupported project availability')
  if (!accents.includes(accent)) invalid('unsupported project accent')
  if (!artifacts.includes(artifact)) invalid('unsupported project artifact')
  if (project.href !== undefined && project.href !== '' && (typeof project.href !== 'string' || !/^https:\/\//.test(project.href))) invalid('project.href must be an HTTPS URL')
  if (project.featured !== undefined && typeof project.featured !== 'boolean') invalid('project.featured must be boolean')
  const cleanProject: Project = {
    name: text(project.name, 'project.name', 120),
    slug,
    domain: text(project.domain, 'project.domain', 120),
    tagline: text(project.tagline, 'project.tagline', 300),
    description: text(project.description, 'project.description', 2000),
    challenge: text(project.challenge, 'project.challenge', 2000),
    response: text(project.response, 'project.response', 2000),
    proof: textArray(project.proof, 'project.proof'),
    technologies: textArray(project.technologies, 'project.technologies'),
    status: text(project.status, 'project.status', 80),
    availability: projectAvailability,
    accent,
    artifact,
    ...(project.href ? { href: text(project.href, 'project.href', 500) } : {}),
    ...(project.featured === undefined ? {} : { featured: project.featured }),
  }
  return { slug, locale: input.locale as Locale, published: input.published, project: cleanProject }
}

function validateTranslation(value: unknown, locale: Locale): AdminBlogTranslation {
  const translation = record(value, `translations.${locale}`)
  return {
    title: text(translation.title, `translations.${locale}.title`, 180),
    excerpt: text(translation.excerpt, `translations.${locale}.excerpt`, 500),
    content: text(translation.content, `translations.${locale}.content`, 30000),
    tags: textArray(translation.tags, `translations.${locale}.tags`, 15),
  }
}

export function validateBlogPostInput(value: unknown): AdminBlogPostInput {
  const input = record(value, 'blog post')
  const slug = text(input.slug, 'slug', 100)
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) invalid('slug has invalid format')
  const date = text(input.date, 'date', 10)
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || new Date(`${date}T00:00:00.000Z`).toISOString().slice(0, 10) !== date) invalid('date must be a valid ISO calendar date')
  const readTime = text(input.readTime, 'readTime', 40)
  if (typeof input.published !== 'boolean') invalid('published must be boolean')
  const translations = record(input.translations, 'translations')
  return {
    slug,
    date,
    readTime,
    published: input.published,
    translations: { en: validateTranslation(translations.en, 'en'), es: validateTranslation(translations.es, 'es') },
  }
}
