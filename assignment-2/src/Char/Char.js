import React from 'react';

const char = props => {

	const inlineStyle = {
		display: 'inline-block',
		padding: '16px',
		margin: '16px',
		border: '1px solid black',
		textAlign: 'center',
		cursor: 'pointer'
	};

	return (
		<div style={inlineStyle} onClick={props.clicked}>
			{props.character}
		</div>

	)
};

export default char;