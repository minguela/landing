import type { H3Event } from 'h3'
import { authorizeContentAdmin, parseContentAdminAllowlist } from '../../layers/30.content/app/domain/content-admin'
import { NeonContentRepository } from '../../layers/30.content/app/infrastructure/neon-content-repository'
import { createNeonSqlExecutor } from '../../layers/30.content/app/infrastructure/neon-sql-executor'

export function requireContentAdmin(event: H3Event): string {
  const config = useRuntimeConfig(event)
  const hasPublishableKey = Boolean(config.public.clerk?.publishableKey || config.public.clerkPublishableKey || process.env.NUXT_PUBLIC_CLERK_PUBLISHABLE_KEY || process.env.CLERK_PUBLISHABLE_KEY)
  const hasSecretKey = Boolean(config.clerk?.secretKey || process.env.NUXT_CLERK_SECRET_KEY || process.env.CLERK_SECRET_KEY)
  if (!hasPublishableKey || !hasSecretKey) {
    throw createError({ statusCode: 503, statusMessage: 'Clerk authentication is not configured' })
  }
  const allowlist = parseContentAdminAllowlist(config.contentAdminUserIds)
  if (!allowlist.length) {
    throw createError({ statusCode: 503, statusMessage: 'Content administration is not configured' })
  }
  const auth = event.context.auth?.()
  try {
    return authorizeContentAdmin({
      isAuthenticated: Boolean(auth?.isAuthenticated),
      userId: auth?.userId,
    }, allowlist)
  } catch (error) {
    const statusCode = (error as { statusCode?: number }).statusCode ?? 401
    throw createError({ statusCode, statusMessage: statusCode === 401 ? 'Authentication required' : 'Content administrator access required' })
  }
}

export function requireNeonContentAdmin(event: H3Event) {
  const config = useRuntimeConfig(event)
  const databaseUrl = config.databaseUrl || process.env.DATABASE_URL
  if (config.contentSource !== 'neon' || !databaseUrl) {
    throw createError({ statusCode: 503, statusMessage: 'Content administration requires the Neon content source' })
  }
  return new NeonContentRepository(createNeonSqlExecutor(databaseUrl))
}
