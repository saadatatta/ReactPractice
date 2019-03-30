import Person from "./Person/Person";
import React, {Component} from "react";

class Persons extends Component
{
  render(){
     return this.props.persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          click={() => this.props.clicked(index)}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
 
}
export default Persons;
