import React from "react";
import { useState } from "react";

const DeclarativeUI = () => {
	const [price, setPrice] = useState(0);
	const [qty, setQty] = useState(0);

	const priceChangeHandler = event => {
		setPrice(parseFloat(event.target.value));
	}

	const qtyChangeHandler = event => {
		setQty(parseFloat(event.target.value));
	}

	return (
		<div>
			Price 
			<input 
				type="text" 
				className="form-input" 
				value={price}
				onChange={event => priceChangeHandler(event)}
			/>

			<br />

			Qty 
			<input 
				type="text" 
				className="form-input" 
				value={qty}
				onChange={event => qtyChangeHandler(event)}
			/>

			<div>Total is {price * qty}</div>
		</div>
	);
};

export default DeclarativeUI;
