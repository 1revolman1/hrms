import React from "react";
import styled from "styled-components";
import backgroundImage from "../../assets/img/bg.png";
import { Link } from "react-router-dom";

const StyledNotFound = styled.div`
  display: flex;
  flex-direction: column;
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
  h1, p {
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 2.25px;
    color: #f2f2f2;
    text-align: center;
  }
  h1 {
    font-size: 10.5rem;
    margin: 25px 0 20px 0;
    @media (max-width: 768px) {
      font-size: 6.5rem;
    }
    @media (max-width: 480px) {
      font-size: 4.5rem;
    }
  }
  p {
    font-size: 3.5rem;
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

`;

const StyledLink = styled(Link)`
  width: 300px;
  height: 60px;
  border-radius: 7px;
  background-color: #f2f2f2;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 2.25px;
  line-height: 60px;
  color: #454545 !important;
  margin-top: 100px;
  text-align: center;
  text-decoration: none;
  @media (max-width: 480px) {
    width: 280px;
  }
`;

function NotFound() {
  return (
    <StyledNotFound>
      <h1>404</h1>
      <p>Page not found ;(</p>
      <StyledLink to="/">Back home</StyledLink>
    </StyledNotFound>
  );
}

export default NotFound;