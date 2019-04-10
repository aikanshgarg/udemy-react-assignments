import React from 'react';// JSX is the reason for importing React
import Person from './Person/Person';

// Functional Component
const persons = props => props.persons.map((person, index) => { 
  return <Person 
    click={() => props.clicked(index)}
    name={person.name}
    age={person.age} 
    key={person.id} 
    changed={event => props.changed(event, person.id)}  />
});

export default persons;