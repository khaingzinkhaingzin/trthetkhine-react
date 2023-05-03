import React from "react";
import { useState } from "react";

const InputDemo = () => {
	const [name, setName] = useState('');
	const [error, setError] = useState('');

	const isStartWithUpperCase = str => {
		let initial = str.charAt(0);
		return initial.toUpperCase() === initial;
	};

	const onClickHandler = () => {
		console.log('Name started with uppercase ', isStartWithUpperCase(name));
		if (!isStartWithUpperCase(name)) 
		{
			setError('Name doesn\'t start with uppercase.')
		}
		else 
		{
			setError('');
		}
	};

	const onChangeHandler = (event) => {
		setName(event.target.value);
		setError('');
	}

	return (
		<div>
			<input 
				type="text" 
				value={name}
				onChange={onChangeHandler}
				className="form-input" 
			/>
			<button 
				type="button" 
				className="btn btn-primary"
				onClick={onClickHandler}
			>
				Submit
			</button>
			{
				error &&
				<span className='alert alert-danger'>
					{ error ? error : ''}
				</span>
			}
		</div>
	);
};

export default InputDemo;
