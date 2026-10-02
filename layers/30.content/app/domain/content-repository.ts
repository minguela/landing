import type { Locale } from '../../../00.core/app/domain/locale'
import type { PortfolioContent } from '../../../10.portfolio/app/domain/portfolio'

export interface BlogPostSummary {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
}

export interface LocalizedBlogPost extends BlogPostSummary {
  content: string
}

export interface PublicContentReader {
  getPortfolio(locale: Locale): Promise<PortfolioContent>
  listPublishedBlogPosts(locale: Locale): Promise<BlogPostSummary[]>
  getPublishedBlogPost(slug: string, locale: Locale): Promise<LocalizedBlogPost | undefined>
}

export interface ContentImportWriter {
  transaction<T>(work: (writer: ContentImportWriter) => Promise<T>): Promise<T>
  upsertPortfolioSnapshot(locale: Locale, content: PortfolioContent, sourceHash: string): Promise<void>
  upsertProject(slug: string, locale: Locale, project: PortfolioContent['projects'][number]): Promise<void>
  upsertBlogPost(slug: string, date: string, readTime: string): Promise<void>
  upsertBlogTranslation(slug: string, locale: Locale, translation: Pick<LocalizedBlogPost, 'title' | 'excerpt' | 'content' | 'tags'>): Promise<void>
}

export interface AdminContentRepository {
  listAdminProjects(): Promise<Array<{ slug: string; locale: Locale; published: boolean; project: PortfolioContent['projects'][number] }>>
  listAdminBlogPosts(): Promise<Array<{ slug: string; date: string; readTime: string; published: boolean; translations: Partial<Record<Locale, LocalizedBlogPost>> }>>
  saveAdminProject(slug: string, locale: Locale, project: PortfolioContent['projects'][number], published: boolean): Promise<void>
  saveAdminBlogPost(post: { slug: string; date: string; readTime: string; published: boolean; translations: Record<Locale, Pick<LocalizedBlogPost, 'title' | 'excerpt' | 'content' | 'tags'>> }): Promise<void>
}
