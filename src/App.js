import React, { Component } from "react";
import "./App.css";
import Radium from "radium";

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [{ id: "1", name: "saadat" }, { id: "2", name: "ali" }],
    isHidden: false
  };

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id == id;
    });

    const persons = [...this.state.persons];
    persons[personIndex].name = event.target.value;

    this.setState({
      persons: persons
    });
  };

  inputNameHandler = event => {
    this.setState({
      persons: [{ name: event.target.value }]
    });
  };

  showInformation = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  };

  deletePerson = index => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  render() {
    let style = {
      backgroundColor: "red",
      ":hover": {
        backgroundColor: "blue"
      },
      "@media (min-width:450px)": {
        width: "200px"
      }
    };

    let person = null;

    if (this.state.isHidden) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                click={() => this.deletePerson(index)}
                changed={event => this.changeNameHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div>
        {/* React.createElement('h1',{className:'test'},"This is a heading.") */}
        How are you?
        <button style={style} onClick={this.showInformation}>
          Show Information
        </button>
        {person}
      </div>
    );
  }
}

export default Radium(App);
