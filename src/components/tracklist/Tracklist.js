import React from "react";
import Track from "../track/Track";
import Card from "../card/Card";

function Tracklist({ tracks }) {
  return (
    <Card>
      {tracks.map((track) => (
        <Track name={track.name} artist={track.artist} album={track.album} key={Math.random()*1000}/>
      ))}
    </Card>
  );
}

export default Tracklist;
