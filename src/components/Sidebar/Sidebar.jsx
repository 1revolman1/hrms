import React, { useContext } from "react";
import logoSm from "./media/URich-Logo-small.svg";
import logoBg from "./media/URich-Logo.svg";
import bell from "./media/bell-icon.svg";
import style from "./Sidebar.scss";
import partner from "./media/partner.svg";
import timer from "./media/timer.svg";
import calendar from "./media/calendar.svg";
import portfolio from "./media/portfolio.svg";
import arrow from "./media/arrow.svg";

function Sidebar(props) {
  const { sidebar, handleClickSidebar } = props;
  const visited = true;
  return (
    <div className={sidebar ? "Sidebar" : " Sidebar Sidebar-hide"}>
      <div className="header">
        <div className="logo">
          <img src={sidebar ? logoBg : logoSm} alt="logo" />
        </div>
        <div className="bellicon">
          <img src={bell} alt="it's just bell image" />
        </div>
      </div>
      <a className={visited ? "navlinks page-active" : "navlinks"}>
        <img src={partner} alt="" />
        <p>СОТРУДНИКИ</p>
      </a>
      <a className="navlinks">
        <img src={timer} alt="" />
        <p>РАБОЧЕЕ ВРЕМЯ</p>
      </a>
      <a className="navlinks">
        <img src={calendar} alt="" />
        <p>КАЛЕНДАРЬ</p>
      </a>
      <a className="navlinks">
        <img src={portfolio} alt="" />
        <p>РЕЗЮМЕ</p>
      </a>
      <button className="button" onClick={() => handleClickSidebar()}>
        <i></i>
      </button>
      <div className="user-profile">
        <div className="user-profile-photo">
          <img
            src="https://thecyberhawk.com/wp-content/uploads/2020/01/Douglas-Reid-Equipment-Manager.jpg"
            alt=""
          />
        </div>
        <div className="user-profile-info">
          <h3>User Name</h3>
          <p>username@gmail.com</p>
        </div>
        <img className="user-profile-arrow" src={arrow} alt="" />
      </div>
    </div>
  );
}

export default Sidebar;
