import Header from "../shared/Header"
import Paragraph from "../shared/Paragraph"

const About = () => {
  return (
    <section className="grid grid-cols-2 min-h-screen bg-local bg-fit-h bg-no-repeat bg-left bg-profile" id="about">
      <div className="col-start-2 w-[40rem] m-auto">
        <Header text={'ŁUKASZ ŚLIWIŃSKI'} />
        <Paragraph text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
      </div>
    </section>
  )
}

export default About