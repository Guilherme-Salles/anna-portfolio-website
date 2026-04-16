export interface Project {
  id: number
  behance_id: string
  title: string
  slug: string
  published_at: string
  behance_url: string
  cover_url: string
  description: string | null
  tags: string[]
  tools: string[]
  stats: {
    views: number
    appreciations: number
  }
  featured?: boolean
}

export interface NavLink {
  label: string
  href: string
}
