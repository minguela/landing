<script setup lang="ts">
import { getSectionHref } from '~/utils/section-links'

const props = defineProps<{
  githubUrl: string
  linkedinUrl: string
  emailHref: string
  nav: {
    projects: string
    work: string
    stack: string
    notes?: string
    contact: string
  }
  localeFlag: string
  localeLabel: string
  localeSwitchLabel: string
}>()

const emit = defineEmits<{ toggleLocale: [] }>()
const route = useRoute()

const brandRole = computed(() => props.localeLabel.toLowerCase() === 'es'
  ? 'Arquitecto frontend'
  : 'Frontend architect')

const links = computed(() => [
  { id: 'projects', label: props.nav.projects, href: getSectionHref(route.path, 'projects') },
  { id: 'work', label: props.nav.work, href: getSectionHref(route.path, 'work') },
  { id: 'stack', label: props.nav.stack, href: getSectionHref(route.path, 'stack') },
  ...(props.nav.notes ? [{ id: 'notes', label: props.nav.notes, href: getSectionHref(route.path, 'notes') }] : [])
])
</script>

<template>
  <header class="site-header">
    <div class="shell masthead">
      <a :href="getSectionHref(route.path, 'top')" class="brand-mark" aria-label="David Minguela — home">
        <span class="brand-monogram">DM</span>
        <span class="brand-copy">
          <strong>David Minguela</strong>
          <small>{{ brandRole }}</small>
        </span>
      </a>

      <nav class="desktop-nav" aria-label="Primary navigation">
        <a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a>
        <a href="/now">{{ localeLabel.toLowerCase() === 'es' ? 'Ahora' : 'Now' }}</a>
        <a href="/blog">Blog</a>
      </nav>

      <div class="header-actions">
        <button
          type="button"
          :aria-label="localeSwitchLabel"
          :title="localeSwitchLabel"
          class="locale-switch"
          @click="emit('toggleLocale')"
        >
          <span aria-hidden="true">{{ localeFlag }}</span>
          <span>{{ localeLabel }}</span>
        </button>
        <a :href="emailHref" class="header-contact">{{ nav.contact }} <span aria-hidden="true">↗</span></a>
      </div>
    </div>

    <nav class="shell mobile-nav" aria-label="Mobile navigation">
      <a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a>
      <a href="/now">{{ localeLabel.toLowerCase() === 'es' ? 'Ahora' : 'Now' }}</a>
      <a href="/blog">Blog</a>
    </nav>
  </header>
</template>
