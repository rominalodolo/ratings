import React, { Component } from "react";
import Products from "./Products";

class App extends Component {
  render() {
    return (
      <div>
        <h1>My First React App called Ratings!</h1>
        <Products />
        <Products />
        <Products />
      </div>
    );
  }
}

export default App;
