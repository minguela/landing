<script setup lang="ts">
import type { Project } from '#layers/10.portfolio/app/domain/portfolio'
import { toProjectCardContent } from '#layers/10.portfolio/app/presentation/portfolio-display'

const props = defineProps<{
  project: Project
  index: number
  projectLabel: string
  labels: {
    challenge: string
    response: string
    evidence: string
    public: string
    preview: string
    private: string
    local: string
  }
  locale: 'en' | 'es'
}>()

const displayProject = computed(() => toProjectCardContent(props.project))
</script>

<template>
  <article
    class="project-sheet"
    :class="[
      'project-accent-' + displayProject.accent,
      { 'project-sheet-featured': displayProject.featured }
    ]"
  >
    <header class="project-sheet-head">
      <p>{{ projectLabel }} {{ displayProject.slug }}</p>
      <p>{{ displayProject.domain }}</p>
      <span>{{ displayProject.status }}</span>
    </header>

    <div class="project-sheet-grid">
      <div class="project-story">
        <h3>{{ displayProject.name }}</h3>
        <p class="project-tagline">{{ displayProject.tagline }}</p>
        <p class="project-description">{{ displayProject.description }}</p>

        <dl class="project-decisions">
          <div>
            <dt>{{ labels.challenge }}</dt>
            <dd>{{ displayProject.challenge }}</dd>
          </div>
          <div>
            <dt>{{ labels.response }}</dt>
            <dd>{{ displayProject.response }}</dd>
          </div>
        </dl>

        <div class="project-meta-row">
          <ul class="project-tech" aria-label="Technology">
            <li v-for="technology in displayProject.technologies" :key="technology">{{ technology }}</li>
          </ul>
        </div>
      </div>

      <div class="project-evidence">
        <p class="evidence-label">{{ labels.evidence }}</p>
        <ProjectPreview :project="displayProject" :locale="locale" />
        <ul class="proof-list">
          <li v-for="proof in displayProject.proof" :key="proof">{{ proof }}</li>
        </ul>
      </div>
    </div>
  </article>
</template>
