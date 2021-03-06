import React, {PureComponent} from 'react';// JSX is the reason for importing React
import Person from './Person/Person';


// Functional Component
// const persons = props => {

// Using class based approach for functional components
class Persons extends PureComponent {
	// STEP-1
	// static getDerivedStateFromProps(props, state) {
	// 	console.log('[Persons.js] getDerivedStateFromProps', props);
	// 	return state;
	// }
	// STEP-2
	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('[Persons.js shouldComponentUpdate]');
	// 	// checking for all 3 props, we're getting from app.js, for changes
	// 	if (nextProps.persons !== this.props.persons ||
	// 		nextProps.clicked !== this.props.clicked ||
	// 		nextProps.changed !== this.props.changed) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// }
	// STEP-5 (used to save some data before update and use it later, after update)
	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('[Persons.js] getSnapshotBeforeUpdate');
		return { message: 'Snapshot!' };
	}

	// STEP-6
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('[Persons.js] componentDidUpdate');
		console.log(snapshot); // receives object returned from snapshot method
	}

	// CLEAN-UP WORK
	componentWillUnmount() {
		console.log('[Persons.js] componentWillUnmount');
	}

	render() {
		// STEP-3 (rendering)
		console.log('[Persons.js] rendering...');

		return this.props.persons.map((person, index) => { 	
		  return (
		  	// STEP-4(each individual component's lifecycle)
		  	<Person 
			    click={() => this.props.clicked(index)}
			    name={person.name}
			    age={person.age} 
			    key={person.id} 
			    changed={event => this.props.changed(event, person.id)} />
		    );
		});	
	}
}; 

export default Persons;