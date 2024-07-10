import Link from "next/link"
import { ReactNode } from "react"

interface Props {
  label: string,
  href: string,
  bg: string,
  icon: ReactNode
}

const Tile = ({ label, href, bg, icon }: Props) => {
  return (
    <Link
      href={href}
      className={`relative flex flex-col justify-center items-center w-60 h-60 text-neutral-200 ${bg} hover:shadow-lg active:opacity-80`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="w-16 h-16">{icon}</div>
      <div className="font-semibold mt-4">{label}</div>
    </Link>
  )
}

export default Tile