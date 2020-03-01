import React from "react";
import Option from "./Option";

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Clear list</button>
      {props.options.length == 0 && <p>Please enter some values</p>}
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
};

export default Options;
