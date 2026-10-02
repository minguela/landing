# Portfolio and blog content persistence

The portfolio and blog remain public. The active TypeScript data sources under
`layers/10.portfolio/app/infrastructure/portfolio-data.ts` and
`layers/20.blog/app/infrastructure/blog-repository.ts` are the rollback
snapshot. `NUXT_CONTENT_SOURCE=local` is the default; `neon` explicitly selects
the Neon adapter. The duplicate legacy blog modules remain untouched and are
not part of the import. Unpublished placeholder articles are excluded from
both the local public API and the import plan.

Public Nuxt pages load through anonymous read endpoints and application use
cases. The server composition chooses `LocalContentRepository` by default or
`NeonContentRepository` only when `NUXT_CONTENT_SOURCE=neon`; the database URL
is read server-side from `DATABASE_URL`. Neon HTTP serves request reads, while
the importer uses a short-lived Neon transaction client. Missing configuration
or Neon read errors fail the request; public pages do not silently switch back
to a possibly stale local snapshot. SEO metadata is rendered from the awaited
public endpoints during SSR.

## Additive schema and import

`db/migrations/0001_landing_content.sql` creates locale snapshots, project
translations, blog metadata, and blog translations. It is additive and does not
delete or rename existing data. Project keys remain `01` through `06`; article
slugs remain unchanged. Locale rows are keyed by `en` and `es`.

`createContentImportPlan()` reads only the active TypeScript modules and
calculates SHA-256 hashes for each complete portfolio locale snapshot.
`importContentSnapshot(plan, writer)` writes snapshots, projects, blog metadata,
and published article translations (including localized tags) inside the
writer's transaction. Every row is keyed by its
stable slug and locale and uses `INSERT ... ON CONFLICT ... DO UPDATE`; running
the same plan twice does not add duplicate rows. The import does not delete
unknown rows. Re-running it after editorial changes would overwrite imported
rows with the TypeScript snapshot, so do not rerun after a cutover without
intending that replacement.

The operational entrypoint is `pnpm content-store <migrate|import|verify>`.
Schema and import writes require the explicit `--apply` flag. The verifier
checks minimum row counts and compares every imported portfolio and published
article against the current source. Extra rows are never deleted.

Before applying the migration or importer in a later deployment:

1. Identify the intended Neon project/branch and create a recoverable backup.
2. Record existing table counts and check for slug/locale conflicts.
3. Set `NUXT_CONTENT_SOURCE=neon` and the server-only `DATABASE_URL` on the
   preview environment; confirm the connection targets that preview branch.
4. Apply the SQL migration to a preview database, run the importer there, and
   compare locale counts, slugs, translations, URLs, and snapshot hashes.
5. Verify anonymous server-rendered pages and PDFs before enabling Neon reads.
6. Preserve the TypeScript sources through the observation period so rollback
   can switch the injected reader back to `LocalContentRepository`.

The migration/import commands have not been run because no intended Neon
project/branch, backup, or connection URL was provided for this task. The
database-backed flow is implemented but live Neon read-back and preview
configuration remain open gates.

## Clerk administration gate

The `/admin` page uses the official `@clerk/nuxt` module. Clerk server middleware
validates sessions; every admin endpoint independently checks the server-side
session's Clerk user ID against the private `NUXT_CONTENT_ADMIN_USER_IDS`
allowlist. No client-supplied identity or email is trusted. Missing owner
configuration fails closed with 503; anonymous sessions receive 401 and signed
in non-owners receive 403. Public APIs remain anonymous and only return
published records. Admin changes target Neon only, retain records when
unpublishing, and validate content before writing. Markdown rendering escapes
HTML to prevent editor content from becoming executable markup.

The code path is implemented but no Clerk keys, owner ID, authorized preview
origins, or Neon branch were provided. Google sign-in, owner authorization,
live CRUD/read-back, and deployment are therefore unverified external gates.
Do not call this live-ready until those exact gates pass on a preview.

## Verification commands

```sh
pnpm test
pnpm typecheck
pnpm build
```

These checks establish local code behavior only. They do not establish Clerk
Google, a Neon connection, imported production data, or Vercel deployment
health.
