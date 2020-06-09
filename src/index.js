import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.scss";
import { store } from "./store/configureStore";
import * as serviceWorker from "./serviceWorker";
import App from "./pages/App/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("MainRoot")
);

serviceWorker.register();
