import Card from "../shared/Card"
import Button from "../shared/Button"

const Landing = () => {
  return (
    <div className="bg-slate-950">
      <div
        className="flex justify-end items-center h-screen p-48 bg-local bg-fit-h bg-no-repeat bg-left bg-landing"
        id="landing"
      >
        <Card
          header={'Z GÓRĄ W TLE'}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
          align={'right'}
          bgColor={'bg-neutral-100/30'}
          textColor={'text-neutral-100'}
        >
          <Button label={'WIĘCEJ'} />
        </Card>
      </div>
    </div>
  )
}

export default Landing