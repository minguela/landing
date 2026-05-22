<script setup lang="ts">
defineProps<{
  label: string
  items: string[]
}>()
</script>

<template>
  <section class="shell" aria-label="Experience">
    <div class="credibility-strip">
      <p class="font-mono text-[11px] uppercase text-slate-500">{{ label }}</p>
      <ul class="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
        <li v-for="item in items" :key="item" class="bg-slate-950/72 px-4 py-3.5 text-sm font-medium text-slate-100">
          {{ item }}
        </li>
      </ul>
    </div>
  </section>
</template>
