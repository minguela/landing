import test from 'node:test'
import assert from 'node:assert/strict'

import { NeonContentRepository } from '../layers/30.content/app/infrastructure/neon-content-repository.ts'
import { getPortfolioContent } from '../layers/10.portfolio/app/infrastructure/portfolio-data.ts'

test('reads published project translations over the imported portfolio snapshot', async () => {
  const base = getPortfolioContent('en')
  const updatedProject = { ...base.projects[0], tagline: 'Edited in the content store' }
  const calls = []
  const sql = {
    async query(statement, params) {
      calls.push({ statement, params })
      if (statement.includes('landing_portfolio_snapshots')) return [{ content: base }]
      if (statement.includes('landing_portfolio_projects')) return [{ content: updatedProject, is_published: true }]
      return []
    },
    async transaction(work) { return work(this) },
  }

  const content = await new NeonContentRepository(sql).getPortfolio('en')

  assert.equal(content.projects.length, 1)
  assert.equal(content.projects[0].tagline, 'Edited in the content store')
  assert.ok(calls.some(({ statement, params }) => statement.includes('is_published') && params[0] === 'en'))
})

test('does not republish the local snapshot when Neon project rows exist but are unpublished', async () => {
  const base = getPortfolioContent('en')
  const sql = {
    async query(statement) {
      if (statement.includes('landing_portfolio_snapshots')) return [{ content: base }]
      if (statement.includes('landing_portfolio_projects')) return [{ content: base.projects[0], is_published: false }]
      return []
    },
    async transaction(work) { return work(this) },
  }

  const content = await new NeonContentRepository(sql).getPortfolio('en')
  assert.deepEqual(content.projects, [])
})

test('scopes public blog reads to published rows and the requested locale', async () => {
  const calls = []
  const sql = {
    async query(statement, params) {
      calls.push({ statement, params })
      return []
    },
    async transaction(work) { return work(this) },
  }

  const repo = new NeonContentRepository(sql)
  await repo.listPublishedBlogPosts('es')
  const missing = await repo.getPublishedBlogPost('private-draft', 'es')

  assert.equal(missing, undefined)
  assert.equal(calls.length, 2)
  assert.ok(calls.every(({ statement, params }) => statement.includes('is_published = TRUE') && params.at(-1) === 'es'))
  assert.deepEqual(calls[1].params, ['private-draft', 'es'])
})

test('writes tags as part of each localized translation', async () => {
  const calls = []
  const sql = {
    async query(statement, params) { calls.push({ statement, params }); return [] },
    async transaction(work) { return work(this) },
  }
  const repo = new NeonContentRepository(sql)
  await repo.upsertBlogTranslation('article', 'es', {
    title: 'Artículo', excerpt: 'Resumen', content: 'Contenido', tags: ['Arquitectura'],
  })

  assert.match(calls[0].statement, /content, tags/)
  assert.deepEqual(calls[0].params, ['article', 'es', 'Artículo', 'Resumen', 'Contenido', '["Arquitectura"]'])
})

test('defines additive content tables without destructive statements', async () => {
  const { readFile } = await import('node:fs/promises')
  const migration = await readFile(new URL('../db/migrations/0001_landing_content.sql', import.meta.url), 'utf8')

  for (const table of [
    'landing_portfolio_snapshots',
    'landing_portfolio_projects',
    'landing_blog_posts',
    'landing_blog_translations',
  ]) assert.match(migration, new RegExp(`CREATE TABLE IF NOT EXISTS ${table}`))
  assert.match(migration, /PRIMARY KEY \(slug, locale\)/)
  assert.match(migration, /PRIMARY KEY \(post_slug, locale\)/)
  assert.doesNotMatch(migration, /\bDROP\s+(TABLE|COLUMN)\b/i)
  assert.doesNotMatch(migration, /ON DELETE CASCADE/i)
})
