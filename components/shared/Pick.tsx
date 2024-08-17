import { IPick } from './types';
import Link from 'next/link';

const Pick = ({ label, href, hover, active, icon }: IPick) => {
  return (
    <Link
      href={href}
      className={`relative flex flex-col justify-center items-center w-[4.95rem] xs:w-[6.6rem] lg:w-[8.25rem] h-24 xs:h-32 lg:h-40 text-main-text tracking-widest bg-fit-h bg-no-repeat bg-center bg-pick transition duration-300 ease-in-out hover:rotate-[720deg] ${hover} ${active}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <label className="hidden xs:block text-main-text lg:mb-1 text-[.45rem] lg:text-xs">
        {label}
      </label>
      <div className="mb-4 xs:max-lg:mb-2 scale-[.6] xs:scale-75 lg:scale-100">{icon}</div>
    </Link>
  );
};

export default Pick;
