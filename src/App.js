import React, { Component } from "react";
import Products from "./components/Products";
// import { Button } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div>
        <h1>My First React App called Ratings!</h1>
        <Products />
        {/* <Button>Default</Button> */}
      </div>
    );
  }
}

export default App;
