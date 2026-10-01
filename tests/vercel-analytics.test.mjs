import test from 'node:test'
import assert from 'node:assert/strict'
import { filterVercelAnalyticsEvent } from '../app/utils/vercel-analytics.ts'

const event = (url) => ({ url, type: 'pageview' })
const options = { canonicalHost: 'dminguela.es' }

test('keeps public canonical pages and strips query strings and fragments', () => {
  assert.deepEqual(
    filterVercelAnalyticsEvent(event('https://dminguela.es/?email=person%40example.com#contact'), options),
    event('https://dminguela.es/')
  )
})

test('normalizes public blog slugs so arbitrary path data is not sent', () => {
  assert.deepEqual(
    filterVercelAnalyticsEvent(event('https://dminguela.es/blog/private-token-123?secret=x'), options),
    event('https://dminguela.es/blog/:slug')
  )
})

test('excludes non-public paths, non-canonical hosts, and local visits', () => {
  assert.equal(filterVercelAnalyticsEvent(event('https://dminguela.es/oauth/callback?code=secret'), options), null)
  assert.equal(filterVercelAnalyticsEvent(event('https://preview-123.vercel.app/'), options), null)
  assert.equal(filterVercelAnalyticsEvent(event('http://dminguela.es/'), options), null)
  assert.equal(filterVercelAnalyticsEvent(event('https://dminguela.es:8443/'), options), null)
  assert.equal(filterVercelAnalyticsEvent(event('https://dminguela.es/'), { ...options, excludedLocally: true }), null)
})
