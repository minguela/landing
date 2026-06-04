import { track } from '@vercel/analytics'

type TrackPayload = Record<string, string | number | boolean | null | undefined>

export function useAnalytics() {
  const send = (event: string, payload: TrackPayload = {}) => {
    if (!process.client) return
    try {
      track(event, payload)
    } catch {
      // no-op
    }
  }

  return {
    trackPageView: (locale: string, page = '/') => {
      if (!process.client) return

      const params = new URLSearchParams(window.location.search)
      const referrerDomain = (() => {
        try {
          return document.referrer ? new URL(document.referrer).hostname : 'direct'
        } catch {
          return 'direct'
        }
      })()

      send('page_view', {
        page,
        locale,
        referrer_domain: referrerDomain,
        utm_source: params.get('utm_source') || undefined,
        utm_medium: params.get('utm_medium') || undefined,
        utm_campaign: params.get('utm_campaign') || undefined
      })
    },
    trackLocaleSwitch: (fromLocale: string, toLocale: string) => send('locale_switch', { from_locale: fromLocale, to_locale: toLocale, location: 'header' }),
    trackHeroCta: (ctaId: string, ctaLabel: string, destination: string, locale: string) =>
      send('cta_click', { cta_id: ctaId, cta_label: ctaLabel, location: 'hero', destination, locale, external: true }),
    trackAppClick: (appId: 'menu_planner' | 'renovaciones', destination: string, locale: string, location: 'projects' | 'apps') =>
      send('app_link_click', { app_id: appId, destination, locale, location }),
    trackProfileClick: (linkType: 'github' | 'linkedin' | 'email', destination: string, locale: string, location: string) =>
      send('profile_link_click', { link_type: linkType, destination, locale, location }),
    trackCvDownload: (locale: string, location: string, file = '/cv/david-minguela-cv.pdf') =>
      send('cv_download_click', { locale, location, file }),
    trackSectionView: (sectionId: string, locale: string, scrollPercent: number) =>
      send('section_view', { section_id: sectionId, locale, scroll_percent: scrollPercent })
  }
}
