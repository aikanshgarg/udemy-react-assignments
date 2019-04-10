import React from 'react'; // reason to import: JSX 
// import UserInput from './UserInput.css'

const userInput = (props) => {

   const inlineStyle = {
      background: 'ivory',
      border: '1px solid #ccc',
      padding: '1rem'
    };

	return (
		<div style={inlineStyle}>
			<h4>User Input</h4>
			<input type="text" onChange={props.changed} value={props.food} />
		</div>	
	)
};

export default userInput;