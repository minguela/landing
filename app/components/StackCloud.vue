<script setup lang="ts">
import type { StackGroup } from '~~/data/site'

defineProps<{
  groups: StackGroup[]
}>()
</script>

<template>
  <div class="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-2">
    <div
      v-for="group in groups"
      :key="group.title"
      class="bg-slate-950/75 p-4 sm:p-6"
    >
      <p class="text-base font-semibold text-white sm:text-lg">{{ group.title }}</p>
      <p class="mt-2 max-w-lg text-sm leading-6 text-slate-300 sm:text-base">{{ group.description }}</p>
      <div class="mt-4 flex flex-wrap gap-2">
        <span
          v-for="item in group.items"
          :key="item"
          class="tech-label"
        >
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>
