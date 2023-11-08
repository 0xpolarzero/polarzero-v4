import { ReactNode } from "react"

export const categories = [
  "chainlink",
  "security research",
  "optimization",
  "decentralized socials",
  "nfts",
  "infrastructure",
  "metaverse",
  "immersive technologies",
  "education",
  "fr",
]

type Type = "twitter" | "medium" | "hashnode" | "notion"

export type Category = (typeof categories)[number]

export type MediumInfo = {
  description: (string | JSX.Element)[]
  categories: string[]
}

export interface TwitterPost {
  type: Type
  id: string
  guid?: string
  title: string
  subtitle: string | null
  description: string
  link: string
  pdf?: string
  pubDate: Date
  thumbnail: string
  categories: Category[]
}

export interface MediumArticle {
  type: Type
  id: string
  guid?: string
  author: string
  title: string
  description: string | ReactNode
  content?: HTMLElement | null
  link: string
  pdf?: string
  pubDate: Date
  thumbnail?: string
  categories: Category[]
}
