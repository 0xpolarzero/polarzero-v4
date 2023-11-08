import Link from "next/link"

import { MediumInfo } from "@/types/writing"

export const mediumInfos: Record<string, MediumInfo> = {
  // guid -> info
  "https://medium.com/p/e1d8c0e0ebfc": {
    description: [
      "Some explanations about blockchain: current perception and tarnished reputation, what is it actually and what it enables, perspectives for the near future, what to do now and how to find our place...",
      <div>
        <br />
        English version of{" "}
        <Link
          href="https://medium.com/@0xpolarzero/blockchain-but-for-real-e1d8c0e0ebfc"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          <em>La blockchain, mais pour de vrai</em>
        </Link>
      </div>,
    ],
    categories: ["education"],
  },
  "https://medium.com/p/0fed9b951af9": {
    description: [
      "Quelques explications sur la blockchain : perceptions actuelles et réputation dégradée, ce dont il s'agit réellement et ce que cela permet, implications pour l'avenir proche, pourquoi s'informer dès maintenant et comme trouver notre place...",
      <div>
        <br />
        Version française de{" "}
        <Link
          href="https://medium.com/@0xpolarzero/blockchain-but-for-real-0fed9b951af9"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          <em>Blockchain, but for Real</em>
        </Link>
      </div>,
    ],
    categories: ["education", "fr"],
  },
  "https://medium.com/p/8c19d7167778": {
    description: [
      "On delegation in modern democracies: how it breeds indifference, especially as it involves people delegating their understanding and awareness along with their power/authority; how decentralized systems can help break this cycle, by incentivizing active participation in governance.",
    ],
    categories: ["education"],
  },
  "https://medium.com/p/725d7a6881cb": {
    description: [
      "A reflection on Chainlink’s latest milestones, and key aspects from a developer’s perspective.",
    ],
    categories: [],
  },
  "https://medium.com/p/99b9203c9824": {
    description: [
      "Navigating the rambling world of smart contract security can be a challenge, especially when you’re swarmed with a slew of technical jargon. Let's try to clarify its terminology.",
    ],
    categories: [],
  },
  "https://medium.com/p/581ba0551b3": {
    description: [
      "The storage layout in the EVM, how data is meticulously stored and managed with Solidity.",
    ],
    categories: [],
  },
}
