<script setup lang="ts">
import { siteContent } from '~~/data/site'

const config = useRuntimeConfig()
const { locale, localeMeta, toggleLocale } = useSiteI18n()
const analytics = useAnalytics()

const content = computed(() => siteContent[locale.value])

const siteUrl = config.public.siteUrl
const githubUrl = config.public.githubUrl
const linkedinUrl = config.public.linkedinUrl
const email = config.public.email
const emailHref = `mailto:${email}`
const cvHref = '/cv/david-minguela-cv.pdf'

const externalLinks = computed(() => [
  ...content.value.appEndpoints,
  {
    label: 'GitHub',
    href: githubUrl,
    description: content.value.copy.links.githubDescription,
    external: true
  },
  {
    label: 'LinkedIn',
    href: linkedinUrl || emailHref,
    description: content.value.copy.links.linkedinDescription,
    external: !!linkedinUrl
  },
  {
    label: 'CV (PDF)',
    href: cvHref,
    description: content.value.copy.links.cvDescription,
    external: true,
    monospace: true
  },
  {
    label: email,
    href: emailHref,
    description: content.value.copy.links.emailDescription,
    external: false,
    monospace: true
  }
])

const onToggleLocale = () => {
  const from = locale.value
  const to = from === 'en' ? 'es' : 'en'
  analytics.trackLocaleSwitch(from, to)
  toggleLocale()
}

onMounted(() => {
  analytics.trackPageView(locale.value, '/')
})

useHead(() => ({
  htmlAttrs: {
    lang: localeMeta.value.htmlLang
  }
}))

useSeoMeta(() => ({
  title: content.value.copy.seo.title,
  description: content.value.copy.seo.description,
  ogTitle: config.public.siteName,
  ogDescription: content.value.copy.seo.description,
  ogUrl: siteUrl,
  ogImage: `${siteUrl}/og-image.svg`,
  twitterTitle: config.public.siteName,
  twitterDescription: content.value.copy.seo.description,
  twitterImage: `${siteUrl}/og-image.svg`
}))
</script>

<template>
  <main>
    <SiteHeader
      :github-url="githubUrl"
      :linkedin-url="linkedinUrl"
      :email-href="emailHref"
      :nav="content.copy.nav"
      :locale-flag="localeMeta.flag"
      :locale-label="localeMeta.code"
      :locale-switch-label="localeMeta.switchLabel"
      @toggle-locale="onToggleLocale"
    />

    <HeroSection
      :github-url="githubUrl"
      :linkedin-url="linkedinUrl"
      :email-href="emailHref"
      :cv-href="cvHref"
      :locale="locale"
      :email-label="email"
      :hero-signals="content.heroSignals"
      :copy="content.copy.hero"
      :live-apps="content.appEndpoints"
    />

    <section id="projects" class="shell section-space pt-2 sm:pt-4">
      <SectionHeading
        :eyebrow="content.copy.sections.projects.eyebrow"
        :title="content.copy.sections.projects.title"
        :description="content.copy.sections.projects.description"
      />

      <div class="mt-7 grid gap-3 sm:mt-9 sm:gap-4 lg:grid-cols-2">
        <ProjectCard
          v-for="project in content.projects"
          :key="project.name"
          :project="project"
          :project-label="content.copy.projectCard.label"
          :footer-label="content.copy.projectCard.footer"
          :view-destination-label="content.copy.projectCard.viewDestination"
          :locale="locale"
        />
      </div>
    </section>

    <section id="stack" class="shell section-space pt-0">
      <SectionHeading
        :eyebrow="content.copy.sections.stack.eyebrow"
        :title="content.copy.sections.stack.title"
        :description="content.copy.sections.stack.description"
      />

      <div class="mt-7 sm:mt-9">
        <StackCloud :groups="content.stackGroups" />
      </div>
    </section>

    <section id="apps" class="shell section-space pt-0">
      <SectionHeading
        :eyebrow="content.copy.sections.apps.eyebrow"
        :title="content.copy.sections.apps.title"
        :description="content.copy.sections.apps.description"
      />

      <div class="mt-7 sm:mt-9">
        <LinksGrid
          :items="externalLinks"
          :link-label="content.copy.links.label"
          :open-destination-label="content.copy.links.openDestination"
          :locale="locale"
        />
      </div>
    </section>

    <section id="focus" class="shell section-space pt-0">
      <SectionHeading
        :eyebrow="content.copy.sections.focus.eyebrow"
        :title="content.copy.sections.focus.title"
        :description="content.copy.sections.focus.description"
      />

      <div class="mt-7 sm:mt-9">
        <FocusPanel :items="content.currentFocus" :label="content.copy.focusLabel" />
      </div>
    </section>

    <SiteFooter
      :github-url="githubUrl"
      :linkedin-url="linkedinUrl"
      :email-href="emailHref"
      :nav="{ projects: content.copy.nav.projects, apps: content.copy.nav.apps }"
      :built-with-label="content.copy.footer.builtWith"
      :email-label="content.copy.footer.email"
    />
  </main>
</template>
