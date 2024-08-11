import { ReactNode } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSoundcloud, faYoutube, faBandcamp, faInstagram } from "@fortawesome/free-brands-svg-icons"
import moment from 'moment';
import Pick from "../shared/Pick"

const Links = () => {
  const years = moment().year().toString() === '2024' ? '2024' : `2024-${moment().year()}`

  const picks: ReactNode[] = [];

  [
    { label: 'SOUNDCLOUD', href: 'https://soundcloud.com', icon: faSoundcloud, hover: 'hover:text-orange-600'},
    { label: 'BANDCAMP', href: 'https://bandcamp.com', icon: faBandcamp, hover: 'hover:text-cyan-600'},
    // { label: 'INSTAGRAM', href: 'https://instagram.com', icon: faInstagram, hover: 'hover:text-purple-800'},
    { label: 'YOUTUBE', href: 'https://youtube.com', icon: faYoutube, hover: 'hover:text-red-600'}
  ].forEach((obj, idx) => {
    picks.push(
      <Pick
        key={idx}
        label={obj.label}
        href={obj.href}
        hover={obj.hover}
        icon={<FontAwesomeIcon icon={obj.icon} size="3x"/>} />
    )
  })

  return (
    <section className="relative flex h-[45vh] bg-neutral-300" id="links">
      <div className="max-w-[64rem] grid grid-cols-3 gap-16 pb-20 m-auto">
        {picks}
      </div>
      <div className="absolute bottom-6 flex justify-center w-full">
        <p className="text-gray-950">&copy; {years} ŁUKASZ ŚLIWIŃSKI</p>
      </div>
    </section>
  )
}

export default Links