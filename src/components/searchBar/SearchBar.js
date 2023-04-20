import React from "react";

function SearchBar(props) {
  return (
    <form onSubmit={props.submit}>
      <input
        id="search"
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
