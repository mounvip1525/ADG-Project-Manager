import React from "react";
import { useState } from "react";
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

  function addCard() {
    setCards((prevCards) => {
      return [...prevCards, inputText];
    });
    setInputText("");
  }
  function deleteCard(id) {
    setCards((prevCards) => {
      return prevCards.filter((item, index) => {
        return index !== id;
      });
    });
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
          <div>
            {cards.map((cardItem, index) => (
              <Card
                text={cardItem}
                key={index}
                id={index}
                onDeleteCard={deleteCard}
              ></Card>
            ))}
          </div>
        </ul>
        <input
          className={classes.enterText}
          type="text"
          onChange={inputValue}
          value={inputText}
          placeholder="Add new Card"
        ></input>
        <button onClick={addCard}>
          <span>+</span>
        </button>
      </div>
    </div>
  );
}
export default List;
