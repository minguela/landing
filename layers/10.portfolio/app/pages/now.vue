<script setup lang="ts">
const {
  locale, localeMeta, toggleLocale, githubUrl, emailHref, cvHref, siteUrl,
  nowProjectItems, nowReadingItems, statusClasses,
} = useNowPage()

const analytics = useAnalytics()

const onToggleLocale = () => {
  const from = locale.value
  const to = from === 'en' ? 'es' : 'en'
  analytics.trackLocaleSwitch(from, to)
  toggleLocale()
}

onMounted(() => {
  analytics.trackPageView(locale.value, '/now')
})

useHead(() => ({ htmlAttrs: { lang: localeMeta.value.htmlLang } }))

useSeoMeta({
  title: () => locale.value === 'en' ? 'Now — David Minguela' : 'Ahora — David Minguela',
  description: () => locale.value === 'en'
    ? 'What David Minguela is focused on right now: AI-assisted interfaces, OCR pipelines, homelab infrastructure, product monetisation and writing.'
    : 'En qué está enfocado David Minguela ahora mismo: interfaces con IA, pipelines OCR, infraestructura homelab, monetización de producto y escritura.',
  ogTitle: () => locale.value === 'en' ? 'Now — David Minguela' : 'Ahora — David Minguela',
  ogDescription: () => locale.value === 'en'
    ? "Current projects, focus areas and what I'm reading."
    : 'Proyectos actuales, áreas de enfoque y lo que estoy leyendo.',
  ogUrl: `${siteUrl}/now`,
  twitterTitle: () => locale.value === 'en' ? 'Now — David Minguela' : 'Ahora — David Minguela',
})

const typeLabels: Record<string, string> = {
  newsletter: 'Newsletter',
  book: locale.value === 'en' ? 'Book' : 'Libro',
}
</script>

<template>
  <main>
    <SiteHeader
      :github-url="githubUrl"
      :linkedin-url="githubUrl"
      :email-href="emailHref"
      :nav="{
        projects: locale === 'en' ? 'Projects' : 'Proyectos',
        work: locale === 'en' ? 'How I work' : 'Cómo trabajo',
        stack: locale === 'en' ? 'Stack' : 'Tecnología',
      }"
      :locale-flag="localeMeta.flag"
      :locale-label="localeMeta.code"
      :locale-switch-label="localeMeta.switchLabel"
      @toggle-locale="onToggleLocale"
    />

    <section class="shell py-10 sm:py-16 lg:py-20">
      <div class="mx-auto max-w-3xl">
        <div class="mb-10">
          <div class="flex items-center gap-3">
            <span class="rounded-full bg-emerald-400/10 px-3 py-1 font-mono text-[11px] font-semibold uppercase text-emerald-300">
              {{ locale === 'en' ? 'Updated July 2026' : 'Actualizado julio 2026' }}
            </span>
          </div>
          <h1 class="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {{ locale === 'en' ? "What I'm doing now" : 'Qué estoy haciendo ahora' }}
          </h1>
          <p class="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            {{ locale === 'en'
              ? "A snapshot of my current focus, inspired by Derek Sivers' now page movement. This is what occupies my time, attention and curiosity right now."
              : 'Una instantánea de mi foco actual, inspirado por el movimiento de páginas /now de Derek Sivers. Esto es lo que ocupa mi tiempo, atención y curiosidad ahora mismo.'
            }}
          </p>
        </div>

        <div class="mb-12">
          <h2 class="mb-6 text-xl font-semibold text-white sm:text-2xl">
            {{ locale === 'en' ? 'Active projects' : 'Proyectos activos' }}
          </h2>
          <div class="grid gap-4">
            <article v-for="item in nowProjectItems" :key="item.title" class="soft-card p-5">
              <div class="flex items-start gap-3">
                <span class="mt-0.5 text-2xl">{{ item.emoji }}</span>
                <div class="min-w-0 flex-1">
                  <div class="flex flex-wrap items-center gap-2">
                    <h3 class="text-base font-semibold text-white sm:text-lg">{{ item.title }}</h3>
                    <span class="shrink-0 rounded-full border px-2 py-0.5 font-mono text-[10px] font-semibold uppercase" :class="statusClasses[item.status]">
                      {{ item.statusLabel }}
                    </span>
                  </div>
                  <p class="mt-2 text-sm leading-6 text-slate-300">{{ item.description }}</p>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div class="mb-12">
          <h2 class="mb-5 text-xl font-semibold text-white sm:text-2xl">
            {{ locale === 'en' ? "What I'm reading" : 'Qué estoy leyendo' }}
          </h2>
          <div class="soft-card divide-y divide-white/8">
            <div v-for="item in nowReadingItems" :key="item.title" class="flex items-center gap-4 px-5 py-4">
              <span class="shrink-0 rounded-lg border border-white/10 bg-black/20 px-2 py-1 font-mono text-[10px] uppercase text-slate-400">
                {{ typeLabels[item.type] }}
              </span>
              <div class="min-w-0">
                <p class="text-sm font-medium text-white">{{ item.title }}</p>
                <p class="mt-0.5 text-xs text-slate-500">{{ item.author }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="glass-panel p-5">
          <p class="text-sm leading-6 text-slate-400">
            <span class="font-semibold text-slate-300">{{ locale === 'en' ? 'About this page:' : 'Sobre esta página:' }}</span>
            {{ locale === 'en'
              ? "This is a /now page. It's not a bio or a CV — just what I'm focused on at this point in my life. I update it every few months. If you have your own site, you should make one too."
              : 'Esto es una página /now. No es una bio ni un CV — solo en qué estoy enfocado en este momento de mi vida. La actualizo cada pocos meses. Si tienes tu propio sitio, deberías hacer una también.'
            }}
          </p>
        </div>
      </div>
    </section>

    <SiteFooter
      :github-url="githubUrl"
      :linkedin-url="githubUrl"
      :email-href="emailHref"
      :cv-href="cvHref"
      :nav="{ projects: locale === 'en' ? 'Projects' : 'Proyectos', work: locale === 'en' ? 'How I work' : 'Cómo trabajo', stack: locale === 'en' ? 'Stack' : 'Tecnología' }"
      :built-with-label="locale === 'en' ? 'Built with Nuxt + Tailwind' : 'Hecho con Nuxt + Tailwind'"
      :email-label="locale === 'en' ? 'Email' : 'Email'"
    />
  </main>
</template>
