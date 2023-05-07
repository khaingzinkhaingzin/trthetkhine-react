import React, { useRef, useState } from "react";

const StopWatch = () => {
	const [startTime, setStartTime] = useState(null);
	const [now, setNow] = useState(null);
	const intervalRef = useRef(null);

	function handleStart()
	{
		// Start counting 
		setStartTime(Date.now());
		setNow(Date.now());

		clearInterval(intervalRef.current);
		intervalRef.current = setInterval(() => {
			setNow(Date.now());
		}, 500);

	}

	function handleStop()
	{
		clearInterval(intervalRef.current);
	}

	let secondPassed = 0;
	if (startTime != null && now != null)
	{
		secondPassed = (now - startTime) / 1000; 
	}

	return (<>
		<h1>Time passed: {secondPassed.toFixed(3)}</h1>
		<button onClick={handleStart}
				className="btn btn-primary">
			Start
		</button>
		<button onClick={handleStop}
				className="btn btn-primary mx-1">
			Stop
		</button>
	</>);
};

export default StopWatch;
