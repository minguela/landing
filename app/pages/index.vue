<script setup lang="ts">
import { appEndpoints, currentFocus, heroSignals, projects, stackGroups } from '~/data/site'

const config = useRuntimeConfig()

const siteUrl = config.public.siteUrl
const githubUrl = config.public.githubUrl
const linkedinUrl = config.public.linkedinUrl
const email = config.public.email
const emailHref = `mailto:${email}`

const externalLinks = computed(() => [
  ...appEndpoints,
  {
    label: 'GitHub',
    href: githubUrl,
    description: 'Code, experiments and published projects from the main GitHub account.',
    external: true
  },
  {
    label: linkedinUrl ? 'LinkedIn' : 'LinkedIn (configurable)',
    href: linkedinUrl || emailHref,
    description: linkedinUrl
      ? 'Professional profile for network and additional context.'
      : 'Add your LinkedIn URL in .env if you want to surface it in production.',
    external: !!linkedinUrl
  },
  {
    label: email,
    href: emailHref,
    description: 'Direct channel for professional contact and collaborations.',
    external: false,
    monospace: true
  }
])

useSeoMeta({
  title: 'Portfolio · Senior Frontend Developer',
  description: config.public.siteDescription,
  ogTitle: config.public.siteName,
  ogDescription: config.public.siteDescription,
  ogUrl: siteUrl,
  ogImage: `${siteUrl}/og-image.svg`,
  twitterTitle: config.public.siteName,
  twitterDescription: config.public.siteDescription,
  twitterImage: `${siteUrl}/og-image.svg`
})
</script>

<template>
  <main>
    <SiteHeader :github-url="githubUrl" :linkedin-url="linkedinUrl" :email-href="emailHref" />

    <HeroSection
      :github-url="githubUrl"
      :linkedin-url="linkedinUrl"
      :email-href="emailHref"
      :email-label="email"
      :hero-signals="heroSignals"
    />

    <section id="projects" class="shell section-space pt-4">
      <SectionHeading
        eyebrow="Selected projects"
        title="Apps and systems built with product intent and technical depth"
        description="A focused selection of projects that show how product thinking, frontend craft and practical infrastructure can live in the same ecosystem."
      />

      <div class="mt-10 grid gap-4 lg:grid-cols-3">
        <ProjectCard
          v-for="project in projects"
          :key="project.name"
          :project="project"
        />
      </div>
    </section>

    <section id="stack" class="shell section-space pt-0">
      <SectionHeading
        eyebrow="Technical stack"
        title="Nuxt-first frontend, automation-aware infrastructure"
        description="The site makes a frontend-first impression, while still signalling platform judgment around deployment, automation, observability and developer experience."
      />

      <div class="mt-10">
        <StackCloud :groups="stackGroups" />
      </div>
    </section>

    <section id="apps" class="shell section-space pt-0">
      <SectionHeading
        eyebrow="Apps and links"
        title="A central entry point for portfolio, products and future subdomains"
        description="Structured as a clean hub for current apps, planned endpoints and professional links, without feeling overloaded or generic."
      />

      <div class="mt-10">
        <LinksGrid :items="externalLinks" />
      </div>
    </section>

    <section id="focus" class="shell section-space pt-0">
      <SectionHeading
        eyebrow="Current focus"
        title="Building practical systems around AI, OCR and maintainable frontend architecture"
        description="Frontend work here is connected to automation, document pipelines, modern deployment and product decisions that need to hold up in the real world."
      />

      <div class="mt-10">
        <FocusPanel :items="currentFocus" />
      </div>
    </section>

    <SiteFooter :github-url="githubUrl" :linkedin-url="linkedinUrl" :email-href="emailHref" />
  </main>
</template>
