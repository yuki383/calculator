import React from "react";
import { connect } from "react-redux";

import { Expr, Store } from "../store";
import { calcActionCreator} from "../actions/calculatorAction";

interface ButtonProps {
  expr: string
  calcActionCreator: (expr: string) => void;
}

const Button = (props: ButtonProps) => {
  const { expr, calcActionCreator } = props
  const buttonColor = disideButtonColor(expr);
  const buttonClassName = expr === "0" ? " button-zero" : " button";
  return (
    <button onClick={() => calcActionCreator(expr)} className={buttonColor + buttonClassName}>{expr}</button>
  )
  }


const disideButtonColor = (expr: string): string => {
  if (["AC", "C", "+/-", "%"].includes(expr)) {
    return "btn btn-secondary"
  } else if (["/", "*", "-", "+", "="].includes(expr)) {
    return "btn btn-warning"
  } else {
    return "btn btn-dark"
  }
}

const mapStateToProps = (state: Store, ownProps: any) => ({
  ...ownProps
})

const connectButton = connect(
  mapStateToProps,
  { calcActionCreator }
)(Button);

export { connectButton as Button };