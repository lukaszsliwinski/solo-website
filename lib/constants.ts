import { faTidal, faSpotify, faItunesNote, faSoundcloud, faYoutube, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";


export const TITLE = 'Między analogowym brzmieniem a cyfrową przestrzenią'

export const MENU_ITEMS = [
  { href: '#bio', label: 'O MNIE' },
  { href: '#music', label: 'MUZYKA' },
  { href: '#links', label: 'LINKI' }
]

export const BIO = [
  {
    text: 'Moja przygoda z autorską muzyką zaczęła się, gdy jako nastolatek rozpocząłem samodzielną naukę gry na gitarze i założyłem pierwszy zespół. Kolejne lata upłynęły mi na graniu rockowych riffów i solówek w barach, domach kultury i na plenerowych scenach w różnych składach. Był to przede wszystkim czas szlifowania warsztatu gitarowego oraz zdobywania cennego doświadczenia na scenie i w studiu.',
    photo: '/images/bio1.webp',
    photoClass: 'sepia-70'
  },
  {
    text: 'Z czasem poczułem potrzebę wyjścia poza rock i dotychczasowe muzyczne przyzwyczajenia. W duecie gitarowo-skrzypcowym poszukiwałem nowych inspiracji, sięgając po jazz, muzykę świata i szeroko pojętą improwizację. Ten etap działalności obfitował w eksperymenty brzmieniowe oraz naukę zapętlania dźwięków na żywo (live looping).',
    photo: '/images/bio2.webp',
    photoClass: 'sepia-50'
  },
  {
    text: 'W końcu dojrzałem do decyzji, aby po latach współpracy z zespołami i muzykami spróbować swoich sił solo. Wziąłem na siebie cały proces twórczy - od kompozycji i aranżacji aż po produkcję nagrań. Gitara nadal pozostaje punktem wyjścia, ale jej brzmienie łączę z syntezatorem i samplerem. Ciągle eksperymentując, dążę do wypracowania własnego stylu, a pierwszym rezultatem jest autorski album solowy „Z górą w tle”.',
    photo: '/images/bio3.webp',
    photoClass: 'sepia-30',
  }
]

export const ALBUMS = [
  {
    cover: '/images/z_gora_w_tle_cover.webp',
    title: 'Z górą w tle',
    year: '2024',
    text: '"Z górą w tle" jest dźwiękową opowieścią o górach, które wypełniły istotną część mojego życia. Album, podobnie jak wędrówka, rozpoczyna się spokojnie i stopniowo wkracza w podejścia i trawersy. Po dotarciu do szczytu powoli schodzimy w dół, by zamknąć pętlę w miejscu rozpoczęcia. Każdy z utworów to luźne skojarzenie z górami lub nawiązanie do odwiedzonych miejsc.',
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1863679956&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    links: [{
        name: 'TIDAL',
        href: 'https://tidal.com/album/562335749',
        color: 'text-white',
        icon: faTidal,
      },
      {
        name: 'SPOTIFY',
        href: 'https://open.spotify.com/album/0d3EPOTSQjpj1jqCDaR61k',
        color: 'text-brand-spotify',
        icon: faSpotify,
      },
      {
        name: 'APPLE MUSIC',
        href: 'https://music.apple.com/pl/album/z-g%C3%B3r%C4%85-w-tle/6813534711',
        color: 'text-brand-apple',
        icon: faItunesNote,
      },
      {
        name: 'SOUNDCLOUD',
        href: 'https://soundcloud.com/lukasz_sliwinski/sets/z-gora-w-tle',
        color: 'text-brand-soundcloud',
        icon: faSoundcloud,
      },
    ],
  },
]

export const LINKS = [
  { href: 'https://tidal.com/artist/86218114', label: 'TIDAL', icon: faTidal, hoverColor: 'hover:bg-black/35' },
  { href: 'https://open.spotify.com/artist/1xRzXvl0uhBWcNOj9ieIdV', label: 'SPOTIFY', icon: faSpotify, hoverColor: 'hover:bg-brand-spotify/35' },
  { href: 'https://music.apple.com/artist/6813534712', label: 'APPLE', icon: faItunesNote, hoverColor: 'hover:bg-brand-apple/35' },
  { href: 'https://soundcloud.com/lukasz_sliwinski', label: 'SOUNDCLOUD', icon: faSoundcloud, hoverColor: 'hover:bg-brand-soundcloud/35' },
  { href: 'https://www.youtube.com/@lukasz_sliwinski', label: 'YOUTUBE', icon: faYoutube, hoverColor: 'hover:bg-brand-youtube/35' },
  { href: 'https://www.instagram.com/luksliwinski', label: 'INSTAGRAM', icon: faInstagram, hoverColor: 'hover:bg-brand-instagram/35' },
  // { href: 'https://facebook.com', label: 'FACEBOOK', icon: faFacebook, hoverColor: 'hover:bg-brand-facebook/35' },

]