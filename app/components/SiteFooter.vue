<script setup lang="ts">
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
</script>

<template>
  <footer class="site-footer">
    <div class="shell footer-grid">
      <div>
        <p class="footer-name">David Minguela</p>
        <p>{{ builtWithLabel }} · {{ year }}</p>
      </div>

      <nav aria-label="Footer navigation">
        <a href="#projects">{{ nav.projects }}</a>
        <a href="#work">{{ nav.work }}</a>
        <a href="#stack">{{ nav.stack }}</a>
        <a v-if="nav.notes" href="#notes">{{ nav.notes }}</a>
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
