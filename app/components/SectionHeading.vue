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
    <h2 class="text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-5xl">
      {{ title }}
    </h2>
    <p class="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">
      {{ description }}
    </p>
  </div>
</template>
