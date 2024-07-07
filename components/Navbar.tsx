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


  return (
    <nav
      className={`
        fixed z-20 flex w-full justify-center text-black font-semibold delay-100 duration-500 ease-in-out
        ${windowTop ? 'h-16' : 'bg-white h-12'}
      `}
    >
      <ul className="flex space-x-10">
        {[
          ['', '#landing'],
          ['item1', '#item1'],
          ['item2', '#item2'],
          ['item3', '#item3'],
          ['item4', '#item4']
        ].map(([title, href]) => (
          <li
            key={href}
            className={`first-of-type:hidden delay-100 duration-500 ease-in-out
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