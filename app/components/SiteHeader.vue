<script setup lang="ts">
const props = defineProps<{
  githubUrl: string
  linkedinUrl: string
  emailHref: string
}>()

const links = computed(() => [
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Apps', href: '#apps' },
  { label: 'Focus', href: '#focus' },
  { label: 'GitHub', href: props.githubUrl, external: true },
  ...(props.linkedinUrl ? [{ label: 'LinkedIn', href: props.linkedinUrl, external: true }] : [])
])
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-white/6 bg-slate-950/55 backdrop-blur-xl">
    <div class="shell flex min-h-18 items-center justify-between gap-4 py-4">
      <a href="#top" class="group inline-flex items-center gap-3">
        <span class="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold tracking-[0.24em] text-white">
          DM
        </span>
        <div>
          <p class="text-sm font-semibold text-white">David Minguela</p>
          <p class="text-xs tracking-[0.24em] text-slate-400 uppercase">dminguela.es</p>
        </div>
      </a>

      <nav class="hidden items-center gap-2 lg:flex">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noreferrer' : undefined"
          class="rounded-full px-4 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
        >
          {{ link.label }}
        </a>
      </nav>

      <a
        :href="emailHref"
        class="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:border-white/20 hover:bg-white/8 sm:inline-flex"
      >
        Contact
      </a>
    </div>
  </header>
</template>
