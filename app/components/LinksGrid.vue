<script setup lang="ts">
import type { LinkItem } from '~~/data/site'

const props = defineProps<{
  items: LinkItem[]
  linkLabel: string
  openDestinationLabel: string
  locale: 'en' | 'es'
}>()

const analytics = useAnalytics()

const onLinkClick = (item: LinkItem) => {
  if (item.href.includes('menu-planner')) {
    analytics.trackAppClick('menu_planner', item.href, props.locale, 'apps')
    return
  }
  if (item.href.includes('renovaciones')) {
    analytics.trackAppClick('renovaciones', item.href, props.locale, 'apps')
    return
  }
  if (item.href.includes('/cv/david-minguela-cv.pdf')) {
    analytics.trackCvDownload(props.locale, 'apps')
    return
  }
  if (item.href.startsWith('mailto:')) {
    analytics.trackProfileClick('email', item.href, props.locale, 'apps')
    return
  }
  if (item.label.toLowerCase().includes('github')) {
    analytics.trackProfileClick('github', item.href, props.locale, 'apps')
    return
  }
  if (item.label.toLowerCase().includes('linkedin')) {
    analytics.trackProfileClick('linkedin', item.href, props.locale, 'apps')
  }
}
</script>

<template>
  <div class="grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-3">
    <a
      v-for="item in items"
      :key="item.label"
      :href="item.href"
      :target="item.external ? '_blank' : undefined"
      :rel="item.external ? 'noreferrer' : undefined"
      class="soft-card group flex h-full flex-col justify-between p-4 sm:p-5 hover:border-white/22 hover:bg-white/[0.05]"
      @click="onLinkClick(item)"
    >
      <div>
        <p class="text-[11px] uppercase tracking-[0.2em] text-slate-500">{{ linkLabel }}</p>
        <p
          class="mt-2.5 text-base font-semibold text-white sm:text-lg"
          :class="item.monospace ? 'font-mono' : 'tracking-[-0.02em]'"
        >
          {{ item.label }}
        </p>
        <p class="mt-2.5 text-sm leading-6 text-slate-300">{{ item.description }}</p>
      </div>

      <span class="mt-5 inline-flex items-center text-sm font-medium text-slate-200 group-hover:text-white">
        {{ openDestinationLabel }}
      </span>
    </a>
  </div>
</template>
