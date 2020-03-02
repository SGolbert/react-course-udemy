import React from "react";

const Option = props => (
  <li>
    {props.text}{" "}
    <button onClick={e => props.handleDeleteSingleOption(props.text)}>
      Remove
    </button>
  </li>
);

export default Option;
