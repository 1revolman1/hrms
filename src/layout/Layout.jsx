import React, { Fragment } from "react";
import { connect } from "react-redux";
import { handleClickSidebar } from "../actions/SidebarActions";
import SideBar from "../components/Sidebar/Sidebar";
import styled from "styled-components";

const StyledLayout = styled.div`
  margin-left: ${(props) => (props.open ? `265px` : "88px")};
  margin-bottom: 30px;
  padding: 1px 16px;
  transition: margin linear 0.5s;
  .wrapper {
    margin: 0 auto;
    max-width: 1440px;
    width: 90%;
  }
  @media screen and (max-width: 768px) {
    margin-left: 0;
    padding-top: 19px;
  }
`;

function Layout(props) {
  const { sidebar, handleClickSidebar, component } = props;
  return (
    <Fragment>
      <SideBar sidebar={sidebar.open} handleClickSidebar={handleClickSidebar} />
      <StyledLayout open={sidebar.open}>
        <div className="wrapper">{component(props)}</div>
      </StyledLayout>
    </Fragment>
  );
}
const mapStateToProps = (store) => {
  return {
    sidebar: store.sidebar,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleClickSidebar: () => dispatch(handleClickSidebar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
