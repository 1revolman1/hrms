import React from "react";
import "./Main.scss";
function Main(props) {
  const { sidebar } = props;
  return (
    <div className="Main">
      <header className="Main-header">
        <p>
          Edit <code>src/Main.js</code> and save to reload.
        </p>
        <a
          className="Main-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Main;
