<script setup lang="ts">
import type { ProjectItem } from '~~/data/site'

const props = defineProps<{
  project: ProjectItem
  index: number
  projectLabel: string
  labels: {
    problem: string
    role: string
    decision: string
    stack: string
    preview: string
  }
  locale: 'en' | 'es'
}>()

const analytics = useAnalytics()

const onProjectClick = () => {
  const appId = props.project.href.includes('menu-planner') ? 'menu_planner' : 'renovaciones'
  analytics.trackAppClick(appId, props.project.href, props.locale, 'projects')
}
</script>

<template>
  <article class="project-showcase">
    <div class="grid gap-5 lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,0.98fr)] lg:items-center">
      <div :class="index % 2 ? 'lg:order-2' : ''">
        <p class="font-mono text-[11px] uppercase text-slate-500">{{ labels.preview }}</p>
        <ProjectPreview :project="project" :locale="locale" class="mt-3" />
      </div>

      <div :class="index % 2 ? 'lg:order-1' : ''">
        <div class="flex flex-wrap items-center gap-3">
          <p class="font-mono text-[11px] uppercase text-slate-500">{{ projectLabel }} {{ project.slug }}</p>
          <span class="status-label">{{ project.status }}</span>
        </div>
        <h3 class="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">{{ project.name }}</h3>
        <p class="mt-3 text-base font-medium leading-7 text-slate-100 sm:text-lg">{{ project.tagline }}</p>
        <p class="mt-3 text-sm leading-7 text-slate-300 sm:text-base">{{ project.description }}</p>

        <dl class="project-notes mt-5">
          <div>
            <dt>{{ labels.problem }}</dt>
            <dd>{{ project.problem }}</dd>
          </div>
          <div>
            <dt>{{ labels.role }}</dt>
            <dd>{{ project.role }}</dd>
          </div>
          <div>
            <dt>{{ labels.decision }}</dt>
            <dd>{{ project.decision }}</dd>
          </div>
        </dl>

        <div class="mt-5">
          <p class="font-mono text-[11px] uppercase text-slate-500">{{ labels.stack }}</p>
          <div class="mt-2.5 flex flex-wrap gap-2">
            <span v-for="technology in project.technologies" :key="technology" class="tech-label">
              {{ technology }}
            </span>
          </div>
        </div>

        <div class="mt-6">
          <a
            :href="project.href"
            target="_blank"
            rel="noopener noreferrer"
            class="button-secondary"
            @click="onProjectClick"
          >
            {{ project.cta }}
          </a>
        </div>
      </div>
    </div>
  </article>
</template>
