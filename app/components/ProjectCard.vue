<script setup lang="ts">
import type { ProjectItem } from '~/data/site'

defineProps<{
  project: ProjectItem
  featured?: boolean
}>()
</script>

<template>
  <article
    class="group soft-card h-full p-6 sm:p-7"
    :class="featured ? 'lg:col-span-2' : ''"
  >
    <div class="flex items-start justify-between gap-4">
      <div>
        <p class="font-mono text-xs uppercase tracking-[0.28em] text-slate-500">Project {{ project.slug }}</p>
        <h3 class="mt-3 text-2xl font-semibold tracking-[-0.05em] text-white sm:text-3xl">
          {{ project.name }}
        </h3>
        <p class="mt-3 text-base font-medium text-slate-200">{{ project.tagline }}</p>
      </div>
      <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
        {{ project.status }}
      </span>
    </div>

    <p class="mt-6 max-w-2xl text-base leading-7 text-slate-300">
      {{ project.description }}
    </p>

    <div class="mt-7 flex flex-wrap gap-2">
      <span
        v-for="highlight in project.highlights"
        :key="highlight"
        class="rounded-full border border-white/8 bg-slate-950/60 px-3 py-2 text-xs font-medium text-slate-200"
      >
        {{ highlight }}
      </span>
    </div>

    <div class="mt-8 flex items-center justify-between gap-4 border-t border-white/8 pt-5">
      <p class="text-sm text-slate-400">Part of a broader ecosystem across product, frontend and infrastructure.</p>
      <a
        :href="project.href"
        target="_blank"
        rel="noreferrer"
        class="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:border-white/20 hover:bg-white/8"
      >
        View destination
      </a>
    </div>
  </article>
</template>
