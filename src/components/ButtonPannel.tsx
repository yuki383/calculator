import React from "react";
import { connect } from "react-redux";

import { Button } from "./Button";
import { Store } from "../store";

interface ButtonPanelProps {
  display: string
}

class ButtonPanel extends React.Component<ButtonPanelProps, any> {

  render() {
    const { display } = this.props;
    const clearOption = display === "0" ? "AC" : "C"
    return (
      <div className="button-panel">
        <div className="button-row">
          {this._createButton(clearOption)}
          {this._createButton("+/-")}
          {this._createButton("%")}
          {this._createButton("/")}
        </div>
        <div className="button-row">
          {this._createButton("7")}
          {this._createButton("8")}
          {this._createButton("9")}
          {this._createButton("*")}
        </div>
        <div className="button-row">
          {this._createButton("4")}
          {this._createButton("5")}
          {this._createButton("6")}
          {this._createButton("-")}
        </div>
        <div className="button-row">
          {this._createButton("1")}
          {this._createButton("2")}
          {this._createButton("3")}
          {this._createButton("+")}
        </div>
        <div className="button-row">
          {this._createButton("0")}
          {this._createButton(".")}
          {this._createButton("=")}
        </div>
      </div>
    )
  }

  private _dicideButtonColor = (expr: string): string => {
    if (["AC", "C", "+/-", "%"].includes(expr)) {
      return "secondary"
    } else if (["/", "*", "-", "+", "="].includes(expr)) {
      return "warning"
    } else {
      return "dark"
    }
  }

  private _createButton = (expr: string) => {
    return <Button expr={expr} />
  }

}

const mapStateToProps = (state: Store) => ({ display: state.input });

const connectButtonPanel = connect(
  mapStateToProps
)(ButtonPanel);

export { connectButtonPanel as ButtonPanel };