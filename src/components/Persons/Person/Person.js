import React, {Component} from 'react';// JSX is the reason for importing React
import styles from './Person.module.css';
// import Radium from 'radium';

import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';

import withClass from '../../../hoc/withClass';

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
			// <div className={styles.Person}>
			<Aux>
				<p onClick={this.props.click}>I'm {this.props.name} and my age is {this.props.age}.</p>
				<p>{this.props.children}</p>
				<input type="text" onChange={this.props.changed} value={this.props.name} />
			</Aux>
			// </div>
		);
	}
};


// setting new propery to Person class
Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func
};

// export default Radium(person);
export default withClass(Person, styles.Person);