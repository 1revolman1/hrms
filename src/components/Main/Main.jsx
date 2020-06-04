import React, { useState, useEffect } from "react";
import "./Main.scss";
import makeData from "./table/data/makeData";
import styled from "styled-components";
// import Table from "./table/Table1";
import Table from "./table/Table";

function Main(props) {
  const { sidebar } = props;
  const [data, setData] = useState(false);
  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((res) => res.json())
      .then((res) => {
        setData(res[0]);
      });
  }, []);
  console.log("RENDER MAIN");
  return (
    <div className={sidebar ? "Main" : "Main close"}>
      <div className="wrapper">
        <div className="header"></div>
        <div className="tabs"></div>
        <div className="table" style={{ overflowX: "auto" }}>
          {data ? <Table data={data} /> : null}
        </div>
      </div>
    </div>
  );
}

export default Main;
