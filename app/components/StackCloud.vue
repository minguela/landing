<script setup lang="ts">
import type { StackGroup } from '#layers/10.portfolio/app/domain/portfolio'

defineProps<{ groups: StackGroup[] }>()
</script>

<template>
  <div class="toolkit-ledger">
    <article v-for="(group, index) in groups" :key="group.title">
      <p class="toolkit-number">0{{ index + 1 }}</p>
      <div class="toolkit-title">
        <h3>{{ group.title }}</h3>
        <p>{{ group.description }}</p>
      </div>
      <ul>
        <li v-for="item in group.items" :key="item">{{ item }}</li>
      </ul>
    </article>
  </div>
</template>
