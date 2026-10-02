import test from 'node:test'
import assert from 'node:assert/strict'

import {
  InvalidContentInputError,
  authorizeContentAdmin,
  parseContentAdminAllowlist,
  validateBlogPostInput,
  validateProjectInput,
} from '../layers/30.content/app/domain/content-admin.ts'
import { parseContentAdminInput } from '../server/utils/content-admin-input.ts'

test('unauthenticated content administration is rejected with 401', () => {
  assert.throws(
    () => authorizeContentAdmin({ isAuthenticated: false }, ['user_owner']),
    error => error.statusCode === 401,
  )
})

test('authenticated non-owners are rejected with 403 and owner IDs are exact Clerk IDs', () => {
  assert.throws(
    () => authorizeContentAdmin({ isAuthenticated: true, userId: 'user_other' }, ['user_owner']),
    error => error.statusCode === 403,
  )
  assert.equal(authorizeContentAdmin({ isAuthenticated: true, userId: 'user_owner' }, ['user_owner']), 'user_owner')
})

test('empty and whitespace-only owner allowlists never grant access', () => {
  assert.deepEqual(parseContentAdminAllowlist(' ,\n  '), [])
  assert.throws(
    () => authorizeContentAdmin({ isAuthenticated: true, userId: 'user_owner' }, []),
    error => error.statusCode === 403,
  )
})

test('project input validation constrains slugs, locale, publication, and domain fields', () => {
  const project = {
    name: 'Product', slug: 'demo', domain: 'Tools', tagline: 'Tagline', description: 'Description',
    challenge: 'Challenge', response: 'Response', proof: ['Evidence'], technologies: ['Nuxt'],
    status: 'Live', availability: 'public', accent: 'cobalt', artifact: 'journey', featured: false,
  }
  assert.deepEqual(validateProjectInput({ slug: 'demo', locale: 'en', published: true, project }), {
    slug: 'demo', locale: 'en', published: true, project,
  })
  assert.throws(() => validateProjectInput({ slug: '../other', locale: 'en', published: true, project }))
  assert.throws(() => validateProjectInput({ slug: 'demo', locale: 'fr', published: true, project }))
  assert.throws(() => validateProjectInput({ slug: 'demo', locale: 'en', published: true, project: { ...project, name: '<script>' } }))
})

test('blog input validation requires both translations and valid dates without permitting HTML payloads', () => {
  const translation = { title: 'Title', excerpt: 'Excerpt', content: '## Text', tags: ['Nuxt'] }
  const input = {
    slug: 'demo-post', date: '2026-10-02', readTime: '4 min', published: true,
    translations: { en: translation, es: { ...translation, title: 'Título' } },
  }
  assert.deepEqual(validateBlogPostInput(input), input)
  assert.throws(() => validateBlogPostInput({ ...input, date: 'not-a-date' }))
  assert.throws(() => validateBlogPostInput({ ...input, translations: { en: translation } }))
  assert.throws(() => validateBlogPostInput({ ...input, translations: { ...input.translations, es: { ...translation, content: '<script>alert(1)</script>' } } }))
})

test('admin PUT validation failures map to HTTP 400 while unexpected failures are preserved', () => {
  assert.throws(
    () => parseContentAdminInput({ slug: '../invalid' }, validateBlogPostInput, message => Object.assign(new Error(message), { statusCode: 400, statusMessage: message })),
    error => error.statusCode === 400 && /Invalid content input/.test(error.statusMessage),
  )

  const backendError = new Error('database unavailable')
  assert.throws(
    () => parseContentAdminInput({}, () => { throw backendError }, message => Object.assign(new Error(message), { statusCode: 400, statusMessage: message })),
    error => error === backendError && error.statusCode === undefined,
  )
  assert.ok(new InvalidContentInputError('example') instanceof Error)
})
