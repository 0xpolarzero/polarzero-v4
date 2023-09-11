"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { useTheme } from "next-themes"

import { PortfolioItem } from "@/types/portfolio"
import { portfolioDev } from "@/config/portfolio-dev"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import ElapsedTimeComponent from "@/components/elapsed-time"

export default function PortfolioPage() {
  const { resolvedTheme: theme } = useTheme()

  return (
    <section className="container mx-auto flex flex-col space-y-2 p-4 px-8">
      <Tabs defaultValue="development" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="audits">Security audits</TabsTrigger>
          <TabsTrigger value="development">
            Smart contracts development
          </TabsTrigger>
        </TabsList>
        <TabsContent value="audits">
          No security audits yet. Stay tuned!
        </TabsContent>
        <TabsContent
          value="development"
          className="grid grid-cols-1 gap-4 xl:grid-cols-2"
        >
          {portfolioDev.map((item: PortfolioItem, index) => (
            <Card
              key={index}
              className="flex flex-col justify-between rounded-md bg-white/0 bg-clip-padding backdrop-blur-sm transition-all duration-100 hover:backdrop-blur-md"
            >
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription className="text-justify text-base">
                  {item.description}
                </CardDescription>
                <CardDescription className="text-justify text-sm">
                  {item.context}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-start space-y-4">
                {/* {item.categories.map((category) => (
                <Badge
                  variant="secondary"
                  className="cursor-pointer"
                  key={category}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </Badge>
              ))} */}
                <p className="text-gray-500">
                  {item.date.toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "numeric",
                  })}{" "}
                  (
                  <ElapsedTimeComponent timestamp={item.date.getTime()} />)
                </p>
                <div className="flex items-center space-x-2">
                  {item.links.map((link) => (
                    <Button
                      key={link.url}
                      onClick={() => window.open(link.url, "_blank")}
                    >
                      {link.icon ? (
                        link.icon({ className: "mr-2 h-4 w-4" })
                      ) : (
                        <ExternalLink className="mr-2 h-4 w-4" />
                      )}
                      {link.text}
                    </Button>
                  ))}
                </div>
              </CardContent>
              <CardFooter
                // make a responsive grid that will wrap the tech icons
                className="flex flex-wrap items-center gap-6"
              >
                {item.tech.map((tech) => (
                  <TooltipProvider key={tech.name}>
                    <Tooltip>
                      <TooltipTrigger>
                        <Link href={tech.link} target="_blank" rel="noreferrer">
                          <Image
                            src={`/tech/${theme}/${tech.id}.svg`}
                            alt={tech.name}
                            className="h-5 w-5 opacity-70 transition-opacity duration-300 hover:opacity-100"
                            height={5}
                            width={5}
                          />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>{tech.name}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </CardFooter>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </section>
  )
}
