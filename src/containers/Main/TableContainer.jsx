import React, { useState, useEffect } from "react";
import Table from "../../components/Main/table/Table";

function TableContainer(props) {
  const [data, setData] = useState({ data: null, isLoading: false });
  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((res) => {
        setData({ data: null, isLoading: true });
        return res.json();
      })
      .then((res) => {
        setTimeout(() => {
          setData({ data: res[0], isLoading: false });
        }, 2000);
      });
  }, []);
  console.log("RENDER TABLE CONTAINER");
  return (
    <React.Fragment>
      {data.isLoading ? null : <Table data={data.data} />}
    </React.Fragment>
  );
}
export default TableContainer;
