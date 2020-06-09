import React, { useState } from "react";
import styled from "styled-components";
import "./Tabs.scss";
const StyledTabsWrap = styled.div`
  margin: 0 auto;
  /* .tabsBlock {
    display: flex;
    & > div {
      padding: 8px 28px;
      font-family: "Montserrat", "sans-serif";
      font-size: 18px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 0.9px;
      border-radius: 7px;
      color: #595959;
      &[data-active="true"] {
        background-color: #c74e4e;
        color: #ffffff;
      }
      &[data-active="false"] {
        background-color: #e5e5e5;
        color: #595959;
      }
      &:first-of-type {
        margin-left: auto;
      }
      &:last-of-type {
        margin-right: auto;
      }
    }
  } */
`;

function Tabs() {
  //   const [fetch, setFetch] = useState();
  console.log("RENDER TABS");
  return (
    <StyledTabsWrap>
      <nav>
        <div data-active="true">Активные</div>
        <div data-active="false">Неактивные</div>
        {/* <div data-active="false">Неактивные</div>
        <div data-active="false">Неактивные</div>
        <div data-active="false">Активные</div> */}
        <div class="animation start-home"></div>
      </nav>
      {/* <div className="tabsBlock">
        <div data-active="true">Активные</div>
        <div data-active="false">Неактивные</div>
        <div class="animation start-home"></div>
      </div> */}
    </StyledTabsWrap>
  );
}
export default Tabs;
