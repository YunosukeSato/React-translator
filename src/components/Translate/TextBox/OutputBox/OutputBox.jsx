import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { doTranslate, getAnswer, translationRequest } from "../../../../store/store";

export default function OutputBox() {
  const state = useSelector((state) => state.translation);

  const result = state.result;

  const [newResult, setResult] = useState(result);
  const [translating, setTranslating] = useState(false);
  // console.log(result);

  const dispatch = useDispatch();

  const handleTranslate = (boolean) => {
    setTranslating(boolean);
  };

  useEffect(() => {
    setResult(result);
  }, [result])

  return (
    <>
      <label
        htmlFor="sentence"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      ></label>
      <textarea
        readOnly
        className="resize-none block p-9 w-1/2 h-96 text-3xl text-gray-900 bg-gray-50 rounded-lg border border-sky-200 focus:rind-blue-200"
        value={translating ? 'Translating...' : newResult}
      >
      </textarea>
      <button
        className="w-32 h-10 rounded-xl flex items-center justify-center bg-sky-200 mx-2.5 hover:bg-sky-400"
        onClick={() => {
          // There should be better way to handle result not using setTimeout function...
          handleTranslate(true);
          // dispatch(doTranslate());
          // setTimeout(() => {
          //   handleTranslate(false);
          //   setResult(getAnswer());
          // }, 3000);
          dispatch(translationRequest(state))
          handleTranslate(false);
        }}
      >
        Translate
      </button>
    </>
  );
}
