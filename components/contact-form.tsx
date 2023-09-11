"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email.",
  }),
  subject: z.string().min(6, {
    message: "Subject must be at least 6 characters.",
  }),
  timeline: z.string(),
  company: z.string().optional(),
  twitter: z.string().optional(),
  message: z
    .string()
    .min(30, {
      message: "Message must be at least 30 characters.",
    })
    .max(6000, {
      message: "Message must be at most 6000 characters.",
    }),
})

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      name: "",
      email: "",
      subject: "",
      timeline: "",
      company: "",
      twitter: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })

    const { success, error } = await res.json()

    if (success) {
      form.reset()
      alert("Message sent!")
    } else {
      alert(error)
    }
  }

  return (
    <div className="flex max-w-[900px] flex-col space-y-2">
      <h1 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl">
        Contact me
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name or pseudonym" {...field} />
                </FormControl>
                {/* <FormDescription>Your name or pseudonym.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Your email address" {...field} />
                </FormControl>
                {/* <FormDescription>Your email address.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="The subject of your message" {...field} />
                </FormControl>
                {/* <FormDescription>Subject of your message.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="timeline"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estimated timeline</FormLabel>
                <FormControl>
                  <Input placeholder="An estimated timeline" {...field} />
                </FormControl>
                {/* <FormDescription>Your timeline.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company (optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Your company name" {...field} />
                </FormControl>
                {/* <FormDescription>Your company name.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="twitter"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Twitter (optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Your Twitter/X username" {...field} />
                </FormControl>
                {/* <FormDescription>Your twitter handle.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Your message"
                    // className="resize-none"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription>Your message.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}
