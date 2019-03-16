import { combineReducers } from "redux";
import { createReducer } from "redux-starter-kit";

import { Store, Expr } from "../store"
import { update, calculate, clear, Action } from "../constants/common";

const initialState: Store = {
  input: "0",
  option: "+",
  result: 0,
}

/* TODO:
 
*/

export const CalculatorReducer = (state: Store = initialState, action: Action) => {
  switch (action.type) {
    case update: {
      const { expr } = action.payload;
      const { input } = state;
      const newInput = updateInput(input, expr);
      return {
        ...state,
        input: newInput
      }
    }

    case calculate: {
      const { expr } = action.payload;
      const { input, option, result } = state;
      const newResult = calculateResult(result, parseFloat(input), option);
      const newOption = expr !== "=" ? expr : "+";
      return {
        input: "0",
        option: newOption,
        result: newResult
      }
    }

    case clear: {
      const { expr } = action.payload;
      const newStates = clearInputs(expr);
      return {
        ...state,
        ...newStates
      }
    }

    default:
      return state;
  }
}

const updateInput = (input: string, expr: string): string => {
  switch (expr) {
    case ".":
      if (input.indexOf(".") === -1) {
        return input + expr;
      }
      return input;
    case "+/-":
      if (input === "0") {
        return input
      }
      return input.startsWith("-") ?
        input.substring(1) : "-" + input;
    default:
      return input === "0" ? expr : input + expr;
  }
}

const calculateResult = (result: number, input: number, option: string): number => {
  switch (option) {
    case "+":
      return result + input;
    case "-":
      return result - input;
    case "*":
      return input === 0 ? result : result * input;
    case "/":
      return input === 0 ? result : result / input;
    default: // case "%":
      return input === 0 ? result : result % input;
  }
}

const clearInputs = (expr: string): object => {
  if (expr === "AC") {
    return {
      input: "0",
      option: "+",
      result: 0
    }
  } else {
    return {
      input: "0"
    }
  }
}