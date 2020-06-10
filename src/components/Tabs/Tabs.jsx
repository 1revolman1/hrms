import React, { useState } from "react";
import styled from "styled-components";
import "./Tabs.scss";
const StyledTabsWrap = styled.div`
  margin: 0 auto;
  width: ${props => props.wdth}px;
  nav {
    border-radius: 7px;
    background-color: #e5e5e5;
  }
`;
const StyledTab = styled.div`
  border-radius: 7px;
  line-height: 50px;
  height: 100%;
  font-size: 15px;
  display: inline-block;
  position: relative;
  z-index: 1;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  color: white;
  &[data-active="true"] {
    background-color: #c74e4e;
  }

  width: ${props => props.wdth}px;
`;
const StyledTabAnimation = styled.div`

  position: absolute;
  height: 100%;
  top: 0;
  z-index: 0;
  transition: all 0.5s ease 0s;
  border-radius: 8px;

  width: ${props => props.wdth}px;
  left: ${props => props.left}px;
  background-color: #1abc9c;

`;


function Tabs(props) {
  //   const [fetch, setFetch] = useState();
  console.log("RENDER TABS");
  // const wdth = useState(150);
  // const left = useState(0);

  return (
    <StyledTabsWrap wdth="600">
      <nav>
        <StyledTab data-active="false" wdth="200" onclick={console.log('123')}>Активные</StyledTab>
        <StyledTab data-active="true" wdth="200">Неактивные</StyledTab>
        <StyledTab data-active="false" wdth="200" >Активные</StyledTab>
        {/* <div data-active="false">Неактивные</div>
        <div data-active="false">Неактивные</div>
        <div data-active="false">Активные</div> */}
        <StyledTabAnimation class="animation start-home" wdth={props.wdth} left="100"></StyledTabAnimation>
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
