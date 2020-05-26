import React, { useContext } from "react";
import "./Sidebar.scss";

function App(props) {
  const { sidebar } = props;
  return (
    <div
      style={{ width: "16%" }}
      className="Sidebar w3-light-grey w3-bar-block"
    >
      <h3 className="w3-bar-item">Menu {sidebar} </h3>
      <a href="#" className="w3-bar-item w3-button">
        Link 1
      </a>
      <a href="#" className="w3-bar-item w3-button">
        Link 2
      </a>
      <a href="#" className="w3-bar-item w3-button">
        Link 3
      </a>
    </div>
  );
}

export default App;
