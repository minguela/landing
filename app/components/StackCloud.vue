<script setup lang="ts">
import type { StackGroup } from '~~/data/site'

defineProps<{
  groups: StackGroup[]
}>()
</script>

<template>
  <div class="grid gap-3 sm:gap-4 lg:grid-cols-2 xl:grid-cols-3">
    <div
      v-for="group in groups"
      :key="group.title"
      class="soft-card p-4 sm:p-5"
    >
      <p class="text-sm font-semibold tracking-[-0.02em] text-white">{{ group.title }}</p>
      <div class="mt-4 flex flex-wrap gap-2">
        <span
          v-for="item in group.items"
          :key="item"
          class="rounded-full border border-white/10 bg-slate-950/55 px-2.5 py-1.5 text-xs font-medium text-slate-200 sm:px-3 sm:py-2 sm:text-sm"
        >
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>
