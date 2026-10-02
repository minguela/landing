import { validateProjectInput } from '../../../../layers/30.content/app/domain/content-admin'
import { requireContentAdmin, requireNeonContentAdmin } from '../../../utils/content-admin-auth'
import { parseContentAdminInput } from '../../../utils/content-admin-input'

export default defineEventHandler(async (event) => {
  requireContentAdmin(event)
  const input = parseContentAdminInput(
    await readBody(event),
    validateProjectInput,
    message => createError({ statusCode: 400, statusMessage: message }),
  )
  const repository = requireNeonContentAdmin(event)
  await repository.saveAdminProject(input.slug, input.locale, input.project, input.published)
  return { ok: true, slug: input.slug, locale: input.locale, published: input.published }
})
