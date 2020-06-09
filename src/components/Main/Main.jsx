import React from "react";
import styled from "styled-components";
import "./Main.scss";
import TableContainer from "../../containers/Main/TableContainer";
import Header from "./Header/Header";
import Tabs from "../Tabs/Tabs";
const StyledTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
`;
function Main(props) {
  const { sidebar } = props;
  console.log("RENDER MAIN");
  return (
    <div className={sidebar ? "Main" : "Main close"}>
      <div className="wrapper">
        <Header />
        <div className="tabs"></div>
        <StyledTable>
          <TableContainer />
        </StyledTable>
      </div>
    </div>
  );
}

export default Main;
