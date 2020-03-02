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
    <ol>
      {props.options.map(opt => (
        <Option
          key={opt}
          text={opt}
          handleDeleteSingleOption={props.handleDeleteSingleOption}
        />
      ))}
    </ol>
  </div>
);

export default Options;
