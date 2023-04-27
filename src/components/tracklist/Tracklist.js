import React from "react";
import Track from "../track/Track";

function Tracklist({ tracks, addToPlaylist }) {
  return (
    <>
      {tracks.map((track) => (
        <Track
          add={true}
          name={track.name}
          artist={track.artist}
          album={track.album}
          key={track.id}
          id={track.id}
          addToPlaylist={addToPlaylist}
          albumCover={track.coverArt}
        />
      ))}
    </>
  );
}

export default Tracklist;
