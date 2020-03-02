import React from "react";
import Option from "./Option";

const Options = props => (
  <div>
    <div className="widget-header">
      <h3>Your possibilities</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        Clear list
      </button>
    </div>

    {props.options.length == 0 && (
      <p className="widget-message">Please enter some values</p>
    )}
    <div>
      {props.options.map((opt, index) => (
        <Option
          key={opt}
          text={opt}
          count={index + 1}
          handleDeleteSingleOption={props.handleDeleteSingleOption}
        />
      ))}
    </div>
  </div>
);

export default Options;
