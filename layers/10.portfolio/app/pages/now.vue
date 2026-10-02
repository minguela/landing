<script setup lang="ts">
const {
  locale, localeMeta, toggleLocale, githubUrl, linkedinUrl, emailHref, cvHref, siteUrl,
  nowProjectItems, nowReadingItems, statusClasses, typeLabels,
} = useNowPage()

const onToggleLocale = () => {
  toggleLocale()
}

useHead(() => ({ htmlAttrs: { lang: localeMeta.value.htmlLang } }))

useSeoMeta({
  title: () => locale.value === 'en' ? 'Now — David Minguela' : 'Ahora — David Minguela',
  description: () => locale.value === 'en'
    ? 'What David Minguela is focused on right now: AI-assisted interfaces, document processing, home infrastructure, product and writing.'
    : 'En qué trabaja David Minguela ahora: interfaces con IA, lectura de documentos, infraestructura doméstica, producto y escritura.',
  ogTitle: () => locale.value === 'en' ? 'Now — David Minguela' : 'Ahora — David Minguela',
  ogDescription: () => locale.value === 'en'
    ? "Current projects, focus areas and what I'm reading."
    : 'Proyectos actuales, áreas de enfoque y lo que estoy leyendo.',
  ogUrl: `${siteUrl}/now`,
  twitterTitle: () => locale.value === 'en' ? 'Now — David Minguela' : 'Ahora — David Minguela',
})

</script>

<template>
  <main class="secondary-page">
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
        <div class="mb-10">
          <div class="flex items-center gap-3">
            <span class="rounded-full bg-emerald-400/10 px-3 py-1 font-mono text-[11px] font-semibold uppercase text-emerald-300">
              {{ locale === 'en' ? 'Updated October 2026' : 'Actualizado en octubre de 2026' }}
            </span>
          </div>
          <h1 class="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {{ locale === 'en' ? "What I'm doing now" : 'Qué estoy haciendo ahora' }}
          </h1>
          <p class="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            {{ locale === 'en'
              ? "A snapshot of what has my attention right now, inspired by Derek Sivers' /now page movement."
              : 'Un resumen de los temas que ocupan mi tiempo y mi atención en esta etapa, inspirado en las páginas /now de Derek Sivers.'
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
              ? "This is a /now page: a short update on what I'm focused on at this stage of my life. I refresh it every few months."
              : 'Esta página resume en qué estoy centrado en esta etapa. No es una biografía ni un currículum; la actualizo cada pocos meses.'
            }}
          </p>
        </div>
      </div>
    </section>

    <SiteFooter
      :github-url="githubUrl"
      :linkedin-url="linkedinUrl"
      :email-href="emailHref"
      :cv-href="cvHref"
      :nav="{ projects: locale === 'en' ? 'Projects' : 'Proyectos', work: locale === 'en' ? 'How I work' : 'Cómo trabajo', stack: locale === 'en' ? 'Stack' : 'Tecnología' }"
      :built-with-label="locale === 'en' ? 'Built with Nuxt + Tailwind' : 'Hecho con Nuxt + Tailwind'"
      :email-label="locale === 'en' ? 'Email' : 'Email'"
    />
  </main>
</template>
