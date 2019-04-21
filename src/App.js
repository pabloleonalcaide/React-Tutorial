import React, { Component } from "react";
import { Article } from "./Article";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Article
          author="Pablo"
          title="Article 1"
          date={new Date().toLocaleDateString()}
        >
        <p>this is a Paragraph, the children props!</p>
        </Article>
      </div>
    );
  }
}

export default App;
