# ADR 0002: Public portfolio and blog persistence

- **Status:** Local/Neon composition, importer, and Clerk admin surface
  implemented; Neon cutover and live Clerk ownership gated.
- **Date:** 2026-10-01.
- **Context:** The site serves bilingual portfolio and blog content from local
  TypeScript modules. The stack-alignment plan calls for Neon persistence while
  keeping the reading experience public and preserving a rollback source.
- **Decision:** Keep domain/application contracts independent of Nuxt and SQL.
  Use public read endpoints and a `PublicContentReader` port. Keep the current
  TypeScript content as the default adapter and explicitly select Neon via
  `NUXT_CONTENT_SOURCE=neon`. Add an additive Neon schema and
  an idempotent importer keyed by existing slugs and locales. Keep the local
  modules as a rollback snapshot through the observation period. Use the
  official `@clerk/nuxt` middleware for sessions and require each admin API
  handler to compare the verified Clerk user ID with a private allowlist.
- **Consequences:** Anonymous pages continue to work without database
  credentials in local mode. Neon read/import code is available, but remains
  inactive until connection, schema application, import, and read-back are
  verified. `/admin` and validated project/blog mutation endpoints are
  implemented, but remain fail-closed until Clerk keys, Google sign-in, owner
  ID, authorized preview origins, and Neon are configured and live-tested. See
  [content persistence operations](../architecture/content-persistence.md).
