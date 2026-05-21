import process from 'node:process'
import tailwindcss from '@tailwindcss/vite'

const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://dminguela.es'
const siteName = 'David Minguela — Frontend Developer'
const siteDescription = 'Portfolio y hub técnico de David Minguela: frontend product-minded, apps web, OCR pipelines, self-hosting y automatización.'

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
      linkedinUrl: process.env.NUXT_PUBLIC_LINKEDIN_URL || '',
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
        { name: 'theme-color', content: '#060816' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: siteName },
        { property: 'og:title', content: siteName },
        { property: 'og:description', content: siteDescription },
        { property: 'og:url', content: siteUrl },
        { property: 'og:image', content: `${siteUrl}/og-image.svg` },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: siteName },
        { name: 'twitter:description', content: siteDescription },
        { name: 'twitter:image', content: `${siteUrl}/og-image.svg` }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  }
})
