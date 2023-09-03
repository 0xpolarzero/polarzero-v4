"use client"

import React from "react"
import Link from "next/link"
import { LinkIcon, Menu, PanelLeftOpen } from "lucide-react"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        {/* ---------------------------------- Large --------------------------------- */}
        <div className="flex gap-6 md:gap-10">
          {/* -------------------------------------------------------------------------- */
          /*                                  Main nav                                  */
          /* -------------------------------------------------------------------------- */}
          <Link href="/" className="hidden items-center space-x-2 md:flex">
            <Icons.logo className="h-6 w-6" />
            <span className="hidden font-bold lg:inline-block">
              {siteConfig.name}
            </span>
          </Link>
          {siteConfig.mainNav?.length ? (
            <>
              <nav className="hidden gap-4 md:flex lg:gap-6">
                {siteConfig.mainNav?.map((item: NavItem, index) =>
                  item.href ? (
                    <React.Fragment key={index}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center text-sm font-medium text-muted-foreground",
                          item.disabled && "cursor-not-allowed opacity-80"
                        )}
                      >
                        <item.icon className="mr-4 h-4 w-4" />
                        {item.title}
                      </Link>
                      {index < siteConfig.mainNav.length - 1 ? (
                        <span className="opacity-30">|</span>
                      ) : null}
                    </React.Fragment>
                  ) : null
                )}
              </nav>
              {/* ---------------------------------- Small --------------------------------- */}
              <nav className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <button
                      className={buttonVariants({
                        size: "icon",
                        variant: "ghost",
                      })}
                    >
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Open menu</span>
                    </button>
                  </SheetTrigger>
                  <SheetContent side="left" className="flex flex-col">
                    <SheetHeader>
                      <SheetTitle>polarzero</SheetTitle>
                    </SheetHeader>
                    {siteConfig.mainNav?.map((item: NavItem, index) =>
                      item.href ? (
                        <Link
                          key={index}
                          href={item.href}
                          className="flex items-center"
                        >
                          {/* <item.icon className="mr-4 h-4 w-4" /> */}
                          {item.title}
                        </Link>
                      ) : null
                    )}
                  </SheetContent>
                </Sheet>
              </nav>
            </>
          ) : null}
        </div>
        {/* -------------------------------------------------------------------------- */
        /*                                  Side nav                                  */
        /* -------------------------------------------------------------------------- */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* ---------------------------------- Large --------------------------------- */}
          <nav className="flex items-center space-x-1 md:hidden lg:flex">
            {siteConfig.sideNav.map((item, index) => (
              <Link href={item.href} target="_blank" rel="noreferrer">
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <item.icon className="h-5 w-5 fill-current" />
                  <span className="sr-only">{item.title}</span>
                </div>
              </Link>
            ))}
            <ThemeToggle />
          </nav>
          {/* ---------------------------------- Small --------------------------------- */}
          <nav className="hidden md:flex lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <button
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <LinkIcon className="h-5 w-5" />
                  <span className="sr-only">Open links</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {siteConfig.sideNav.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <Link href={item.href} target="_blank" rel="noreferrer">
                      <div className="flex items-center">
                        <item.icon className="mr-4 h-4 w-4" />
                        {item.title}
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
