import React from "react";
import Radium from "radium";

const person = props => {
  return (
    <div>
      <i onClick={props.click}>This is {props.name}.</i>
      <i>{props.children}</i>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);
