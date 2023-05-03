import React from 'react'
import { useState } from "react"

const BatchesCounter = () => {
    let [ counter, setCounter ] = useState(0);
	let increaseCounter = () => {
		setCounter(n => n + 1); // with update function
		setCounter(n => n + 1);
	}

    return (
		<div>
			<span>{ counter }</span>
			<button onClick={increaseCounter}>+2</button>
		</div>
	);
}

export default BatchesCounter