<script setup lang="ts">
import type { StackGroup } from '~/data/site'

defineProps<{
  groups: StackGroup[]
}>()
</script>

<template>
  <div class="grid gap-4 lg:grid-cols-3">
    <div
      v-for="group in groups"
      :key="group.title"
      class="soft-card p-5 sm:p-6"
    >
      <p class="text-sm font-semibold tracking-[-0.03em] text-white">{{ group.title }}</p>
      <div class="mt-5 flex flex-wrap gap-2">
        <span
          v-for="item in group.items"
          :key="item"
          class="rounded-full border border-white/8 bg-slate-950/55 px-3 py-2 text-sm font-medium text-slate-200"
        >
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>
