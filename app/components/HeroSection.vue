<script setup lang="ts">
import type { ProjectItem } from '~~/data/site'

const props = defineProps<{
  githubUrl: string
  linkedinUrl: string
  emailHref: string
  cvHref: string
  locale: 'en' | 'es'
  emailLabel: string
  copy: {
    title: string
    lead: string
    body: string
    ctaProjects: string
    ctaGithub: string
    ctaLinkedin: string
    ctaEmail: string
    ctaCv: string
    previewLabel: string
    previewTitle: string
  }
  projects: ProjectItem[]
}>()

const analytics = useAnalytics()

const onHeroProjects = () => {
  analytics.trackHeroCta('hero_projects', props.copy.ctaProjects, '#projects', props.locale)
}

const onHeroGithub = () => {
  analytics.trackProfileClick('github', props.githubUrl, props.locale, 'hero')
}

const onHeroContact = () => {
  analytics.trackProfileClick('email', props.emailHref, props.locale, 'hero')
}

const onHeroLinkedinOrEmail = () => {
  if (props.linkedinUrl) {
    analytics.trackProfileClick('linkedin', props.linkedinUrl, props.locale, 'hero')
    return
  }
  analytics.trackProfileClick('email', props.emailHref, props.locale, 'hero')
}

const onHeroCv = () => {
  analytics.trackCvDownload(props.locale, 'hero')
}
</script>

<template>
  <section id="top" class="shell pb-8 pt-8 sm:pb-12 sm:pt-12 lg:pb-0 lg:pt-6">
    <div class="hero-surface relative overflow-hidden px-4 py-6 sm:px-7 sm:py-9 lg:px-12 lg:py-8">
      <div class="relative grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:items-center">
        <div>
          <p class="hero-name">David Minguela</p>

          <h1 class="mt-4 max-w-4xl text-4xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-[3.2rem]">
            {{ copy.title }}
          </h1>

          <p class="mt-5 max-w-3xl text-base font-medium leading-7 text-slate-100 sm:text-xl sm:leading-8">
            {{ copy.lead }}
          </p>

          <div class="mt-6 grid gap-2.5 sm:mt-7 sm:flex sm:flex-wrap">
            <a
              href="#projects"
              class="button-primary"
              @click="onHeroProjects"
            >
              {{ copy.ctaProjects }}
            </a>
            <a
              :href="emailHref"
              class="button-secondary"
              @click="onHeroContact"
            >
              {{ copy.ctaEmail }}
            </a>
            <a
              :href="cvHref"
              target="_blank"
              rel="noopener noreferrer"
              class="button-tertiary"
              @click="onHeroCv"
            >
              {{ copy.ctaCv }}
            </a>
          </div>

          <div class="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-300">
            <a :href="githubUrl" target="_blank" rel="noopener noreferrer" class="profile-link" @click="onHeroGithub">
              {{ copy.ctaGithub }}
            </a>
            <a
              :href="linkedinUrl || emailHref"
              :target="linkedinUrl ? '_blank' : undefined"
              :rel="linkedinUrl ? 'noopener noreferrer' : undefined"
              class="profile-link"
              @click="onHeroLinkedinOrEmail"
            >
              {{ linkedinUrl ? copy.ctaLinkedin : emailLabel }}
            </a>
          </div>
        </div>

        <div class="evidence-stage">
          <p class="section-kicker mb-2">{{ copy.previewLabel }}</p>
          <p class="max-w-md text-lg font-semibold leading-7 text-white sm:text-xl">{{ copy.previewTitle }}</p>
          <div class="mt-5 grid gap-3 xl:grid-cols-2 xl:items-start">
            <ProjectPreview
              v-for="(project, index) in projects"
              :key="project.name"
              :project="project"
              :locale="locale"
              :compact="true"
              :raised="index === 1"
              :class="index > 0 ? 'hidden sm:block' : ''"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
