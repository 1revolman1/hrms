import React from "react";
import styled from "styled-components";
const StyledTable = styled.div`
  margin: 0 auto;
  text-align: center;
  display: inline-block;
  background-color: #fff;
  padding: 2rem 2rem;
  color: #000;
  table {
    width: 100%;
    margin: 0;
    padding: 0;
    border-collapse: collapse;
    border-spacing: 0;
    tr {
      padding: 5px;
      font-family: "Montserrat", sans-serif;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #454545;
    }
    th {
      font-family: "Montserrat", sans-serif;
      font-size: 16px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 0.8px;
      color: #c74e4e;
      text-transform: uppercase;
      border-bottom: 1px solid #ddd;
    }
    th,
    td {
      padding: 10px;
      text-align: center;
    }
    td {
      text-align: left;
    }
  }
  @media screen and (max-width: 600px) {
    table {
      border: 0;
    }
    table thead {
      display: none;
    }
    table tr {
      margin-bottom: 10px;
      display: block;
    }
    table td {
      display: block;
      text-align: right;
      font-size: 13px;
    }
    table td:before {
      content: attr(data-label);
      float: left;
      text-transform: uppercase;
      font-weight: bold;
    }
  }
`;

function Table(props) {
  const { data } = props;
  console.log("RENDER TABLE");
  console.log(data);
  return (
    <React.Fragment>
      {/* {data ? (
        <StyledTable>
          <table>
            <thead>
              <tr>
                {Object.keys(data[0]).map((thead, index) => (
                  <th key={index}>{thead}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((tr, index) => {
                return (
                  <tr key={index}>
                    {Object.values(tr).map((td, index1) => {
                      return (
                        <td key={index1} data-label={Object.keys(tr)[index1]}>
                          {td}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </StyledTable>
      ) : (
        <StyledTable>
          <table>
            <thead>
              <tr>
                <th>Нету данных!</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Нету данных!</td>
              </tr>
            </tbody>
          </table>
        </StyledTable>
      )} */}
      <StyledTable>
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((thead, index) => (
                <th key={index}>{thead}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((tr, index) => {
              return (
                <tr key={index}>
                  {Object.values(tr).map((td, index1) => {
                    return (
                      <td key={index1} data-label={Object.keys(tr)[index1]}>
                        {td}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </StyledTable>
    </React.Fragment>
  );
}
export default Table;
