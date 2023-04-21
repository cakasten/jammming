import React from "react";
import Track from "../track/Track";

function Tracklist({ tracks, addToPlaylist }) {
  return (
    <>
      {tracks.map((track, index) => (
        <Track
          add={true}
          name={track.name}
          artist={track.artist}
          album={track.album}
          key={track.id}
          id={index}
          addToPlaylist={addToPlaylist}
        />
      ))}
    </>
  );
}

export default Tracklist;
