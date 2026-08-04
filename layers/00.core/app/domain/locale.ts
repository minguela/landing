export type Locale = 'en' | 'es'

export interface LocaleMeta {
  code: Locale
  htmlLang: string
  flag: string
  label: string
  switchLabel: string
}

export interface SiteConfig {
  siteUrl: string
  siteName: string
  siteDescription: string
  githubUrl: string
  linkedinUrl: string
  email: string
}
