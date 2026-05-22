<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description: string
}>()
</script>

<template>
  <div class="max-w-3xl">
    <p class="section-kicker">{{ eyebrow }}</p>
    <h2 class="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
      {{ title }}
    </h2>
    <p class="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
      {{ description }}
    </p>
  </div>
</template>
