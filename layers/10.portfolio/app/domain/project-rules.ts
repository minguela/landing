import type { Project } from '../domain/portfolio'

export function filterProjectsByStatus(projects: Project[], status: string): Project[] {
  return projects.filter(p => p.status === status)
}

export function getProjectBySlug(projects: Project[], slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}
