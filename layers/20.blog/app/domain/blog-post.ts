export interface BlogPost {
  slug: string
  title: string
  titleEs: string
  excerpt: string
  excerptEs: string
  date: string
  readTime: string
  tags: string[]
  tagsEs?: string[]
  content: string
  contentEs: string
  published?: boolean
}
