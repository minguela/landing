<script setup lang="ts">
import { blogPosts, type BlogPost } from '~~/data/blog'

const config = useRuntimeConfig()
const { locale, localeMeta, toggleLocale } = useSiteI18n()
const analytics = useAnalytics()
const route = useRoute()

const siteUrl = config.public.siteUrl
const githubUrl = config.public.githubUrl
const linkedinUrl = config.public.linkedinUrl
const email = config.public.email
const emailHref = `mailto:${email}`
const cvHref = '/cv/david-minguela-cv.pdf'

const slug = computed(() => route.params.slug as string)

const post = computed<BlogPost | undefined>(() =>
  blogPosts.find((p) => p.slug === slug.value)
)

const title = computed(() =>
  post.value ? (locale.value === 'en' ? post.value.title : post.value.titleEs) : ''
)

const content = computed(() =>
  post.value ? (locale.value === 'en' ? post.value.content : post.value.contentEs) : ''
)

const excerpt = computed(() =>
  post.value ? (locale.value === 'en' ? post.value.excerpt : post.value.excerptEs) : ''
)

// Previous and next post navigation
const currentIndex = computed(() =>
  blogPosts.findIndex((p) => p.slug === slug.value)
)

const prevPost = computed(() =>
  currentIndex.value > 0 ? blogPosts[currentIndex.value - 1] : null
)

const nextPost = computed(() =>
  currentIndex.value < blogPosts.length - 1 ? blogPosts[currentIndex.value + 1] : null
)

