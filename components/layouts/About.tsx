import Image from 'next/image';
import profile from '../../public/profile2.png';
import Paragraph from '../shared/Paragraph';

const About = () => {
  return (
    <section className="grid lg:grid-cols-2 min-h-screen" id="about">
      <div className="flex justify-center items-center">
        <Image
          className="m-auto w-5/6 xl:w-4/5 2xl:w-3/4 max-w-96 lg:max-w-160"
          src={profile}
          alt="profile photo"
          width="400"
          height="400"
        />
      </div>
      <Paragraph
        header={'O MNIE'}
        text={
          'Przygodę z\xa0muzyką autorską zacząłem, gdy jako nastolatek rozpocząłem samodzielną naukę gry na gitarze i\xa0założyłem pierwszy zespół. Przez prawie 20\xa0lat, w\xa0różnych składach, grałem muzykę głównie rockową, zahaczając nierzadko o\xa0jazz, blues, folk oraz muzykę świata. Nadszedł czas, abym pograł trochę sam ze sobą. Otwieram przed sobą nowy muzyczny rozdział, jakim jest autorski album solowy, zainspirowany improwizacją, ambientem i\xa0elektroniką. Oprócz gitary, mojego głównego instrumentu, eksperymentuję z\xa0syntezatorem i\xa0samplerem.'
        }
      />
    </section>
  );
};

export default About;
