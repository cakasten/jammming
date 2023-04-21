import React from "react";
import styles from "./Card.module.css";

function Card(props) {
  return (
    <div
      id={props.id}
      onMouseEnter={props.mouseIn}
      onMouseOut={props.mouseOut}
      className={styles.container}
    >
      {props.children}
    </div>
  );
}

export default Card;
