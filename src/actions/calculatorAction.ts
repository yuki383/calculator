import { update, calculate, clear, Action } from "../constants/common";
import { Option, Nums, Clears, Expr } from "../store";
import { string } from "prop-types";

const Update = (expr: Nums): Action => ({
  type: update,
  payload: {
    expr
  }
});

const Calculate = (expr: Option) => ({
  type: calculate,
  payload: {
    expr
  }
});

const Clear = (expr: Clears) => ({
  type: clear,
  payload: {
    expr
  }
})

const typeOfExpr = (expr: Expr): string => {
  if(["+", "-", "*", "/", "%", "="].includes(expr)) {
    return "options"
  } else if(["AC", "C"].includes(expr)) {
    return "clears"
  } else {
    return "nums"
  }
}

export const calcActionCreator = (input: string): Action => {
  switch (typeOfExpr(<Expr>input)) {
    case "nums":
      return Update(<Nums>input);
    case "options":
      return Calculate(<Option>input);
    // case "clears"
    default:
      return Clear(<Clears>input);
  }
}