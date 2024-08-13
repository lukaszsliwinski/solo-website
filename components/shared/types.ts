import { ReactNode } from "react"


export interface ISection {
  verticalScreen: boolean,
  isMobile: boolean
}

export interface IButton {
  label: string,
  href: string
}

export interface IPick {
  label: string,
  href: string,
  hover: string,
  active: string,
  icon: ReactNode
}
