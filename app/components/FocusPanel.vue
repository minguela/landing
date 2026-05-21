<script setup lang="ts">
defineProps<{
  items: Array<{ title: string, text: string }>
  label: string
}>()
</script>

<template>
  <div class="grid gap-3 sm:gap-4 lg:grid-cols-2">
    <article
      v-for="item in items"
      :key="item.title"
      class="soft-card p-4 sm:p-5"
    >
      <p class="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">{{ label }}</p>
      <h3 class="mt-2.5 text-lg font-semibold tracking-[-0.03em] text-white sm:text-xl">{{ item.title }}</h3>
      <p class="mt-3 text-sm leading-7 text-slate-300 sm:text-base">{{ item.text }}</p>
    </article>
  </div>
</template>
