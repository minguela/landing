import type { BeforeSendEvent } from '@vercel/analytics'

const publicPaths = new Set(['/', '/now', '/blog'])
const CANONICAL_ANALYTICS_HOST = 'www.dminguela.es'

export function filterVercelAnalyticsEvent(
  event: BeforeSendEvent,
  options: { canonicalHost?: string; excludedLocally?: boolean } = {}
): BeforeSendEvent | null {
  if (options.excludedLocally) return null

  let url: URL
  try {
    url = new URL(event.url)
  } catch {
    return null
  }

  const canonicalOrigin = `https://${options.canonicalHost ?? CANONICAL_ANALYTICS_HOST}`
  if (url.origin !== canonicalOrigin) return null

  let pathname = url.pathname.replace(/\/$/, '') || '/'
  if (/^\/blog\/[^/]+$/.test(pathname)) {
    pathname = '/blog/:slug'
  } else if (!publicPaths.has(pathname)) {
    return null
  }

  return { ...event, url: `${canonicalOrigin}${pathname}` }
}
