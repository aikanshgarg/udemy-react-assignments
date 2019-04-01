import React from 'react';// JSX is the reason for importing React
import './Person.css';

// Person is a 'Stateless/Dumb/Presentational Component' as it does not change the state dynamically
const person = (props) => {
	return (
		<div className="Person">
			<p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} value={props.name} />
		</div>
	)
};

export default person;