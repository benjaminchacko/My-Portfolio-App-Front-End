import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import "./css/index.css";
import * as serviceWorker from "./serviceWorker";

import { createStore } from "redux";
import allReducers from "./reducers";

import App from "./App";
import Home from "./pages/home";

// Store --> Globalize State

// Action Increment
const increment = () => {
  return {
    type: "INCREMENT"
  };
};
const decrement = () => {
  return {
    type: "DECREMENT"
  };
};

// Reducer

let store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//Display in Console
store.subscribe(() => console.log(store.getState()));

// Dispatch
store.dispatch(decrement());

ReactDOM.render(
  <Router history={createHistory()}>
    <App>
      <Route path="/" exact component={Home} />
    </App>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
