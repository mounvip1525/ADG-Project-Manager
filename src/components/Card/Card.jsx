import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Draggable } from "react-beautiful-dnd";
import classes from "./Card.module.css";
import CardModal from "./CardModal";

export default class Card extends Component {
  // function Card(props) {
  // setState( (cModalShow : false))

  constructor(props) {
    super(props);
    this.state = { cModalShow: false };
  }

  render() {
    let cModalClose = () => this.setState({ cModalShow: false });

    return (
      <Draggable draggableId={this.props.id} index={this.props.index}>
        {(provided) => (
          <div
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <div onClick={() => this.setState({ cModalShow: true })}>
              <div className={classes.cardItem}>
                <li className={classes.ListItem}>
                  {this.props.text}
                  <span className={classes.spanClass}>
                    <FontAwesomeIcon
                      onClick={() => {
                        this.props.deleteCard(this.props.listId, this.props.id);
                      }}
                      className={classes.faicons}
                      icon="trash"
                    />
                  </span>
                </li>
                {/* <input type="checkbox"></input>
    <label>Sub-tasks</label> */}
              </div>
            </div>

            <CardModal show={this.state.cModalShow} onHide={cModalClose} />
          </div>
        )}
      </Draggable>
    );
  }
}
console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
