<script setup lang="ts">
import type { LinkItem } from '~~/data/site'

defineProps<{
  items: LinkItem[]
  linkLabel: string
  openDestinationLabel: string
}>()
</script>

<template>
  <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
    <a
      v-for="item in items"
      :key="item.label"
      :href="item.href"
      :target="item.external ? '_blank' : undefined"
      :rel="item.external ? 'noreferrer' : undefined"
      class="soft-card group flex h-full flex-col justify-between p-5 sm:p-6 hover:border-white/20 hover:bg-white/[0.045]"
    >
      <div>
        <p class="text-xs uppercase tracking-[0.26em] text-slate-500">{{ linkLabel }}</p>
        <p
          class="mt-3 text-lg font-semibold text-white"
          :class="item.monospace ? 'font-mono text-base sm:text-lg' : 'tracking-[-0.03em]'"
        >
          {{ item.label }}
        </p>
        <p class="mt-3 text-sm leading-6 text-slate-300">{{ item.description }}</p>
      </div>

      <span class="mt-6 inline-flex items-center text-sm font-medium text-slate-200 group-hover:text-white">
        {{ openDestinationLabel }}
      </span>
    </a>
  </div>
</template>
