import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import classes from "./CardModal.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPlusSquare, faTimes } from "@fortawesome/free-solid-svg-icons";
import CheckList from "./CheckList";

export class CardModal extends Component {
  constructor(props) {
    super(props);
    this.inputValue=this.inputValue.bind(this);
    this.addChecklist = this.addChecklist.bind(this);
    this.deleteChecklist = this.deleteChecklist.bind(this);
    this.state={
      inputText:"",
      checkLists:[]
    };
  }
  inputValue(e){
    const newItem=e.target.value;
    this.setState(()=>{
      return{
        inputText:newItem
      }
    }
    )
  }
  addChecklist(e) {
    this.setState(prevChecklists=>{
      return {
        checkLists:prevChecklists.checkLists.concat(this.state.inputText)
      }
    })
    this.setState(prevItems=>{
      return{
        inputText:""
      }
    })
  }
  deleteChecklist(id){
    var filteredItems=this.state.checkLists.filter((checklist,index)=>{
      return index !== id;
  });
  this.setState({
    checkLists: filteredItems
  });

 }
  render() {
    return (
      <div className={classes.ModContent}>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          dialogClassName={classes.modal}
        >
          <div className={classes.Mod}>
            <Modal.Header style={{ borderBottom: "1px solid #b9b9b9" }}>
              <Modal.Title id="contained-modal-title-vcenter">
                <h3>{this.props.text}</h3>
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
                <h6>CHECKLISTS</h6>
                <div className={classes.check}>
                  <input type="text" 
                  value={this.state.inputText} 
                  placeholder="Title" 
                  onChange={this.inputValue}
                  />
                    <FontAwesomeIcon 
                    className={classes.addIcon}  
                    onClick={this.addChecklist}
                    icon={faPlusSquare} />
                </div>
                <div className={classes.checkItems}>
                   {this.state.checkLists.map((checkItem, index) => ( 
                  <CheckList
                  text={checkItem}
                  key={index}
                  id={index}
                  onDeleteChecklist={this.deleteChecklist}
                  />
                   ))}
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
