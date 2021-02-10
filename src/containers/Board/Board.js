import React from "react";
import { useState } from "react";
import List from "../../components/List/List";
import classes from "./Board.module.css";
import { v4 as uuid } from "uuid";
import { DragDropContext } from "react-beautiful-dnd";


const Board = (props) => {
  const [inputText, setInputText] = useState("");
  const [lists, setLists] = useState([
    // {
    //   title: "List-one",
    //   id: uuid(),
    //   cards: [
    //     { task: "q", id: uuid() },
    //     { task: "w", id: uuid() },
    //     { task: "e", id: uuid() },
    //     { task: "t", id: uuid() },
    //     { task: "y", id: uuid() },
    //     { task: "r", id: uuid() },
    //   ],
    // },
    // {
    //   title: "List-two",
    //   id: uuid(),
    //   cards: [
    //     { task: "a", id: uuid() },
    //     { task: "b", id: uuid() },
    //     { task: "c", id: uuid() },
    //     { task: "d", id: uuid() },
    //     { task: "f", id: uuid() },
    //     { task: "g", id: uuid() },
    //   ],
    // },
  ]);
  function inputValue(event) {
    const newItem = event.target.value;
    setInputText(newItem);
  }
  function addList() {
    if(inputText){
      setLists((prevItems) => {
        let title = inputText;
        setInputText("");
        return [...prevItems, { title: title, id: uuid(), cards: [] }];
      });
    }
  }

  function addCard(inputText, listId) {
    setLists((prevItems) => {
      return prevItems.map((list) =>
        list.id === listId
          ? { ...list, cards: [...list.cards, { task: inputText, id: uuid() }] }
          : list
      );
    });
  }
  function deleteList(id) {
    setLists((prevLists) => {
      return prevLists.filter((item, index) => {
        return item.id !== id;
      });
    });
  }

  function deleteCard(listId, cardId) {
    setLists((prevItems) => {
      return prevItems.map((list) =>
        list.id === listId
          ? { ...list, cards: list.cards.filter((card) => card.id !== cardId) }
          : list
      );
    });
  }

  function reorderArray(array, fromIndex, toIndex) {
    // console.log("This function is called");
    let newArray = array;
    const element = newArray.splice(fromIndex, 1);
    console.log(element);
    newArray.splice(toIndex, 0, element[0]);
    return newArray;
  }

  function handleDragEnd(result) {
    // console.log(result);
    const { destination, source } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sid = source.droppableId;
    const did = destination.droppableId;
    let newLists_beta;
    let newLists;

    if (sid === did) {
      newLists = lists.map((list) =>
        list.id === sid
          ? {
              ...list,
              cards: reorderArray(list.cards, source.index, destination.index),
            }
          : list
      );
      // console.log(newLists);
    } else {
      let card;
      newLists_beta = lists.map((list) => {
        if (list.id === sid) {
          let newCards = list.cards;
          card = newCards.splice(source.index, 1)[0];
          return { ...list, cards: newCards };
        } else return list;
      });
      newLists = newLists_beta.map((list) => {
        if (list.id === did) {
          let newCards = list.cards;
          newCards.splice(destination.index, 0, card);
          return { ...list, cards: newCards };
        } else return list;
      });
    }

    setLists(newLists);
  }

  return (
    <div className={classes.Board}>
      <div className={classes.text}>
          <input
            type="text"
            value={inputText}
            onChange={inputValue}
            placeholder="Add new List"
            className={classes.addNewlist}
          />
          <button onClick={addList} className={classes.addButton}>
            <span>+</span>
          </button>
        </div>
      <div className={classes.boardItem}>
        <DragDropContext onDragEnd={handleDragEnd}>
          {lists.map((listItem, index) => (
            <List
              onDeleteList={deleteList}
              addCard={addCard}
              deleteCard={deleteCard}
              ListName={listItem.title}
              cards={listItem.cards}
              key={listItem.id}
              id={listItem.id}
            ></List>
          ))}
        </DragDropContext>
      </div>
    </div>
  );
};
export default Board;