import type { Locale } from '../domain/locale'
import { getLocaleMeta } from '../application/get-locale-meta'

export function useSiteI18n() {
  const locale = useCookie<Locale>('site-locale', {
    default: () => 'en',
    maxAge: 60 * 60 * 24 * 365,
    path: '/',
    sameSite: 'lax',
  })

  const toggleLocale = () => {
    locale.value = locale.value === 'en' ? 'es' : 'en'
  }

  const setLocale = (value: Locale) => {
    locale.value = value
  }

  const localeMeta = computed(() => getLocaleMeta(locale.value))

  return {
    locale,
    localeMeta,
    toggleLocale,
    setLocale
  }
}
