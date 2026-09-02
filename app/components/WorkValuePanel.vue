<script setup lang="ts">
import type { WorkValue } from '#layers/10.portfolio/app/domain/portfolio'

defineProps<{ items: WorkValue[] }>()
</script>

<template>
  <div class="principles-grid">
    <article v-for="(item, index) in items" :key="item.title">
      <p>0{{ index + 1 }}</p>
      <h3>{{ item.title }}</h3>
      <span aria-hidden="true">↘</span>
      <div />
      <p>{{ item.text }}</p>
    </article>
  </div>
</template>
