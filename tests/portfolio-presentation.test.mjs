import test from 'node:test'
import assert from 'node:assert/strict'

import {
  formatCredibilityItem,
  formatDashboardNumber,
  ensureTerminalLine,
} from '../layers/10.portfolio/app/presentation/portfolio-display.ts'
import { getPortfolioContent } from '../layers/10.portfolio/app/infrastructure/portfolio-data.ts'

test('formats a credibility item as visible localized text', () => {
  assert.equal(
    formatCredibilityItem(
      { value: '3+', label: { en: 'Production apps', es: 'Apps en producción' } },
      'es',
    ),
    '3+ · Apps en producción',
  )
})

test('fills skipped terminal lines without creating sparse entries', () => {
  const lines = ensureTerminalLine(['first'], 2, '')

  assert.deepEqual(lines, ['first', '', ''])
  assert.equal(Object.hasOwn(lines, 1), true)
  assert.equal(Object.hasOwn(lines, 2), true)
})

test('formats dashboard numbers deterministically for SSR and the browser', () => {
  assert.equal(formatDashboardNumber(2840), '2,840')
  assert.equal(formatDashboardNumber(1842), '1,842')
})

test('switching to Spanish localizes every project narrative', () => {
  const english = getPortfolioContent('en')
  const spanish = getPortfolioContent('es')

  assert.equal(spanish.projects.length, english.projects.length)
  assert.ok(spanish.projects.length >= 6)

  for (const [index, project] of spanish.projects.entries()) {
    assert.notEqual(project.tagline, english.projects[index].tagline)
    assert.notEqual(project.description, english.projects[index].description)
  }
})

test('private projects do not expose invented public destinations', () => {
  const project = getPortfolioContent('en').projects.find(item => item.name === 'NAS Gateway')

  assert.ok(project)
  assert.equal(project.availability, 'private')
  assert.equal(project.href, undefined)
})
