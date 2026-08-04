import type { Locale } from '#layers/00.core/app/domain/locale'
import type { BlogPost } from '../domain/blog-post'
import { getAllBlogPosts, getBlogPostBySlug as fetchBySlug } from '../infrastructure/blog-repository'

export interface BlogPostView {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
}

function toView(post: BlogPost, locale: Locale): BlogPostView {
  return {
    slug: post.slug,
    title: locale === 'es' ? post.titleEs : post.title,
    excerpt: locale === 'es' ? post.excerptEs : post.excerpt,
    date: post.date,
    readTime: post.readTime,
    tags: post.tags,
  }
}

export function getBlogPostsUseCase(locale: Locale): BlogPostView[] {
  return getAllBlogPosts().map(post => toView(post, locale))
}

export function getBlogPostBySlugUseCase(slug: string, locale: Locale): BlogPost | undefined {
  return fetchBySlug(slug)
}
