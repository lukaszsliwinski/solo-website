"use client";

import { useState, useEffect, useRef } from "react";

import NavBar from "@/components/NavBar";
import Landing from "@/sections/Landing";
import Bio from "@/sections/Bio";
import Music from "@/sections/Music";
import Links from "@/sections/Links";

import { config } from "@fortawesome/fontawesome-svg-core";
// No runtime FontAwesome CSS - icon sizes come from Tailwind classes.
config.autoAddCss = false;


export default function Home() {
  const landingRef = useRef<HTMLDivElement>(null);
  const [showNavbar, setShowNavbar] = useState(false);

  // Landing has its own menu, so the navbar appears only once it is almost out of view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowNavbar(!entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (landingRef.current) {
      observer.observe(landingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main className="w-screen flex flex-col flex-1 items-center justify-center text-theme-light paper">
      <NavBar visible={showNavbar} />
      
      <div ref={landingRef}>
        <Landing />
      </div>

      <Bio />
      <Music />
      <Links />
    </main>
  );
}
