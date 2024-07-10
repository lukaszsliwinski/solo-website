"use client";
import { useState, useEffect } from "react";

/**
 * TODO: https://www.npmjs.com/package/react-ui-scrollspy
 */

const Navbar = () => {
  const [windowTop, setWindowTop] = useState<boolean>(true);

  // handle window top
  useEffect(() => {
    const handleScroll = () => (window.scrollY <= 20 ? setWindowTop(true) : setWindowTop(false));
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [windowTop]);

// przeniesione z Landing <div className="w-100 h-32 bg-gray-800 navbar-bg"></div>
  return (
    <nav
      className={`
        fixed top-0 z-20 w-full flex justify-center text-white font-semibold duration-150 ease-in-out
        ${windowTop ? 'bg-transparent h-16' : 'bg-black/80 backdrop-blur-md h-12'}
      `}
    >
      <ul className="flex space-x-10">
        {[
          ['', '#landing'],
          ['o mnie', '#about'],
          ['muzyka', '#music'],
          ['linki', '#links']
        ].map(([title, href]) => (
          <li
            key={href}
            className={`first-of-type:hidden duration-150 ease-in-out hover:text-red-600
              ${windowTop ? 'leading-[64px]' : 'leading-[48px]'}
            `}
          >
            <a href={href}>{title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar