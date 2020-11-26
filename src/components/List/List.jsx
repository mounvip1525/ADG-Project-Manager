import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Droppable } from "react-beautiful-dnd";
import Card from "../Card/Card.jsx";
import Header from "./Header.jsx";
import classes from "./List.module.css";

function List(props) {
  const [inputText, setInputText] = useState("");
  const [cards, setCards] = useState([]);

  function inputValue(event) {
    const newItem = event.target.value;
    setInputText(newItem);
  }

  function handleAddCard() {
    props.addCard(inputText, props.id);
    setInputText("");
  }

  return (
    <div className={classes.container}>
      <Header
        className={classes.listHead}
        text={props.ListName}
        deleteList={props.onDeleteList}
        id={props.id}
      ></Header>
       <div className="form">
        <ul>
          <Droppable droppableId={props.id}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {props.cards.map((cardItem, index) => (
              <Card
              text={cardItem.task}
              listId={props.id}
              key={cardItem.id}
              id={cardItem.id}
              addCard={props.addCard}
              deleteCard={props.deleteCard}
              index={index}
              ></Card>
            ))}
         {provided.placeholder}
              </div>
            )}
          </Droppable>
        </ul>
        <input
          className={classes.enterText}
          type="text"
          onChange={inputValue}
          value={inputText}
          placeholder="Add new Card"
        ></input>
        <button onClick={handleAddCard}>
          <span>+</span>
        </button>
      </div>
      </div>
  );
}
export default List;
