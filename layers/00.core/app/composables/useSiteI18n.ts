import type { Locale } from '../domain/locale'
import { getLocaleMeta } from '../application/get-locale-meta'

export function useSiteI18n() {
  const localeCookie = useCookie<Locale>('site-locale', {
    default: () => 'en',
    maxAge: 60 * 60 * 24 * 365,
    path: '/',
    sameSite: 'lax',
  })
  const locale = useState<Locale>('site-locale', () => localeCookie.value)

  const setLocale = (value: Locale) => {
    locale.value = value
    localeCookie.value = value
  }

  const toggleLocale = () => {
    setLocale(locale.value === 'en' ? 'es' : 'en')
  }

  const localeMeta = computed(() => getLocaleMeta(locale.value))

  return {
    locale,
    localeMeta,
    toggleLocale,
    setLocale
  }
}
