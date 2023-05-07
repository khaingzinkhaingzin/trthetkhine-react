import React, { forwardRef, useRef } from "react";

// if you want to use ref in child then use 'forwardRef'
const MyInput = forwardRef((props, ref) => {
	return <input {...props} ref={ref} />
});
const CustomInput = () => {
	const inputRef = useRef(null);

	function handleClick()
	{
		inputRef.current.focus();
	}

	return (
		<div>
			<MyInput ref={inputRef} />
			<button onClick={handleClick}>Focus the input</button>
		</div>
	);
};

export default CustomInput;
