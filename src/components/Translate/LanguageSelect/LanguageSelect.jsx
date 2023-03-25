import { useDispatch } from "react-redux";
import { changeLang } from "../../../store/store";

export default function LanguageSelect() {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(changeLang(e.target.value));
  };

  return (
    <select
      onChange={(e) => handleClick(e)}
      className="rounded-xl bg-sky-400 cursor-pointer mr-9 w-32"
      name="Select a language"
      id=""
    >
      <option value="English">English</option>
      <option value="Franch">Franch</option>
      <option value="German">German</option>
      <option value="Italy">Italy</option>
      <option value="Spanish">Spanish</option>
      <option value="Japanese">Japanese</option>
      <option value="Korean">Korean</option>
      <option value="Chinese">Chinese</option>
    </select>
  );
}
