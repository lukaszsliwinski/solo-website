import Header from "../shared/Header"

const Home = () => {
  return (
    <section className="bg-gray-950" id="home">
      <div className="grid grid-cols-2 h-screen bg-local bg-fit-h bg-no-repeat bg-left bg-landing">
        <div className="col-start-2 flex flex-col items-end w-[32rem] m-auto p-10 bg-neutral-300/30">
          <Header text={'Z GÓRĄ W TLE'} />
          <article className="text-lg my-6 text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </article>
          <a href="#music" className="w-28 h-12 leading-[48px] text-center mt-auto bg-orange-700 hover:shadow-xl active:opacity-80">WIĘCEJ</a>
        </div>
      </div>
    </section>
  )
}

export default Home