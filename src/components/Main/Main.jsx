import React from "react";
import styled from "styled-components";
import "./Main.scss";
import TableContainer from "../../containers/Main/TableContainer";
const StyledTable = styled.div`
  overflow-x: auto;
`;
function Main(props) {
  const { sidebar } = props;
  console.log("RENDER MAIN");
  return (
    <div className={sidebar ? "Main" : "Main close"}>
      <div className="wrapper">
        <div className="header"></div>
        <div className="tabs"></div>
        <StyledTable>
          <TableContainer />
        </StyledTable>
      </div>
    </div>
  );
}

export default Main;
