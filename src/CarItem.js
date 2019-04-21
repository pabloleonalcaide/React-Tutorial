import React, { Component } from "react";

export class CarItem extends Component {
  render() {
    const { car } = this.props;
    return (
      <li>
        <p>
          <strong>Name: </strong>
          {car.name}
        </p>
        <p>
          <strong>Company: </strong>
          {car.company}
        </p>
      </li>
    );
  }
}
