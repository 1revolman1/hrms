import React from "react";
import "./Main.scss";
import makeData from "./table/data/makeData";
import styled from "styled-components";
import Table from "./table/Table";
const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

function Main(props) {
  const { sidebar } = props;
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName",
          },
          {
            Header: "Last Name",
            accessor: "lastName",
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Age",
            accessor: "age",
          },
          {
            Header: "Visits",
            accessor: "visits",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "Profile Progress",
            accessor: "progress",
          },
        ],
      },
    ],
    []
  );
  const data = React.useMemo(() => makeData(2000), []);

  return (
    <div className={sidebar ? "Main" : "Main close"}>
      <div className="wrapper">
        <div className="header"></div>
        <div className="tabs"></div>
        <div className="table">
          <Styles>
            <Table columns={columns} data={data} />
          </Styles>
        </div>
      </div>
    </div>
  );
}

export default Main;
