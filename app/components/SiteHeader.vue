<script setup lang="ts">
const props = defineProps<{
  githubUrl: string
  linkedinUrl: string
  emailHref: string
  nav: {
    projects: string
    stack: string
    apps: string
    focus: string
    contact: string
  }
  localeFlag: string
  localeLabel: string
  localeSwitchLabel: string
}>()

const emit = defineEmits<{ toggleLocale: [] }>()

const links = computed(() => [
  { label: props.nav.projects, href: '#projects' },
  { label: props.nav.stack, href: '#stack' },
  { label: props.nav.apps, href: '#apps' },
  { label: props.nav.focus, href: '#focus' }
])

const profileLinks = computed(() => [
  { label: 'GitHub', href: props.githubUrl, external: true },
  ...(props.linkedinUrl ? [{ label: 'LinkedIn', href: props.linkedinUrl, external: true }] : [])
])
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-white/8 bg-slate-950/70 backdrop-blur-xl">
    <div class="shell py-3 sm:py-4">
      <div class="flex items-center justify-between gap-3">
        <a href="#top" class="group inline-flex min-w-0 items-center gap-3">
          <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/12 bg-white/6 text-xs font-semibold tracking-[0.2em] text-white">
            DM
          </span>
          <div class="min-w-0">
            <p class="truncate text-sm font-semibold text-white">David Minguela</p>
            <p class="truncate text-[11px] uppercase tracking-[0.2em] text-slate-400">dminguela.es</p>
          </div>
        </a>

        <div class="flex items-center gap-2">
          <button
            type="button"
            :aria-label="localeSwitchLabel"
            :title="localeSwitchLabel"
            class="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-white/12 bg-white/6 px-3 text-base text-white hover:border-white/25 hover:bg-white/10"
            @click="emit('toggleLocale')"
          >
            <span aria-hidden="true">{{ localeFlag }}</span>
            <span class="ml-2 hidden text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300 sm:inline">{{ localeLabel }}</span>
          </button>

          <a
            :href="emailHref"
            class="inline-flex rounded-full border border-white/12 bg-white/6 px-3 py-2 text-xs font-semibold text-white hover:border-white/25 hover:bg-white/10 sm:px-4 sm:text-sm"
          >
            {{ nav.contact }}
          </a>
        </div>
      </div>

      <div class="mt-3 flex items-center gap-2 overflow-x-auto pb-1 lg:hidden">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          class="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-200"
        >
          {{ link.label }}
        </a>
      </div>

      <nav class="mt-3 hidden items-center gap-2 lg:flex">
        <a
          v-for="link in [...links, ...profileLinks]"
          :key="link.label"
          :href="link.href"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noreferrer' : undefined"
          class="rounded-full px-4 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
        >
          {{ link.label }}
        </a>
      </nav>
    </div>
  </header>
</template>
