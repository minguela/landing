-- Additive schema for public portfolio/blog content.
-- Existing source modules remain the rollback snapshot until an explicit Neon cutover.
CREATE TABLE IF NOT EXISTS landing_portfolio_snapshots (
  locale text PRIMARY KEY CHECK (locale IN ('en', 'es')),
  content jsonb NOT NULL,
  source_hash char(64) NOT NULL,
  imported_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS landing_portfolio_projects (
  slug text NOT NULL,
  locale text NOT NULL CHECK (locale IN ('en', 'es')),
  content jsonb NOT NULL,
  is_published boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (slug, locale)
);

CREATE INDEX IF NOT EXISTS landing_portfolio_projects_public_idx
  ON landing_portfolio_projects (locale, slug) WHERE is_published = true;

CREATE TABLE IF NOT EXISTS landing_blog_posts (
  slug text PRIMARY KEY,
  date date NOT NULL,
  read_time text NOT NULL,
  is_published boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS landing_blog_translations (
  post_slug text NOT NULL REFERENCES landing_blog_posts (slug),
  locale text NOT NULL CHECK (locale IN ('en', 'es')),
  title text NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  tags jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (post_slug, locale)
);

CREATE INDEX IF NOT EXISTS landing_blog_posts_public_idx
  ON landing_blog_posts (date DESC, slug) WHERE is_published = true;
