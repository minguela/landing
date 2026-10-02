import test from 'node:test'
import assert from 'node:assert/strict'

import { getSectionHref } from '../app/utils/section-links.ts'
import { getPortfolioContent } from '../layers/10.portfolio/app/infrastructure/portfolio-data.ts'
import { formatCredibilityItem, toProjectCardContent } from '../layers/10.portfolio/app/presentation/portfolio-display.ts'
import {
  blogPosts,
  getAllBlogPosts,
  getBlogPostBySlug,
} from '../layers/20.blog/app/infrastructure/blog-repository.ts'

test('section links stay on the homepage when used from secondary routes', () => {
  assert.equal(getSectionHref('/', 'work'), '#work')
  assert.equal(getSectionHref('/now', 'work'), '/#work')
  assert.equal(getSectionHref('/blog', 'projects'), '/#projects')
  assert.equal(getSectionHref('/blog/a-post', 'top'), '/#top')
})

test('portfolio content exposes no direct product destinations', () => {
  for (const locale of ['en', 'es']) {
    const content = getPortfolioContent(locale)
    assert.deepEqual(content.appEndpoints, [])
    assert.ok(content.projects.every(project => project.href === undefined))
  }
})

test('project card presentation strips destinations from dynamically supplied products', () => {
  const project = { ...getPortfolioContent('en').projects[0], href: 'https://example.test/private-product' }

  assert.equal(toProjectCardContent(project).href, undefined)
})

test('Spanish portfolio copy uses natural architecture and UI terminology', () => {
  const content = getPortfolioContent('es')

  assert.equal(content.copy.hero.eyebrow, 'Arquitecto frontend independiente')
  assert.equal(content.copy.nav.stack, 'Tecnologías')
  assert.equal(content.copy.sections.projects.title, 'Software pensado para resolver problemas reales.')
  assert.equal(content.workValues[2].title, 'Diseñar el recorrido completo')
  const projectNarratives = content.projects
    .flatMap(project => [project.tagline, project.description, project.challenge, project.response, ...project.proof])
    .join(' ')
  assert.ok(!projectNarratives.match(/\b(fallbacks|preview|cloud|local-first)\b/i))
  assert.ok(!projectNarratives.match(/\b(retailer|desestructurados|humano en el circuito)\b/i))
  assert.deepEqual(
    content.credibility.map(item => formatCredibilityItem(item, 'es')),
    ['Sistemas de producto', 'Arquitectura frontend', 'Flujos con IA', 'Infraestructura autogestionada'],
  )
})

test('blog lists and detail routes exclude placeholder articles', () => {
  const posts = getAllBlogPosts()
  assert.deepEqual(posts.map(post => post.slug), ['frontend-architecture-decisions-nuxt-4'])
  assert.equal(
    getBlogPostBySlug('self-hosted-ocr-pipeline-docker'),
    undefined,
  )
  assert.equal(blogPosts.length, 4)
  assert.deepEqual(blogPosts[0].tagsEs, ['Arquitectura', 'Nuxt', 'Vue', 'TypeScript'])
})
