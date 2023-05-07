import React, { useRef, useState } from "react";

// Problem for using both Real Dom and Virtual DOM of same DOM
const RefCounterProblem = () => {
	const [show, setShow] = useState(true);
	const ref = useRef(null);

	return (<div>
		<button
			className="btn btn-primary"
			onClick={() => {
				setShow(!show)
			}}>
			Toggle with setState
		</button>
		<button
			className="btn btn-primary"
			onClick={() => {
				ref.current.remove();
			}}>
			Remove from the DOM
		</button>
		{ show && <p ref={ref}>Hello World</p>}
	</div>);
};

export default RefCounterProblem;
