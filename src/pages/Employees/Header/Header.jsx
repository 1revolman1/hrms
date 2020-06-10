import React from "react";
import styled from "styled-components";
const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 79px;
  h1 {
    flex: 1;
    font-family: "Montserrat", sans-serif;
    font-size: 45px;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 2.25px;
    color: #454545;
    @media screen and (max-width: 768px) {
      font-size: 35px;
    }
  }
  div {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: flex-end;
    button {
      margin: 10px 10px;
      border: 0;
      padding: 22px 15px;
      border-radius: 7px;
      background-color: #ffc58f;
      font-family: "Montserrat", sans-serif;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 0.8px;
      color: #454545;
      &:active {
        background-color: #ffaf64;
      }
      @media screen and (max-width: 1024px) {
        align-self: flex-end;
        margin: 10px;
      }
      @media screen and (max-width: 768px) {
        padding: 15px 10px;
        font-size: 13px;
      }
      @media screen and (max-width: 480px) {
        margin: 10px 0;
        align-self: center;
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <h1>Сотрудники</h1>
      <div>
        <button>РЕДАКТИРОВАТЬ</button>
        <button>ДОБАВИТЬ СОТРУДНИКА</button>
      </div>
    </StyledHeader>
  );
}
export default Header;
