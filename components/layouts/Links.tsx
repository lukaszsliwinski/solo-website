import { ReactNode } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSoundcloud, faYoutube, faBandcamp, faInstagram } from "@fortawesome/free-brands-svg-icons"
import moment from 'moment';
import Tile from "../shared/Tile"

const Links = () => {
  const years = moment().year().toString() === '2024' ? '2024' : `2024-${moment().year()}`

  const tiles: ReactNode[] = [];

  [
    { label: 'SOUNDCLOUD', href: 'https://soundcloud.com', icon: faSoundcloud, bg: 'bg-orange-600'},
    { label: 'BANDCAMP', href: 'https://bandcamp.com', icon: faBandcamp, bg: 'bg-cyan-600'},
    { label: 'INSTAGRAM', href: 'https://instagram.com', icon: faInstagram, bg: 'bg-purple-800'},
    { label: 'YOUTUBE', href: 'https://youtube.com', icon: faYoutube, bg: 'bg-red-600'}
  ].forEach((obj, idx) => {
    tiles.push(
      <Tile
        key={idx}
        label={obj.label}
        href={obj.href}
        bg={obj.bg}
        icon={<FontAwesomeIcon icon={obj.icon} />} />
    )
  })

  return (
    <section className="relative flex h-screen bg-neutral-300" id="links">
      <div className="w-[36rem] grid grid-cols-2 gap-16 m-auto">
        {tiles}
      </div>
      <div className="absolute bottom-6 flex justify-center w-full">
        <p className="text-gray-950">&copy; {years} ŁUKASZ ŚLIWIŃSKI</p>
      </div>
    </section>
  )
}

export default Links