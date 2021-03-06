import React from "react";
import styled from "styled-components";
import background from "../../../assets/img/bg.png";
import download from "./assets/download.svg";
import pen from "./assets/pen.svg";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  img[data-fixed="true"] {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 105px;
    /* height: 15%; */
    object-fit: cover;
  }
  > div {
    &:nth-child(1) {
      display: flex;
      flex-wrap: wrap;
      * {
        z-index: 1;
      }
      img {
        max-width: 200px;
        max-height: 200px;
        object-fit: cover;
        border-radius: 50%;
        border: 5px solid #c74e4e;
      }
      div {
        padding: 45px 0 45px 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
    }
    &:nth-child(2) {
      display: flex;
      margin: auto 0;
      margin-bottom: 60px;
      z-index: 1;
      * {
        z-index: 1;
      }
    }
    button {
      cursor: pointer;
      position: relative;
      margin-left: 25px;
      background: transparent;
      border: 0;
      font-family: "Montserrat", sans-serif;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      &[active="true"] {
        color: #c74e4e;
      }
      &[data-class="cv"] {
        &::before {
          background-image: url(${download});
        }
      }
      &[data-class="edit"] {
        &::before {
          background-image: url(${pen});
        }
      }
      &::before {
        margin-right: 10px;
        display: inline-block;
        content: " ";
        background-size: 17px 17px;
        height: 17px;
        width: 17px;
        z-index: 1;
      }
    }
    h3 {
      text-transform: uppercase;
      font-family: "Montserrat", sans-serif;
      font-size: 25px;
      font-weight: 800;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 0.31px;
      color: #c74e4e;
    }
    h4 {
      font-family: "Montserrat", sans-serif;
      font-size: 16px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #595959;
      span {
        font-weight: normal;
        &:after {
          content: " лет";
        }
      }
    }
  }
`;
function Header() {
  return (
    <StyledHeader>
      <div>
        <img
          src="https://s.dou.ua/img/avatars/200x200_dscn0093-2.jpg"
          alt="Avatar of user"
        />
        <div className="text">
          <h3>Шестопалов Владимир</h3>
          <h4>
            Sales Manager <span>28</span>
          </h4>
        </div>
      </div>
      <div>
        <button active="true" data-class="cv">
          Скачать резюме
        </button>
        <button active="false" data-class="edit">
          Редактировать профиль
        </button>
      </div>
      <img data-fixed="true" src={background} alt="" />
    </StyledHeader>
  );
}

export default Header;
