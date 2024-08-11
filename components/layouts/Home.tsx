import Image from "next/image";
import logo from "../../public/logo.svg";
import Button from "../shared/Button";

const Home = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat bg-landing" id="home">
      
      <div className="absolute w-full">
        <Image className="drop-shadow-lg opacity-5 mx-auto mt-12" src={logo} width="0" height="250" alt="logo" />

      </div>
      
      
      <div className="flex flex-col justify-center items-center h-screen bg-black/70">

        
        <h1 className="font-light text-neutral-300 my-24 select-none">
          <span className="block text-4xl tracking-[1.02rem] mb-4 scale-y-75">ŁUKASZ ŚLIWIŃSKI</span>
          <span className="block text-7xl tracking-widest">Z GÓRĄ W TLE</span>
        </h1>
        <div className="grid grid-cols-3 gap-8">
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