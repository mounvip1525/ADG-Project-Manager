import React from "react";
import { useState } from "react";
import List from "../../components/List/List";
import classes from "./Board.module.css";

const Board = (props) => {
	const [inputText, setInputText] = useState("");
	const [lists, setLists] = useState([]);
	function inputValue(event) {
		const newItem = event.target.value;
		setInputText(newItem);
	}
	function addList() {
		setLists((prevItems) => {
			return [...prevItems, inputText];
		});
		setInputText("");
	}
	function deleteList(id) {
		setLists((prevLists) => {
			return prevLists.filter((item, index) => {
				return index !== id;
			});
		});
	}
	return (
		<div className={classes.Board}>
			<div className={classes.boardItem}>
				{lists.map((listItem, index) => (
					<List
						ListName={listItem}
						key={index}
						id={index}
						onDeleteList={deleteList}
					></List>
				))}
				<div>
					<input type="text" onChange={inputValue} placeholder="Add new List" className={classes.addNewlist} />
					<button onClick={addList}>
						<span>+</span>
					</button>
				</div>
			</div>
		</div>
	);
}
export default Board;
