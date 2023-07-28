type Type = "twitter" | "medium"

export interface TwitterPost {
  type: Type
  id: string
  title: string
  subtitle: string | null
  description: string
  link: string
  pubDate: Date
  thumbnail: string
}

export interface MediumArticle {
  type: Type
  id: string
  author: string
  title: string
  description: string
  content: HTMLElement
  link: string
  pubDate: Date
  thumbnail: string
  categories: string[]
}
