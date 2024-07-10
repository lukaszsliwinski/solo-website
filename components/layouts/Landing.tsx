import Header from "../shared/Header"
import Paragraph from "../shared/Paragraph"
import Button from "../shared/Button"

const Landing = () => {
  return (
    <div className="bg-slate-950">
      <div
        className="flex justify-end items-center h-screen p-48 bg-local bg-fit-h bg-no-repeat bg-left bg-landing"
        id="landing"
      >
        <div className="flex flex-col items-end w-2/5 min-w-96 min-h-[28rem] p-10 bg-white/30 text-white">
          <Header text={'Z GÓRĄ W TLE'} />
          <Paragraph text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'} />
          <Button label={'WIĘCEJ'} />
        </div>
      </div>
    </div>
  )
}

export default Landing