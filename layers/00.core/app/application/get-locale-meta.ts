import type { Locale, LocaleMeta } from '../domain/locale'

const localeMetaMap: Record<Locale, LocaleMeta> = {
  es: {
    code: 'es',
    htmlLang: 'es',
    flag: '🇪🇸',
    label: 'Español',
    switchLabel: 'Cambiar a inglés'
  },
  en: {
    code: 'en',
    htmlLang: 'en',
    flag: '🇬🇧',
    label: 'English',
    switchLabel: 'Switch to Spanish'
  }
}

export function getLocaleMeta(locale: Locale): LocaleMeta {
  return localeMetaMap[locale]
}
