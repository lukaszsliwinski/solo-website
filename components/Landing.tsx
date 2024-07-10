import Header from "./Header"

const Landing = () => {
  return (
    <div className="bg-slate-950">
      <div
        className="flex justify-end items-center h-screen p-48 bg-local bg-fit-h bg-no-repeat bg-left bg-landing"
        id="landing"
      >
        <div className="flex flex-col items-end w-2/5 min-w-96 min-h-[28rem] p-10 bg-white/30 text-white">
          <Header text={'Z GÓRĄ W TLE'} />
          <p className="font-semibold text-2xl my-6 text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <button className="w-28 h-12 mt-auto bg-red-600 text-white hover:bg-red-700 text-lg">WIĘCEJ</button>
        </div>
      </div>
    </div>
  )
}

export default Landing