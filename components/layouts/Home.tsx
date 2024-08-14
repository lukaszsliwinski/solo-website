import { ISection } from '../shared/types';
import Image from 'next/image';
import logo from '../../public/logo.svg';
import Button from '../shared/Button';

const Home = ({ verticalScreen, isMobile }: ISection) => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat bg-landing" id="home">
      <div className="absolute w-full">
        <Image
          className="drop-shadow-lg opacity-5 mx-auto mt-12 w-36 sm:w-52"
          src={logo}
          alt="logo"
        />
      </div>

      <div className="flex flex-col justify-center items-center h-screen-mobile bg-dark-bg/40">
        <h1 className={`pl-3 font-light ${isMobile && !verticalScreen ? 'mb-8' : 'mb-16'} select-none`}>
          <span className="block text-lg 2xs:text-xl xs:text-2xl sm:text-4xl tracking-[.325rem] 2xs:tracking-[.445rem] xs:tracking-[.69rem] sm:tracking-[1.02rem] 2xs:mb-2 xs:mb-4 scale-y-75">
            ŁUKASZ ŚLIWIŃSKI
          </span>
          <span className="block text-3xl 2xs:text-4xl xs:text-5xl sm:text-7xl tracking-widest">
            Z GÓRĄ W TLE
          </span>
        </h1>
        <div className="grid xs:grid-cols-3 gap-2 sm:gap-8">
          <Button label="O MNIE" href="#about" />
          <Button label="O MUZYCE" href="#music" />
          <Button label="LINKI" href="#links" />
        </div>
      </div>

      <div className="absolute bottom-0 w-7/12 h-1/5 bg-dark-bg left-cover"></div>
      <div className="absolute bottom-0 right-0 w-7/12 h-1/5 bg-dark-bg right-cover"></div>
    </section>
  );
};

export default Home;
