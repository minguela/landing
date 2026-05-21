<script setup lang="ts">
const props = defineProps<{
  githubUrl: string
  linkedinUrl: string
  emailHref: string
  cvHref: string
  locale: 'en' | 'es'
  emailLabel: string
  heroSignals: string[]
  copy: {
    chip: string
    title: string
    lead: string
    body: string
    ctaProjects: string
    ctaGithub: string
    ctaLinkedin: string
    ctaEmail: string
    ctaCv: string
    structureEyebrow: string
    structureTitle: string
    structureStatus: string
    structureRootLabel: string
    structureRootDescription: string
    contactEyebrow: string
  }
  liveApps: Array<{ label: string, description: string }>
}>()

const analytics = useAnalytics()

const onHeroProjects = () => {
  analytics.trackHeroCta('hero_projects', props.copy.ctaProjects, '#projects', props.locale)
}

const onHeroGithub = () => {
  analytics.trackProfileClick('github', props.githubUrl, props.locale, 'hero')
}

const onHeroLinkedinOrEmail = () => {
  if (props.linkedinUrl) {
    analytics.trackProfileClick('linkedin', props.linkedinUrl, props.locale, 'hero')
    return
  }
  analytics.trackProfileClick('email', props.emailHref, props.locale, 'hero')
}

const onHeroCv = () => {
  analytics.trackCvDownload(props.locale, 'hero')
}
</script>

<template>
  <section id="top" class="shell section-space pt-8 sm:pt-12 lg:pt-16">
    <div class="glass-panel relative overflow-hidden px-4 py-6 sm:px-7 sm:py-8 lg:px-12 lg:py-12">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,140,255,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(77,226,197,0.12),transparent_26%)]" />

      <div class="relative grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.9fr)] lg:items-end">
        <div>
          <div class="chip">{{ copy.chip }}</div>

          <h1 class="mt-5 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:mt-6 sm:text-6xl lg:text-7xl">
            {{ copy.title }}
          </h1>

          <p class="mt-4 max-w-3xl text-lg font-medium leading-tight tracking-[-0.02em] text-slate-100 sm:text-2xl">
            {{ copy.lead }}
          </p>

          <p class="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">
            {{ copy.body }}
          </p>

          <div class="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
            <span
              v-for="signal in heroSignals"
              :key="signal"
              class="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-200 sm:px-4 sm:py-2 sm:text-sm"
            >
              {{ signal }}
            </span>
          </div>

          <div class="mt-7 grid gap-2.5 sm:mt-9 sm:grid-cols-2 lg:flex lg:flex-wrap">
            <a
              href="#projects"
              class="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 hover:translate-y-[-1px] hover:bg-slate-100"
              @click="onHeroProjects"
            >
              {{ copy.ctaProjects }}
            </a>
            <a
              :href="githubUrl"
              target="_blank"
              rel="noreferrer"
              class="inline-flex min-h-11 items-center justify-center rounded-full border border-white/14 bg-white/6 px-5 py-2.5 text-sm font-semibold text-white hover:border-white/24 hover:bg-white/10"
              @click="onHeroGithub"
            >
              {{ copy.ctaGithub }}
            </a>
            <a
              :href="linkedinUrl || emailHref"
              :target="linkedinUrl ? '_blank' : undefined"
              :rel="linkedinUrl ? 'noreferrer' : undefined"
              class="inline-flex min-h-11 items-center justify-center rounded-full border border-white/14 bg-transparent px-5 py-2.5 text-sm font-semibold text-slate-200 hover:border-white/24 hover:bg-white/6 hover:text-white"
              @click="onHeroLinkedinOrEmail"
            >
              {{ linkedinUrl ? copy.ctaLinkedin : copy.ctaEmail }}
            </a>
            <a
              :href="cvHref"
              target="_blank"
              rel="noreferrer"
              class="inline-flex min-h-11 items-center justify-center rounded-full border border-white/14 bg-transparent px-5 py-2.5 text-sm font-semibold text-slate-200 hover:border-white/24 hover:bg-white/6 hover:text-white"
              @click="onHeroCv"
            >
              {{ copy.ctaCv }}
            </a>
          </div>
        </div>

        <div class="soft-card p-4 sm:p-5 lg:p-6">
          <div class="flex items-center justify-between gap-3">
            <div>
              <p class="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">{{ copy.structureEyebrow }}</p>
              <p class="mt-2 text-lg font-semibold tracking-[-0.03em] text-white sm:text-xl">{{ copy.structureTitle }}</p>
            </div>
            <span class="rounded-full border border-emerald-400/24 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300 sm:px-3">
              {{ copy.structureStatus }}
            </span>
          </div>

          <div class="mt-5 space-y-3">
            <div class="rounded-xl border border-white/10 bg-slate-950/55 p-3.5 sm:p-4">
              <p class="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">{{ copy.structureRootLabel }}</p>
              <p class="mt-1.5 text-base font-semibold text-white sm:text-lg">dminguela.es</p>
              <p class="mt-2 text-sm leading-6 text-slate-300">{{ copy.structureRootDescription }}</p>
            </div>

            <div class="grid gap-3 sm:grid-cols-2">
              <div
                v-for="app in liveApps"
                :key="app.label"
                class="rounded-xl border border-white/10 bg-white/[0.03] p-3.5 sm:p-4"
              >
                <p class="font-mono text-[11px] text-slate-500">{{ app.label }}</p>
                <p class="mt-2 text-sm text-slate-200">{{ app.description }}</p>
              </div>
            </div>

            <div id="contact" class="rounded-xl border border-white/10 bg-white/[0.02] p-3.5 sm:p-4">
              <p class="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500">{{ copy.contactEyebrow }}</p>
              <a :href="emailHref" class="mt-2 inline-flex text-sm font-medium text-slate-100 hover:text-white sm:text-base">
                {{ emailLabel }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
