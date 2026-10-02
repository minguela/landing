import type { Locale } from '#layers/00.core/app/domain/locale'
import type { CredibilityItem, Project } from '../domain/portfolio'

export function toProjectCardContent(project: Project): Project {
  const { href: _href, ...publicProject } = project
  return publicProject
}

export function formatCredibilityItem(item: CredibilityItem, locale: Locale): string {
  return `${item.value} · ${item.label[locale]}`
}

export function formatDashboardNumber(value: number): string {
  return new Intl.NumberFormat('en-US').format(value)
}

export function ensureTerminalLine(lines: string[], index: number, value: string): string[] {
  const nextLines = lines.slice()

  while (nextLines.length <= index) {
    nextLines.push('')
  }

  nextLines[index] = value
  return nextLines
}
