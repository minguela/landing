import { inject } from '@vercel/analytics'
import { filterVercelAnalyticsEvent } from '~/utils/vercel-analytics'

export default defineNuxtPlugin(() => {
  inject({
    mode: import.meta.dev ? 'development' : 'production',
    beforeSend: (event) => {
      let excludedLocally = false
      try {
        excludedLocally = window.localStorage.getItem('vercel-analytics-opt-out') === 'true'
      } catch {
        // Analytics remains enabled if browser storage is unavailable.
      }

      return filterVercelAnalyticsEvent(event, {
        canonicalHost: 'dminguela.es',
        excludedLocally
      })
    }
  })
})
