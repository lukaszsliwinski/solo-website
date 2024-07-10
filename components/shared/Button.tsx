const Button = ({ label }: { label: string }) => {
  return (
    <button className="w-28 h-12 mt-auto bg-orange-700 text-neutral-300 hover:bg-orange-800">{label}</button>
  )
}

export default Button