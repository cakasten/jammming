import React from "react";
import styles from "./SearchResults.module.css";
import Card from "../card/Card";
import Tracklist from "../tracklist/Tracklist";

function SearchResults({ tracks, addToPlaylist }) {
  return (
    <Card>
        <h1 className="title">Search Results:</h1>
        <Tracklist tracks={tracks} addToPlaylist={addToPlaylist} />
    </Card>
  );
}

export default SearchResults;
