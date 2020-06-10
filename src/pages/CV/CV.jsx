import React from "react";
// import background from "../../assets/img/bg.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "./Header/Header";
const StyledCV = styled.div``;
function CV(props) {
  const { id } = props.match.params;
  return (
    <StyledCV>
      <Header />
      Сотрудник {id} !<Link to="/">Обратно</Link>
    </StyledCV>
  );
}

export default CV;
