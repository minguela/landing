<script setup lang="ts">
defineProps<{
  items: Array<{ title: string, text: string }>
  label: string
}>()
</script>

<template>
  <div class="focus-rail grid gap-3 p-3 sm:grid-cols-2 sm:p-4 lg:grid-cols-4">
    <article
      v-for="item in items"
      :key="item.title"
      class="rounded-xl border border-white/8 bg-black/15 p-4"
    >
      <p class="font-mono text-[11px] uppercase text-slate-500">{{ label }}</p>
      <h3 class="mt-2.5 text-base font-semibold leading-6 text-white">{{ item.title }}</h3>
      <p class="mt-2 text-sm leading-6 text-slate-300">{{ item.text }}</p>
    </article>
  </div>
</template>
