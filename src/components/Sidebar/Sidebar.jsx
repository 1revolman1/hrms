import React from "react";
import "./Sidebar.scss";
import logoBig from "./media/urich-logo-big.svg";
import logoSmall from "./media/urich-logo-small.svg";
import bell from "./media/bell-icon.svg";
import partner from "./media/partner.svg";
import timer from "./media/timer.svg";
import calendar from "./media/calendar.svg";
import portfolio from "./media/portfolio.svg";
import arrow_white from "./media/arrow_white.svg";
import arrow_black from "./media/arrow_black.svg";

function Sidebar(props) {
  const { sidebar, handleClickSidebar } = props;
  return (
    <div className={sidebar ? "Sidebar" : "Sidebar close"}>
      <div className="header">
        <div className="logo">
          {sidebar ? (
            <img src={logoBig} alt="logo" />
          ) : (
            <img src={logoSmall} alt="logo" />
          )}
        </div>

        {sidebar ? (
          <div className="bellicon">
            <img src={bell} alt="it's just bell image" />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="nav">
        <a className={"navlinks page-active"}>
          <img src={partner} alt="" />
          {sidebar ? <p>СОТРУДНИКИ</p> : ""}
        </a>
        <a className="navlinks">
          <img src={timer} alt="" />
          {sidebar ? <p>РАБОЧЕЕ&nbsp;ВРЕМЯ</p> : ""}
        </a>
        <a className="navlinks">
          <img src={calendar} alt="" />
          {sidebar ? <p>КАЛЕНДАРЬ</p> : ""}
        </a>
        <a className="navlinks">
          <img src={portfolio} alt="" />
          {sidebar ? <p>РЕЗЮМЕ</p> : ""}
        </a>
      </div>
      <button className="button" onClick={() => handleClickSidebar()}>
        <img src={arrow_white} alt="" />
      </button>
      <div className="user-profile">
        <div className="user-profile-photo">
          <img
            src="https://thecyberhawk.com/wp-content/uploads/2020/01/Douglas-Reid-Equipment-Manager.jpg"
            alt=""
          />
        </div>

        {sidebar ? (
          <div className="user-profile-info">
            <h3>User Name</h3>
            <p>username@gmail.com</p>
          </div>
        ) : (
          ""
        )}

        <img className="user-profile-arrow" src={arrow_black} alt="" />
      </div>
    </div>
  );
}

export default Sidebar;
