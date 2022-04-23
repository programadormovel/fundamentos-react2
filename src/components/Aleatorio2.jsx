import React from "react";

export default (props) => {
  const { minimo, maximo } = props; 

  const aleatorio = parseInt(Math.random() * (maximo - minimo)) + minimo;

  return (
    <div>
      <h2>Valor Aleatório</h2>
      <p>
        <strong> Valor Mínimo: </strong> {props.minimo}
      </p>
      <p>
        <strong> Valor Máximo: </strong> {props.maximo}
      </p>
      <p>
        <strong> Valor Escolhido: </strong> {aleatorio}
      </p>
    </div>
  )
    
};
