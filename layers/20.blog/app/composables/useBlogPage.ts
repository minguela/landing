export async function useBlogPage() {
  const config = useRuntimeConfig()
  const { locale, localeMeta, toggleLocale } = useSiteI18n()

  const postsKey = computed(() => `public-blog-list-${locale.value}`)
  const { data: storedPosts, error } = await useAsyncData(
    postsKey,
    () => $fetch('/api/content/blog', { query: { locale: locale.value } }),
  )
  if (error.value) throw createError({ statusCode: 503, statusMessage: 'Blog content is temporarily unavailable' })
  const sortedPosts = computed(() => storedPosts.value ?? [])

  const siteUrl = config.public.siteUrl as string
  const githubUrl = config.public.githubUrl as string
  const linkedinUrl = config.public.linkedinUrl as string
  const emailHref = `mailto:${config.public.email}`
  const cvHref = computed(() => locale.value === 'en'
    ? '/cv/david-minguela-cv-en.pdf'
    : '/cv/david-minguela-cv.pdf')

  return {
    locale,
    localeMeta,
    toggleLocale,
    sortedPosts,
    siteUrl,
    githubUrl,
    linkedinUrl,
    emailHref,
    cvHref,
  }
}
