import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2 text-justify">
        {/* <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          About me
        </h1> */}
        <p className="max-w-[900px] text-base">
          I&apos;m polarzero, a Solidity smart contracts developer & security
          researcher.
        </p>

        <p className="max-w-[900px] text-base text-muted-foreground">
          I have a strong belief in open-source, and I actively work to promote
          true accessibility and user-friendly solutions, especially when it
          comes to developing secure and optimized smart contracts and
          applications.
        </p>

        <p className="max-w-[900px] text-base text-muted-foreground">
          My expertise also extends to Chainlink-related solutions, including
          data feeds, VRF, Functions, Automations, which aligns perfectly with
          my appreciation for trust-minimized processes.
        </p>
        <p className="max-w-[900px] text-base text-muted-foreground">
          You can reach me on{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.twitter}
            style={{ textDecoration: "underline" }}
          >
            Twitter
          </a>{" "}
          or by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.email}
            style={{ textDecoration: "underline" }}
          >
            email
          </a>
          , if you need a quote or if you would like to ask about anything.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.writing}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Writing
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.portfolio}
          className={buttonVariants({ variant: "outline" })}
        >
          Portfolio
        </Link>
      </div>
    </section>
  )
}
