import React from "react";

export default (props) => {
  var aleatorio = 0;
  do {
    aleatorio = Math.random() * props.maximo;
  } while (aleatorio < props.minimo || 
        Math.ceil(aleatorio) == props.maximo);

  return <div>{aleatorio > props.minimo ? 
    Math.ceil(aleatorio) : 0 }</div>;
};
