import { getPortfolioContentUseCase } from '../application/get-portfolio-content'

export function usePortfolioPage() {
  const config = useRuntimeConfig()
  const { locale, localeMeta, toggleLocale } = useSiteI18n()

  const content = computed(() => getPortfolioContentUseCase(locale.value))
  const siteUrl = config.public.siteUrl as string
  const githubUrl = config.public.githubUrl as string
  const linkedinUrl = config.public.linkedinUrl as string
  const email = config.public.email as string
  const emailHref = `mailto:${email}`
  const cvHref = '/cv/david-minguela-cv.pdf'

  return {
    locale,
    localeMeta,
    toggleLocale,
    content,
    siteUrl,
    githubUrl,
    linkedinUrl,
    email,
    emailHref,
    cvHref,
  }
}
