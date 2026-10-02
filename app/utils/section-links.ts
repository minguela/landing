export function getSectionHref(routePath: string, sectionId: string): string {
  const normalizedPath = routePath.replace(/\/$/, '') || '/'
  const fragment = `#${sectionId}`

  return normalizedPath === '/' ? fragment : `/${fragment}`
}
