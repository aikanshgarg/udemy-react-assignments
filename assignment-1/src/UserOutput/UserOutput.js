import React from 'react'; // reason to import: JSX 
import UserOutput from './UserOutput.css'

const userOutput = (props) => {
	return (
		<div className="UserOutput">
			<p>I'm {props.name}, the {props.type}.</p>
			<p onClick={props.click}>My fav food is {props.food}.</p>
		</div>	
	)
};

export default userOutput;