// Simple markdown-to-HTML renderer (handles headers, bold, italic, code, links, lists)
function renderMarkdown(md: string): string {
  if (!md) return ''

  return md
    // Code blocks (fenced)
    .replace(/```(\w*)\n([\s\S]*?)```/g, (_match, lang, code) => {
      const escaped = code
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
      return `<pre class="code-block"><code class="language-${lang || 'plaintext'}">${escaped}</code></pre>`
    })
    // Inline code
    .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
    // Bold
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    // Horizontal rules
    .replace(/^---$/gm, '<hr class="my-8 border-white/10" />')
    // Headers
    .replace(/^## (.+)$/gm, '<h2 class="mt-10 mb-4 text-xl font-semibold text-white sm:text-2xl">$1</h2>')
    // Unordered lists
    .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc text-slate-300">$1</li>')
    // Ordered lists
    .replace(/^\d+\.\s(.+)$/gm, '<li class="ml-4 list-decimal text-slate-300">$1</li>')
    // Wrap consecutive <li> in <ul> / <ol>
    .replace(/((?:<li class="ml-4 list-disc[^>]*>[\s\S]*?<\/li>\n?)+)/g, '<ul class="my-3 space-y-1.5">$1</ul>')
    .replace(/((?:<li class="ml-4 list-decimal[^>]*>[\s\S]*?<\/li>\n?)+)/g, '<ol class="my-3 space-y-1.5">$1</ol>')
    // Paragraphs (double newlines)
    .replace(/\n\n/g, '</p><p class="my-3 text-slate-300 leading-7">')
    // Single newlines to <br> within paragraphs (but not inside pre/code)
    .replace(/\n/g, '<br />')
    // Wrap in opening/closing para
    .replace(/^/, '<p class="my-3 text-slate-300 leading-7">')
    .replace(/$/, '</p>')
    // Cleanup empty paragraphs
    .replace(/<p class="my-3 text-slate-300 leading-7"><\/p>/g, '')
    .replace(/<p class="my-3 text-slate-300 leading-7"><br \/><\/p>/g, '')
}

const renderedContent = computed(() => renderMarkdown(content.value))

const onToggleLocale = () => {
  const from = locale.value
  const to = from === 'en' ? 'es' : 'en'
  analytics.trackLocaleSwitch(from, to)
  toggleLocale()
}

onMounted(() => {
  analytics.trackPageView(locale.value, `/blog/${slug.value}`)
})

useHead(() => ({
  htmlAttrs: { lang: localeMeta.value.htmlLang },
  title: post.value ? title.value : 'Blog — David Minguela',
}))

useSeoMeta({
  title: () => post.value ? title.value : 'Blog — David Minguela',
  description: () => excerpt.value,
  ogTitle: () => post.value ? title.value : 'Blog — David Minguela',
  ogDescription: () => excerpt.value,
  ogUrl: () => `${siteUrl}/blog/${slug.value}`,
  twitterTitle: () => post.value ? title.value : 'Blog — David Minguela',
  twitterDescription: () => excerpt.value,
})
</script>

<template>
  <main>
    <SiteHeader
      :github-url="githubUrl"
      :linkedin-url="linkedinUrl"
      :email-href="emailHref"
      :nav="{
        projects: locale === 'en' ? 'Projects' : 'Proyectos',
        work: locale === 'en' ? 'How I work' : 'Cómo trabajo',
        stack: locale === 'en' ? 'Stack' : 'Tecnología',
        contact: locale === 'en' ? 'Contact' : 'Contacto',
      }"
      :locale-flag="localeMeta.flag"
      :locale-label="localeMeta.code"
      :locale-switch-label="localeMeta.switchLabel"
      @toggle-locale="onToggleLocale"
    />

    <!-- 404 if not found -->
    <section v-if="!post" class="shell py-20 text-center">
      <h1 class="text-4xl font-semibold text-white">
        {{ locale === 'en' ? 'Post not found' : 'Artículo no encontrado' }}
      </h1>
      <p class="mt-4 text-slate-400">
        {{ locale === 'en' ? 'This article doesn\'t exist or may have been moved.' : 'Este artículo no existe o puede haber sido movido.' }}
      </p>
      <NuxtLink to="/blog" class="button-secondary mt-6 inline-flex">
        ← {{ locale === 'en' ? 'Back to blog' : 'Volver al blog' }}
      </NuxtLink>
    </section>

    <!-- Article -->
    <article v-else class="shell py-10 sm:py-16">
      <div class="mx-auto max-w-3xl">
        <!-- Back link -->
        <NuxtLink to="/blog" class="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition">
          <span aria-hidden="true">←</span>
          {{ locale === 'en' ? 'Back to blog' : 'Volver al blog' }}
        </NuxtLink>

        <!-- Header -->
        <header class="mb-10">
          <div class="flex flex-wrap items-center gap-3">
            <time :datetime="post.date" class="font-mono text-xs text-slate-500">
              {{ new Date(post.date).toLocaleDateString(locale === 'en' ? 'en-US' : 'es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }) }}
            </time>
            <span class="font-mono text-xs text-slate-600">·</span>
            <span class="font-mono text-xs text-slate-500">{{ post.readTime }}</span>
          </div>

          <h1 class="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            {{ title }}
          </h1>

          <p class="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
            {{ excerpt }}
          </p>

          <div class="mt-5 flex flex-wrap gap-2">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-slate-400"
            >
              {{ tag }}
            </span>
          </div>
        </header>

        <!-- Content -->
        <div
          class="prose-custom text-base leading-7 sm:text-lg"
          v-html="renderedContent"
        />

        <!-- Author footer -->
        <div class="mt-14 border-t border-white/8 pt-8">
          <div class="flex items-center gap-4">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/6 text-sm font-semibold text-white">
              DM
            </div>
            <div>
              <p class="text-sm font-semibold text-white">David Minguela</p>
              <p class="text-xs text-slate-400">
                {{ locale === 'en' ? 'Senior Frontend Developer. Writing about architecture, TypeScript, and self-hosted infrastructure.' : 'Senior Frontend Developer. Escribiendo sobre arquitectura, TypeScript e infraestructura self-hosted.' }}
              </p>
            </div>
          </div>
        </div>

        <!-- Prev / Next navigation -->
        <nav class="mt-10 grid gap-4 sm:grid-cols-2">
          <NuxtLink
            v-if="prevPost"
            :to="`/blog/${prevPost.slug}`"
            class="soft-card group block p-4 transition hover:border-cyan-200/25"
          >
            <span class="text-xs text-slate-500">
              ← {{ locale === 'en' ? 'Previous' : 'Anterior' }}
            </span>
            <p class="mt-1 text-sm font-medium text-slate-200 group-hover:text-cyan-200 transition">
              {{ locale === 'en' ? prevPost.title : prevPost.titleEs }}
            </p>
          </NuxtLink>

          <NuxtLink
            v-if="nextPost"
            :to="`/blog/${nextPost.slug}`"
            class="soft-card group block p-4 text-right transition hover:border-cyan-200/25"
          >
            <span class="text-xs text-slate-500">
              {{ locale === 'en' ? 'Next' : 'Siguiente' }} →
            </span>
            <p class="mt-1 text-sm font-medium text-slate-200 group-hover:text-cyan-200 transition">
              {{ locale === 'en' ? nextPost.title : nextPost.titleEs }}
            </p>
          </NuxtLink>
        </nav>
      </div>
    </article>

    <SiteFooter
      :github-url="githubUrl"
      :linkedin-url="linkedinUrl"
      :email-href="emailHref"
      :cv-href="cvHref"
      :nav="{
        projects: locale === 'en' ? 'Projects' : 'Proyectos',
        work: locale === 'en' ? 'How I work' : 'Cómo trabajo',
        stack: locale === 'en' ? 'Stack' : 'Tecnología',
      }"
      :built-with-label="locale === 'en' ? 'Built with Nuxt + Tailwind' : 'Hecho con Nuxt + Tailwind'"
      :email-label="locale === 'en' ? 'Email' : 'Email'"
    />
  </main>
</template>

<style scoped>
.prose-custom :deep(.code-block) {
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(148, 163, 184, 0.15);
  border-radius: 0.75rem;
  padding: 1rem 1.25rem;
  margin: 1.25rem 0;
  overflow-x: auto;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.8125rem;
  line-height: 1.7;
  color: #b4c0d6;
}

.prose-custom :deep(.inline-code) {
  background: rgba(142, 231, 255, 0.08);
  color: #8ee7ff;
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.85em;
}

.prose-custom :deep(a) {
  color: #8ee7ff;
  text-decoration: underline;
  text-decoration-color: rgba(142, 231, 255, 0.3);
}

.prose-custom :deep(a:hover) {
  text-decoration-color: #8ee7ff;
}

.prose-custom :deep(ul),
.prose-custom :deep(ol) {
  padding-left: 0;
}

.prose-custom :deep(li) {
  margin-left: 1.5rem;
}

.prose-custom :deep(strong) {
  color: #f8fafc;
  font-weight: 600;
}
</style>
