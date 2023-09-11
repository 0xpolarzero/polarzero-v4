"use client"

import { useEffect, useState } from "react"
import { ExternalLink, PlusIcon } from "lucide-react"

import { Category, MediumArticle, TwitterPost } from "@/types/writing"
import { otherPosts } from "@/config/other-articles"
import { twitterPosts } from "@/config/twitter-posts"
import useMediumArticles from "@/hooks/useMediumArticles"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ElapsedTimeComponent from "@/components/elapsed-time"
import { FiltersSelector } from "@/components/filters-selector"

export default function BlogPage() {
  const [articles] = useMediumArticles()
  const [blogItems, setBlogItems] = useState<(TwitterPost | MediumArticle)[]>([
    ...twitterPosts,
    ...otherPosts,
  ])
  const [filter, setFilter] = useState<Category | null>(null)

  useEffect(() => {
    if (articles) {
      setBlogItems(
        [...twitterPosts, ...otherPosts, ...articles].sort(
          (a, b) => b.pubDate.getTime() - a.pubDate.getTime()
        )
      )
    }
  }, [articles])

  useEffect(() => {
    const items = [...twitterPosts, ...otherPosts, ...articles].sort(
      (a, b) => b.pubDate.getTime() - a.pubDate.getTime()
    )

    if (filter) {
      setBlogItems(items.filter((item) => item.categories.includes(filter)))
    } else {
      setBlogItems(items)
    }
  }, [articles, filter])

  return (
    <section className="container mx-auto flex flex-col space-y-2 p-4 px-8">
      {/* A bento grids layout for the blog items */}
      <FiltersSelector
        blogItemsAmount={blogItems.length}
        filter={filter}
        setFilter={setFilter}
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {blogItems.map((item) => (
          <Card
            key={item.link}
            className="flex flex-col justify-between rounded-md bg-white/0 bg-clip-padding backdrop-blur-sm transition-all duration-100 hover:backdrop-blur-md"
          >
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex h-full items-end gap-2">
              {item.categories.map((category) => (
                <Badge
                  variant="secondary"
                  className="cursor-pointer whitespace-nowrap"
                  key={category}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </Badge>
              ))}
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-4">
              <p className="text-gray-500">
                {item.pubDate.toLocaleDateString()} (
                <ElapsedTimeComponent timestamp={item.pubDate.getTime()} />)
              </p>
              <Button
                className="w-full"
                onClick={() => window.open(item.link, "_blank")}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Read on {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
              </Button>
              {item.pdf ? (
                <Button
                  className="w-full"
                  onClick={() => window.open(item.pdf, "_blank")}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Read PDF
                </Button>
              ) : null}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
