<script setup lang="ts">
import type { FocusItem } from '#layers/10.portfolio/app/domain/portfolio'

defineProps<{
  copy: {
    eyebrow: string
    title: string
    description: string
    now: string
    blog: string
  }
  items: FocusItem[]
}>()
</script>

<template>
  <section id="notes" class="build-notes">
    <div class="shell build-notes-grid">
      <div class="build-notes-intro">
        <p class="section-kicker">{{ copy.eyebrow }}</p>
        <h2>{{ copy.title }}</h2>
        <p>{{ copy.description }}</p>
        <div class="build-notes-links">
          <NuxtLink to="/now">{{ copy.now }} <span aria-hidden="true">↗</span></NuxtLink>
          <NuxtLink to="/blog">{{ copy.blog }} <span aria-hidden="true">↗</span></NuxtLink>
        </div>
      </div>

      <FocusPanel :items="items" :label="copy.eyebrow" />
    </div>
  </section>
</template>
