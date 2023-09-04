"use client"

import { useEffect, useState } from "react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PortfolioPage() {
  return (
    <section className="container mx-auto flex flex-col space-y-2 p-4 px-8">
      <Tabs defaultValue="audits" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="audits">Security audits</TabsTrigger>
          <TabsTrigger value="development">
            Smart contracts development
          </TabsTrigger>
        </TabsList>
        <TabsContent value="audits">ok</TabsContent>
        <TabsContent value="development">ok</TabsContent>
      </Tabs>
    </section>
  )
}
