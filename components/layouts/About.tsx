import Image from "next/image"
import Card from "../shared/Card"

const About = () => {
  return (
    <div className="flex justify-around items-center h-screen bg-neutral-300">
      <div className="flex items-center w-2/5 h-screen bg-orange-700">
        <Card
            header={'ŁUKASZ ŚLIWIŃSKI'}
            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
            align={'justify'}
            bgColor={'bg-orange-700'}
            textColor={'text-neutral-300'}
          ></Card>
      </div>
      <Image
        src="/profile.jpg"
        width={450}
        height={600}
        alt="About me pictures"
      />
    </div>
  )
}

export default About