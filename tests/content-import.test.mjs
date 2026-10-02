import test from 'node:test'
import assert from 'node:assert/strict'

import { createContentImportPlan, importContentSnapshot } from '../layers/30.content/app/application/create-content-import-plan.ts'
import { LocalContentRepository } from '../layers/30.content/app/infrastructure/local-content-repository.ts'
import { getPublicPortfolioUseCase, listPublishedBlogPostsUseCase, resolvePublicPost } from '../layers/30.content/app/application/get-public-content.ts'

test('builds a deterministic portfolio and blog import for both locales', () => {
  const first = createContentImportPlan()
  const second = createContentImportPlan()

  assert.deepEqual(first, second)
  assert.deepEqual(first.portfolio.map((entry) => entry.locale), ['en', 'es'])
  assert.equal(first.portfolio[0].content.projects.length, 6)
  assert.equal(first.portfolio[1].content.projects.length, 6)
  assert.deepEqual([...new Set(first.blog.map((entry) => entry.slug))], [
    'frontend-architecture-decisions-nuxt-4',
  ])
  assert.deepEqual([...new Set(first.blog.map((entry) => entry.locale))], ['en', 'es'])
  assert.equal(first.blog.length, 2)
})

test('retains localized project URLs and article content in the import plan', () => {
  const plan = createContentImportPlan()
  const english = plan.portfolio.find((entry) => entry.locale === 'en')
  const spanish = plan.portfolio.find((entry) => entry.locale === 'es')
  const englishPost = plan.blog.find((entry) => entry.slug === 'frontend-architecture-decisions-nuxt-4' && entry.locale === 'en')
  const spanishPost = plan.blog.find((entry) => entry.slug === 'frontend-architecture-decisions-nuxt-4' && entry.locale === 'es')

  assert.deepEqual(english.content.projects.map((project) => project.slug), ['01', '02', '03', '04', '05', '06'])
  assert.deepEqual(spanish.content.projects.map((project) => project.slug), ['01', '02', '03', '04', '05', '06'])
  assert.equal(englishPost.title, 'Frontend architecture decisions that survive product evolution')
  assert.equal(spanishPost.title, 'Decisiones de arquitectura frontend que resisten la evolución del producto')
  assert.match(englishPost.content, /load-bearing walls/)
  assert.match(spanishPost.content, /partes importantes del sistema/)
})

test('does not import unpublished placeholder articles', () => {
  const plan = createContentImportPlan()
  assert.deepEqual([...new Set(plan.blog.map((entry) => entry.slug))], [
    'frontend-architecture-decisions-nuxt-4',
  ])
  assert.ok(plan.blog.every((entry) => entry.slug !== 'self-hosted-ocr-pipeline-docker'))
})

test('applies the import plan idempotently through its writer port', async () => {
  const plan = createContentImportPlan()
  const portfolio = new Map()
  const blog = new Map()
  const writer = {
    async transaction(work) { return work(this) },
    async upsertPortfolioSnapshot(locale, content, sourceHash) {
      portfolio.set(locale, { content, sourceHash })
    },
    async upsertProject(slug, locale, project) {
      portfolio.set(`${locale}:${slug}`, project)
    },
    async upsertBlogPost(slug, date, readTime) {
      blog.set(slug, { ...(blog.get(slug) ?? {}), date, readTime })
    },
    async upsertBlogTranslation(slug, locale, translation) {
      blog.set(slug, { ...(blog.get(slug) ?? {}), [`${locale}Translation`]: translation })
    },
  }

  const first = await importContentSnapshot(plan, writer)
  const afterFirst = { portfolio: structuredClone([...portfolio]), blog: structuredClone([...blog]) }
  const second = await importContentSnapshot(plan, writer)

  assert.equal(first.portfolioLocales, 2)
  assert.equal(first.projects, 12)
  assert.equal(first.blogPosts, 1)
  assert.equal(first.blogTranslations, 2)
  assert.deepEqual(second, first)
  assert.deepEqual({ portfolio: [...portfolio], blog: [...blog] }, afterFirst)
})

test('keeps public content use cases on the local adapter until a Neon reader is composed', async () => {
  const repository = new LocalContentRepository()
  const portfolio = await getPublicPortfolioUseCase(repository, 'es')
  const posts = await listPublishedBlogPostsUseCase(repository, 'es')

  assert.equal(portfolio.projects.length, 6)
  assert.equal(portfolio.projects[0].tagline, 'Un espacio de viaje para organizar todo lo que ocurre entre la idea y la salida.')
  assert.equal(posts.length, 1)
  assert.equal(posts[0].title, 'Decisiones de arquitectura frontend que resisten la evolución del producto')
})

test('does not fall back to the local snapshot when the content API confirms a post is unpublished', () => {
  const localPost = { slug: 'retired-post' }
  assert.equal(resolvePublicPost({ post: null }, localPost), undefined)
  assert.equal(resolvePublicPost(undefined, localPost), localPost)
})
