import React from "react";
import Card from "../card/Card";

function Track({ artist, name, album }) {
  return (
    <Card>
      <h3>Current Song: {name}</h3>
      <p>Artist: {artist}</p>
      <p>Album: {album}</p>
    </Card>
  );
}

export default Track;
