const Music = () => {
  return (
    <section className="bg-mountains top-0 min-h-screen bg-cover bg-fixed bg-center" id="music">
      <div className="grid grid-cols-2 h-screen bg-gray-950/80">
        <iframe
          className="w-[40rem] h-[40rem] m-auto"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1767294948&color=%230f0907&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
        <p className="w-[40rem] text-lg m-auto text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </section>
  )
}

export default Music