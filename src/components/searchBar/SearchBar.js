import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar(props) {
  return (
    <form onSubmit={props.submit} className={styles.form}>
      <input
        placeholder="Search"
        type="text"
        value={props.searchInput}
        onInput={props.onchange}
      />
      <input type="submit" />
    </form>
  );
}

export default SearchBar;
