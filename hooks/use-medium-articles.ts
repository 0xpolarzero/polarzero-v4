"use client"

import { useCallback, useEffect, useState } from "react"

import { MediumArticle, categories } from "@/types/writing"

interface MediumArticleProps {
  author: string
  categories: string[]
  content: string
  description: string
  link: string
  pubDate: string
  thumbnail: string
  title: string
}

const transforms: Record<string, string> = {
  "chain-link": "chainlink",
  "security-research": "security research",
}

const formatCategories = (categories: string[]): string[] => {
  return categories.map((category) => transforms[category] || category)
}

const useMediumArticles = (): [
  articles: MediumArticle[],
  fetchArticles: () => Promise<void>
] => {
  const [articles, setArticles] = useState<MediumArticle[]>([])

  const fetchArticles = useCallback(async () => {
    const response = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@0xpolarzero"
    )

    const data = await response.json()
    console.log(data)

    setArticles(
      data.items.map((item: MediumArticleProps) => ({
        ...item,
        type: "medium",
        id: data.items.indexOf(item).toString(),
        pubDate: new Date(item.pubDate),
        // Filter out categories that are not relevant
        categories: formatCategories(item.categories).filter((category) =>
          categories.includes(category.toLowerCase())
        ),
        // Keep only the first paragraph of the description
        description: item.description.split("<p>")[1].split("</p>")[0] + "..",
      }))
    )
  }, [])

  useEffect(() => {
    fetchArticles()
  }, [fetchArticles])

  return [articles, fetchArticles]
}

export default useMediumArticles
