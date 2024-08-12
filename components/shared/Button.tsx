interface Props {
  label: string,
  href: string
}

const Button = ({ label, href }: Props) => {
  return (
    <a
      type="button"
      href={href}
      className="inline-block rounded border-2 border-neutral-300 text-xs sm:text-base w-24 sm:w-32 py-2 text-center text-neutral-300 transition duration-150 ease-in-out hover:bg-neutral-300 hover:text-neutral-700 focus:bg-neutral-300 focus:text-neutral-700 focus:outline-none focus:ring-0 active:bg-neutral-300 active:text-neutral-700 motion-reduce:transition-none"
    >
      {label}
    </a>
  )
}

export default Button