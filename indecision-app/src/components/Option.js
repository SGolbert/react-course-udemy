import React from "react";

const Option = props => (
  <div className="option">
    <div className="option-text">
      {props.count}
      {". "}
      {props.text}
    </div>
    <button
      className="button button--link"
      onClick={e => props.handleDeleteSingleOption(props.text)}
    >
      Remove
    </button>
  </div>
);

export default Option;
