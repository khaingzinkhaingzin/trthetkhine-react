import { useContext, useReducer, useState } from "react";
import { ToDoItemsContext, ToDoDispatchContext } from "./ToDoContext";
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
	const dispatch = useContext(ToDoDispatchContext);
	let [editMode, setEditMode] = useState(false);
	let [todoTitle, setTodoTitle] = useState(todo.title);
	const editClickHandler = () => 
	{
		if (editMode)
		{
			let itemToUpdate = {
				id: todo.id,
				title: todoTitle,
			};
			console.log('Item to update ', itemToUpdate);
			dispatch({
				type: 'UPDATE_TO_DO',
				payload: itemToUpdate
			});
		}

		setEditMode(!editMode);
	};

    const onDeleteHandler = () => {
        console.log('On delete handler', todo);

		dispatch({
			type: 'DELETE_TO_DO',
			payload: todo
		});
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
				onClick={onDeleteHandler}
			>
				Delete
			</button>
		</div>
	);
}

function ToDoEntry()
{
	const dispatch = useContext(ToDoDispatchContext);
	let [newToDo, setNewToDo] = useState('');

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
	return (<div>
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
	</div>);
}

function ToDoList()
{
    const todos = useContext(ToDoItemsContext);
	return (<div>
		{
			todos.map(todo => <ToDoItem key={todo.id} 
										todo={todo} />)
		}
	</div>);
}

function ToDoCounter()
{
	const todos = useContext(ToDoItemsContext);
	return (<div>
		<h1>Total todo count {todos.length}</h1>
	</div>);
}

export default function ToDoListWithContext()
{
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            To Do List With Context
            <ToDoItemsContext.Provider value={state}>
                <ToDoDispatchContext.Provider value={dispatch}>
                    <ToDoEntry />
                    <ToDoList />
					<ToDoCounter />
                </ToDoDispatchContext.Provider>
            </ToDoItemsContext.Provider>
        </div>
    );
}