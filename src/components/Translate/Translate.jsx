import Button from "./Button/Button";
import LanguageSelect from "./LanguageSelect/LanguageSelect";
import SubmitButton from "./SubmitButton/SubmitButton";

export default function Translate() {
  return (
    <div className="flex flex-row-reverse ml-96 justify-between">
      {/* <SubmitButton /> */}
      <LanguageSelect />
      <Button string="Formal 2" />
      <Button string="Formal"  />
      <Button string="Casual 2" />
      <Button string="Casual" />
      <Button string="Default" />
    </div>
  );
}
