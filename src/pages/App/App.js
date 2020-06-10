import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "../../layout/Layout";
import Employees from "../Employees/Employees";
import Login from "../Login/Login";
import CV from "../CV/CV";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/employees/cv-:id"
          render={(props) => <Layout component={CV} {...props} />}
        />
        <Route path="/login" component={Login} />
        <Route
          exact
          path="/"
          render={(props) => <Layout component={Employees} {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
