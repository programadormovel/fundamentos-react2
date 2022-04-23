import React from "react";

export default (props) => {
  return (
    <div>
      <button onClick={e => props.setJogar(+e.target.value)}>JOGAR</button>
    </div>
  );
};
