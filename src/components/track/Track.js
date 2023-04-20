import React from "react";
import Card from "../card/Card";

function Track({ artist, name, album }) {
  return (
    <Card>
      <h3>{name}</h3>
      <p>{artist}</p>
      <p>{album}</p>
    </Card>
  );
}

export default Track;
