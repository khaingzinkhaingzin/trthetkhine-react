import React from "react";
import { useImmer } from 'use-immer';

const UseImmerForNestedObjRender = () => {
	let [person, updatePerson] = useImmer({
		name: "Niki de Saint Phalle",
		artwork: {
			title: "Blue Nana",
			city: "Hamburg",
			image: "https://i.imgur.com/Sd1AgUOm.jpg",
		},
	});

	let changeStatus = () => {
		updatePerson((person) => {
			person.artwork.city = "Shwedaung";
		});
	};

	return (
		<div>
			<h3>{person.name}</h3>
			<h4>{person.artwork.city}</h4>
			<button className={"btn btn-success"} onClick={changeStatus}>
				done
			</button>
		</div>
	);
};

export default UseImmerForNestedObjRender;