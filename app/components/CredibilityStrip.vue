<script setup lang="ts">
import type { CredibilityItem } from '#layers/10.portfolio/app/domain/portfolio'
import { formatCredibilityItem } from '#layers/10.portfolio/app/presentation/portfolio-display'

defineProps<{
  label: string
  items: CredibilityItem[]
  locale: 'en' | 'es'
}>()
</script>

<template>
  <section class="capability-rail" aria-label="Capabilities">
    <div class="shell capability-grid">
      <p class="capability-label">{{ label }}</p>
      <ul>
        <li v-for="item in items" :key="item.value">
          {{ formatCredibilityItem(item, locale) }}
        </li>
      </ul>
    </div>
  </section>
</template>
