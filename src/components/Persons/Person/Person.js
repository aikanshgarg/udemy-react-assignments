import React, {Component} from 'react';// JSX is the reason for importing React
import styles from './Person.module.css';
// import Radium from 'radium';

// Person is a 'Stateless/Dumb/Presentational Component' as it does not change the state dynamically
// const person = (props) => {

//Using class based functional Component
class Person extends Component {
	// ------------------can only be used with radium--------
	// const style = {
	// 	'@media (min-width:500px)': {
	// 		width: '450px'
	// 	}
	// };
	render() {
		console.log('Person.js render');

		return (
			// <div className="Person" style={style}>
			<div className={styles.Person}>
				<p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
				<p>{this.props.children}</p>
				<input type="text" onChange={this.props.changed} value={this.props.name} />
			</div>
		)
	}
};

// export default Radium(person);
export default Person;