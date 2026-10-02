import type { Locale } from '../../../00.core/app/domain/locale'
import type { PortfolioContent } from '../../../10.portfolio/app/domain/portfolio'
import type { AdminContentRepository, ContentImportWriter, PublicContentReader, BlogPostSummary, LocalizedBlogPost } from '../domain/content-repository'

export interface NeonSqlExecutor {
  query<Row extends Record<string, unknown>>(sql: string, params?: unknown[]): Promise<Row[]>
  transaction<T>(work: (transaction: NeonSqlExecutor) => Promise<T>): Promise<T>
}

interface PortfolioRow extends Record<string, unknown> {
  content: PortfolioContent | string
}

interface ProjectRow extends Record<string, unknown> {
  content: PortfolioContent['projects'][number] | string
  is_published: boolean
}

interface BlogRow extends Record<string, unknown> {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  read_time: string
  tags: string[] | string
}

function decodeJson<T>(value: T | string): T {
  return (typeof value === 'string' ? JSON.parse(value) : value) as T
}

function toBlogPost(row: BlogRow): LocalizedBlogPost {
  return {
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    content: row.content,
    date: row.date,
    readTime: row.read_time,
    tags: decodeJson<string[]>(row.tags),
  }
}

export class NeonContentRepository implements PublicContentReader, ContentImportWriter, AdminContentRepository {
  private readonly sql: NeonSqlExecutor

  constructor(sql: NeonSqlExecutor) {
    this.sql = sql
  }

  transaction<T>(work: (writer: ContentImportWriter) => Promise<T>): Promise<T> {
    return this.sql.transaction((transaction) => work(new NeonContentRepository(transaction)))
  }

  async getPortfolio(locale: Locale): Promise<PortfolioContent> {
    const rows = await this.sql.query<PortfolioRow>(
      'SELECT content FROM landing_portfolio_snapshots WHERE locale = $1',
      [locale],
    )
    if (!rows[0]) throw new Error(`Published portfolio content is missing for locale ${locale}`)
    const snapshot = decodeJson(rows[0].content)
    const projects = await this.sql.query<ProjectRow>(
      `SELECT content, is_published FROM landing_portfolio_projects
        WHERE locale = $1
        ORDER BY slug ASC`,
      [locale],
    )
    return projects.length > 0
      ? { ...snapshot, projects: projects.filter((row) => row.is_published).map((row) => decodeJson(row.content)) }
      : snapshot
  }

  async listPublishedBlogPosts(locale: Locale): Promise<BlogPostSummary[]> {
    const rows = await this.sql.query<BlogRow>(
      `SELECT p.slug, t.title, t.excerpt, p.date::text AS date, p.read_time,
              t.tags
         FROM landing_blog_posts p
         JOIN landing_blog_translations t ON t.post_slug = p.slug
        WHERE p.is_published = TRUE AND t.locale = $1
        ORDER BY p.date DESC, p.slug ASC`,
      [locale],
    )
    return rows.map((row) => ({
      slug: row.slug,
      title: row.title,
      excerpt: row.excerpt,
      date: row.date,
      readTime: row.read_time,
      tags: decodeJson<string[]>(row.tags),
    }))
  }

  async getPublishedBlogPost(slug: string, locale: Locale): Promise<LocalizedBlogPost | undefined> {
    const rows = await this.sql.query<BlogRow>(
      `SELECT p.slug, t.title, t.excerpt, t.content, p.date::text AS date,
              p.read_time, t.tags
         FROM landing_blog_posts p
         JOIN landing_blog_translations t ON t.post_slug = p.slug
        WHERE p.is_published = TRUE AND p.slug = $1 AND t.locale = $2`,
      [slug, locale],
    )
    return rows[0] ? toBlogPost(rows[0]) : undefined
  }

  async upsertPortfolioSnapshot(locale: Locale, content: PortfolioContent, sourceHash: string) {
    await this.sql.query(
      `INSERT INTO landing_portfolio_snapshots (locale, content, source_hash)
       VALUES ($1, $2::jsonb, $3)
       ON CONFLICT (locale) DO UPDATE
       SET content = EXCLUDED.content, source_hash = EXCLUDED.source_hash,
           imported_at = NOW()`,
      [locale, JSON.stringify(content), sourceHash],
    )
  }

