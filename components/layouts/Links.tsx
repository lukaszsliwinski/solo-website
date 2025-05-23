import { ISection } from '../shared/types';
import { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSoundcloud,
  faYoutube,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import moment from 'moment';
import Pick from '../shared/Pick';

const Links = ({ verticalScreen, isMobile }: ISection) => {
  const years = moment().year().toString() === '2024' ? '2024' : `2024-${moment().year()}`;

  const picks: ReactNode[] = [];

  [
    {
      label: 'SOUNDCLOUD',
      href: 'https://soundcloud.com/lukasz_sliwinski/sets/z-gora-w-tle/',
      icon: faSoundcloud,
      hover: 'hover:text-orange-600',
      active: 'active:text-orange-600'
    },
    // { label: 'INSTAGRAM', href: 'https://instagram.com', icon: faInstagram, hover: 'hover:text-purple-800', active: 'active:text-purple-800'},
    {
      label: 'YOUTUBE',
      href: 'https://www.youtube.com/@lukasz_sliwinski',
      icon: faYoutube,
      hover: 'hover:text-red-600',
      active: 'active:text-red-600'
    }
  ].forEach((obj, idx) => {
    picks.push(
      <Pick
        key={idx}
        label={obj.label}
        href={obj.href}
        hover={obj.hover}
        active={obj.active}
        icon={<FontAwesomeIcon icon={obj.icon} size="3x" />}
      />
    );
  });

  return (
    <section
      className={`relative flex ${isMobile && !verticalScreen ? 'h-[60vh]' : 'h-[45vh]'} bg-light-bg`}
      id="links"
    >
      <div className="grid grid-cols-2 gap-3 xs:gap-6 lg:gap-16 pb-20 m-auto">{picks}</div>
      <div className="absolute bottom-6 flex justify-center w-full select-none">
        <p className="text-gray-950 text-sm">&copy; {years} ŁUKASZ ŚLIWIŃSKI</p>
      </div>
    </section>
  );
};

export default Links;
