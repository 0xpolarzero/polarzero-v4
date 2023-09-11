import { MediumArticle } from "@/types/writing"

export const otherPosts: MediumArticle[] = [
  {
    type: "hashnode",
    id: "1",
    author: "polarzero",
    title: "What is the metaverse anyway?",
    description: "Let's try to break through the misconception",
    link: "https://blog.polarzero.xyz/what-is-the-metaverse-anyway",
    pubDate: new Date("2022-05-14"),
    categories: ["metaverse"],
  },
  {
    type: "notion",
    id: "2",
    author: "polarzero",
    title: "L'audio immersif dans les mondes virtuels (FR)",
    description: (
      <div>
        <p>
          <span className="font-bold">(EN) </span>Immersive audio in virtual
          worlds: integration and use cases in the metaverse; a master&apos;s
          thesis, in French.
        </p>
        <br />
        <p>
          <span className="font-bold">(FR) </span>Une place pour l’audio
          immersif dans le Web 3.0 : intégration dans le métavers. Adaptation à
          un nouveau modèle, immersion dans un espace en pleine expansion,
          expériences immersives accessibles et avancées...
        </p>
      </div>
    ),
    content: null,
    link: "https://memoire.polarzero.xyz",
    pdf: "https://drive.google.com/file/d/1r0_ZjVGLb32tfxoBmrERJypyCV6No36u/view?usp=sharing",
    pubDate: new Date("2022-07-07"),
    categories: ["metaverse", "immersive technologies"],
  },
]
