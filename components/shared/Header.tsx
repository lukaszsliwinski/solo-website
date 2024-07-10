import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"]
})

const Header = ({ text }: { text: string }) => {
  return (
    <h2 className={`${oswald.className} tracking-wider font-bold text-5xl`}>{text}</h2>
  )
}

export default Header