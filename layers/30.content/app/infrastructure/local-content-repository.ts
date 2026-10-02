import type { Locale } from '../../../00.core/app/domain/locale'
import type { PublicContentReader, BlogPostSummary } from '../domain/content-repository'
import { getPortfolioContent } from '../../../10.portfolio/app/infrastructure/portfolio-data'
import { getAllBlogPosts, getBlogPostBySlug } from '../../../20.blog/app/infrastructure/blog-repository'

export class LocalContentRepository implements PublicContentReader {
  async getPortfolio(locale: Locale) {
    return getPortfolioContent(locale)
  }

  async listPublishedBlogPosts(locale: Locale): Promise<BlogPostSummary[]> {
    return getAllBlogPosts().map((post) => ({
      slug: post.slug,
      title: locale === 'en' ? post.title : post.titleEs,
      excerpt: locale === 'en' ? post.excerpt : post.excerptEs,
      date: post.date,
      readTime: post.readTime,
      tags: [...post.tags],
    }))
  }

  async getPublishedBlogPost(slug: string, locale: Locale) {
    const post = getBlogPostBySlug(slug)
    if (!post) return undefined

    return {
      slug: post.slug,
      title: locale === 'en' ? post.title : post.titleEs,
      excerpt: locale === 'en' ? post.excerpt : post.excerptEs,
      content: locale === 'en' ? post.content : post.contentEs,
      date: post.date,
      readTime: post.readTime,
      tags: [...post.tags],
    }
  }
}
