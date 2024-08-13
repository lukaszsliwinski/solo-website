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
      className={`relative flex flex-col justify-center items-center w-[4.95rem] xs:w-[6.6rem] lg:w-[8.25rem] h-24 xs:h-32 lg:h-40 text-neutral-200 bg-fit-h bg-no-repeat bg-center bg-pick transition duration-300 ease-in-out hover:rotate-[720deg] ${hover}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <label className="hidden xs:block text-neutral-200 lg:mb-1 text-[.45rem] lg:text-xs">{label}</label>
      <div className="mb-4 xs:max-lg:mb-2 scale-[.6] xs:scale-75 lg:scale-100">{icon}</div>
    </Link>
  )
}

export default Pick