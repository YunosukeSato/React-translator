// Internal import
import "./App.css";
import Header from "../Header/Header";
import Translate from "../Translate/Translate";
import TextBox from "../Translate/TextBox/TextBox";
import { useReducer } from "react";
import { useSelector } from "react-redux";

export const ACTIONS = {
  SET_LANG: "set-lang",
  CHANGE_MODE: "change-mode",
  SET_SENTENCE: "set-sentence",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.SET_LANG:
    case ACTIONS.CHANGE_MODE:
    case ACTIONS.SET_SENTENCE:
  }
}

function App() {

  return (
    <>
      <Header />
      <Translate />
      <TextBox />
    </>
  );
}

export default App;
