import test from 'node:test'
import assert from 'node:assert/strict'

import { renderMarkdown } from '../layers/20.blog/app/composables/renderMarkdown.ts'

test('blog markdown renders text without passing through executable HTML', () => {
  const html = renderMarkdown('<script>alert(1)</script>\n\n**Safe emphasis**')
  assert.doesNotMatch(html, /<script>/i)
  assert.match(html, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/i)
  assert.match(html, /<strong class="text-white font-semibold">Safe emphasis<\/strong>/)
})
