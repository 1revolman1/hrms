import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  > div {
    margin: 27px 13.5px;
    display: flex;
    border-radius: 20px;
    box-shadow: 0 4px 25px 0 rgba(129, 129, 129, 0.25);
    background-color: #f4f4f4;
    padding: 29px 45px;
    > div {
      h3 {
        font-family: "Montserrat", sans-serif;
        font-size: 20px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: 0.18px;
        color: #c74e4e;
      }
      p {
        font-family: "Montserrat", sans-serif;
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: 0.18px;
        color: #454545;
      }
    }
  }
`;

function WorkingTime(props) {
  return (
    <StyledDiv>
      <div data-label="productivity">
        <div>
          <h3>Продуктивность за сегодня </h3>
          <p>7 часов 14 минут</p>
        </div>
        <div>
          <h3>Отработано в этом месяце</h3>
          <p>180 часов 48 минут</p>
        </div>
      </div>
      <div data-label="hourisinall">
        <div>
          <h3>Часов в этом месяце </h3>
          <p>180 часов 48 минут</p>
        </div>
        <div>
          <h3>Переработанные часы</h3>
          <p>27 часов 48 минут</p>
        </div>
      </div>
    </StyledDiv>
  );
}

export default WorkingTime;
