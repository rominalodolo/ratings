import React, { Component } from "react";
import Products from "./components/Products";
import Rating from "./components/Rating";
import { Button } from "react-bootstrap";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>My First React App: Product Listing</h1>
        <Button variant="primary" disabled>Click Me</Button>
        <Rating rating="1" />
        <Rating rating="2" />
        <Rating rating="3" />
        <Rating rating="4" />
        <Rating rating="5" />
        {/* <Products /> */}
      </div>
    );
  }
}

export default App;
