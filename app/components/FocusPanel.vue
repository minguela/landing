<script setup lang="ts">
import type { FocusItem } from '#layers/10.portfolio/app/domain/portfolio'

defineProps<{
  items: FocusItem[]
  label: string
}>()
</script>

<template>
  <div class="notes-list">
    <article v-for="item in items" :key="item.marker">
      <p>{{ item.marker }}</p>
      <h3>{{ item.title }}</h3>
      <span>{{ item.text }}</span>
    </article>
  </div>
</template>
