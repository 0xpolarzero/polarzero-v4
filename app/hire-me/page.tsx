"use client"

import { ContactForm } from "@/components/contact-form"

export default function HireMePage() {
  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {}
  return (
    <section className="container mx-auto flex flex-col space-y-4 p-4 px-8">
      <div>
        <p className="max-w-[900px] text-justify text-base">
          If you would like to integrate smart contract with your project,{" "}
          <span className="line-through">or if you need a security audit</span>,
          reach out to me for a quote.
        </p>
        <p className="max-w-[900px] text-justify text-muted-foreground">
          Please give me as much information as possible about your project
          up-front (concept, timeline, budget, scope, etc.). Feel free to attach
          links to any relevant documents or resources.
        </p>
      </div>

      <ContactForm />
    </section>
  )
}
