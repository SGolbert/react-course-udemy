import React from "react";

const Option = props => (
  <li className="option">
    {props.text}{" "}
    <button
      className="button button--link"
      onClick={e => props.handleDeleteSingleOption(props.text)}
    >
      Remove
    </button>
  </li>
);

export default Option;
