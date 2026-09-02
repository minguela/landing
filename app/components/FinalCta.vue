<script setup lang="ts">
defineProps<{
  emailHref: string
  cvHref: string
  locale: 'en' | 'es'
  copy: {
    eyebrow: string
    title: string
    subtitle: string
    team: string
    client: string
    email: string
    cv: string
  }
}>()

const analytics = useAnalytics()
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="shell">
      <div class="contact-sheet">
        <div class="contact-stamp" aria-hidden="true">DM<br>26</div>
        <div>
          <p class="section-kicker">{{ copy.eyebrow }}</p>
          <h2>{{ copy.title }}</h2>
          <p class="contact-description">{{ copy.subtitle }}</p>
          <div class="contact-contexts">
            <span>{{ copy.team }}</span>
            <span>{{ copy.client }}</span>
          </div>
        </div>
        <div class="contact-actions">
          <a
            :href="emailHref"
            class="button-primary"
            @click="analytics.trackProfileClick('email', emailHref, locale, 'final_cta')"
          >{{ copy.email }} <span aria-hidden="true">↗</span></a>
          <a
            :href="cvHref"
            target="_blank"
            rel="noreferrer"
            class="button-secondary"
            @click="analytics.trackCvDownload(locale, 'final_cta')"
          >{{ copy.cv }}</a>
        </div>
      </div>
    </div>
  </section>
</template>
