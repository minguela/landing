import { getBlogPostBySlugUseCase } from '../application/get-blog-posts'
import { renderMarkdown } from './renderMarkdown'
import { getAllBlogPosts } from '../infrastructure/blog-repository'

export function useBlogPostPage() {
  const config = useRuntimeConfig()
  const { locale, localeMeta, toggleLocale } = useSiteI18n()
  const route = useRoute()

  const slug = computed(() => route.params.slug as string)

  const post = computed(() => getBlogPostBySlugUseCase(slug.value, locale.value))

  const title = computed(() =>
    post.value ? (locale.value === 'en' ? post.value.title : post.value.titleEs) : ''
  )

  const content = computed(() =>
    post.value ? (locale.value === 'en' ? post.value.content : post.value.contentEs) : ''
  )

  const excerpt = computed(() =>
    post.value ? (locale.value === 'en' ? post.value.excerpt : post.value.excerptEs) : ''
  )

  const tags = computed(() => post.value
    ? (locale.value === 'en' ? post.value.tags : (post.value.tagsEs ?? post.value.tags))
    : [])

  const renderedContent = computed(() => renderMarkdown(content.value))

  const allPosts = getAllBlogPosts()
  const currentIndex = computed(() => allPosts.findIndex((p) => p.slug === slug.value))
  const prevPost = computed(() => currentIndex.value > 0 ? allPosts[currentIndex.value - 1] : null)
  const nextPost = computed(() => currentIndex.value < allPosts.length - 1 ? allPosts[currentIndex.value + 1] : null)

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
