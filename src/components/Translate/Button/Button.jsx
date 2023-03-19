export default function Button({string = "No Select", margin = "2.5"}) {
  return (
    <button className={`w-32 h-10 rounded-xl flex items-center justify-center bg-sky-200 mr-${margin} hover:bg-sky-400`}>{string}</button>
  )
}