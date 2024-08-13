import Image from 'next/image';
import profile from '../../public/profile.png';
import Paragraph from '../shared/Paragraph';

const About = () => {
  return (
    <section className="grid lg:grid-cols-2 min-h-screen">
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
        header={'ŁUKASZ ŚLIWIŃSKI'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
      />
    </section>
  );
};

export default About;
