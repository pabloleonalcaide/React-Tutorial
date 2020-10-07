import React, { Component } from "react";
import { styled } from "styled-components"

class Box extends Component {
  render() {
    return (<BoxContainer>
      {this.props.children}
    </BoxContainer>);
  }
}
export default Box

const BoxContainer = styled.div`
  border:1px solid black;
  margin: 5px;
  padding: 5px;
`
