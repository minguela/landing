<script setup lang="ts">
import type { ProjectItem } from '~~/data/site'

const props = withDefaults(defineProps<{
  project: ProjectItem
  locale?: 'en' | 'es'
  compact?: boolean
  raised?: boolean
}>(), {
  locale: 'en',
  compact: false,
  raised: false
})

const previewCopy = computed(() => props.locale === 'es'
  ? {
      documentFlow: 'Entrada documental',
      planning: 'Planificación',
      fallback: 'respaldo',
      scope: 'Alcance',
      execution: 'Ejecución'
    }
  : {
      documentFlow: 'Document flow',
      planning: 'Planning',
      fallback: 'fallback',
      scope: 'Scope',
      execution: 'Execution'
    })
</script>

<template>
  <div
    class="product-preview"
    :class="[
      props.project.href.includes('menu-planner') ? 'product-preview-menu' : 'product-preview-renovation',
      props.compact ? 'product-preview-compact' : '',
      props.raised ? 'lg:ml-10' : ''
    ]"
  >
    <div class="flex items-center justify-between gap-3 border-b border-white/10 px-3 py-2.5 sm:px-4">
      <div class="flex min-w-0 items-center gap-2">
        <span class="h-2 w-2 rounded-full bg-current opacity-80" />
        <p class="truncate font-mono text-[11px] text-slate-300">{{ project.name }}</p>
      </div>
      <p class="text-[11px] text-slate-400">{{ project.status }}</p>
    </div>

    <div v-if="project.href.includes('menu-planner')" class="grid gap-3 p-3 sm:grid-cols-[0.74fr_1fr] sm:p-4">
      <div class="preview-pane space-y-2">
        <p class="font-mono text-[10px] uppercase text-cyan-200/70">{{ previewCopy.documentFlow }}</p>
        <div class="rounded-lg border border-cyan-200/10 bg-black/20 p-2.5">
          <div class="h-2 w-16 rounded bg-cyan-100/70" />
          <div class="mt-2 h-1.5 w-full rounded bg-white/12" />
          <div class="mt-1.5 h-1.5 w-4/5 rounded bg-white/10" />
        </div>
        <div class="flex items-center gap-2 rounded-lg border border-white/8 bg-white/[0.035] p-2">
          <span class="h-6 w-6 rounded-md border border-emerald-200/20 bg-emerald-200/12" />
          <div class="min-w-0 flex-1">
            <div class="h-1.5 w-14 rounded bg-emerald-100/55" />
            <div class="mt-1.5 h-1.5 w-full rounded bg-white/10" />
          </div>
        </div>
      </div>
      <div class="preview-pane">
        <div class="flex items-center justify-between gap-2">
          <p class="font-mono text-[10px] uppercase text-cyan-200/70">{{ previewCopy.planning }}</p>
          <span class="rounded-md border border-emerald-200/15 bg-emerald-200/10 px-1.5 py-0.5 text-[10px] text-emerald-100">{{ previewCopy.fallback }}</span>
        </div>
        <div class="mt-3 grid grid-cols-3 gap-1.5">
          <span v-for="slot in 6" :key="slot" class="min-h-9 rounded-md border border-white/8 bg-white/[0.045] p-1">
            <span class="block h-1.5 rounded bg-white/18" :class="slot % 2 ? 'w-4/5' : 'w-3/5'" />
            <span class="mt-1.5 block h-3 rounded bg-cyan-100/12" />
          </span>
        </div>
      </div>
    </div>

    <div v-else class="grid gap-3 p-3 sm:grid-cols-[0.9fr_1fr] sm:p-4">
      <div class="preview-pane">
        <p class="font-mono text-[10px] uppercase text-amber-100/70">{{ previewCopy.scope }}</p>
        <div class="mt-3 space-y-2">
          <div v-for="row in 3" :key="row" class="rounded-lg border border-white/8 bg-white/[0.035] p-2">
            <div class="h-1.5 rounded bg-white/16" :class="row === 1 ? 'w-4/5' : 'w-3/5'" />
            <div class="mt-2 flex gap-1.5">
              <span class="h-4 flex-1 rounded bg-amber-100/12" />
              <span class="h-4 w-8 rounded bg-white/8" />
            </div>
          </div>
        </div>
      </div>
      <div class="preview-pane">
        <div class="flex items-center justify-between">
          <p class="font-mono text-[10px] uppercase text-amber-100/70">{{ previewCopy.execution }}</p>
          <span class="h-2 w-10 rounded bg-amber-100/35" />
        </div>
        <div class="mt-3 grid grid-cols-[0.6fr_1fr] gap-1.5">
          <div class="space-y-1.5">
            <span v-for="step in 4" :key="step" class="block h-6 rounded-md bg-white/[0.045]" />
          </div>
          <div class="space-y-1.5">
            <span class="block h-6 w-3/4 rounded-md bg-amber-100/14" />
            <span class="ml-4 block h-6 w-2/3 rounded-md bg-emerald-100/12" />
            <span class="block h-6 w-5/6 rounded-md bg-amber-100/10" />
            <span class="ml-8 block h-6 w-1/2 rounded-md bg-white/8" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
