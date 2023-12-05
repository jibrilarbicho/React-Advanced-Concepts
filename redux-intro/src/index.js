import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./Store";
// store.dispatch({ type: "account/deposit", payload: 500 });
// console.log(store.getState());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store} r>
      {" "}
      <App />
    </Provider>
  </React.StrictMode>
);
