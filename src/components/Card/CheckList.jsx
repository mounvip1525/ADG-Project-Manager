import React from "react";
import classes from "./CardModal.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function CheckList(props) {
  return (
    <div>
      <div className={classes.checklist}>
        <div className={classes.checkbox}>
          <input type="checkbox" />
            <h6> {props.text}</h6> 
        </div>
          <FontAwesomeIcon icon={faTimes} className={classes.crossIcon} onClick={()=>props.onDeleteChecklist(props.id)} />
      </div>
    </div>
  );
}
export default CheckList;
