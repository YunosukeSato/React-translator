import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../../../store/store";

export default function Button({ string = "Default", margin = "2.5" }) {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.translation.mode);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(changeMode(e.target.value));
  };

  return (
    <button
      className={`w-32 h-10 rounded-xl flex items-center justify-center bg-sky-200 mr-${margin} hover:bg-sky-400 ${string == mode ? "bg-sky-400" : ""}`}
      value={string}
      onClick={(e) => handleClick(e)}
    >
      {string}
    </button>
  );
}
