import React, { useState } from "react";
import styled from "styled-components";
const StyledTable = styled.div`
  /* width: 100%; */
  margin: 0 auto;
  text-align: center;
  display: inline-block;
  padding: 1rem 1rem;
  color: #000;
  table {
    border-collapse: separate;
		border-spacing: 0px 0px;
    width: 100%;
    margin: 0;
    padding: 0;
    tbody tr {
      &:hover {
        border-radius: 12px;
        border: 1px solid #c74e4e;
        background-color: #ffffff;
      }
      @media screen and (max-width: 1024px) {
        border-radius: 12px;
        border: 1px solid #c74e4e;
        background-color: #ffffff;
      }
    }
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
        span {
          padding: 1px 15px;
          border-radius: 3px;
          border: solid 0.5px #595959;
        }
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
  @media screen and (max-width: 1024px) {
    width: 100%;
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
    table td[data-label="hourlyrate"] {
      p {
        padding-right: 20px;
        text-align: right;
        span {
          padding: 1px 15px;
          border-radius: 3px;
          border: solid 0.5px #595959;
        }
      }
    }
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

function Table(props) {
  const [fetch, setFetch] = useState([]);
  const { data } = props;
  console.log("RENDER TABLE");
  return (
    <StyledTable>
      <table>
        <thead>
          <tr>
            {data.length > 0 ? (
              Object.keys(data[0]).map((thead, index) =>
                thead === "id" ? null : <th key={index}>{thead}</th>
              )
            ) : (
              <th>Нету данных!</th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((tr, index) => {
              return (
                <tr key={tr.id}>
                  {Object.values(tr).map((td, index1) => {
                    //если в массиве передали id, то ее не нужно выводить(можно исправить)
                    if (td === tr.id) return null;
                    else
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
                              td.map((p, index2) => (
                                <p data-type={p.toLowerCase()} key={index2}>
                                  {p}
                                </p>
                              ))
                            ) : (
                              <p>
                                {+td ? (
                                  <span>{td}</span>
                                ) : (
                                  // <input
                                  //   type="number"
                                  //   //ивент добавления "зарплаты" в пул
                                  //   onChange={(e) => {
                                  //     let value = +e.target.value;
                                  //     setFetch((prevState) => {
                                  //       return [
                                  //         ...prevState.filter(function (item) {
                                  //           return !item["id"].includes(tr.id);
                                  //         }),
                                  //         {
                                  //           value: value,
                                  //           id: tr.id,
                                  //         },
                                  //       ];
                                  //     });
                                  //   }}
                                  // ></input>
                                  td
                                )}
                              </p>
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
