import Image from "next/image"
import Card from "../shared/Card"

const About = () => {
  return (
    <div className="flex justify-around items-center h-screen bg-neutral-100">
      <Card
        header={'ŁUKASZ ŚLIWIŃSKI'}
        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
        align={'left'}
        bgColor={'bg-red-600'}
        textColor={'text-neutral-100'}
      ></Card>
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