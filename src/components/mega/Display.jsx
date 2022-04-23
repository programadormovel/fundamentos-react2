import React from "react";

export default (props) => {
  return (
    <table>
        <th>Lista de Jogos</th>
      {props.lista.forEach((element) => {
        <tr>{element}</tr>;
      })}
    </table>
  );
};
