<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description: string
}>()
</script>

<template>
  <div class="section-heading">
    <p class="section-kicker">{{ eyebrow }}</p>
    <h2 class="section-title">
      {{ title }}
    </h2>
    <p class="section-description">
      {{ description }}
    </p>
  </div>
</template>
