export async function usePortfolioPage() {
  const config = useRuntimeConfig()
  const { locale, localeMeta, toggleLocale } = useSiteI18n()

  const contentKey = computed(() => `public-portfolio-${locale.value}`)
  const { data: storedContent, error } = await useAsyncData(
    contentKey,
    () => $fetch('/api/content/portfolio', { query: { locale: locale.value } }),
  )
  if (error.value) throw createError({ statusCode: 503, statusMessage: 'Portfolio content is temporarily unavailable' })
  const content = computed(() => storedContent.value!)
  const siteUrl = config.public.siteUrl as string
  const siteName = config.public.siteName as string
  const githubUrl = config.public.githubUrl as string
  const linkedinUrl = config.public.linkedinUrl as string
  const email = config.public.email as string
  const emailHref = `mailto:${email}`
  const cvHref = computed(() => locale.value === 'en'
    ? '/cv/david-minguela-cv-en.pdf'
    : '/cv/david-minguela-cv.pdf')

  return {
    locale,
    localeMeta,
    toggleLocale,
    content,
    siteUrl,
    siteName,
    githubUrl,
    linkedinUrl,
    email,
    emailHref,
    cvHref,
  }
}
