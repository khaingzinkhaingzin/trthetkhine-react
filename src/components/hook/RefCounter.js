import React, { useRef, useState } from "react";

let count_property = 0;

const RefCounter = () => {
	const [count, setCount] = useState(0);
	let count_property = useRef(0); // not fource reder // want to remember value // but not want to reader in other renders

	const incCount = () => {
		count_property.current ++;
		console.log('Count ', count_property.current);
	};
	console.log('Rrender');

	const forceRender = () => {
		setCount(count + 1);
		console.log('forceRender Count ', count);
	};
	return (<div>
		<h1>Count {count}</h1>
		<button type="button"
				className="btn btn-primary"
				onClick={incCount}>
			Inc
		</button>
		<button type="button"
				className="btn btn-primary"
				onClick={forceRender}>
			Render
		</button>
	</div>);
};

export default RefCounter;
