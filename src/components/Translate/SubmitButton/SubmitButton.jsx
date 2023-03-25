import { useDispatch } from "react-redux";
import { doTranslate } from "../../../store/store";

export default function SubmitButton() {
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="w-32 h-10 rounded-xl flex items-center justify-center bg-sky-200 mr-2.5 hover:bg-sky-400"
        onClick={() => dispatch(doTranslate())}
      >
        Translate
      </button>
    </>
  );
}
