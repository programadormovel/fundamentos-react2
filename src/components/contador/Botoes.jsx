import React from "react";

export default (props) => {
  return (
    <div>
      <button onClick={props.setInc}>+</button>
      <space> </space>
      <button onClick={props.setDec}>-</button>
    </div>
  );
};
