<script setup lang="ts">
import type { ProjectItem } from '~~/data/site'

defineProps<{
  project: ProjectItem
  featured?: boolean
  projectLabel: string
  footerLabel: string
  viewDestinationLabel: string
}>()
</script>

<template>
  <article class="group soft-card h-full p-4 sm:p-6" :class="featured ? 'lg:col-span-2' : ''">
    <div class="flex flex-wrap items-start justify-between gap-3">
      <div class="min-w-0">
        <p class="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">{{ projectLabel }} {{ project.slug }}</p>
        <h3 class="mt-2 text-xl font-semibold tracking-[-0.04em] text-white sm:text-2xl lg:text-3xl">
          {{ project.name }}
        </h3>
        <p class="mt-2.5 text-sm font-medium text-slate-200 sm:text-base">{{ project.tagline }}</p>
      </div>
      <span class="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-300 sm:px-3">
        {{ project.status }}
      </span>
    </div>

    <p class="mt-4 text-sm leading-7 text-slate-300 sm:mt-5 sm:text-base">
      {{ project.description }}
    </p>

    <div class="mt-5 flex flex-wrap gap-2">
      <span
        v-for="highlight in project.highlights"
        :key="highlight"
        class="rounded-full border border-white/10 bg-slate-950/60 px-2.5 py-1.5 text-[11px] font-medium text-slate-200 sm:px-3 sm:py-2 sm:text-xs"
      >
        {{ highlight }}
      </span>
    </div>

    <div class="mt-6 flex flex-col gap-3 border-t border-white/10 pt-4 sm:mt-7 sm:flex-row sm:items-center sm:justify-between">
      <p class="text-xs leading-6 text-slate-400 sm:text-sm">{{ footerLabel }}</p>
      <a
        :href="project.href"
        target="_blank"
        rel="noreferrer"
        class="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-white/14 bg-white/6 px-4 py-2 text-sm font-semibold text-white hover:border-white/24 hover:bg-white/10"
      >
        {{ viewDestinationLabel }}
      </a>
    </div>
  </article>
</template>
