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
    td[data-manyblock="true"] {
      display: flex;
      justify-content: space-around;
      p {
        margin: 0 12px;
      }
    }
    td[data-label="hourlyrate"] {
      position: relative;
      p {
        text-align: center;
      }
      &::after {
        content: "USD";
        text-transform: uppercase;
        font-weight: bold;
        position: absolute;
        right: 0;
        top: 0;
        transform: translate(0, 50%);
      }
    }
    p[data-type="admin"] {
      font-family: "Montserrat", sans-serif;
      font-size: 16px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 0.8px;
      color: #14c565;
    }
    p[data-type="owner"] {
      font-family: "Montserrat", sans-serif;
      font-size: 16px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 0.8px;
      color: #2c7fcb;
    }
    p[data-type="user"] {
      font-family: "Montserrat", sans-serif;
      font-size: 16px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 0.8px;
      color: #da932a;
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
    table td[data-manyblock="true"] {
      display: block;
      p {
        margin: 0;
      }
    }
    /* table td[data-label="hourlyrate"]::after {
    } */
  }
`;

function Table(props) {
  const { data } = props;
  console.log("RENDER TABLE");
  return (
    <StyledTable>
      <table>
        <thead>
          <tr>
            {data.length > 0 ? (
              Object.keys(data[0]).map((thead, index) => (
                <th key={index}>{thead}</th>
              ))
            ) : (
              <th>Нету данных!</th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((tr, index) => {
              return (
                <tr key={index}>
                  {Object.values(tr).map((td, index1) => {
                    return (
                      <td
                        key={index1}
                        //если td - массив, то необходимо вывести компонент в строчку
                        data-manyblock={typeof td !== "string" ? true : null}
                        //если td - число, то необходимо добавить атрибут счетчикаа
                        data-counter-block={+td ? true : null}
                        //выводит текст для адаптива
                        data-label={Object.keys(tr)[index1]}
                      >
                        {
                          //если не строка(например: массив текстов), то выводить в цикле
                          typeof td !== "string" ? (
                            td.map((p, index) => (
                              <p data-type={p.toLowerCase()} key={index}>
                                {p}
                              </p>
                            ))
                          ) : (
                            <p> {+td ? <span>{td}</span> : td}</p>
                          )
                        }
                      </td>
                    );
                  })}
                </tr>
              );
            })
          ) : (
            <tr>
              <td>Нету данных!</td>
            </tr>
          )}
        </tbody>
      </table>
    </StyledTable>
  );
}
export default Table;
