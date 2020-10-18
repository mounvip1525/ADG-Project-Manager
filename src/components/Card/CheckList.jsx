import React from "react";
import { Button } from "react-bootstrap";
import classes from "./CardModal.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function CheckList(props) {
  return (
    <div>
      <div className={classes.check}>
        <input value="Check Item 1" readOnly />

        <span>
          <Button variant="danger" className={classes.checkBut}>
            Delete
          </Button>
        </span>
      </div>
    </div>
  );
}
export default CheckList;
