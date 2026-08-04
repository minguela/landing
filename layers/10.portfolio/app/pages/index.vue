<script setup lang="ts">
const {
  locale,
  localeMeta,
  toggleLocale,
  content,
  githubUrl,
  linkedinUrl,
  emailHref,
  cvHref,
  siteUrl,
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
  ogTitle: siteUrl,
  ogDescription: () => content.value.copy.seo.description,
  ogUrl: siteUrl,
  ogImage: `${siteUrl}/og-image.svg`,
  twitterTitle: siteUrl,
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
    />

    <section id="projects" class="shell section-space pb-10 pt-14 sm:pb-14 sm:pt-20">
      <SectionHeading
        :eyebrow="content.copy.sections.projects.eyebrow"
        :title="content.copy.sections.projects.title"
        :description="content.copy.sections.projects.description"
      />

      <div class="mt-8 grid gap-5 sm:mt-11 sm:gap-7">
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
    </section>

    <section id="work" class="work-section">
      <div class="shell py-14 sm:py-20 lg:py-24">
        <SectionHeading
          :eyebrow="content.copy.sections.work.eyebrow"
          :title="content.copy.sections.work.title"
          :description="content.copy.sections.work.description"
        />

        <div class="mt-8 sm:mt-11">
          <WorkValuePanel :items="content.workValues" />
        </div>
      </div>
    </section>

    <section id="stack" class="shell section-space pb-10 pt-14 sm:pb-14">
      <SectionHeading
        :eyebrow="content.copy.sections.stack.eyebrow"
        :title="content.copy.sections.stack.title"
        :description="content.copy.sections.stack.description"
      />

      <div class="mt-7 sm:mt-9">
        <StackCloud :groups="content.stackGroups" />
      </div>
    </section>

    <section id="focus" class="shell py-8 sm:py-12">
      <SectionHeading
        :eyebrow="content.copy.sections.focus.eyebrow"
        :title="content.copy.sections.focus.title"
        :description="content.copy.sections.focus.description"
      />

      <div class="mt-7 sm:mt-9">
        <FocusPanel :items="content.currentFocus" :label="content.copy.focusLabel" />
      </div>
    </section>

    <LiveTerminal />

    <WallOfLove />

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
      :nav="{ projects: content.copy.nav.projects, work: content.copy.nav.work, stack: content.copy.nav.stack }"
      :built-with-label="content.copy.footer.builtWith"
      :email-label="content.copy.footer.email"
    />
  </main>
</template>
