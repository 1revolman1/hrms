import React from "react";
function CV(props) {
  const { id } = props.match.params;
  return <div>Сотрудник {id}!</div>;
}

export default CV;
