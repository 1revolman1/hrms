import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "./Header/Header";
import United from "./United/United";
import WorkingTime from "./WorkingTime/WorkingTime";

const StyledCV = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 90%;
`;
function CV(props) {
  const { id } = props.match.params;
  return (
    <StyledCV>
      <Header />
      <WorkingTime />
      {/* <United /> */}
      Сотрудник {id} !<Link to="/">Обратно</Link>
    </StyledCV>
  );
}

export default CV;
