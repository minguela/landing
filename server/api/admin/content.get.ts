import { requireContentAdmin, requireNeonContentAdmin } from '../../utils/content-admin-auth'

export default defineEventHandler(async (event) => {
  requireContentAdmin(event)
  const repository = requireNeonContentAdmin(event)
  const [projects, blogPosts] = await Promise.all([
    repository.listAdminProjects(),
    repository.listAdminBlogPosts(),
  ])
  return { projects, blogPosts }
})
