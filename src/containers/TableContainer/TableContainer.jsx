import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import Table from "../../pages/Employees/Table/Table";
import Tabs from "../../components/Tabs/Tabs";

const StyledLoader = styled(Loader)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
`;
function TableContainer(props) {
  const [data, setData] = useState({ data: [], isLoading: false });
  const [selected, setSelected] = useState(props.data[0]);
  useEffect(() => {
    fetch(selected.link)
      .then((res) => {
        setData({ data: null, isLoading: true });
        return res.json();
      })
      .then((res) => {
        setData({ data: res[0], isLoading: false });
      });
  }, [selected.link]);
  return (
    <React.Fragment>
      <Tabs function={setSelected} data={props.data} />
      <StyledTable>
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
      </StyledTable>
    </React.Fragment>
  );
}
export default TableContainer;
