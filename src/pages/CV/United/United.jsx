import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    flex: 1;
    * {
      margin: 12.5px 0;
    }
    h3 {
      text-transform: uppercase;
      font-family: "Montserrat", sans-serif;
      font-size: 20px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 0.18px;
      color: #c74e4e;
    }
    div {
      font-family: "Montserrat", sans-serif;
      font-size: 20px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 0.18px;
      color: #454545;
      span {
        /* display: inline-block; */
        /* max-width: 196px; */
        font-family: "Montserrat", sans-serif;
        font-size: 20px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: 0.18px;
        color: #c74e4e;
      }
    }
  }
`;

// const StyledDiv = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   > div {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: space-between;
//     flex: 1;
//     * {
//       margin: 12.5px 0;
//     }
//     h3 {
//       text-transform: uppercase;
//       font-family: "Montserrat", sans-serif;
//       font-size: 20px;
//       font-weight: 600;
//       font-stretch: normal;
//       font-style: normal;
//       line-height: normal;
//       letter-spacing: 0.18px;
//       color: #c74e4e;
//     }
//     div {
//       font-family: "Montserrat", sans-serif;
//       font-size: 20px;
//       font-weight: normal;
//       font-stretch: normal;
//       font-style: normal;
//       line-height: normal;
//       letter-spacing: 0.18px;
//       color: #454545;
//       span {
//         /* display: inline-block; */
//         /* max-width: 196px; */
//         font-family: "Montserrat", sans-serif;
//         font-size: 20px;
//         font-weight: 500;
//         font-stretch: normal;
//         font-style: normal;
//         line-height: normal;
//         letter-spacing: 0.18px;
//         color: #c74e4e;
//       }
//     }
//   }
// `;
function United(props) {
  return (
    <StyledDiv>
      <table>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
      </table>
      {/* <div>
        <div>
          <span>Дата рождения</span>11.07.1991
        </div>
        <div>
          <span>Дата поступления на работу</span>11.07.1991
        </div>
        <div>
          <span>Гражданство</span>украинец
        </div>
        <div>
          <span>Адрес</span>Запорожье, Новгородская ул. 5/133
        </div>
        <div>
          <span>Телефон</span>+380504846777
        </div>
      </div>
      <div>
        <h3>Паспортные данные</h3>
        <div>
          <span>Серия</span>СЮ049718
        </div>
        <div>
          <span>Кем выдан</span>Хортицким РОУМВД Украины
        </div>
        <div>
          <span>Когда выдан</span>28 августа 2007
        </div>
        <div>
          <span>Семейное положение</span>Холост
        </div>
      </div> */}
    </StyledDiv>
  );
}

export default United;
