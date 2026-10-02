import type { H3Event } from 'h3'
import type { PublicContentReader } from '../../layers/30.content/app/domain/content-repository'
import { LocalContentRepository } from '../../layers/30.content/app/infrastructure/local-content-repository'
import { NeonContentRepository } from '../../layers/30.content/app/infrastructure/neon-content-repository'
import { createNeonSqlExecutor } from '../../layers/30.content/app/infrastructure/neon-sql-executor'

export interface PublicContentConfiguration {
  contentSource?: string
  databaseUrl?: string
}

function contentSourceError(statusCode: number, statusMessage: string) {
  return Object.assign(new Error(statusMessage), { statusCode, statusMessage })
}

export function createPublicContentReader(configuration: PublicContentConfiguration, injected?: PublicContentReader): PublicContentReader {
  if (
    injected
    && typeof injected.getPortfolio === 'function'
    && typeof injected.listPublishedBlogPosts === 'function'
    && typeof injected.getPublishedBlogPost === 'function'
  ) return injected

  const source = configuration.contentSource || 'local'
  if (source === 'local') return new LocalContentRepository()
  if (source !== 'neon') {
    throw contentSourceError(500, 'Invalid public content source configuration')
  }

  const databaseUrl = configuration.databaseUrl
  if (!databaseUrl) {
    throw contentSourceError(503, 'DATABASE_URL is required for Neon content storage')
  }
  return new NeonContentRepository(createNeonSqlExecutor(databaseUrl))
}

export function getPublicContentReader(event: H3Event): PublicContentReader {
  const config = useRuntimeConfig(event)
  const injected = event.context.publicContentReader as PublicContentReader | undefined
  return createPublicContentReader({
    contentSource: process.env.NUXT_CONTENT_SOURCE || config.contentSource,
    databaseUrl: process.env.DATABASE_URL || config.databaseUrl,
  }, injected)
}
