import React, { useState } from "react";
import styled from "styled-components";
const StyledTabsWrap = styled.div`
  margin: 0 auto;
  .tabsBlock {
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
  }
`;

function Tabs(props) {
  const { data } = props;
  const [selected, setSelected] = useState({ index: 0 });
  return (
    <StyledTabsWrap>
      <div className="tabsBlock">
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
