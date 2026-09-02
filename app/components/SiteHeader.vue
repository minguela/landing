<script setup lang="ts">
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

const links = computed(() => [
  { label: props.nav.projects, href: '#projects' },
  { label: props.nav.work, href: '#work' },
  { label: props.nav.stack, href: '#stack' },
  ...(props.nav.notes ? [{ label: props.nav.notes, href: '#notes' }] : [])
])
</script>

<template>
  <header class="site-header">
    <div class="shell masthead">
      <a href="#top" class="brand-mark" aria-label="David Minguela — home">
        <span class="brand-monogram">DM</span>
        <span class="brand-copy">
          <strong>David Minguela</strong>
          <small>Product-minded frontend engineer</small>
        </span>
      </a>

      <nav class="desktop-nav" aria-label="Primary navigation">
        <a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a>
        <a href="/now">Now</a>
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
      <a href="/now">Now</a>
      <a href="/blog">Blog</a>
    </nav>
  </header>
</template>
