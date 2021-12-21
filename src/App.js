import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      Heroes: [
        // {
        //   name: "Iron Man",
        //   id: "a1",
        // },
        // {
        //   name: "Thor",
        //   id: "a2",
        // },
        // {
        //   name: "Ant-Man",
        //   id: "a3",
        // },
        // {
        //   name: "Captain America",
        //   id: "a4",
        // },
        // {
        //   name: "Hawkeye",
        //   id: "a5",
        // },
        // {
        //   name: "Black Widow",
        //   id: "a6",
        // },
        // {
        //   name: "Spider-Man",
        //   id: "a7",
        // },
        // {
        //   name: "War Machine",
        //   id: "a8",
        // },
        // {
        //   name: "Falcon",
        //   id: "a9",
        // },
      ],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ Heroes: users }));
  }

  render() {
    return (
      <div className="App">
        {this.state.Heroes.map((hero) => (
          <h1 key={hero.id}>{hero.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
