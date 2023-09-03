import { BriefcaseIcon, CodeIcon, HomeIcon, NewspaperIcon } from "lucide-react"

import { Icons } from "@/components/icons"

export type SiteConfig = typeof siteConfig

const links = {
  twitter: "https://x.com/0xpolarzero",
  github: "https://github.com/0xpolarzero",
  writing: "/writing",
  portfolio: "/portfolio",
}

export const siteConfig = {
  name: "polarzero",
  description: "polazero's personal website, blog, and portfolio",
  mainNav: [
    {
      title: "home",
      href: "/",
      icon: Icons.home,
    },
    {
      title: "writing",
      href: "/writing",
      icon: Icons.writing,
    },
    {
      title: "portfolio",
      href: "/portfolio",
      icon: Icons.portfolio,
    },
    {
      title: "hire me",
      href: "/hire-me",
      icon: Icons.hireMe,
    },
  ],
  links,
  sideNav: [
    {
      title: "Github",
      href: links.github,
      icon: Icons.gitHub,
    },
    {
      title: "Twitter",
      href: links.twitter,
      icon: Icons.twitter,
    },
  ],
}
