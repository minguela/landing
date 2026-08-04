import type { Locale } from '../domain/locale'

export function useSiteI18n() {
  const locale = useState<Locale>('site-locale', () => 'en')

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
