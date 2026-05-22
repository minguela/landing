<script setup lang="ts">
import type { WorkItem } from '~~/data/site'

defineProps<{
  items: WorkItem[]
}>()
</script>

<template>
  <div class="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-3">
    <article v-for="(item, index) in items" :key="item.title" class="bg-[#07101d]/92 p-5 sm:p-7">
      <p class="font-mono text-[11px] uppercase text-cyan-200/75">0{{ index + 1 }}</p>
      <h3 class="mt-4 text-xl font-semibold leading-7 text-white">{{ item.title }}</h3>
      <p class="mt-3 text-sm leading-7 text-slate-300 sm:text-base">{{ item.text }}</p>
    </article>
  </div>
</template>
