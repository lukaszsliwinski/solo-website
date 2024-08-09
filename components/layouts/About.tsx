import Header from "../shared/Header"

const About = () => {
  return (
    <section className="bg-gray-950" id="about">
      <div className="grid grid-cols-2 h-screen bg-local bg-fit-h bg-no-repeat bg-left bg-landing">
        <div className="col-start-2 flex flex-col items-end w-[40rem] m-auto p-10 bg-neutral-300/30">
          <Header text={'ŁUKASZ ŚLIWIŃSKI'} />
          <article className="text-lg my-6 text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </article>
        </div>
      </div>
    </section>
  )
}

export default About