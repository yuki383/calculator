import React from "react";
import { connect } from "react-redux";
import { Store } from "../store";

interface DisplayProps {
  store: Store;
}

const Display = (props: Store) => {
  const { input, option, result } = props
  const disp = input + " " + option + " " + result.toString();
  return (
    <div className="display">
      <div className="display-result" >{result.toString()}</div>
      <div className="display-under">
        <div className="display-input">{input}</div>
        <div className="display-option">{option}</div>
      </div>
    </div>
  )
}

const connectDicplay = connect(
  (state: Store) => ({ ...state })
)(Display)

export { connectDicplay as Display };