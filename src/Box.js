import React, { Component } from "react";
class Box extends Component {
  render() {
    return (<div style={{ border: '1px solid #000', margin: 5, padding: 5 }}>
      {this.props.children}
    </div>);
  }
}
export default Box