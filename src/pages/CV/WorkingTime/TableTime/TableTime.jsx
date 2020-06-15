import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  table {
    border: 1px solid #ccc;
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;
    caption {
      font-size: 1.5em;
      margin: 0.5em 0 0.75em;
      @media screen and (max-width: 600px) {
        font-size: 1.3em;
      }
    }
    thead {
      @media screen and (max-width: 600px) {
        border: none;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }
    }
    tr {
      background-color: #f8f8f8;
      border: 1px solid #ddd;
      padding: 0.35em;
      @media screen and (max-width: 600px) {
        border-bottom: 3px solid #ddd;
        display: block;
        margin-bottom: 0.625em;
      }
    }
    td {
      &:before {
        @media screen and (max-width: 600px) {
          content: attr(data-label);
          float: left;
          font-weight: bold;
          text-transform: uppercase;
        }
      }
      &:last-child {
        @media screen and (max-width: 600px) {
          border-bottom: 0;
        }
      }
      @media screen and (max-width: 600px) {
        border-bottom: 1px solid #ddd;
        display: block;
        font-size: 0.8em;
        text-align: right;
      }
    }
    th,
    td {
      padding: 0.625em;
      text-align: center;
    }
    th {
      font-size: 0.85em;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    @media screen and (max-width: 600px) {
      border: 0;
    }
  }
`;
function TableTime(props) {
  return (
    <StyledDiv>
      <table>
        <caption>Statement Summary</caption>
        <thead>
          <tr>
            <th scope="col">Account</th>
            <th scope="col">Due Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Period</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Account">Visa - 3412</td>
            <td data-label="Due Date">04/01/2016</td>
            <td data-label="Amount">$1,190</td>
            <td data-label="Period">03/01/2016 - 03/31/2016</td>
          </tr>
          <tr>
            <td scope="row" data-label="Account">
              Visa - 6076
            </td>
            <td data-label="Due Date">03/01/2016</td>
            <td data-label="Amount">$2,443</td>
            <td data-label="Period">02/01/2016 - 02/29/2016</td>
          </tr>
          <tr>
            <td scope="row" data-label="Account">
              Corporate AMEX
            </td>
            <td data-label="Due Date">03/01/2016</td>
            <td data-label="Amount">$1,181</td>
            <td data-label="Period">02/01/2016 - 02/29/2016</td>
          </tr>
          <tr>
            <td scope="row" data-label="Acount">
              Visa - 3412
            </td>
            <td data-label="Due Date">02/01/2016</td>
            <td data-label="Amount">$842</td>
            <td data-label="Period">01/01/2016 - 01/31/2016</td>
          </tr>
        </tbody>
      </table>
    </StyledDiv>
  );
}

export default TableTime;
