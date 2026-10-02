import { renderMarkdown } from './renderMarkdown'
import { resolvePublicPost } from '../../../30.content/app/application/get-public-content'

export async function useBlogPostPage() {
  const config = useRuntimeConfig()
  const { locale, localeMeta, toggleLocale } = useSiteI18n()
  const route = useRoute()

  const slug = computed(() => route.params.slug as string)

  const postKey = computed(() => `public-blog-post-${locale.value}-${slug.value}`)
  const listKey = computed(() => `public-blog-list-${locale.value}`)
  const postRequest = useAsyncData(
    postKey,
    () => $fetch(`/api/content/blog/${encodeURIComponent(slug.value)}`, { query: { locale: locale.value } }),
  )
  const listRequest = useAsyncData(
    listKey,
    () => $fetch('/api/content/blog', { query: { locale: locale.value } }),
  )
  const [postResult, listResult] = await Promise.all([postRequest, listRequest])
  const storedPost = postResult.data
  const storedPosts = listResult.data
  if (postResult.error.value || listResult.error.value) {
    throw createError({ statusCode: 503, statusMessage: 'Blog content is temporarily unavailable' })
  }
  if (!storedPost.value?.post) throw createError({ statusCode: 404, statusMessage: 'Blog post not found' })
  const post = computed(() => resolvePublicPost(storedPost.value))

  const title = computed(() =>
    post.value ? post.value.title : ''
  )

  const content = computed(() =>
    post.value ? post.value.content : ''
  )

  const excerpt = computed(() =>
    post.value ? post.value.excerpt : ''
  )

  const tags = computed(() => post.value?.tags ?? [])

  const renderedContent = computed(() => renderMarkdown(content.value))

  const allPosts = computed(() => storedPosts.value ?? [])
  const currentIndex = computed(() => allPosts.value.findIndex((p) => p.slug === slug.value))
  const prevPost = computed(() => currentIndex.value > 0 ? allPosts.value[currentIndex.value - 1] : null)
  const nextPost = computed(() => currentIndex.value >= 0 && currentIndex.value < allPosts.value.length - 1 ? allPosts.value[currentIndex.value + 1] : null)

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
    slug,
    post,
    title,
    excerpt,
    tags,
    renderedContent,
    prevPost,
    nextPost,
    siteUrl,
    githubUrl,
    linkedinUrl,
    emailHref,
    cvHref,
  }
}
