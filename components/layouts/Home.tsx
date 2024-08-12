import { useState, useEffect } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Image from "next/image";
import logo from "../../public/logo.svg";
import Button from "../shared/Button";

const Home = () => {
  const { screenHeight, screenWidth } = useWindowDimensions();

  const [verticalScreen, setVerticalScreen] = useState(false);
  const [isMobile, setIsMobile] = useState(screenWidth < 950);

  useEffect(() => {
    setVerticalScreen(screenHeight > screenWidth);
    setIsMobile(screenWidth < 950)
  }, [screenHeight, screenWidth]);

  return (
    <section className="relative bg-cover bg-center bg-no-repeat bg-landing" id="home">
      
      <div className="absolute w-full">
        <Image className="drop-shadow-lg opacity-5 mx-auto mt-12 w-36 sm:w-52" src={logo} alt="logo" />
      </div>
      
      <div className="flex flex-col justify-center items-center h-screen bg-black/60">
        <h1 className={`font-light text-neutral-300 ${isMobile && !verticalScreen ? 'my-8' : 'my-24'} select-none`}>
          <span className="block text-xl xs:text-2xl sm:text-4xl tracking-[.445rem] xs:tracking-[.69rem] sm:tracking-[1.02rem] mb-4 scale-y-75">ŁUKASZ ŚLIWIŃSKI</span>
          <span className="block text-4xl xs:text-5xl sm:text-7xl tracking-widest">Z GÓRĄ W TLE</span>
        </h1>
        <div className="grid xs:grid-cols-3 gap-2 xs:gap-6 sm:gap-8">
          <Button label="O MNIE" href="#about" />
          <Button label="MUZYKA" href="#music" />
          <Button label="LINKI" href="#links" />
        </div>
      </div>
      
      <div className="absolute bottom-0 w-7/12 h-1/6 bg-black left-cover" ></div>
      <div className="absolute bottom-0 right-0 w-7/12 h-1/6 bg-black right-cover" ></div>
    </section>
  )
}

export default Home