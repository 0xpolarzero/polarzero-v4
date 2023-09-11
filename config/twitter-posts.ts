import { TwitterPost } from "@/types/writing"

// Get info (id, timestamp) of a tweet: https://oduwsdl.github.io/tweetedat/

type Svg = string

const getThumbnailFromTitle = (title: string, subtitle: string): Svg => {
  const svgWidth = 1920
  const svgHeight = 1080

  const svgString = `
    <svg width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${svgWidth}" height="${svgHeight}" fill="#ddd" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Verdana" font-size="35" fill="black">${title}</text>
      <text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" font-family="Verdana" font-size="30" fill="black">${
        subtitle || ""
      }</text>
    </svg>`

  return svgString
}

export const twitterPosts: TwitterPost[] = [
  {
    type: "twitter",
    id: "1682359325149261827",
    title: "Why you should use Chainlink as a developer",
    subtitle: null,
    description:
      "On the many use cases of Chainlink and benefits of trust-minimized processes.",
    link: "https://twitter.com/0xpolarzero/status/1682359325149261827",
    pubDate: new Date("2023-07-21T11:58:14.497Z"),
    thumbnail: "/thumbnails/tweet_why_you_should_use_chainlink.png",
    categories: ["chainlink"],
  },
  {
    type: "twitter",
    id: "1681279109144494083",
    title: "Chainlink CCIP",
    subtitle: "Cross-Chain Interoperability Protocol",
    description:
      "About the recently unveiled Chainlink CCIP - a global standard for cross-chain communication.",
    link: "https://twitter.com/0xpolarzero/status/1681279109144494083",
    pubDate: new Date("2023-07-18T12:25:50.932Z"),
    thumbnail: "/thumbnails/tweet_chainlink_ccip.jpeg",
    categories: ["chainlink"],
  },
  {
    type: "twitter",
    id: "1679885195497951233",
    title: "The CEI / FREI-PI patterns",
    subtitle: "Rolling code for preconditions & postconditions",
    description:
      "The importance of security considerations related to gas costs, and how to remember core invariants as a smart contract developer.",
    link: "https://twitter.com/0xpolarzero/status/1679885195497951233",
    pubDate: new Date("2023-07-14T16:06:56.021Z"),
    thumbnail: getThumbnailFromTitle(
      "The CEI / FREI-PI patterns",
      "Rolling code for preconditions & postconditions"
    ),
    categories: ["security"],
  },
  {
    type: "twitter",
    id: "1679223918740078592",
    title: "Rising above censorship",
    subtitle: "The imperative shift towards decentralized social networks",
    description:
      "On governments and corporations censoring information, especially during times of crisis, and how much we need decentralized social networks.",
    link: "https://twitter.com/0xpolarzero/status/1679223918740078592",
    pubDate: new Date("2023-07-12T20:19:15.356Z"),
    thumbnail: "/thumbnails/tweet_rising_above_censorship.png",
    categories: ["decentralized socials"],
  },
  {
    type: "twitter",
    id: "1678825999541186561",
    title: "NFTs are dead (?)",
    subtitle: "For those who say that NFTs are dead",
    description:
      "About the true scope of NFTs and how they are not just about speculation, PFPs and identity.",
    link: "https://twitter.com/0xpolarzero/status/1678825999541186561",
    pubDate: new Date("2023-07-11T17:58:04.026Z"),
    thumbnail: "/thumbnails/tweet_nfts_are_dead.png",
    categories: ["nfts"],
  },
  {
    type: "twitter",
    id: "1677996173297086464",
    title: "Audit reports",
    subtitle: "From top security firms & solo auditors.",
    description:
      "A short curated list of audit reports from major security researchers.",
    link: "https://twitter.com/0xpolarzero/status/1677996173297086464",
    pubDate: new Date("2023-07-09T11:00:38.032Z"),
    thumbnail: "/thumbnails/tweet_audit_reports.png",
    categories: ["security"],
  },
  {
    type: "twitter",
    id: "1675502797050052609",
    title: "NFTs?",
    subtitle: "Marketing, communities, luxury brands...",
    description:
      "Some thoughts on the constant usual marketing tactics around NFTs, and why it&apos;s trivial when compared to the whole idea of Blockchain.",
    link: "https://twitter.com/0xpolarzero/status/1675502797050052609",
    pubDate: new Date("2023-07-02T13:52:50.810Z"),
    thumbnail: getThumbnailFromTitle(
      "NFTs?",
      "Marketing, communities, luxury brands..."
    ),
    categories: ["nfts"],
  },
  {
    type: "twitter",
    id: "1671165624415039489",
    title: "Building the infrastructure of Blockchain",
    subtitle: "Or leveraging the existing one?",
    description:
      "Why everyone is building infrastructure in Web3, even if it means reinventing the wheel, and what can be leveraged from the existing one.",
    link: "https://twitter.com/0xpolarzero/status/1671165624415039489",
    pubDate: new Date("2023-06-20T14:38:28.273Z"),
    thumbnail: getThumbnailFromTitle(
      "Building the infrastructure of Blockchain",
      "Or leveraging the existing one?"
    ),
    categories: ["infrastructure"],
  },
  {
    type: "twitter",
    id: "1522930572498145281",
    title: 'NFTs and "mass adoption"',
    subtitle: "Mass adoption, price and accessibility.",
    description:
      "A paradox in preaching for mass adoption and not addressing the issue of price and accessibility.",
    link: "https://twitter.com/0xpolarzero/status/1522930572498145281",
    pubDate: new Date("2022-05-07T13:25:17.822Z"),
    thumbnail: getThumbnailFromTitle(
      '"NFTs and "mass adoption"',
      "Mass adoption, price and accessibility."
    ),
    categories: ["nfts"],
  },
]
