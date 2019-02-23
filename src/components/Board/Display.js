import React from "react";

class Display extends React.Component {
  render() {
    return (
      <div>{this.props.value}</div>
    );
  }
}

export default Display;