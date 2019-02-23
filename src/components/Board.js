import React from "react";
import Buttons from "./Board/Buttons";
import Display from "./Board/Display";
import '../App.css';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      disp: "0",
      op: null,
    };
  }

  updateState(result = this.state.result, disp = this.state.disp, op = this.state.op) {
    this.setState({
      result: result,
      disp: disp,
      op: op,
    });
  }

  calculate(op) {
    const result = func(this.state.op)(this.state.result, parseFloat(this.state.disp));
    this.updateState(result, result.toString(), op);
  }

  render() {
    return (
      <div>
        <Display value={this.state.disp}/>
        <Buttons 
          display={this.state.disp} 
          result={this.state.result}
          updateState={this.updateState.bind(this)}
          calculate={this.calculate.bind(this)}

        />
      </div>
    );
  }
}

function func(expr) {
  if (expr === "+") {
    return ((a, b) => { return a + b });
  } else if (expr === "-") {
    return ((a, b) => { return a - b });
  } else if (expr === "×") {
    return ((a, b) => { return a * b });
  } else if (expr === "÷") {
    return ((a, b) => { return a / b });
  } else if (expr === "%") {
    return ((a, b) => { return a % b });
  } else {
    return ((a, b) => { return b });
  }
}

export default Board;