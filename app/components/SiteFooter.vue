<script setup lang="ts">
import { getSectionHref } from '~/utils/section-links'

defineProps<{
  githubUrl: string
  linkedinUrl: string
  emailHref: string
  cvHref: string
  nav: {
    projects: string
    work: string
    stack: string
    notes?: string
  }
  builtWithLabel: string
  emailLabel: string
  note?: string
}>()

const year = new Date().getFullYear()
const route = useRoute()
</script>

<template>
  <footer class="site-footer">
    <div class="shell footer-grid">
      <div>
        <p class="footer-name">David Minguela</p>
        <p>{{ builtWithLabel }} · {{ year }}</p>
      </div>

      <nav aria-label="Footer navigation">
        <NuxtLink :to="getSectionHref(route.path, 'projects')">{{ nav.projects }}</NuxtLink>
        <NuxtLink :to="getSectionHref(route.path, 'work')">{{ nav.work }}</NuxtLink>
        <NuxtLink :to="getSectionHref(route.path, 'stack')">{{ nav.stack }}</NuxtLink>
        <NuxtLink v-if="nav.notes" :to="getSectionHref(route.path, 'notes')">{{ nav.notes }}</NuxtLink>
        <a :href="githubUrl" target="_blank" rel="noreferrer">GitHub ↗</a>
        <a v-if="linkedinUrl" :href="linkedinUrl" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a :href="cvHref" target="_blank" rel="noreferrer">CV ↗</a>
      </nav>

      <div class="footer-contact">
        <a :href="emailHref">{{ emailLabel }}</a>
        <p v-if="note">{{ note }}</p>
      </div>
    </div>
  </footer>
</template>
