<script setup lang="ts">
import type { Project } from '#layers/10.portfolio/app/domain/portfolio'

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

const analytics = useAnalytics()
const actionLabel = computed(() => props.labels[props.project.availability])

const onProjectClick = () => {
  if (!props.project.href) return
  analytics.trackAppClick(props.project.name.toLowerCase().replaceAll(' ', '_'), props.project.href, props.locale, 'projects')
}
</script>

<template>
  <article
    class="project-sheet"
    :class="[
      'project-accent-' + project.accent,
      { 'project-sheet-featured': project.featured }
    ]"
  >
    <header class="project-sheet-head">
      <p>{{ projectLabel }} {{ project.slug }}</p>
      <p>{{ project.domain }}</p>
      <span>{{ project.status }}</span>
    </header>

    <div class="project-sheet-grid">
      <div class="project-story">
        <h3>{{ project.name }}</h3>
        <p class="project-tagline">{{ project.tagline }}</p>
        <p class="project-description">{{ project.description }}</p>

        <dl class="project-decisions">
          <div>
            <dt>{{ labels.challenge }}</dt>
            <dd>{{ project.challenge }}</dd>
          </div>
          <div>
            <dt>{{ labels.response }}</dt>
            <dd>{{ project.response }}</dd>
          </div>
        </dl>

        <div class="project-action-row">
          <a
            v-if="project.href"
            :href="project.href"
            target="_blank"
            rel="noreferrer"
            class="project-action"
            @click="onProjectClick"
          >
            {{ actionLabel }} <span aria-hidden="true">↗</span>
          </a>
          <span v-else class="project-availability">{{ actionLabel }}</span>

          <ul class="project-tech" aria-label="Technology">
            <li v-for="technology in project.technologies" :key="technology">{{ technology }}</li>
          </ul>
        </div>
      </div>

      <div class="project-evidence">
        <p class="evidence-label">{{ labels.evidence }}</p>
        <ProjectPreview :project="project" :locale="locale" />
        <ul class="proof-list">
          <li v-for="proof in project.proof" :key="proof">{{ proof }}</li>
        </ul>
      </div>
    </div>
  </article>
</template>
