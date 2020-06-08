import React from "react";
import styled from "styled-components";
import backgroundImage from "./media/bg.png";
const ModalDiv = styled.div`
  padding: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-image: url(${backgroundImage});
  background-size: cover;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: red;
    padding: 6% 4%;
    width: 55%;
    opacity: 0.85;
    border-radius: 10px;
    box-shadow: 5px 5px 50px 0 rgba(0, 0, 0, 0.15);
    background-color: #f2f2f2;
    @media (max-width: 768px) {
      width: 100%;
    }
    @media (min-width: 768px) {
      width: 70%;
    }
    @media (min-width: 1024px) {
      width: 34%;
    }
  }
  h3 {
    font-family: "Montserrat", sans-serif;
    font-size: 2.5rem;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 2.25px;
    color: #454545;
    text-align: center;
    margin: 25px 0 63px;
  }
  input {
    border-radius: 5px;
    border: solid 0.5px #b3b3b3;
    text-align: center;
    background: transparent;

    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-weight: 200;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #595959;
    margin: 20px 0;
    &[type="submit"] {
      border-radius: 7px;
      background-image: linear-gradient(to top, #e36c6c, #c74e4e);
      text-transform: uppercase;
      font-family: "Montserrat", sans-serif;
      font-size: 20px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 5px;
      color: #ffffff;
      width: 80%;
      margin: 110px auto 0;
      height: 60px;
      &:focus {
        background-image: linear-gradient(to top, #c74e4e, #e36c6c);
      }
    }
  }
`;

function Login() {
  return (
    <ModalDiv>
      <form>
        <h3>Вход в аккаунт</h3>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Логин" />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Пароль"
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary btn-block"
          value="Войти"
        />
      </form>
    </ModalDiv>
  );
}

export default Login;
