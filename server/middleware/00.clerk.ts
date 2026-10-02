import { clerkMiddleware } from '@clerk/nuxt/server'

const authorizedParties = (process.env.NUXT_CLERK_AUTHORIZED_PARTIES || process.env.NUXT_PUBLIC_SITE_URL || 'https://dminguela.es')
  .split(',')
  .map(origin => origin.trim())
  .filter(Boolean)

const authenticateClerkRequest = clerkMiddleware({ authorizedParties })

export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)
  const hasPublishableKey = Boolean(config.public.clerk?.publishableKey || config.public.clerkPublishableKey || process.env.NUXT_PUBLIC_CLERK_PUBLISHABLE_KEY || process.env.CLERK_PUBLISHABLE_KEY)
  const hasSecretKey = Boolean(config.clerk?.secretKey || process.env.NUXT_CLERK_SECRET_KEY || process.env.CLERK_SECRET_KEY)
  // Clerk is optional for public reads. Admin handlers fail closed when absent.
  if (!hasPublishableKey || !hasSecretKey) return
  // Clerk 3.1.8 bundles the same H3 minor in its type surface; both values are
  // the shared runtime H3 event, but TypeScript treats their nested classes as
  // distinct module identities.
  return authenticateClerkRequest(event as Parameters<typeof authenticateClerkRequest>[0])
})
