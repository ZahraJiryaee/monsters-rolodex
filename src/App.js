import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };

    /* 
    this.handleChange = this.handleChange.bind(this);
    
    .bind is a method on any func that returns a func where the context of this is set to whatever we passed to it.
    "this" is defined inside of our constructor.
    */
  }

  /*
  handleChange(e) {
    // js doesn't set "this" on funcs
    this.setState({ searchField: e.target.value })
  }
  */

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    // by arrow funcs we can set the context of "this" in whatever it was that declared in the first place.
    this.setState({ searchField: e.target.value })
  }
  

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
