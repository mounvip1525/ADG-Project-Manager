import React, { Component, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import classes from "./CardModal.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import CheckList from "./CheckList";

function CardModal1() {
  const [inputText, setInputText] = useState("");
  const [CheckLists, setCheckLists] = useState([]);

  function inputValue(event) {
    const newItem = event.target.value;
    setInputText(newItem);
  }

  function addCheckList() {
    setCheckLists((prevCheckLists) => {
      return [...prevCheckLists, inputText];
    });
    setInputText("");
  }
  function deleteCheckList(id) {
    setCheckLists((prevCheckLists) => {
      return prevCheckLists.filter((item, index) => {
        return index !== id;
      });
    });
  }
}

export class CardModal extends Component {
  render() {
    return (
      <div className={classes.ModContent}>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <div className={classes.Mod}>
            <Modal.Header style={{ borderBottom: "1px solid #b9b9b9" }}>
              <Modal.Title id="contained-modal-title-vcenter">
                <h3>Card</h3>
              </Modal.Title>
              <span>
                <FontAwesomeIcon
                  className={classes.cross}
                  icon={faTimes}
                  onClick={this.props.onHide}
                />
              </span>
            </Modal.Header>
            <Modal.Body>
              <div className={classes.CardDiv}>
                <h6>MEMBERS</h6>
                <span>
                  <FontAwesomeIcon className={classes.plus} icon={faPlus} />
                </span>
              </div>
              <div className={classes.CardDiv}>
                <h6>DESCRIPTION</h6>
                <div className={classes.descInp}>
                  <input placeholder="Add details about this card..." />
                </div>
              </div>
              <div className={classes.CardDiv}>
                <h6>CHECKLIST</h6>
                <div className={classes.checkItems}>
                  {/* {CheckLists.map((checkItem, index) => ( */}
                  <CheckList
                  // text={checkItem}
                  // key={index}
                  // id={index}
                  // onDeleteCard={deleteCheckList}
                  />
                  {/* ))} */}
                </div>
                <div className={classes.check}>
                  <input placeholder="Title" />

                  <span>
                    <Button variant="secondary" className={classes.checkBut}>
                      Add
                    </Button>
                  </span>
                </div>
                <div className={classes.check}>
                  <input placeholder="Title" />

                  <span>
                    <Button variant="secondary" className={classes.checkBut}>
                      Add
                    </Button>
                  </span>
                </div>
              </div>

              <div className={classes.CardDiv}>
                <h6>ACTIVITY</h6>
                <div className={classes.actInp}>
                  <input placeholder="Write a comment..." />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              {/* <Button variant="danger" onClick={this.props.onHide}>
              Close
            </Button> */}
            </Modal.Footer>
          </div>
        </Modal>
      </div>
    );
  }
}
export default CardModal;
