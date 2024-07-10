const Button = ({ label }: { label: string }) => {
  return (
    <button className="w-28 h-12 mt-auto bg-red-600 text-white hover:bg-red-700 text-lg">{label}</button>
  )
}

export default Button