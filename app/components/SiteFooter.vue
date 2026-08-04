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
  }
  builtWithLabel: string
  emailLabel: string
}>()

const year = new Date().getFullYear()
</script>

<template>
  <footer class="shell pb-10 pt-6 sm:pb-12">
    <div class="glass-panel px-6 py-6 sm:px-8">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p class="text-lg font-semibold text-white">dminguela.es</p>
          <p class="mt-2 text-sm text-slate-400">{{ builtWithLabel }} · {{ year }}</p>
        </div>

        <div class="flex flex-wrap items-center gap-3 text-sm text-slate-300">
          <a href="#projects" class="footer-link">{{ nav.projects }}</a>
          <a href="#work" class="footer-link">{{ nav.work }}</a>
          <a href="#stack" class="footer-link">{{ nav.stack }}</a>
          <a :href="githubUrl" target="_blank" rel="noreferrer" class="footer-link">GitHub</a>
          <a v-if="linkedinUrl" :href="linkedinUrl" target="_blank" rel="noreferrer" class="footer-link">LinkedIn</a>
          <a :href="cvHref" target="_blank" rel="noreferrer" class="footer-link">CV</a>
          <a :href="emailHref" class="footer-link">{{ emailLabel }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>
