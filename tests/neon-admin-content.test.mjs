import test from 'node:test'
import assert from 'node:assert/strict'

import { NeonContentRepository } from '../layers/30.content/app/infrastructure/neon-content-repository.ts'

function fakeDatabase() {
  const statements = []
  let transactionCount = 0
  const executor = {
    async query(sql, params = []) {
      statements.push({ sql, params })
      return []
    },
    async transaction(work) {
      transactionCount += 1
      return work(executor)
    },
  }
  return { executor, statements, get transactionCount() { return transactionCount } }
}

test('project edits upsert one locale and can unpublish without deleting prior data', async () => {
  const db = fakeDatabase()
  const repository = new NeonContentRepository(db.executor)
  const project = { slug: 'demo', name: 'Demo' }

  await repository.saveAdminProject('demo', 'es', project, false)

  assert.match(db.statements[0].sql, /ON CONFLICT \(slug, locale\) DO UPDATE/)
  assert.doesNotMatch(db.statements[0].sql, /DELETE|TRUNCATE|DROP/i)
  assert.equal(db.statements[0].params[3], false)
})

test('blog edits write metadata and both translations in one transaction, retaining unpublished rows', async () => {
  const db = fakeDatabase()
  const repository = new NeonContentRepository(db.executor)
  const translation = { title: 'Title', excerpt: 'Excerpt', content: 'Text', tags: ['Nuxt'] }

  await repository.saveAdminBlogPost({
    slug: 'demo-post', date: '2026-10-02', readTime: '4 min', published: false,
    translations: { en: translation, es: { ...translation, title: 'Título' } },
  })

  assert.equal(db.transactionCount, 1)
  assert.equal(db.statements.length, 3)
  assert.match(db.statements[0].sql, /ON CONFLICT \(slug\) DO UPDATE/)
  assert.equal(db.statements[0].params[3], false)
  assert.deepEqual(db.statements.slice(1).map(({ params }) => params[1]), ['en', 'es'])
  assert.ok(db.statements.every(({ sql }) => !/DELETE|TRUNCATE|DROP/i.test(sql)))
})

test('admin list joins include drafts and translations for owner review', async () => {
  const rows = [
    { slug: 'draft-post', date: '2026-10-02', read_time: '4 min', published: false, locale: 'es', title: 'Borrador', excerpt: 'Resumen', content: 'Texto', tags: ['Nuxt'] },
  ]
  const repository = new NeonContentRepository({
    async query(sql) {
      assert.match(sql, /LEFT JOIN landing_blog_translations/)
      return rows
    },
    async transaction(work) { return work(this) },
  })

  const posts = await repository.listAdminBlogPosts()
  assert.equal(posts[0].published, false)
  assert.equal(posts[0].translations.es.title, 'Borrador')
})
