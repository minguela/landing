import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { isDeepStrictEqual } from 'node:util'
import { Pool } from '@neondatabase/serverless'
import { createContentImportPlan, importContentSnapshot } from '../layers/30.content/app/application/create-content-import-plan.ts'
import { NeonContentRepository } from '../layers/30.content/app/infrastructure/neon-content-repository.ts'
import { createNeonSqlExecutor } from '../layers/30.content/app/infrastructure/neon-sql-executor.ts'

const command = process.argv[2]
const isApply = process.argv.includes('--apply')
const connectionString = process.env.DATABASE_URL

if (!['migrate', 'import', 'verify'].includes(command ?? '')) {
  console.error('Usage: pnpm content-store <migrate|import|verify> [--apply]')
  process.exitCode = 2
} else if (!connectionString) {
  console.error('DATABASE_URL is required; it must point to the intended Neon branch.')
  process.exitCode = 2
} else if (command !== 'verify' && !isApply) {
  console.error(`Refusing ${command}: add --apply only after verifying the Neon project and branch and taking a recoverable backup.`)
  process.exitCode = 2
} else {
  try {
    if (command === 'migrate') await migrate(connectionString)
    if (command === 'import') await importSnapshot(connectionString)
    if (command === 'verify') await verifySnapshot(connectionString)
  } catch (error) {
    console.error(error instanceof Error ? error.message : 'Content store command failed')
    process.exitCode = 1
  }
}

async function migrate(databaseUrl) {
  const migrationPath = fileURLToPath(new URL('../db/migrations/0001_landing_content.sql', import.meta.url))
  const migration = await readFile(migrationPath, 'utf8')
  const pool = new Pool({ connectionString: databaseUrl })
  const client = await pool.connect()
  try {
    await client.query('BEGIN')
    await client.query(migration)
    await client.query('COMMIT')
    console.log('Applied additive content migration 0001 transactionally.')
  } catch (error) {
    await client.query('ROLLBACK')
    throw error
  } finally {
    client.release()
    await pool.end()
  }
}

async function importSnapshot(databaseUrl) {
  const plan = createContentImportPlan()
  const summary = await importContentSnapshot(plan, new NeonContentRepository(createNeonSqlExecutor(databaseUrl)))
  console.log(JSON.stringify({ imported: summary, target: safeTarget(databaseUrl) }, null, 2))
}

async function verifySnapshot(databaseUrl) {
  const sql = createNeonSqlExecutor(databaseUrl)
  const repository = new NeonContentRepository(sql)
  const plan = createContentImportPlan()
  const actualCounts = await sql.query(
    `SELECT
       (SELECT count(*)::int FROM landing_portfolio_snapshots) AS portfolio_locales,
       (SELECT count(*)::int FROM landing_portfolio_projects) AS project_locales,
       (SELECT count(*)::int FROM landing_blog_posts WHERE is_published = TRUE) AS published_posts,
       (SELECT count(*)::int FROM landing_blog_translations t
          JOIN landing_blog_posts p ON p.slug = t.post_slug
         WHERE p.is_published = TRUE) AS published_translations`,
  )
  const counts = actualCounts[0]
  const expectedCounts = {
    portfolio_locales: plan.portfolio.length,
    project_locales: plan.portfolio.reduce((total, entry) => total + entry.content.projects.length, 0),
    published_posts: new Set(plan.blog.map((entry) => entry.slug)).size,
    published_translations: plan.blog.length,
  }
  if (!counts || Object.entries(expectedCounts).some(([key, count]) => Number(counts[key]) < count)) {
    throw new Error(`Neon content counts are incomplete: ${JSON.stringify({ expectedMinimum: expectedCounts, actual: counts ?? null })}`)
  }

  for (const entry of plan.portfolio) {
    const actual = await repository.getPortfolio(entry.locale)
    if (!isDeepStrictEqual(actual, entry.content)) {
      throw new Error(`Portfolio read-back differs from the source snapshot for locale ${entry.locale}.`)
    }
  }
  for (const entry of plan.blog) {
    const { locale, ...expected } = entry
    const actual = await repository.getPublishedBlogPost(entry.slug, locale)
    if (!isDeepStrictEqual(actual, expected)) {
      throw new Error(`Blog read-back differs from the source for ${entry.slug} (${locale}).`)
    }
  }

  console.log(JSON.stringify({ verified: expectedCounts, extraRowsPreserved: true, target: safeTarget(databaseUrl) }, null, 2))
}

function safeTarget(databaseUrl) {
  const parsed = new URL(databaseUrl)
  return { host: parsed.hostname, database: parsed.pathname.slice(1) }
}
