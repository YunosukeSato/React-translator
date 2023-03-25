import React from "react";
import ReactDOM from "react-dom/client";
// Internal import
import App from "./components/App/App";
import "./index.css";
import storeApp from "./store/store";
// External import
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(storeApp);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
