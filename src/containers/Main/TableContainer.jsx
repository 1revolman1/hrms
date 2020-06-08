import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import Table from "../../components/Main/Table/Table";

const StyledLoader = styled(Loader)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function TableContainer(props) {
  const [data, setData] = useState({ data: [], isLoading: false });
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
      {data.isLoading ? (
        <StyledLoader
          type="ThreeDots"
          color="#c74e4e"
          height="100"
          width="100"
        />
      ) : (
        <Table data={data.data} />
      )}
    </React.Fragment>
  );
}
export default TableContainer;
