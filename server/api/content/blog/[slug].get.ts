import type { Locale } from '../../../../layers/00.core/app/domain/locale'
import { getPublishedBlogPostUseCase } from '../../../../layers/30.content/app/application/get-public-content'
import { getPublicContentReader } from '../../../utils/public-content-reader'

export default defineEventHandler(async (event) => {
  const requestedLocale = getQuery(event).locale
  const locale: Locale = requestedLocale === 'es' ? 'es' : 'en'
  const slug = getRouterParam(event, 'slug')
  if (!slug) throw createError({ statusCode: 400, statusMessage: 'A post slug is required' })

  const post = await getPublishedBlogPostUseCase(getPublicContentReader(event), slug, locale)
  return { post: post ?? null }
})
