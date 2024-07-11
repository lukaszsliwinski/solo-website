"use client";
import { useState, useEffect } from "react";

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
        fixed top-0 z-20 w-full flex justify-center text-xl duration-150 ease-in-out
        ${windowTop ? 'bg-transparent h-16' : 'bg-gray-950/70 backdrop-blur-md h-12'}
      `}
    >
      <ul className="flex space-x-10">
        {[
          ['', 'home', '#home'],
          ['o mnie', 'about', '#about'],
          ['muzyka', 'music', '#music'],
          ['linki', 'links', '#links']
        ].map(([title, id, href]) => (
          <li
            data-to-scrollspy-id={id}
            key={id}
            className={`first-of-type:hidden duration-150 ease-in-out hover:text-orange-700
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