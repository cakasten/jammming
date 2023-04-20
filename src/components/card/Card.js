import React from "react";
import styles from './Card.module.css';

function Card(props){
    return (<div className={styles.container}>{props.children}</div>)
}

export default Card;