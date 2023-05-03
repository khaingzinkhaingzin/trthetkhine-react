import React, { useReducer, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const initialState = [
	{
		id: 1,
		title: "Task 1",
	},
	{
		id: 2,
		title: "Task 2",
	},
];

function reducer(state, action) 
{
	switch(action.type)
	{
		case 'ADD_TO_DO':
			return [...state, action.payload];
		case 'DELETE_TO_DO':
			return state.filter(todo => todo.id !== action.payload.id);
		case 'UPDATE_TO_DO':
			return state.map(todo => todo.id === action.payload.id ? action.payload : todo);
	}
}

function ToDoItem({todo, deleteToDo, updateToDo}) 
{
	let [editMode, setEditMode] = useState(false);
	let [todoTitle, setTodoTitle] = useState(todo.title);
	const editClickHandler = () => {
		setEditMode(!editMode);

		if(editMode)
		{
			updateToDo({
				id: todo.id,
				title: todoTitle,
			});
		}
	};

	return (
		<div>
			{!editMode && <span contentEditable={editMode}>
				{todo.title}
			</span>}

			{editMode && <input type="text" value={todoTitle} onChange={event => setTodoTitle(event.target.value)} />}

			<button
				type="button"
				className="btn btn-primary"
				onClick={editClickHandler}
			>
				{editMode === false ? 'Edit' : 'Save'}
			</button>

			<button
				type="button"
				className="btn btn-primary mx-1"
				onClick={() => deleteToDo(todo.id)}
			>
				Delete
			</button>
		</div>
	);
}

const ToDoWithReducer = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	
	const addToDoHander = () => {
		let todoItem = {
			id: uuidv4(),
			title: newToDo
		};

		dispatch({
			type: 'ADD_TO_DO',
			payload: todoItem
		});
	}

	const deleteToDoHander = (id) => {
		let todoItem = {
			id,
			title: 'Task 1',
		};

		dispatch({
			type: 'DELETE_TO_DO',
			payload: todoItem
		});
	}

	const updateToDoHander = (todoItem) => {
		dispatch({
			type: 'UPDATE_TO_DO',
			payload: todoItem
		});
	}

	let [newToDo, setNewToDo] = useState('');

	return (
		<div>
			ToDoWithReducer
			<div>
				<input type="text"
						value={newToDo}
						onChange={event => setNewToDo(event.target.value)}
				/>
				<button 
					type="button"
					className="btn btn-primary"
					onClick={addToDoHander}>
					Add
				</button>
			</div>

			{
				state.map(todo => <ToDoItem key={todo.id} 
											todo={todo} 
											deleteToDo={deleteToDoHander}
											updateToDo={updateToDoHander} />)
			}
		</div>
	);
};

export default ToDoWithReducer;
