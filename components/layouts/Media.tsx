import Card from "../shared/Card"

const Media = () => {
  return (
    <div className="flex justify-around items-center h-screen bg-gray-950">
      <iframe
        className="w-1/3 h-1/2 min-h-[36rem]"
        // width="100%"
        // height="450"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1767294948&color=%230f0907&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
      <Card
        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
        align={'justify'}
        bgColor={'bg-transparent'}
        textColor={'text-neutral-300'}
      >
      </Card>
    </div>
  )
}

export default Media