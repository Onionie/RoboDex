import React, { Component } from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList robots={this.state.robots}></CardList>
      </div>
    );
  }
}

export default App;
