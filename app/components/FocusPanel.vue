<script setup lang="ts">
defineProps<{
  items: Array<{ title: string, text: string }>
}>()
</script>

<template>
  <div class="grid gap-4 lg:grid-cols-2">
    <article
      v-for="item in items"
      :key="item.title"
      class="soft-card p-5 sm:p-6"
    >
      <p class="font-mono text-xs uppercase tracking-[0.26em] text-slate-500">current focus</p>
      <h3 class="mt-3 text-xl font-semibold tracking-[-0.04em] text-white">{{ item.title }}</h3>
      <p class="mt-4 text-base leading-7 text-slate-300">{{ item.text }}</p>
    </article>
  </div>
</template>
