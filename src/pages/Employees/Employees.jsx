import React from "react";
import styled from "styled-components";
import "./Employees.scss";
import TableContainer from "../../containers/TableContainer/TableContainer";
import Header from "./Header/Header";
import Tabs from "../../components/Tabs/Tabs";
const StyledTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
`;
function Employees(props) {
  const { sidebar } = props;
  console.log("RENDER MAIN");
  return (
    <div className={sidebar ? "Employees" : "Employees close"}>
      <div className="wrapper">
        <Header />
        <Tabs />
        <StyledTable>
          <TableContainer />
        </StyledTable>
      </div>
    </div>
  );
}

export default Employees;
