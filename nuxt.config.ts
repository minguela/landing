import process from 'node:process'
import tailwindcss from '@tailwindcss/vite'

const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://dminguela.es'
const siteName = 'David Minguela — Senior Frontend Developer'
const siteDescription = 'Portfolio y hub técnico de David Minguela: senior frontend developer especializado en Vue/Nuxt, arquitectura de producto, OCR pipelines, automatización y self-hosting.'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  },
  runtimeConfig: {
    public: {
      siteUrl,
      siteName,
      siteDescription,
      githubUrl: process.env.NUXT_PUBLIC_GITHUB_URL || 'https://github.com/minguela',
      linkedinUrl: process.env.NUXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/in/david-minguela-7167bb98/',
      email: process.env.NUXT_PUBLIC_EMAIL || 'minguela9109@gmail.com'
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      },
      title: siteName,
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: siteDescription },
        { name: 'author', content: 'David Minguela' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#8B5CF6' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: siteName },
        { property: 'og:title', content: siteName },
        { property: 'og:description', content: siteDescription },
        { property: 'og:url', content: siteUrl },
         (1200x630) for better social previews.
        { property: 'og:image', content: `${siteUrl}/og-image.svg` },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: siteName },
        { name: 'twitter:description', content: siteDescription },
        { name: 'twitter:image', content: `${siteUrl}/og-image.svg` }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
         (180x180).
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/manifest.json' },
        { rel: 'canonical', href: siteUrl }
      ]
    }
  },
  // Security headers injected at the Nitro/server level for Vercel.
  // Nuxt 4 uses Nitro; routeRules apply to static + server output.
  routeRules: {
    '/**': {
      headers: {
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
        // Relaxed CSP for a static SPA. Tighten once external scripts/styles are frozen.
        'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self';"
      }
    }
  }
})
