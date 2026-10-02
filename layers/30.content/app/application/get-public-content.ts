import type { Locale } from '../../../00.core/app/domain/locale'
import type { LocalizedBlogPost, PublicContentReader } from '../domain/content-repository'

export interface PublicBlogPostResponse {
  post: LocalizedBlogPost | null
}

export function resolvePublicPost(response: PublicBlogPostResponse | null | undefined, localFallback?: LocalizedBlogPost) {
  if (response) return response.post ?? undefined
  return localFallback
}

export function getPublicPortfolioUseCase(reader: PublicContentReader, locale: Locale) {
  return reader.getPortfolio(locale)
}

export function listPublishedBlogPostsUseCase(reader: PublicContentReader, locale: Locale) {
  return reader.listPublishedBlogPosts(locale)
}

export function getPublishedBlogPostUseCase(reader: PublicContentReader, slug: string, locale: Locale) {
  return reader.getPublishedBlogPost(slug, locale)
}
