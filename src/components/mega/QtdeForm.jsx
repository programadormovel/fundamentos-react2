import React from "react";

export default (props) => {
  return (
    <div>
      <label htmlFor="qtdeInput">Qtde de jogos: </label>
      <input
        id="qtdeInput"
        type="number"
        value={props.qtde}
      />
    </div>
  );
};
