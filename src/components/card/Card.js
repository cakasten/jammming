import React from "react";
import styles from "./Card.module.css";

function Card(props) {
  return (
    <div
      style={{backgroundImage: `url(${props.albumArt})`, backgroundSize: 'cover'}}
      id={props.id}
      className={`${styles.container} ${props.className}`}
    >
      {props.children}
    </div>
  );
}

export default Card;


