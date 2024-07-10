const Button = ({ label }: { label: string }) => {
  return (
    <button className="w-28 h-12 mt-auto bg-red-600 text-neutral-100 hover:bg-red-700">{label}</button>
  )
}

export default Button