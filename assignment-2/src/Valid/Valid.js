import React from 'react';

const valid = props => {

	let validationMessage = 'Text long enough';

	if (props.inputLength <= 5) {
		validationMessage = 'Text too short';
	}

	return (
		<div>
			<p>{validationMessage}</p>
		</div>

	)
};

export default valid;