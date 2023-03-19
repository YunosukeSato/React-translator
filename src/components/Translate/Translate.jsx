import Button from "./Button/Button";

export default function Translate() {
  return (
    <div className="flex flex-row-reverse ml-96 justify-between">
      <Button string="Formal 2" />
      <Button string="Formal"  />
      <Button string="Casual 2" />
      <Button string="Casual" />
      <Button string="No Select" margin="1.5" />
    </div>
  );
}
