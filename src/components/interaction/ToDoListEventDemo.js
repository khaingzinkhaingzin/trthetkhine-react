import { useState } from "react";

function ToDo({ item, deleteItem, updateItem }) {
	let onDeleteHandler = (eventItem) => {
		deleteItem(eventItem);
	};
	
	let updateHandler = (eventItem) => {
		console.log('UpdateItem', eventItem);
		updateItem(eventItem);
	};

	// passing function with parameter
	return (
		<div>
			{item.title}
			<button
				type={"button"}
				className={"btn btn-warning"}
				onClick={() => updateHandler(item)}
			>
				Update
			</button>
			<button
				type={"button"}
				className={"btn btn-primary"}
				onClick={() => onDeleteHandler(item)}
			>
				Delete
			</button>
		</div>
	);
}

function InputContainer({ addNewItem }) {
	let [title, setTitle] = useState("");

	return (
		<div>
			<input
				type="text"
				value={title}
				onChange={(event) => setTitle(event.target.value)}
			/>
			<button
				type="button"
				className={"btn btn-primary"}
				onClick={() => addNewItem(title)}
			>
				Add
			</button>
		</div>
	);
}

function ToDoList({ items, deleteItem, updateItem }) {
	return (
		<div>
			{items.map((item) => (
				<ToDo 
					item={item} 
					key={item.id}
					deleteItem={deleteItem}
					updateItem={updateItem}
				/>
			))}
		</div>
	);
}

export default function ToDoListEventDemo() {
	const addNewItem = (title) => {
		let item = {
			id: items.length + 1,
			title: title,
		};

		setItems([...items, item]);
	};

	const deleteItem = (item) => {
		console.log('Delete item', item);
		setItems(items.filter(it => it.id != item.id));
	}

	const updateItem = (item) => {
		console.log('Update item', item);
		setItems(items.map(it => it.id == item.id ? {...it, title: 'Change'} : it));
	}

	let initialItems = [
		{
			id: 1,
			title: "Task 1",
		},
		{
			id: 2,
			title: "Task 2",
		},
	];

	let [items, setItems] = useState(initialItems); // state variable // regular var isn't enough coz not render updated var // state setter solved this issue by two steps 1. update var 2. trigger to render place

	return (
		<div>
			<InputContainer addNewItem={addNewItem} />
			<ToDoList 
				items={items}
				deleteItem={deleteItem}
				updateItem={updateItem}
			/>
		</div>
	);
}
