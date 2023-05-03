import React from "react";
import { useState } from "react"

const SnapShotCounter = () => {
	let [ counter, setCounter ] = useState(0);
	let increaseCounter = () => {
		setCounter(counter + 1);
		setCounter(counter + 1);
	}

	return (
		<div>
			<span>{ counter }</span>
			<button onClick={increaseCounter}>+2</button>
		</div>
	);
};

export default SnapShotCounter;
