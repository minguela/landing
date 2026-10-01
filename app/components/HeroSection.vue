<script setup lang="ts">
import type { Project } from '#layers/10.portfolio/app/domain/portfolio'

defineProps<{
  githubUrl: string
  linkedinUrl: string
  emailHref: string
  cvHref: string
  locale: 'en' | 'es'
  emailLabel: string
  copy: {
    eyebrow: string
    greeting: string
    title: string
    titleAccent: string
    role: string
    subtitle: string
    cta: string
    cv: string
    github: string
    linkedin: string
    email: string
    indexLabel: string
    indexHint: string
  }
  projects: Project[]
}>()

</script>

<template>
  <section id="top" class="hero">
    <div class="shell hero-grid">
      <div class="hero-copy">
        <div class="hero-meta">
          <p>{{ copy.eyebrow }}</p>
          <span aria-hidden="true">MAD / REMOTE</span>
        </div>

        <p class="hero-greeting">{{ copy.greeting }}</p>
        <h1 class="hero-title">
          {{ copy.title }}
          <em>{{ copy.titleAccent }}</em>
        </h1>

        <div class="hero-support">
          <p class="hero-role">{{ copy.role }}</p>
          <p class="hero-summary">{{ copy.subtitle }}</p>
        </div>

        <div class="hero-actions">
          <a href="#projects" class="button-primary">
            {{ copy.cta }} <span aria-hidden="true">↓</span>
          </a>
          <a
            :href="emailHref"
            class="button-secondary"
          >
            {{ copy.email }} <span aria-hidden="true">↗</span>
          </a>
          <a
            :href="cvHref"
            target="_blank"
            rel="noreferrer"
            class="text-link"
          >
            {{ copy.cv }}
          </a>
        </div>
      </div>

      <aside class="build-index" aria-label="Selected project index">
        <div class="build-index-head">
          <p>{{ copy.indexLabel }}</p>
          <span>{{ copy.indexHint }}</span>
        </div>
        <ol>
          <li v-for="project in projects" :key="project.slug">
            <span class="build-index-number">{{ project.slug }}</span>
            <span class="build-index-name">{{ project.name }}</span>
            <span class="build-index-domain">{{ project.domain }}</span>
          </li>
        </ol>
        <div class="build-index-links">
          <a
            :href="githubUrl"
            target="_blank"
            rel="noreferrer"
          >{{ copy.github }} ↗</a>
          <a
            :href="linkedinUrl || emailHref"
            :target="linkedinUrl ? '_blank' : undefined"
            :rel="linkedinUrl ? 'noreferrer' : undefined"
          >{{ linkedinUrl ? copy.linkedin : emailLabel }} ↗</a>
        </div>
      </aside>
    </div>

    <div class="project-ticker" aria-hidden="true">
      <div>
        <span v-for="(project, index) in [...projects, ...projects]" :key="project.slug + '-' + index">
          {{ project.name }} <b>✦</b>
        </span>
      </div>
    </div>
  </section>
</template>
