import { EntityType } from "@/types/canvas"

export const pathnameToEntityType: Record<string, EntityType> = {
  "/": "home",
  "/portfolio": "portfolio",
  "/writing": "writing",
  "/hire-me": "hire-me",
}
