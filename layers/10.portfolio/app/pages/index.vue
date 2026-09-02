<script setup lang="ts">
const {
  locale,
  localeMeta,
  toggleLocale,
  content,
  githubUrl,
  linkedinUrl,
  email,
  emailHref,
  cvHref,
  siteUrl,
  siteName,
} = usePortfolioPage()

const analytics = useAnalytics()

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

useSeoMeta({
  title: () => content.value.copy.seo.title,
  description: () => content.value.copy.seo.description,
  ogTitle: siteName,
  ogDescription: () => content.value.copy.seo.description,
  ogUrl: siteUrl,
  ogImage: `${siteUrl}/og-image.svg`,
  twitterTitle: siteName,
  twitterDescription: () => content.value.copy.seo.description,
  twitterImage: `${siteUrl}/og-image.svg`
})
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
      :copy="content.copy.hero"
      :projects="content.projects"
    />

    <CredibilityStrip
      :label="content.copy.credibilityLabel"
      :items="content.credibility"
      :locale="locale"
    />

    <section id="projects" class="projects-section">
      <div class="shell">
        <SectionHeading
          :eyebrow="content.copy.sections.projects.eyebrow"
          :title="content.copy.sections.projects.title"
          :description="content.copy.sections.projects.description"
        />

        <div class="projects-grid">
          <ProjectCard
            v-for="(project, index) in content.projects"
            :key="project.name"
            :project="project"
            :index="index"
            :project-label="content.copy.projectCard.label"
            :labels="content.copy.projectCard"
            :locale="locale"
          />
        </div>
      </div>
    </section>

    <section id="work" class="approach-section">
      <div class="shell">
        <SectionHeading
          :eyebrow="content.copy.sections.work.eyebrow"
          :title="content.copy.sections.work.title"
          :description="content.copy.sections.work.description"
        />

        <WorkValuePanel :items="content.workValues" />
      </div>
    </section>

    <section id="stack" class="toolkit-section">
      <div class="shell">
        <SectionHeading
          :eyebrow="content.copy.sections.stack.eyebrow"
          :title="content.copy.sections.stack.title"
          :description="content.copy.sections.stack.description"
        />
        <StackCloud :groups="content.stackGroups" />
      </div>
    </section>

    <LiveTerminal :copy="content.copy.buildNotes" :items="content.currentFocus" />

    <FinalCta
      :email-href="emailHref"
      :cv-href="cvHref"
      :locale="locale"
      :copy="content.copy.finalCta"
    />

    <SiteFooter
      :github-url="githubUrl"
      :linkedin-url="linkedinUrl"
      :email-href="emailHref"
      :cv-href="cvHref"
      :nav="{
        projects: content.copy.nav.projects,
        work: content.copy.nav.work,
        stack: content.copy.nav.stack,
        notes: content.copy.nav.notes
      }"
      :built-with-label="content.copy.footer.builtWith"
      :email-label="content.copy.footer.email"
      :note="content.copy.footer.note"
    />
  </main>
</template>
