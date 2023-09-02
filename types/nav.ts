import { Icon } from "@/components/icons"

export interface NavItem {
  title: string
  icon: Icon
  href?: string
  disabled?: boolean
  external?: boolean
}
