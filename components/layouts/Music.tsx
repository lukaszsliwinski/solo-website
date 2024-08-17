import Paragraph from '../shared/Paragraph';

const Music = () => {
  return (
    <section
      className="relative bg-mountains top-0 min-h-screen bg-cover bg-fixed bg-center"
      id="music"
    >
      <div className="absolute top-0 w-full h-28 bg-dark-bg top-cover"></div>

      <div className="grid lg:grid-cols-2 min-h-screen bg-dark-bg/40 py-40 lg:py-0">
        <Paragraph
          header={'O MUZYCE'}
          text={
            '"Z górą w tle" jest dźwiękową opowieścią o\xa0górach, które towarzyszą mi przez większość dotychczasowego dorosłego życia. Album, podobnie jak wędrówka, rozpoczyna się spokojnie, prowadzi przez podejścia i\xa0trawersy, dociera na szczyt i\xa0powoli schodzi w\xa0dół, by zamknąć pętlę w\xa0miejscu rozpoczęcia. Każdy z\xa0utworów to luźne skojarzenie z\xa0górami lub odwiedzone miejsce.'
          }
        />

        <iframe
          className="-order-1 lg:order-none w-5/6 xs:w-3/4 sm:w-2/3 md:w-1/2 lg:w-4/5 max-w-160 h-[29rem] mx-auto mb-16 lg:my-auto"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1863679956&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
      </div>

      <div className="absolute bottom-0 w-full h-28 bg-light-bg bottom-cover"></div>
    </section>
  );
};

export default Music;
