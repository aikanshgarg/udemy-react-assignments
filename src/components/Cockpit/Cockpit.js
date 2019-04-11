import React from 'react';
import styles from './Cockpit.module.css';// Import css modules stylesheet as styles

const cockpit = props => {

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