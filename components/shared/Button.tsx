import { IButton } from './types';

// Shared button component
const Button = ({ label, href }: IButton) => {
  return (
    <a
      href={href}
      className="inline-block rounded border-2 border-light-bg text-xs sm:text-base w-28 sm:w-36 py-2 text-center text-main-text transition duration-150 ease-in-out hover:bg-light-bg hover:text-dark-text focus:bg-light-bg focus:text-dark-text focus:outline-none focus:ring-0 active:bg-light-bg active:text-dark-text motion-reduce:transition-none"
    >
      {label}
    </a>
  );
};

export default Button;
