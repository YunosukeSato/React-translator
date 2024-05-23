import { useDispatch } from "react-redux";
import { combineReducers } from "redux";
import { key } from "../assets/key";

const url = "https://api.openai.com/v1/chat/completions";
const model = "gpt-3.5-turbo";
const SET_LANG = "set-lang";
const CHANGE_MODE = "change-mode";
const SET_SENTENCE = "set-sentence";
const TRANSLATE = "translate";
const GET_RESULT = "get-result";
let answer = "";

export function changeLang(payload) {
  return {
    type: SET_LANG,
    payload,
  };
}

export function changeMode(payload) {
  return {
    type: CHANGE_MODE,
    payload,
  };
}

export function setSentence(payload) {
  return {
    type: SET_SENTENCE,
    payload,
  };
}

export function doTranslate(payload) {
  return {
    type: TRANSLATE,
    payload,
  };
}

export function getAnswer() {
  return answer;
}

export const translationRequest = async (state) => {
  const dispatch = useDispatch();
  // define headers only if data is present to minimize object creation
  const headers = data
    ? {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      }
    : {};

  let level = "";

  switch (state.mode) {
    case "Default":
      level = "";
      break;
    case "Casual":
      level = "very casual";
      break;
    case "Casual 2":
      level = "casual";
      break;
    case "Formal":
      level = "formal";
      break;
    case "Formal 2":
      level = "very formal";
    default:
      break;
  }

  const data = {
    model: model,
    messages: [
      {
        role: "user",
        content: `Translate ${state.sentence} into ${level} ${state.lang}`,
      },
    ],
  };

  let result = ""

  await fetch(url, {
    method: "POST",
    headers,
    body: data && JSON.stringify(data),
  })
    .then((d) => {
      result = d.json();
    })
    .catch((error) => (answer = error.message));

    dispatch(doTranslate(result.choices[0].message.content.toString()));

  /** Change response to the json and handle the error in one place */
  // return await fetch(url, {
  //   method,
  //   headers,
  //   body: data && JSON.stringify(data),
  // })
  //   .then((d) => d.json())
  //   .catch((error) => (answer = error.message));
};

// Function to send a request to translate sentence
// const getResult = async (state) => {
//   let level = "";
//   switch (state.mode) {
//     case "Default":
//       level = "";
//       break;
//     case "Casual":
//       level = "very casual";
//       break;
//     case "Casual 2":
//       level = "casual";
//       break;
//     case "Formal":
//       level = "formal";
//       break;
//     case "Formal 2":
//       level = "very formal";
//     default:
//       break;
//   }
//   const result = await sendHttpRequest(url, "POST", {
//     model: model,
//     messages: [
//       {
//         role: "user",
//         content: `Translate ${state.sentence} into ${level} ${state.lang}`,
//       },
//     ],
//   });

//   // Set translated sentence into answer's value
//   answer = result.choices[0].message.content.toString();

//   return {
//     ...state,
//     result: result.choices[0].message.content.toString(),
//   };
// };

const defaultState = {
  lang: "English",
  mode: "Default",
  sentence: "",
  result: "",
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case SET_LANG:
      return {
        ...state,
        lang: action.payload,
      };
    case CHANGE_MODE:
      return {
        ...state,
        mode: action.payload,
      };
    case SET_SENTENCE:
      return {
        ...state,
        sentence: action.payload,
      };
    case TRANSLATE:
      // console.log(getResult(state));
      // getResult(state);
      // return new state
      return {
        ...state,
        result: action.payload,
      };
    case GET_RESULT:
    default:
      return state;
  }
}

const storeApp = combineReducers({
  reducer,
});

export default storeApp;
