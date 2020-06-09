import React from "react";
import "./Employees.scss";
import TableContainer from "../../containers/TableContainer/TableContainer";
import Header from "./Header/Header";
function Employees(props) {
  const { sidebar } = props;
  return (
    <div className={sidebar ? "Employees" : "Employees close"}>
      <div className="wrapper">
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
            {
              name: "Крутые",
              link: "http://localhost:8080/users2",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Employees;
