import React from 'react';// JSX is the reason for importing React
import styles from './Person.module.css';
// import Radium from 'radium';

// Person is a 'Stateless/Dumb/Presentational Component' as it does not change the state dynamically
const person = (props) => {

	// ------------------can only be used with radium--------
	// const style = {
	// 	'@media (min-width:500px)': {
	// 		width: '450px'
	// 	}
	// };

	return (
		// <div className="Person" style={style}>
		<div className={styles.Person}>
			<p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} value={props.name} />
		</div>
	)
};

// export default Radium(person);
export default person;