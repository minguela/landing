<script setup lang="ts">
import { blogPosts } from '~~/data/blog'

const config = useRuntimeConfig()
const { locale, localeMeta, toggleLocale } = useSiteI18n()
const analytics = useAnalytics()

const siteUrl = config.public.siteUrl
const githubUrl = config.public.githubUrl
const linkedinUrl = config.public.linkedinUrl
const email = config.public.email
const emailHref = `mailto:${email}`
const cvHref = '/cv/david-minguela-cv.pdf'

const sortedPosts = computed(() =>
  [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
)

const onToggleLocale = () => {
  const from = locale.value
  const to = from === 'en' ? 'es' : 'en'
  analytics.trackLocaleSwitch(from, to)
  toggleLocale()
}

onMounted(() => {
  analytics.trackPageView(locale.value, '/blog')
})

useHead(() => ({
  htmlAttrs: { lang: localeMeta.value.htmlLang },
}))

useSeoMeta({
  title: () => locale.value === 'en' ? 'Blog — David Minguela' : 'Blog — David Minguela',
  description: () => locale.value === 'en'
    ? 'Articles on frontend architecture, TypeScript patterns, self-hosted infrastructure and product engineering.'
    : 'Artículos sobre arquitectura frontend, patrones TypeScript, infraestructura self-hosted e ingeniería de producto.',
  ogTitle: () => 'Blog — David Minguela',
  ogUrl: `${siteUrl}/blog`,
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

    <section class="shell py-10 sm:py-16 lg:py-20">
      <div class="mx-auto max-w-3xl">
        <!-- Header -->
        <div class="mb-12">
          <p class="section-kicker">
            {{ locale === 'en' ? 'Writing' : 'Escritos' }}
          </p>
          <h1 class="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            {{ locale === 'en' ? 'Blog' : 'Blog' }}
          </h1>
          <p class="mt-4 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            {{ locale === 'en'
              ? 'Articles on frontend architecture, TypeScript patterns, self-hosted infrastructure and product engineering.'
              : 'Artículos sobre arquitectura frontend, patrones TypeScript, infraestructura self-hosted e ingeniería de producto.'
            }}
          </p>
        </div>

        <!-- Posts list -->
        <div class="grid gap-6">
          <article
            v-for="post in sortedPosts"
            :key="post.slug"
            class="soft-card group cursor-pointer overflow-hidden transition hover:border-cyan-200/25"
          >
            <NuxtLink :to="`/blog/${post.slug}`" class="block p-5 sm:p-6">
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

              <h2 class="mt-3 text-xl font-semibold leading-tight text-white transition group-hover:text-cyan-200 sm:text-2xl">
                {{ locale === 'en' ? post.title : post.titleEs }}
              </h2>

              <p class="mt-2 text-sm leading-6 text-slate-300">
                {{ locale === 'en' ? post.excerpt : post.excerptEs }}
              </p>

              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  v-for="tag in post.tags"
                  :key="tag"
                  class="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-slate-400"
                >
                  {{ tag }}
                </span>
              </div>

              <div class="mt-4 flex items-center gap-1.5 text-sm font-medium text-cyan-300">
                <span>{{ locale === 'en' ? 'Read article' : 'Leer artículo' }}</span>
                <span aria-hidden="true" class="transition group-hover:translate-x-0.5">→</span>
              </div>
            </NuxtLink>
          </article>
        </div>

        <!-- Empty state (if no posts) -->
        <div v-if="sortedPosts.length === 0" class="glass-panel p-10 text-center">
          <p class="text-slate-400">
            {{ locale === 'en' ? 'No articles yet. Check back soon.' : 'Aún no hay artículos. Vuelve pronto.' }}
          </p>
        </div>
      </div>
    </section>

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
