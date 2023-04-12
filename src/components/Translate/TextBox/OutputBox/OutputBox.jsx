import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { doTranslate, getAnswer } from "../../../../store/store";

export default function OutputBox() {
  const result = useSelector((state) => state.reducer.result);

  const [newResult, setResult] = useState(result);

  const dispatch = useDispatch();

  return (
    <>
      <label
        htmlFor="sentence"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      ></label>
      <textarea
        readOnly
        className="resize-none block p-9 w-1/2 h-96 text-3xl text-gray-900 bg-gray-50 rounded-lg border border-sky-200 focus:rind-blue-200"
        value={newResult}
      ></textarea>
      <button
        className="w-32 h-10 rounded-xl flex items-center justify-center bg-sky-200 mx-2.5 hover:bg-sky-400"
        onClick={() => {
          // There should be better way to handle result not using setTimeout function...
          dispatch(doTranslate());
          setTimeout(() => {
            setResult(getAnswer());
          }, 3000);
        }}
      >
        Translate
      </button>
    </>
  );
}
