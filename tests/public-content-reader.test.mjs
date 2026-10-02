import test from 'node:test'
import assert from 'node:assert/strict'

import { createPublicContentReader } from '../server/utils/public-content-reader.ts'
import { NeonContentRepository } from '../layers/30.content/app/infrastructure/neon-content-repository.ts'
import { LocalContentRepository } from '../layers/30.content/app/infrastructure/local-content-repository.ts'

test('defaults anonymous requests to the local public content source', () => {
  const reader = createPublicContentReader({})
  assert.ok(reader instanceof LocalContentRepository)
})

test('does not accept a partial repository injection', () => {
  const reader = createPublicContentReader({}, { getPortfolio() {} })
  assert.ok(reader instanceof LocalContentRepository)
})

test('fails closed when Neon is selected without a server-only connection string', () => {
  assert.throws(
    () => createPublicContentReader({ contentSource: 'neon' }),
    /DATABASE_URL is required/,
  )
})

test('constructs the Neon adapter only for an explicit Neon source', () => {
  const reader = createPublicContentReader({
    contentSource: 'neon',
    databaseUrl: 'postgres://user:password@example.neon.tech/database',
  })
  assert.ok(reader instanceof NeonContentRepository)
})

test('rejects unknown content sources instead of silently using local content', () => {
  assert.throws(
    () => createPublicContentReader({ contentSource: 'unknown' }),
    /Invalid public content source/,
  )
})
