type Locale = 'en' | 'es'

export function useSiteI18n() {
  const locale = useState<Locale>('site-locale', () => 'en')

  const toggleLocale = () => {
    locale.value = locale.value === 'en' ? 'es' : 'en'
  }

  const setLocale = (value: Locale) => {
    locale.value = value
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
