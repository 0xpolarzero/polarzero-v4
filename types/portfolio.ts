import { Icon } from "@/components/icons"

export type TechItem = {
  name: string
  id: string
  link: string
}

export type PortfolioItem = {
  title: string
  description: React.ReactNode
  context: React.ReactNode
  links: { url: string; text: string; icon?: Icon }[]
  tech: TechItem[]
  date: Date
}
