import Image from "next/image"
import Header from "../shared/Header"

const About = () => {
  return (
    <div className="grid grid-cols-2 h-screen bg-neutral-300">
      <div className="flex flex-col justify-center w-[40rem] h-screen mx-auto px-10 bg-orange-700">
        <Header text={'ŁUKASZ ŚLIWIŃSKI'} />
        <p className="text-lg my-6 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <Image
        src="/profile.jpg"
        className="m-auto"
        width={450}
        height={600}
        alt="About me pictures"
      />
    </div>
  )
}

export default About