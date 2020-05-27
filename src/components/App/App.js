import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
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
        <Route exact path="/">
          <React.Fragment>
            <Sidebar
              sidebar={sidebar.open}
              handleClickSidebar={handleClickSidebar}
            />
            <Main />
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
