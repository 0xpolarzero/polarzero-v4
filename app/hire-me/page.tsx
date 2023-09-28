"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { ContactForm } from "@/components/contact-form"

export default function HireMePage() {
  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {}
  return (
    <section className="container mx-auto flex flex-col space-y-4 p-4 px-8">
      <div className="flex flex-col space-y-4">
        <p className="max-w-[900px] text-justify text-base">
          If you would like to integrate smart contracts into your project,{" "}
          {/* or
          if you need a security review/audit,  */}
          reach out to me for a quote.
        </p>
        <p className="max-w-[900px] text-justify text-muted-foreground">
          Kindly share as much information as possible about your project
          upfront. This includes details such as the concept, timeline, budget,
          scope, and any other relevant information. Feel free to attach any
          pertinent documents or resources.
        </p>
        <p className="max-w-[900px] text-justify text-muted-foreground">
          For anything else, you can reach me at{" "}
          <Link
            className="underline"
            href={siteConfig.links.email}
            target="_blank"
            rel="noreferer"
          >
            {siteConfig.links.email.replace("mailto:", "")}
          </Link>{" "}
          or on{" "}
          <Link
            className="underline"
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferer"
          >
            Twitter
          </Link>
          .
        </p>
      </div>

      <ContactForm />
    </section>
  )
}
