<script setup lang="ts">
const props = defineProps<{
  emailHref: string
  cvHref: string
  locale: 'en' | 'es'
  copy: {
    title: string
    description: string
    contact: string
    cv: string
  }
}>()

const analytics = useAnalytics()
</script>

<template>
  <section id="contact" class="shell py-14 sm:py-20">
    <div class="cta-band px-5 py-8 sm:px-8 sm:py-11 lg:flex lg:items-end lg:justify-between lg:gap-10 lg:px-12">
      <div class="max-w-4xl">
        <h2 class="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">{{ copy.title }}</h2>
        <p class="mt-4 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">{{ copy.description }}</p>
      </div>
      <div class="cta-actions mt-7 grid gap-2.5 sm:flex lg:mt-0">
        <a
          :href="emailHref"
          class="button-primary cta-primary"
          @click="analytics.trackProfileClick('email', emailHref, locale, 'final_cta')"
        >
          {{ copy.contact }}
        </a>
        <a
          :href="cvHref"
          target="_blank"
          rel="noreferrer"
          class="button-secondary cta-secondary"
          @click="analytics.trackCvDownload(locale, 'final_cta')"
        >
          {{ copy.cv }}
        </a>
      </div>
    </div>
  </section>
</template>