  async upsertProject(slug: string, locale: Locale, project: PortfolioContent['projects'][number]) {
    await this.sql.query(
      `INSERT INTO landing_portfolio_projects (slug, locale, content, is_published)
       VALUES ($1, $2, $3::jsonb, TRUE)
       ON CONFLICT (slug, locale) DO UPDATE
       SET content = EXCLUDED.content, is_published = TRUE,
           updated_at = NOW()`,
      [slug, locale, JSON.stringify(project)],
    )
  }

  async upsertBlogPost(slug: string, date: string, readTime: string) {
    await this.sql.query(
      `INSERT INTO landing_blog_posts (slug, date, read_time, is_published)
       VALUES ($1, $2::date, $3, TRUE)
       ON CONFLICT (slug) DO UPDATE
       SET date = EXCLUDED.date, read_time = EXCLUDED.read_time,
           is_published = TRUE, updated_at = NOW()`,
      [slug, date, readTime],
    )
  }

  async upsertBlogTranslation(slug: string, locale: Locale, translation: Pick<LocalizedBlogPost, 'title' | 'excerpt' | 'content' | 'tags'>) {
    await this.sql.query(
      `INSERT INTO landing_blog_translations (post_slug, locale, title, excerpt, content, tags)
       VALUES ($1, $2, $3, $4, $5, $6::jsonb)
       ON CONFLICT (post_slug, locale) DO UPDATE
       SET title = EXCLUDED.title, excerpt = EXCLUDED.excerpt,
           content = EXCLUDED.content, tags = EXCLUDED.tags, updated_at = NOW()`,
      [slug, locale, translation.title, translation.excerpt, translation.content, JSON.stringify(translation.tags)],
    )
  }

  async listAdminProjects() {
    const rows = await this.sql.query<ProjectRow & { slug: string; locale: Locale }>(
      `SELECT slug, locale, content, is_published FROM landing_portfolio_projects ORDER BY slug, locale`,
    )
    return rows.map(row => ({
      slug: row.slug,
      locale: row.locale,
      published: row.is_published,
      project: decodeJson(row.content),
    }))
  }

  async listAdminBlogPosts() {
    const rows = await this.sql.query<BlogRow & { published: boolean; locale: Locale }>(
      `SELECT p.slug, p.date::text AS date, p.read_time, p.is_published AS published,
              t.locale, t.title, t.excerpt, t.content, t.tags
         FROM landing_blog_posts p
         LEFT JOIN landing_blog_translations t ON t.post_slug = p.slug
        ORDER BY p.date DESC, p.slug, t.locale`,
    )
    const posts = new Map<string, { slug: string; date: string; readTime: string; published: boolean; translations: Partial<Record<Locale, LocalizedBlogPost>> }>()
    for (const row of rows) {
      const post = posts.get(row.slug) ?? {
        slug: row.slug,
        date: row.date,
        readTime: row.read_time,
        published: row.published,
        translations: {},
      }
      if (row.locale && row.title !== null) post.translations[row.locale] = toBlogPost(row)
      posts.set(row.slug, post)
    }
    return [...posts.values()]
  }

  async saveAdminProject(slug: string, locale: Locale, project: PortfolioContent['projects'][number], published: boolean) {
    await this.sql.query(
      `INSERT INTO landing_portfolio_projects (slug, locale, content, is_published)
       VALUES ($1, $2, $3::jsonb, $4)
       ON CONFLICT (slug, locale) DO UPDATE
       SET content = EXCLUDED.content, is_published = EXCLUDED.is_published, updated_at = NOW()`,
      [slug, locale, JSON.stringify(project), published],
    )
  }

  async saveAdminBlogPost(post: { slug: string; date: string; readTime: string; published: boolean; translations: Record<Locale, Pick<LocalizedBlogPost, 'title' | 'excerpt' | 'content' | 'tags'>> }) {
    await this.sql.transaction(async (transaction) => {
      const writer = new NeonContentRepository(transaction)
      await transaction.query(
        `INSERT INTO landing_blog_posts (slug, date, read_time, is_published)
         VALUES ($1, $2::date, $3, $4)
         ON CONFLICT (slug) DO UPDATE
         SET date = EXCLUDED.date, read_time = EXCLUDED.read_time,
             is_published = EXCLUDED.is_published, updated_at = NOW()`,
        [post.slug, post.date, post.readTime, post.published],
      )
      await writer.upsertBlogTranslation(post.slug, 'en', post.translations.en)
      await writer.upsertBlogTranslation(post.slug, 'es', post.translations.es)
    })
  }
}
