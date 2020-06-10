import React, { useState } from "react";
import styled from "styled-components";

const StyledTabsWrap = styled.div`
  margin: 55px auto;
  @media screen and (max-width: 1024px) {
    margin: 30px auto;
    margin-bottom: 20px
  }
  & > div {
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
      user-select: none;
      transition: background 0.5s ease;
      &[data-active="true"] {
        background-color: #c74e4e;
        color: #ffffff;
      }
      &[data-active="false"] {
        background-color: #e5e5e5;
        color: #595959;
      }
      &:first-of-type {
        @media screen and (min-width: 481px) {
          margin-left: auto;
        }
      }
      &:last-of-type {
        @media screen and (min-width: 481px) {
          margin-right: auto;
        }
      }
      @media screen and (max-width: 480px) {
        margin: 5px 0;
      }
    }
    @media screen and (max-width: 480px) {
      flex-direction: column;
    }
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
`;
function Tabs(props) {
  const { data } = props;
  const [selected, setSelected] = useState({ index: 0 });
  return (
    <StyledTabsWrap>
      <div>
        {data.map((tab, index) => {
          return (
            <div
              key={index}
              data-link={tab.link}
              onClick={() => {
                props.function(tab);
                setSelected({ index: index });
              }}
              data-active={selected.index === index ? "true" : "false"}
            >
              {tab.name}
            </div>
          );
        })}
      </div>
    </StyledTabsWrap>
  );
}
export default Tabs;
