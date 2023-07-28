"use client"

import { useEffect, useState } from "react"

import { MediumArticle, TwitterPost } from "@/types/blog"
import { twitterPosts } from "@/config/twitter-posts"
import useMediumArticles from "@/hooks/useMediumArticles"

export default function BlogPage() {
  const [articles] = useMediumArticles()
  const [blogItems, setBlogItems] =
    useState<(TwitterPost | MediumArticle)[]>(twitterPosts)
  console.log(blogItems)

  useEffect(() => {
    if (articles) {
      setBlogItems(
        [...twitterPosts, ...articles].sort(
          (a, b) => b.pubDate.getTime() - a.pubDate.getTime()
        )
      )
    }
  }, [articles])

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      aa
    </section>
  )
}
