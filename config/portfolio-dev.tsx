import React from "react"
import { Github, Youtube } from "lucide-react"

import { PortfolioItem } from "@/types/portfolio"
import { Icons } from "@/components/icons"

import { tech } from "./tech"

export const portfolioDev: PortfolioItem[] = [
  {
    title: "Cascade",
    description: (
      <div>
        A plateform that behaves as an interface between founders and
        contributors, where the latter can{" "}
        <b>plan their contributions over a specified period</b>, give out their
        funds to a <b>secured contract</b>, let the{" "}
        <b>payments be sent automatically</b>, and still pull back if they
        don&apos;t feel confident anymore at some point. The collaborators in a
        project are each assigned a percentage of the funds, and are able to
        withdraw their share at any time.
      </div>
    ),
    context: <div>Built during the Chainlink Spring 2023 Hackathon.</div>,
    links: [
      {
        url: "https://github.com/0xpolarzero/decentralized-autonomous-crownfunding/",
        text: "Github",
        icon: Github,
      },
      {
        url: "https://youtu.be/4tHtIcdVorY?si=hkrK7w3Tdl_MXGTD",
        text: "Demo",
        icon: Youtube,
      },
      {
        url: "https://devpost.com/software/cascade-u14fdb",
        text: "Devpost",
        icon: Icons.devpost,
      },
    ],
    tech: [
      tech.solidity,
      tech.typescript,
      tech.hardhat,
      tech.chainlink,
      tech.theGraph,
      tech.apollographql,
      tech.wagmi,
      tech.ethers,
      tech.nextjs,
      tech.shadcn,
    ],
    date: new Date("2023-06"),
  },
  {
    title: "Cross-chain token-gated smart contract",
    description: (
      <div>
        Restrict access to a smart contract based on the{" "}
        <b>ERC20 balance of a user across multiple chains</b>, using{" "}
        <a
          className="underline"
          href="https://chain.link/functions"
          target="_blank"
          rel="noreferrer"
        >
          Chainlink Functions
        </a>
        . The aggregated balance is then brought back to the original chain to
        gate access to specific functions in the smart contract.
      </div>
    ),
    context: (
      <div>
        Built during the Chainlink Functions Alpha, providing feedback and a
        promotional video for Chainlink social media.
      </div>
    ),
    links: [
      {
        url: "https://github.com/0xpolarzero/cross-chain-ERC20-balance-verification",
        text: "Github",
        icon: Github,
      },
      {
        url: "https://youtu.be/N5jvHRSJVME?si=LgX-puJ3AUijDXtX",
        text: "Demo",
        icon: Youtube,
      },
    ],
    tech: [
      tech.solidity,
      tech.javascript,
      tech.hardhat,
      tech.chainlink,
      tech.wagmi,
      tech.ethers,
      tech.nextjs,
      tech.antd,
      tech.zustand,
    ],
    date: new Date("2023-02"),
  },
  {
    title: "Promise",
    description: (
      <div>
        A blockchain-based platform that provides{" "}
        <b>transparency and accountability in digital relationships</b>,
        allowing users to keep track of the reliability of a person or a team.
        Essentially, it&apos;s a way to ensure that founders can be{" "}
        <b>held accountable for their promises</b>, by allowing them to make a
        genuine commitment <b>that cannot be altered</b>.
      </div>
    ),
    context: (
      <div>
        Built during the Chainlink Fall 2022 Hackathon. QuickNode 1st Prize &
        Chainlink Top 40 Quality Projects.
      </div>
    ),
    links: [
      {
        url: "https://github.com/0xpolarzero/chainlink-fall-2022-hackathon",
        text: "Github",
        icon: Github,
      },
      {
        url: "https://youtu.be/6TQf_QUu8K8?si=rCG1Z8Dt8F_ujfTV",
        text: "Demo",
        icon: Youtube,
      },
      {
        url: "https://devpost.com/software/promise-erftax",
        text: "Devpost",
        icon: Icons.devpost,
      },
    ],
    tech: [
      tech.solidity,
      tech.javascript,
      tech.hardhat,
      tech.chainlink,
      tech.ipfs,
      tech.arweave,
      tech.bundlr,
      tech.theGraph,
      tech.apollographql,
      tech.nodejs,
      tech.wagmi,
      tech.ethers,
      tech.nextjs,
      tech.antd,
    ],
    date: new Date("2022-11"),
  },
]
