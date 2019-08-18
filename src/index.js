import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import createHistory from "history/createBrowserHistory";
import "./css/index.css";
import * as serviceWorker from "./serviceWorker";

import App from "./App";
import Home from "./pages/Home";

ReactDOM.render(
  <Provider store={store}>
  <Router history={createHistory()}>
    <App>
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home} />
      {/* <Route path="/blogs" component={Blog} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path='/signup' component={SignUp} />
      <Route path="/signout" component={Signout} />
      <Route path="/signin" component={Signin} /> */}
    </App>
  </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
