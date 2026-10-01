import test from 'node:test'
import assert from 'node:assert/strict'
import { filterVercelAnalyticsEvent } from '../app/utils/vercel-analytics.ts'

const event = (url) => ({ url, type: 'pageview' })
test('keeps public canonical pages and strips query strings and fragments', () => {
  assert.deepEqual(
    filterVercelAnalyticsEvent(event('https://www.dminguela.es/?email=person%40example.com#contact')),
    event('https://www.dminguela.es/')
  )
})

test('normalizes public blog slugs so arbitrary path data is not sent', () => {
  assert.deepEqual(
    filterVercelAnalyticsEvent(event('https://www.dminguela.es/blog/private-token-123?secret=x')),
    event('https://www.dminguela.es/blog/:slug')
  )
})

test('excludes non-public paths, non-canonical hosts, and local visits', () => {
  assert.equal(filterVercelAnalyticsEvent(event('https://www.dminguela.es/oauth/callback?code=secret')), null)
  assert.equal(filterVercelAnalyticsEvent(event('https://dminguela.es/')), null)
  assert.equal(filterVercelAnalyticsEvent(event('https://preview-123.vercel.app/')), null)
  assert.equal(filterVercelAnalyticsEvent(event('http://www.dminguela.es/')), null)
  assert.equal(filterVercelAnalyticsEvent(event('https://www.dminguela.es:8443/')), null)
  assert.equal(filterVercelAnalyticsEvent(event('https://www.dminguela.es/'), { excludedLocally: true }), null)
})
