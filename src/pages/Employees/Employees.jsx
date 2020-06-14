import React from "react";
import styled from "styled-components";
import TableContainer from "../../containers/TableContainer/TableContainer";
import Header from "./Header/Header";
const StyledBlock = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 90%;
  padding: 1px 16px;
`;

function Employees() {
  return (
    <StyledBlock>
      <Header />
      <TableContainer
        data={[
          {
            name: "Активные",
            link: "http://localhost:8080/users",
          },
          {
            name: "Неактивные",
            link: "http://localhost:8080/users1",
          },
        ]}
      />
    </StyledBlock>
  );
}

export default Employees;
