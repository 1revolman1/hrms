import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        {/* <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route> */}
        <Route exact path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
