// Internal import
import "./App.css";
import Header from "../Header/Header";
import Translate from "../Translate/Translate";
import TextBox from "../Translate/TextBox/TextBox";
import Explain from "../Explain/Explain";

export const ACTIONS = {
  SET_LANG: "set-lang",
  CHANGE_MODE: "change-mode",
  SET_SENTENCE: "set-sentence",
};

function App() {
  return (
    <>
      <Header />
      <Translate />
      <TextBox />
      <Explain />
    </>
  );
}

export default App;
