// Internal import
import InputBox from "./InputBox/InputBox"
import OutputBox from "./OutputBox/OutputBox"

export default function TextBox() {
  return (
    <div className="p-9 flex">
      <InputBox />
      <OutputBox />
    </div>
  )
}