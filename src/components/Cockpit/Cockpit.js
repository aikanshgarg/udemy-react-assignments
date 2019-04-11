import React, {useEffect} from 'react';
import styles from './Cockpit.module.css';// Import css modules stylesheet as styles

const cockpit = props => {
	// useEffect takes a fn which executes at every render cycle (runs for every update)
	useEffect(() => {
		console.log('[Cockpit.js] useEffect');
		// Http request...
		const timer = setTimeout(() => { 
			alert('saved data to cloud');
		}, 1000);
		// this runs AFTER the useEffect runs for the last time, i.e, after a component is destroyed
		return () => {
			clearTimeout(timer);
			console.log('[Cockpit.js] cleanup work in useEffect');
		};
	}, []); // this second argument decides on which components do we call the useEffects method

	// run each time any component is re-rendered
	useEffect(() => {
		console.log('[Cockpit.js] 2nd useEffect');
		return () => {
			console.log('[Cockpit.js] cleanup work in 2nd useEffect');
		};
	})

	// empty array for setting classes dynamically
    const classes = [];
    if (props.persons.length <= 2) { classes.push(styles.red) }
    if (props.persons.length <= 1) { classes.push(styles.bold) }


    let cssModuleClass = ''; 
	if (props.showPersons) {
	   cssModuleClass = styles.Red;
	}

	return (
		<div className={styles.Cockpit}>
			<p className={classes.join(' ')}>{props.title}</p>
          	<button className={cssModuleClass} onClick={props.clicked}>Toggle Persons</button>
		</div>
	);
} 

export default cockpit;