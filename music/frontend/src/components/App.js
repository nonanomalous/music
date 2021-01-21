import React, { Component } from "react";
import { render } from "react-dom";

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Testing react</h1>;
  }
}
const appDiv = document.getElementById("app");
render(<App />, appDiv);
