import { useState } from "react";
import { useSelector } from "react-redux";

function Explain() {
  const [selected, setSelected] = useState(false);
  // const result = useSelector((state) => state.reducer);

  // console.log(result);

  const handleClick = (e) => {
    e.preventDefault();
    setSelected(!selected);
  };

  let explainMode = {};

  if (!selected) {
    explainMode.display = "none";
  } else {
    explainMode.display = "";
  }

  return (
    <div className="flex flex-row-reverse ml-9">
      <button
        className="w-32 h-10 ml-5 rounded-xl flex items-center justify-center bg-sky-200 hover:bg-sky-400 mr-10"
        onClick={handleClick}
      >
        Explain
      </button>
      <textarea
        style={explainMode}
        readOnly
        className="resize-none block p-9 w-5/6 h-40 text-3xl text-gray-900 bg-gray-50 rounded-lg border border-sky-200 focus:rind-blue-200"
      ></textarea>
    </div>
  );
}

export default Explain;
