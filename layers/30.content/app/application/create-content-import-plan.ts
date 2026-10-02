import { createHash } from 'node:crypto'
import type { Locale } from '../../../00.core/app/domain/locale'
import { getPortfolioContent } from '../../../10.portfolio/app/infrastructure/portfolio-data'
import type { PortfolioContent } from '../../../10.portfolio/app/domain/portfolio'
import { getAllBlogPosts } from '../../../20.blog/app/infrastructure/blog-repository'
import type { ContentImportWriter } from '../domain/content-repository'
import type { LocalizedBlogPost } from '../domain/content-repository'

const locales: Locale[] = ['en', 'es']

export interface ContentImportPlan {
  portfolio: Array<{ locale: Locale; content: PortfolioContent; sourceHash: string }>
  blog: Array<LocalizedBlogPost & { locale: Locale }>
}

function hash(value: unknown): string {
  return createHash('sha256').update(JSON.stringify(value)).digest('hex')
}

export function createContentImportPlan(): ContentImportPlan {
  const portfolio = locales.map((locale) => {
    const content = getPortfolioContent(locale)
    return { locale, content, sourceHash: hash(content) }
  })

  const blog = getAllBlogPosts().flatMap((post) => locales.map((locale) => ({
    slug: post.slug,
    locale,
    title: locale === 'en' ? post.title : post.titleEs,
    excerpt: locale === 'en' ? post.excerpt : post.excerptEs,
    date: post.date,
    readTime: post.readTime,
    tags: [...post.tags],
    content: locale === 'en' ? post.content : post.contentEs,
  })))

  const projectKeys = portfolio.flatMap(({ locale, content }) =>
    content.projects.map((project) => `${locale}:${project.slug}`),
  )
  const blogKeys = blog.map(({ locale, slug }) => `${locale}:${slug}`)

  if (new Set(projectKeys).size !== projectKeys.length || new Set(blogKeys).size !== blogKeys.length) {
    throw new Error('Content import source contains duplicate locale/slug keys')
  }

  return { portfolio, blog }
}

export async function importContentSnapshot(plan: ContentImportPlan, writer: ContentImportWriter) {
  return writer.transaction(async (transaction) => {
    for (const entry of plan.portfolio) {
      await transaction.upsertPortfolioSnapshot(entry.locale, entry.content, entry.sourceHash)
      for (const project of entry.content.projects) {
        await transaction.upsertProject(project.slug, entry.locale, project)
      }
    }

    const posts = new Map<string, LocalizedBlogPost & { locale: Locale }>()
    for (const translation of plan.blog) {
      const existing = posts.get(translation.slug)
      if (!existing) {
        posts.set(translation.slug, translation)
        await transaction.upsertBlogPost(translation.slug, translation.date, translation.readTime)
      }
      await transaction.upsertBlogTranslation(translation.slug, translation.locale, {
        title: translation.title,
        excerpt: translation.excerpt,
        content: translation.content,
        tags: translation.tags,
      })
    }

    return {
      portfolioLocales: plan.portfolio.length,
      projects: plan.portfolio.reduce((total, entry) => total + entry.content.projects.length, 0),
      blogPosts: posts.size,
      blogTranslations: plan.blog.length,
    }
  })
}
