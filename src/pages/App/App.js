import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Main from "../Employees/Employees";
import Login from "../Login/Login";
import CV from "../CV/CV";
import { handleClickSidebar } from "../../actions/SidebarActions";

function App(props) {
  const { sidebar, handleClickSidebar } = props;
  return (
    <Router>
      <Switch>
        {/* <Route path="/about">
<About />
</Route>
<Route path="/users">
<Users />
</Route> */}
        <Route path="/employees/cv-:id" component={CV} />
        <Route path="/login" component={Login} />
        <Route exact path="/">
          <React.Fragment>
            <Sidebar
              sidebar={sidebar.open}
              handleClickSidebar={handleClickSidebar}
            />
            <Main sidebar={sidebar.open} />
          </React.Fragment>
        </Route>
      </Switch>
    </Router>
  );
}

const mapStateToProps = (store) => {
  return {
    sidebar: store.sidebar,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleClickSidebar: () => dispatch(handleClickSidebar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
