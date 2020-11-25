import React from "react";
import classes from "./List.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Header(props) {
    return (
        <div className={classes.heading}>
            <header>{props.text}
                <span className={classes.spanClass}>
                    <FontAwesomeIcon
                    onClick={() => {
                        props.deleteList(props.id);
                      }}
                        className={classes.faicons}
                        icon="trash"
                    />
                </span></header>
        </div>);
}
export default Header;