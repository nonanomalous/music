import React, { Component } from "react";
import { render } from "react-dom";
import Homepage from "./Homepage";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "value",
    };
  }

  render() {
    return (
      <div>
        <Homepage />
      </div>
    );
  }
}
const appDiv = document.getElementById("app");
render(<App name="Brett" />, appDiv);
