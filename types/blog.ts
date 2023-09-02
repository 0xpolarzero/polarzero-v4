export const categories = [
  "chainlink",
  "security",
  "optimization",
  "decentralized socials",
  "nfts",
  "infrastructure",
]

type Type = "twitter" | "medium"

export type Category = (typeof categories)[number]

export interface TwitterPost {
  type: Type
  id: string
  title: string
  subtitle: string | null
  description: string
  link: string
  pubDate: Date
  thumbnail: string
  categories: Category[]
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
  categories: Category[]
}
