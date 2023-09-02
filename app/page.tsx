import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2 text-justify">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          About me
        </h1>
        <p className="max-w-[900px] text-base text-muted-foreground">
          I&apos;m a Solidity smart contracts developer & security researcher.
        </p>
        <p className="max-w-[900px] text-base text-muted-foreground">
          I mostly experiment with new technologies, especially related to
          decentralized systems and immersive experiences.
        </p>
        <p className="max-w-[900px] text-base text-muted-foreground">
          I have a strong belief in open-source, and I actively work to promote
          true accessibility and user-friendly solutions. You can find all my
          experiments, audits & articles, past and present, comprehensively
          showcased on this website.
        </p>
        <p className="max-w-[900px] text-base text-muted-foreground">
          I&apos;ve graduated with a Master&apos;s Degree in Music Production,
          and I wrote a research paper on the applications of immersive audio in
          new technologies related to virtual worlds, such as the{" "}
          <em>metaverse</em>.
        </p>
        <p className="max-w-[900px] text-base text-muted-foreground">
          I have expertise working with Chainlink-related solutions (data feeds,
          VRF, Functions, Automations), and I&apos;m an advocate for truly
          secure and trust-minimized processes in smart contracts and DApps.
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
          </a>
          . Feel free to ask about anything.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.writing}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Articles
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
