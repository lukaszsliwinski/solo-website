import { ReactNode } from "react"
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"]
})

interface Props {
  header: string,
  text: string,
  align: 'left' | 'right',
  bgColor: string,
  textColor: string,
  children?: ReactNode
}

const Card = ({
  header,
  text,
  align,
  bgColor,
  textColor,
  children }: Props
) => {
  return (
    <div className={`
          flex flex-col  w-2/5 min-w-96 min-h-[28rem] p-10
          ${align === 'right' ? 'items-end' : ''}
          ${bgColor}
          ${textColor}
        `}
    >
      <h2 className={`${oswald.className} tracking-wider font-bold text-4xl`}>{header}</h2>
      <p className={`font-semibold text-lg my-6 ${align === 'right' ? 'text-right' : ''}`}>{text}</p>
      {children}
    </div>
  )
}

export default Card