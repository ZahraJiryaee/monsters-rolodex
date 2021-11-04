import react, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Frankenstein",
          id: "fgfc1",
        },
        {
          name: "Dracula",
          id: "hejhd2",
        },
        {
          name: "Zombie",
          id: "hko3",
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
