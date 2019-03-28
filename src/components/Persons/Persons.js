import Person from "./Person/Person";
import React from "react";

const persons = props =>
  props.persons.map((person, index) => {
    return (
      <Person
        name={person.name}
        click={() => props.clicked(index)}
        changed={event => props.delete(event, person.id)}
      />
    );
  });

export default persons;
