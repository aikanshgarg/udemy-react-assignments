import React from 'react'; // reason to import: JSX 
// import UserInput from './UserInput.css'

const userInput = (props) => {
	return (
		<div className="UserInput">
			<h4>User Input</h4>
			<input type="text" onChange={props.changed} value={props.food} />
		</div>	
	)
};

export default userInput;