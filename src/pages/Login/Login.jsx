import React from "react";
import styled from "styled-components";
import backgroundImage from "../../assets/img/bg.png";


const ModalDiv = styled.div`
  /* padding: 2%; */
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
    height: 80%;
    padding: 120px 100px;
    opacity: 0.85;
    border-radius: 10px;
    box-shadow: 5px 5px 50px 0 rgba(0, 0, 0, 0.15);
    background-color: #f2f2f2;
    width: 34%;
    @media (max-width: 1800px) {
      width: 50%;
    }
    @media (max-width: 1200px) {
      width: 60%;
    }
    @media (max-width: 1000px) {
      width: 70%;
    }
    @media (max-width: 850px) {
      width: 80%;
    }
    @media (max-width: 768px) {
      width: 100%;
      border-radius: 0px;
      height: 100%;
      padding: 120px 40px;
    }
    @media (max-width: 480px) {
      padding: 120px 20px;
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
    margin: 25px 0 90px 0;
    @media (max-width: 480px) {
      font-size: 1.8rem;
      margin-top: 0px;
      margin: 25px 0 0px 0;
    }
    @media (max-height: 750px) {
      margin: 25px 0 0px 0;
    }
    @media (max-height: 630px) {
      margin: 25px 0 0px 0;
    }
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
    &[type="text"], 
    &[type="password"],
    &[type="submit"] {
      width: 80%;
      min-height: 60px;
      @media (max-width: 480px) {
        width: 100%;
        margin-left: 0px;
        margin-right: 0px;
      }
    }
    &[type="text"] {
      margin: 90px auto 0;
    }
    &[type="password"] {
      margin: 40px auto 0;
    }
    &[type="submit"] {
      border-radius: 7px;
      background-image: linear-gradient(to top, #e36c6c, #c74e4e);
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 5px;
      color: #ffffff;
      margin: 110px auto 0;
      width: 65%;
      @media (max-width: 768px) {
        margin: 50px auto 0;
        width: 80%;
      }
      @media (max-height: 630px) {
        margin: 30px auto 0;
      }
      @media (max-width: 480px) {
        font-size: 1.8rem;
        font-weight: bold;
        width: 100%;
      }
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
        <input type="text" className="form-control" placeholder="Логин" />
        <input type="password" className="form-control" placeholder="Пароль" />
        <input type="submit" className="btn btn-primary btn-block" value="Войти" />
      </form>
    </ModalDiv>
  );
}

export default Login;
