import React from "react";
import { connect } from "react-redux";
import { Store } from "../store"; 

interface DisplayProps {
  store: Store;
}

const Display = (props: Store) => {
  const { input, option, result } = props
  const disp = input + " " +  option + " " + result.toString();
  return (
    <div className="display" >{disp}</div>
  )
}

const connectDicplay = connect(
  (state: Store) => ({ ...state })
)(Display)

export { connectDicplay as Display };