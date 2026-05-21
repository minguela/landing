<script setup lang="ts">
defineProps<{
  githubUrl: string
  linkedinUrl: string
  emailHref: string
  emailLabel: string
  localeFlag: string
  localeLabel: string
  localeSwitchLabel: string
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
    structureEyebrow: string
    structureTitle: string
    structureStatus: string
    structureRootLabel: string
    structureRootDescription: string
    contactEyebrow: string
  }
  liveApps: Array<{ label: string, description: string }>
}>()
</script>

<template>
  <section id="top" class="shell section-space pt-14 sm:pt-20 lg:pt-24">
    <div class="glass-panel relative overflow-hidden px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,140,255,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(77,226,197,0.12),transparent_26%)]" />
      <div class="relative grid gap-12 lg:grid-cols-[minmax(0,1.45fr)_minmax(340px,0.9fr)] lg:items-end">
        <div>
          <div class="chip">{{ copy.chip }}</div>

          <h1 class="mt-7 max-w-4xl text-5xl font-semibold tracking-[-0.08em] text-white sm:text-6xl lg:text-7xl">
            {{ copy.title }}
          </h1>

          <p class="mt-5 max-w-3xl text-xl font-medium tracking-[-0.03em] text-slate-100 sm:text-2xl">
            {{ copy.lead }}
          </p>

          <p class="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            {{ copy.body }}
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <span
              v-for="signal in heroSignals"
              :key="signal"
              class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
            >
              {{ signal }}
            </span>
          </div>

          <div class="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              class="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:translate-y-[-1px] hover:bg-slate-100"
            >
              {{ copy.ctaProjects }}
            </a>
            <a
              :href="githubUrl"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:border-white/20 hover:bg-white/8"
            >
              {{ copy.ctaGithub }}
            </a>
            <a
              :href="linkedinUrl || emailHref"
              :target="linkedinUrl ? '_blank' : undefined"
              :rel="linkedinUrl ? 'noreferrer' : undefined"
              class="inline-flex items-center justify-center rounded-full border border-white/12 bg-transparent px-6 py-3 text-sm font-semibold text-slate-200 hover:border-white/20 hover:bg-white/5 hover:text-white"
            >
              {{ linkedinUrl ? copy.ctaLinkedin : copy.ctaEmail }}
            </a>
          </div>
        </div>

        <div class="soft-card p-5 sm:p-6">
          <div class="flex items-center justify-between gap-3">
            <div>
              <p class="text-xs font-medium uppercase tracking-[0.28em] text-slate-400">{{ copy.structureEyebrow }}</p>
              <p class="mt-2 text-xl font-semibold tracking-[-0.04em] text-white">{{ copy.structureTitle }}</p>
            </div>
            <span class="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
              {{ copy.structureStatus }}
            </span>
          </div>

          <div class="mt-6 space-y-3">
            <div class="rounded-2xl border border-white/8 bg-slate-950/55 p-4">
              <p class="font-mono text-xs uppercase tracking-[0.24em] text-slate-500">{{ copy.structureRootLabel }}</p>
              <p class="mt-2 text-lg font-semibold text-white">dminguela.es</p>
              <p class="mt-2 text-sm leading-6 text-slate-300">{{ copy.structureRootDescription }}</p>
            </div>

            <div class="grid gap-3 sm:grid-cols-2">
              <div
                v-for="app in liveApps"
                :key="app.label"
                class="rounded-2xl border border-white/8 bg-white/[0.03] p-4"
              >
                <p class="font-mono text-xs text-slate-500">{{ app.label }}</p>
                <p class="mt-2 text-sm text-slate-200">{{ app.description }}</p>
              </div>
            </div>

            <div id="contact" class="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
              <p class="text-xs font-medium uppercase tracking-[0.26em] text-slate-500">{{ copy.contactEyebrow }}</p>
              <a :href="emailHref" class="mt-2 inline-flex text-base font-medium text-slate-100 hover:text-white">
                {{ emailLabel }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
