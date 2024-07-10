import { ReactNode } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSoundcloud, faYoutube, faBandcamp, faInstagram } from "@fortawesome/free-brands-svg-icons"
import Tile from "../shared/Tile"

const Footer = () => {
  const tiles: ReactNode[] = [];

  [
    { label: 'SOUNDCLOUD', href: 'https://soundcloud.com', icon: faSoundcloud, color: 'text-gray-950', bg: 'bg-orange-600'},
    { label: 'BANDCAMP', href: 'https://bandcamp.com', icon: faBandcamp, color: 'text-neutral-300', bg: 'bg-[#1da0c3]'},
    { label: 'YOUTUBE', href: 'https://youtube.com', icon: faYoutube, color: 'text-gray-950', bg: 'bg-red-600'},
    { label: 'INSTAGRAM', href: 'https://instagram.com', icon: faInstagram, color: 'text-neutral-300', bg: 'bg-[#833ab4]'}
  ].forEach(obj => {
    tiles.push(
      <Tile
        label={obj.label}
        href={obj.href}
        color={obj.color}
        bg={obj.bg}
        icon={<FontAwesomeIcon icon={obj.icon} />} />
    )
  })

  return (
    <div className="flex h-screen bg-neutral-300">
      <div className="w-[36rem] grid grid-cols-2 gap-16 m-auto">
        {tiles}
      </div>
    </div>
  )
}

export default Footer