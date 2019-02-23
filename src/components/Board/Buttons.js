import React from "react";
import Button from "./Buttons/Button"

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReset: true,
    };
  }

  isClear() {
    return (this.props.display === "0") ? "AC" : "C";
  }

  updateDisplay(s) {
    const updated = this.props.display + s;
    this.props.updateState(undefined, updated, undefined)
  }

  calc(op) {
    this.props.calculate(op);
    this.setState({ isReset: true });
  }

  handleClick(expr) {
    if (parseFloat(expr) || expr === "0") {
      if (this.state.isReset) {
        this.props.updateState(undefined, expr, undefined);
        this.setState({ isReset: false })
      } else {
        this.updateDisplay(expr);
      }

    } else {
      switch (expr) {
        case "+":
        case "-":
        case "×":
        case "÷":
        case "%":
          if (!this.state.isReset) {
            this.calc(expr);
          }
          break;
        case "=":
          this.props.calculate(expr);
          break;
        case "+/-":
          if (!(this.props.display === "0")) {
            const updated = this.props.display.startsWith("-") ?
              this.props.display.substring(1) : "-" + this.props.display;
            this.props.updateState(undefined, updated, undefined);
          }
          break;
        case ".":
          if (this.props.display.indexOf(".") === -1) {
            this.updateDisplay(expr);
          }
          break;
        case "AC":
          this.props.updateState(0, "0", null);
          this.setState({isReset: true});
          break;
        default: 
          this.props.updateState(undefined, "0", undefined);
          this.setState({isReset: true});
          break;

      }
    }
  }

  renderButton(s) {
    return (
      <Button
        expr={s}
        onClick={this.handleClick.bind(this, s)}
      />
    )
  }

  render() {
    return (
      <div>
        <div className="buttons-row" >
          {this.renderButton(this.isClear())}
          {this.renderButton("+/-")}
          {this.renderButton("%")}
          {this.renderButton("÷")}
        </div>
        <div className="buttons-row" >
          {this.renderButton("7")}
          {this.renderButton("8")}
          {this.renderButton("9")}
          {this.renderButton("×")}
        </div>
        <div className="buttons-row" >
          {this.renderButton("4")}
          {this.renderButton("5")}
          {this.renderButton("6")}
          {this.renderButton("-")}
        </div>
        <div className="buttons-row" >
          {this.renderButton("1")}
          {this.renderButton("2")}
          {this.renderButton("3")}
          {this.renderButton("+")}
        </div>
        <div className="buttons-row" >
          <div className="button"></div>
          {this.renderButton("0")}
          {this.renderButton(".")}
          {this.renderButton("=")}
        </div>
      </div>
    );
  }
}

export default Buttons;