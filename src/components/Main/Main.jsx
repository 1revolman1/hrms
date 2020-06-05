import React from "react";
import "./Main.scss";
import TableContainer from "../../containers/Main/TableContainer";

function Main(props) {
  const { sidebar } = props;
  console.log("RENDER MAIN");
  return (
    <div className={sidebar ? "Main" : "Main close"}>
      <div className="wrapper">
        <div className="header"></div>
        <div className="tabs"></div>
        <div className="table" style={{ overflowX: "auto" }}>
          <TableContainer />
        </div>
      </div>
    </div>
  );
}

export default Main;
