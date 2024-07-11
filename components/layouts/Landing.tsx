import Header from "../shared/Header"

const Landing = () => {
  return (
    <div className="bg-gray-950">
      <div
        className="grid grid-cols-2 h-screen bg-local bg-fit-h bg-no-repeat bg-left bg-landing"
        id="landing"
      >
        <div className="col-start-2 flex flex-col items-end w-[32rem] h-[28rem] m-auto p-10 bg-neutral-300/30">
          <Header text={'Z GÓRĄ W TLE'} />
          <p className="text-lg my-6 text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button className="w-28 h-12 mt-auto bg-orange-700 hover:shadow-xl active:opacity-80">WIĘCEJ</button>
        </div>
      </div>
    </div>
  )
}

export default Landing