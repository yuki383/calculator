import React from "react";
import { ButtonPanel } from "./ButtonPannel";
import { Display } from "./Display";

export const CalculatorApp = () => {
  return (
    <div className="calculatorApp">
      <Display />
      <ButtonPanel />
    </div>
  );
};