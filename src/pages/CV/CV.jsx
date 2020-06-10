import React from "react";
import background from "../../assets/img/bg.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledCV = styled.div``;
function CV(props) {
  const { id } = props.match.params;
  return (
    <StyledCV>
      Сотрудник {id} !<Link to="/">Обратно</Link>
    </StyledCV>
  );
}

export default CV;
