import Link from "next/link"
import { ReactNode } from "react"

interface Props {
  label: string,
  href: string,
  hover: string,
  active: string,
  icon: ReactNode
}

const Pick = ({ label, href, hover, active, icon }: Props) => {
  return (
    <Link
      href={href}
      className={`relative flex flex-col justify-center items-center w-[8.25rem] h-40 text-neutral-200 bg-fit-h bg-no-repeat bg-center bg-pick transition duration-300 ease-in-out hover:rotate-[720deg] ${hover}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <label className="text-neutral-200 mb-1 text-xs">{label}</label>
      <div className="mb-4">{icon}</div>
    </Link>
  )
}

export default Pick