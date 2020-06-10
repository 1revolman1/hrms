import React from "react";
import { Link } from "react-router-dom";

function CV(props) {
  const { id } = props.match.params;
  return (
    <div>
      Сотрудник {id} !<Link to="/">Обратно</Link>
    </div>
  );
}

export default CV;
