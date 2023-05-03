import React, { useContext, useState } from "react";
import { contextData } from "./ContextData";

function Child2() {
	const level = useContext(contextData);
	return <div>{level}</div>;
}

function Child1() {
	return (
		<div>
			<Child2></Child2>
		</div>
	);
}

const ContextDemo = () => {
	const [data, setData] = useState("Data from parent");
	const btnHandler = () => {
		setData("Change by button");
	};

	return (
		<div>
			<contextData.Provider value={data}>
				Data from context 
				<Child1></Child1>
			</contextData.Provider>
			<button 
				type="button" 
				className="btn btn-primary" 
				onClick={btnHandler}
			>
				Change
			</button>
		</div>
	);
};

export default ContextDemo;
