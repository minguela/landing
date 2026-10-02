import { getBlogPostsUseCase } from '../application/get-blog-posts'

export function useBlogPage() {
  const config = useRuntimeConfig()
  const { locale, localeMeta, toggleLocale } = useSiteI18n()

  const sortedPosts = computed(() => getBlogPostsUseCase(locale.value))

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
