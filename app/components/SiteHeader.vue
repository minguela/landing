<script setup lang="ts">
const props = defineProps<{
  githubUrl: string
  linkedinUrl: string
  emailHref: string
  nav: {
    projects: string
    work: string
    stack: string
    contact: string
  }
  localeFlag: string
  localeLabel: string
  localeSwitchLabel: string
}>()

const emit = defineEmits<{ toggleLocale: [] }>()

type HeaderLink = { label: string, href: string, external?: boolean }

const links = computed<HeaderLink[]>(() => [
  { label: props.nav.projects, href: '#projects' },
  { label: props.nav.work, href: '#work' },
  { label: props.nav.stack, href: '#stack' },
  { label: props.nav.contact, href: '#contact' }
])

const secondaryLinks = computed<HeaderLink[]>(() => [
  { label: 'Now', href: '/now' },
  { label: 'Blog', href: '/blog' },
])

const profileLinks = computed<HeaderLink[]>(() => [
  { label: 'GitHub', href: props.githubUrl, external: true },
  ...(props.linkedinUrl ? [{ label: 'LinkedIn', href: props.linkedinUrl, external: true }] : [])
])
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-white/8 bg-[#050812]/86 backdrop-blur-xl">
    <div class="shell py-3">
      <div class="flex items-center justify-between gap-3">
        <a href="#top" class="group inline-flex min-w-0 items-center gap-3">
          <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/12 bg-white/6 text-xs font-semibold text-white">
            DM
          </span>
          <div class="min-w-0">
            <p class="truncate text-sm font-semibold text-white">David Minguela</p>
            <p class="truncate text-[11px] uppercase text-slate-400">dminguela.es</p>
          </div>
        </a>

        <div class="flex items-center gap-2">
          <button
            type="button"
            :aria-label="localeSwitchLabel"
            :title="localeSwitchLabel"
            class="focus-ring inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-white/12 bg-white/6 px-3 text-base text-white hover:border-white/25 hover:bg-white/10"
            @click="emit('toggleLocale')"
          >
            <span aria-hidden="true">{{ localeFlag }}</span>
            <span class="ml-2 hidden text-[11px] font-semibold uppercase text-slate-300 sm:inline">{{ localeLabel }}</span>
          </button>

          <a
            :href="emailHref"
            class="button-secondary min-h-10 px-3 py-2 text-xs sm:px-4 sm:text-sm"
          >
            {{ nav.contact }}
          </a>
        </div>
      </div>

      <div class="mt-3 flex items-center gap-2 overflow-x-auto pb-1 lg:hidden">
        <a
          v-for="link in [...links, ...secondaryLinks]"
          :key="link.label"
          :href="link.href"
          class="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-200"
        >
          {{ link.label }}
        </a>
      </div>

      <nav class="mt-3 hidden items-center gap-1 lg:flex">
        <a
          v-for="link in [...links, ...secondaryLinks, ...profileLinks]"
          :key="link.label"
          :href="link.href"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noreferrer' : undefined"
          class="focus-ring rounded-full px-4 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
        >
          {{ link.label }}
        </a>
      </nav>
    </div>
  </header>
</template>
