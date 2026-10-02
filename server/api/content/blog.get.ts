import type { Locale } from '../../../layers/00.core/app/domain/locale'
import { listPublishedBlogPostsUseCase } from '../../../layers/30.content/app/application/get-public-content'
import { getPublicContentReader } from '../../utils/public-content-reader'

export default defineEventHandler(async (event) => {
  const requestedLocale = getQuery(event).locale
  const locale: Locale = requestedLocale === 'es' ? 'es' : 'en'
  return listPublishedBlogPostsUseCase(getPublicContentReader(event), locale)
})
