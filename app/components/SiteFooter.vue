<script setup lang="ts">
defineProps<{
  githubUrl: string
  linkedinUrl: string
  emailHref: string
  nav: {
    projects: string
    apps: string
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
          <a href="#projects" class="rounded-full border border-white/8 px-4 py-2 hover:bg-white/5 hover:text-white">{{ nav.projects }}</a>
          <a href="#apps" class="rounded-full border border-white/8 px-4 py-2 hover:bg-white/5 hover:text-white">{{ nav.apps }}</a>
          <a :href="githubUrl" target="_blank" rel="noreferrer" class="rounded-full border border-white/8 px-4 py-2 hover:bg-white/5 hover:text-white">GitHub</a>
          <a v-if="linkedinUrl" :href="linkedinUrl" target="_blank" rel="noreferrer" class="rounded-full border border-white/8 px-4 py-2 hover:bg-white/5 hover:text-white">LinkedIn</a>
          <a :href="emailHref" class="rounded-full border border-white/8 px-4 py-2 hover:bg-white/5 hover:text-white">{{ emailLabel }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>
