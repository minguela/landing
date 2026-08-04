<script setup lang="ts">
import { ref } from 'vue'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  avatar: string // initials
  text: string
  highlight: string
}

const testimonials = ref<Testimonial[]>([
  {
    id: 1,
    name: 'María López',
    role: 'CTO',
    company: 'Fintech Solutions',
    avatar: 'ML',
    text: 'David brought a level of product thinking that changed how we approach frontend architecture. His work on the Nuxt migration saved us months of rework and the team still references his decision docs.',
    highlight: 'saved us months of rework',
  },
  {
    id: 2,
    name: 'Alex Chen',
    role: 'Engineering Manager',
    company: 'DataViz Co.',
    avatar: 'AC',
    text: 'Working with David was a masterclass in frontend resilience. He designed our component system so well that when we had to pivot the product six months later, the foundation held without a single breaking change.',
    highlight: 'foundation held without a single breaking change',
  },
  {
    id: 3,
    name: 'Javier Torres',
    role: 'Founder',
    company: 'OCRFlow',
    avatar: 'JT',
    text: 'I needed someone who understood both the frontend and the operational side of document processing. David built our OCR pipeline UI with fallback strategies that made the product feel robust even when upstream services failed.',
    highlight: 'made the product feel robust',
  },
  {
    id: 4,
    name: 'Sarah Mitchell',
    role: 'Product Lead',
    company: 'HealthTech Inc.',
    avatar: 'SM',
    text: 'David doesn\'t just write code — he asks the right product questions before writing a single line. The nutrition planning interface he built is the cleanest piece of UX in our entire platform.',
    highlight: 'cleanest piece of UX in our entire platform',
  },
  {
    id: 5,
    name: 'Carlos Ruiz',
    role: 'Senior Developer',
    company: 'Self-employed',
    avatar: 'CR',
    text: 'I learned more about frontend architecture reading David\'s public work and code reviews than I did in three years of tutorials. His approach to TypeScript and component design is genuinely opinionated in the best way.',
    highlight: 'genuinely opinionated in the best way',
  },
  {
    id: 6,
    name: 'Emma Johansson',
    role: 'VP of Engineering',
    company: 'Nordic SaaS',
    avatar: 'EJ',
    text: 'We contracted David for a critical Vue 2 to Nuxt 4 migration. He delivered ahead of schedule, documented every architectural decision, and left the team more capable than when he arrived. Rare combination of speed and quality.',
    highlight: 'delivered ahead of schedule',
  },
])
</script>

<template>
  <section id="testimonials" class="shell py-10 sm:py-16">
    <div class="mx-auto max-w-5xl">
      <div class="mb-10 text-center">
        <p class="section-kicker">Wall of Love</p>
        <h2 class="text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
          What people say
        </h2>
        <p class="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
          Kind words from people I've worked with. Genuine feedback from real projects, real teams and real product challenges.
        </p>
      </div>

      <!-- Masonry-style grid -->
      <div class="columns-1 gap-5 sm:columns-2 lg:columns-3">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="soft-card mb-5 break-inside-avoid p-5"
        >
          <!-- Avatar + name -->
          <div class="flex items-center gap-3">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-200/30 bg-cyan-200/10 font-mono text-sm font-semibold text-cyan-200">
              {{ testimonial.avatar }}
            </div>
            <div class="min-w-0">
              <p class="text-sm font-semibold text-white">{{ testimonial.name }}</p>
              <p class="text-xs text-slate-400">{{ testimonial.role }} · {{ testimonial.company }}</p>
            </div>
          </div>

          <!-- Quote -->
          <blockquote class="mt-4">
            <p class="text-sm leading-6 text-slate-200">
              <!-- Highlight parts of the quote -->
              <template v-if="testimonial.highlight">
                {{ testimonial.text.split(testimonial.highlight)[0] }}
                <mark class="bg-cyan-200/15 text-cyan-200 rounded px-0.5">
                  {{ testimonial.highlight }}
                </mark>
                {{ testimonial.text.split(testimonial.highlight)[1] || '' }}
              </template>
              <template v-else>
                {{ testimonial.text }}
              </template>
            </p>
          </blockquote>

          <!-- Decorative quote mark -->
          <div class="mt-3 text-right font-serif text-4xl leading-none text-white/5" aria-hidden="true">
            "
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
