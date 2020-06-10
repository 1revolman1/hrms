import React from "react";

import TableContainer from "../../containers/TableContainer/TableContainer";
import Header from "./Header/Header";


function Employees() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default Employees;
