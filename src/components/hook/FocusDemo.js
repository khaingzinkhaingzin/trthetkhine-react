import React, { useRef } from "react";

const FocusDemo = () => {
	const inputRef = useRef(null);
	const onFocusHandler = () => {
		console.log('Focus', inputRef.current);
		
		inputRef.current.focus(); 
		console.log('Input value ', inputRef.current.value);

		inputRef.current.value = 'Changed from Real DOM'; // will not re render when change coz not state
	};
	console.log('render');
	// ref use native DOM (real DOM)
	return (
		<div>
			<input type="text" 
					ref={inputRef} />
			<button type="button" 
					className="btn btn-primary"
					onClick={onFocusHandler}>
				Focus
			</button>
		</div>
	);
};

export default FocusDemo;
