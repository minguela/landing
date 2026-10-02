import { InvalidContentInputError } from '../../layers/30.content/app/domain/content-admin'

export function parseContentAdminInput<T>(
  body: unknown,
  validate: (body: unknown) => T,
  createBadRequest: (message: string) => Error,
): T {
  try {
    return validate(body)
  } catch (error) {
    if (!(error instanceof InvalidContentInputError)) throw error
    throw createBadRequest(error.message)
  }
}
