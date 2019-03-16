import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { CalculatorApp } from "./components/CalculatorApp";
import { CalculatorReducer }  from "./reducers";

import "./App.css"

const store = createStore(CalculatorReducer);

ReactDOM.render(
  <Provider store={store}>
    <CalculatorApp/>
  </Provider>,
  document.getElementById("root")
)
