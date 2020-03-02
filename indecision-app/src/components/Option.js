import React from "react";

const Option = props => (
  <div className="option">
    {props.count}
    {". "}
    {props.text}
    <button
      className="button button--link"
      onClick={e => props.handleDeleteSingleOption(props.text)}
    >
      Remove
    </button>
  </div>
);

export default Option;
