type AnalyticsNoop = (..._args: unknown[]) => void

const noop: AnalyticsNoop = () => {}

/**
 * Compatibility for archived page snapshots. Production analytics now uses
 * automatic page views only; custom events are not enabled on the Hobby plan.
 */
export function useAnalytics() {
  return {
    trackPageView: noop,
    trackLocaleSwitch: noop,
    trackHeroCta: noop,
    trackAppClick: noop,
    trackProfileClick: noop,
    trackCvDownload: noop,
    trackSectionView: noop
  }
}
