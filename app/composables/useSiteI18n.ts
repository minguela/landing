type Locale = 'en' | 'es'

export function useSiteI18n() {
  const localeCookie = useCookie<Locale>('site-locale', {
    default: () => 'en',
    maxAge: 60 * 60 * 24 * 365,
    path: '/',
    sameSite: 'lax'
  })
  const locale = useState<Locale>('site-locale', () => localeCookie.value)

  const setLocale = (value: Locale) => {
    locale.value = value
    localeCookie.value = value
  }

  const toggleLocale = () => {
    setLocale(locale.value === 'en' ? 'es' : 'en')
  }

  const localeMeta = computed(() => {
    if (locale.value === 'es') {
      return {
        code: 'es' as const,
        htmlLang: 'es',
        flag: '🇪🇸',
        label: 'Español',
        switchLabel: 'Cambiar a inglés'
      }
    }

    return {
      code: 'en' as const,
      htmlLang: 'en',
      flag: '🇬🇧',
      label: 'English',
      switchLabel: 'Switch to Spanish'
    }
  })

  return {
    locale,
    localeMeta,
    toggleLocale,
    setLocale
  }
}
